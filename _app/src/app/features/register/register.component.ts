import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    OnInit
} from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    Validators
} from "@angular/forms";
import { UsuarioHttpService } from "../../services/http/cadastro/usuario-http.service";
import { NotifyMessageService } from "../../services/notify-message.service";
import { Usuario } from "../../model";
import { ActivatedRoute, Router } from "@angular/router";
import { BaseFunctionsService } from "../../services/base-functions.service";
import { UsuarioPerfilHttpService } from "../../services/http/cadastro/usuario-perfil-http.service";

@Component({
    selector: 'register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
    // Objeto Usuário
    usuario : Usuario;

    // Formulário Reativo
    form: FormGroup;

    //Chave para aparição do botão cadastro
    btnCadastro: boolean = true;
    value: number;

    constructor(private usuarioHttp: UsuarioHttpService,
                private usuarioPerfilHttp: UsuarioPerfilHttpService,
                private actRoute: ActivatedRoute,
                private formBuilder: FormBuilder,
                private changeRef: ChangeDetectorRef,
                private notifyMessage: NotifyMessageService,
                private route: ActivatedRoute,
                private router: Router,
                public functions: BaseFunctionsService) {
    }

    ngOnInit() {
        // Aplicando validações no formulário reativo
        this.redefinirFormulario();
    }

    redefinirFormulario() {
        this.form = this.formBuilder.group({
            nome        :   [ '' ,[ Validators.required ]],
            email       :   [ '' ,[ Validators.required,Validators.email ]],
            telefone    :   [ '' ,[ Validators.required ]],
            senha       :   [ '' ,[ Validators.required ]],
            confirma    :   [ '' ,[ Validators.required ]]
        });
    }

    async submit()
    {
        this.changeStatusBtnCadastro(false);
        let emailValido = await this.usuarioHttp.checaEmail(this.form.get('email').value);

        if(emailValido){
            this.salvarUsuario().then(async (usuario) => {
                await this.usuarioPerfilHttp.salvarPerfil(usuario,'Administrador');

                let result = await this.enviaConfirmacao(usuario);

                if(result){
                    this.notifyMessage.success('Você se cadastrou com sucesso, acesse o email na caixa de entrada para ativar sua conta',3000).then(() => {
                        this.router.navigateByUrl('/auth');
                    });
                }else
                    this.notifyMessage.error('Houve um erro ao enviar o e-mail de confirmação, entre em contato com o administrador para solicitar a ativação');

                this.changeStatusBtnCadastro(true);
            },(error) => {
                console.log(error);
                this.notifyMessage.error('Houve um erro ao cadastrar o usuário, entre em contato com o administrador');
                this.changeStatusBtnCadastro(true);
            });
        }else{
            this.notifyMessage.error('Esse e-mail já está cadastrado em nosso sistema');
            this.changeStatusBtnCadastro(true);
        }
    }

    salvarUsuario(): Promise<Usuario> {
        return new Promise<Usuario>(( resolve,reject ) => {
            this.usuarioHttp
                .create(this.form.value)
                .subscribe((usuario) => {
                    this.form.reset();
                    resolve(usuario);
                },(error) => {
                    reject(error);
                });
        });
    }

    async enviaConfirmacao(usuario): Promise<boolean> {
        return new Promise((resolve) => {
            this.usuarioHttp.enviaConfirmacao(usuario).subscribe((response) => {
                if(response.result)
                    resolve(true);
                resolve(false);
            },(error) => {
                console.log(error);
                resolve(false);
            });
        });
    }

    async enviaNotificacao(usuario): Promise<boolean> {
        return new Promise((resolve) => {
            this.usuarioHttp.enviaNotificacao(usuario).subscribe((response) => {
                if(response.result)
                    resolve(true);
                resolve(false);
            },(error) => {
                console.log(error);
                resolve(false);
            });
        });
    }

    changeStatusBtnCadastro(status:boolean) {
        this.btnCadastro = status;
        this.changeRef.detectChanges();
    }
}
