import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "../../services/auth.service";
import { NotifyMessageService } from "../../services/notify-message.service";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { UsuarioHttpService } from "../../services/http/cadastro/usuario-http.service";
import { Usuario } from "../../model";
import { ConfiguracaoHttpService } from "../../services/http/configuracao/configuracao-http.service";

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit,OnDestroy {
  btnEntrar: boolean = true;
  btnReenvio: boolean = false;

  form: FormGroup;

  usuario: Usuario | null;

  showMessageError: boolean = false;

  //Subscribes
  subscribes: any;

  constructor(private authService: AuthService,
              private router: Router,
              private route: ActivatedRoute,
              private formBuilder: FormBuilder,
              private changeRef: ChangeDetectorRef,
              private notifyMessage: NotifyMessageService,
              private usuarioHttp: UsuarioHttpService,
              private configuracaoHttpService: ConfiguracaoHttpService) {

    this.form = this.formBuilder.group({
      email       :   [ 'admin@email.com' ,[ Validators.required,Validators.email ]],
      senha       :   [ '123' ,[ Validators.required ]]
    });
  }

  ngOnInit() {
    this.usuario = this.authService.getUsuarioSession();
    if(this.usuario)
      this.router.navigateByUrl('/admin');


    if (this.route.snapshot.queryParams.confirmado !== undefined && this.route.snapshot.queryParams.confirmado) {
      this.notifyMessage.success("Você foi ativado com sucesso",2000);
      this.router.navigateByUrl('/auth');
    }
  }

  ngOnDestroy() {
  }

  async submit()
  {
    this.btnEntrar = false;
    this.authService.login(this.form.value).subscribe(async (response) => {
      this.btnEntrar = true;
      this.changeRef.detectChanges();

      if(response.result){
        this.authService.setUsuarioSession(response.usuario);
        await  this.authService.setAdmin();

        this.configuracaoHttpService.autoSet();

        this.router.navigateByUrl('/admin');
      }else{
        this.notifyMessage.error(response.msg);
        if(response.tipo){
          this.btnReenvio = true;
          this.changeRef.detectChanges();
        }
      }
    },(error) => {
      this.notifyMessage.error("Email ou senha incorreto!");
      this.btnEntrar = true;
      this.changeRef.detectChanges();
    });

    return false;
  }

  ReenviarConfirmacao()
  {
    this.btnReenvio = false;

    let subscribe = this.usuarioHttp.enviaConfirmacao(this.form.value).subscribe((response) => {
      if(response.result){
        this.notifyMessage.success('Acesse o email na caixa de entrada para ativar sua conta');
      }else
        this.notifyMessage.error('Houve um erro ao enviar o e-mail de confirmação, entre em contato com o administrador para solicitar a ativação');

      this.btnReenvio = true;
      this.changeRef.detectChanges();
    },(error) => {
      this.notifyMessage.error('Houve um erro ao enviar o e-mail de confirmação, entre em contato com o administrador para solicitar a ativação');
      this.btnReenvio = true;
      this.changeRef.detectChanges();
    });

    this.subscribes.push(subscribe);
  }
}
