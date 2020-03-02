import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from "@angular/router";
import { AuthService } from "../../../services/auth.service";
import { Usuario } from "../../../model";
import {
    FormBuilder,
    FormGroup,
    Validators
} from "@angular/forms";
import { BaseFunctionsService } from "../../../services/base-functions.service";
import { UsuarioHttpService } from "../../../services/http/cadastro/usuario-http.service";
import { NotifyMessageService } from "../../../services/notify-message.service";
import { ImageCroppedEvent } from "ngx-image-cropper";
import { ImageHttpService } from "../../../services/http/image-http.service";

declare let $;

@Component({
    selector: 'perfil-panel',
    templateUrl: './perfil-panel.component.html',
    styleUrls: ['./perfil-panel.component.css']
})
export class PerfilPanelComponent implements OnInit {

    foto: string = "";

    usuario: Usuario | null;

    form: FormGroup;
    btnGeral: boolean = true;
    btnTrocaSenha: boolean = true;

    nav: string = "geral";

    imageChangedEvent: any = '';
    croppedImage: any = '';

    constructor(private router: Router,
                private authService: AuthService,
                private usuarioHttp: UsuarioHttpService,
                private imageHttp: ImageHttpService,
                private formBuilder: FormBuilder,
                private changeRef: ChangeDetectorRef,
                private notifyMessage: NotifyMessageService,
                private functions: BaseFunctionsService) {
        this.router.events.subscribe((evt) => {
            if (evt instanceof NavigationEnd) {
                // trick the Router into believing it's last link wasn't previously loaded
                this.router.navigated = false;
                // if you need to scroll back to top, here is the right place
                window.scrollTo(0, 0);
            }
        });
    }

    ngOnInit() {
        this.usuario = this.authService.getUsuarioSession();

        this.defineFormularioGeral();

        this.foto = this.authService.getFoto();
        console.log(this.foto);
        if(this.usuario){
            this.usuarioHttp.get(this.usuario.id).subscribe((usuario) => {
                this.usuario = usuario;
                this.defineFormularioGeral();
            });
        }

        $('#cropImage').on('hidden.bs.modal', () => {
            this.refresh();
        })
    }

    defineFormularioGeral() {
        this.authService.setUsuarioSession(this.usuario);

        this.form = this.formBuilder.group({
            nome        :   [ this.usuario.nome ,[ Validators.required ]],
            email       :   [ this.usuario.email ,[ Validators.required,Validators.email ]],
            telefone    :   [ this.usuario.telefone ,[ Validators.required ]]
        });
        this.changeRef.detectChanges();
    }

    submitGeral() {
        this.changeStatusBtnGeral(false);
        this.usuarioHttp.update(this.usuario.id,this.form.value).subscribe((usuario) => {
            this.usuario = usuario;
            this.defineFormularioGeral();
            this.notifyMessage.success('Seus dados foram atualizados');
            this.changeStatusBtnGeral(true);
        });
    }

    resetGeral() {
        this.defineFormularioGeral();
    }

    changeStatusBtnGeral(status:boolean) {
        this.btnGeral = status;
        this.changeRef.detectChanges();
    }

    defineFormularioTrocaSenha() {
        this.form = this.formBuilder.group({
            senha        :   [ '' ,[ Validators.required ]],
            confirma       :   [ '' ,[ Validators.required ]]
        });
        this.changeRef.detectChanges();
    }

    resetTrocaSenha() {
        this.defineFormularioTrocaSenha();
    }

    submitTrocaSenha() {
        this.changeStatusBtnTrocasenha(false);
        this.usuarioHttp.update(this.usuario.id,{ senha: this.form.get('senha').value }).subscribe((usuario) => {
            this.usuario = usuario;
            this.defineFormularioTrocaSenha();
            this.notifyMessage.success('Sua senha foi alterada com sucesso');
            this.changeStatusBtnTrocasenha(true);
        });
    }

    changeStatusBtnTrocasenha(status:boolean) {
        this.btnGeral = status;
        this.changeRef.detectChanges();
    }

    changeNav(nav) {
        switch (nav) {
            case 'geral':
                this.nav = nav;
                this.defineFormularioGeral();
                break;
            case 'trocaSenha':
                this.nav = nav;
                this.defineFormularioTrocaSenha();
                break;
        }
    }

    openChoose() {
        $('#image_input').trigger('click');
    }

    fileChangeEvent(event: any): void {
        this.imageChangedEvent = event;
        $('#cropImage').modal();
    }

    imageCropped(event: ImageCroppedEvent) {
        this.croppedImage = event.base64;
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

    recortar() {
        this.imageHttp.saveCropImage({ image : this.croppedImage}).subscribe((resolve) => {
            this.usuarioHttp.update(this.usuario.id,{ image : resolve.image }).subscribe((usuario) => {
                this.authService.setUsuarioSession(usuario);
                $("#cropImage").modal('hide');
                this.changeRef.detectChanges();
                setTimeout(() => {
                    this.refresh();
                },1000);
            },(error) => {
                console.log(error);
                this.notifyMessage.error("Houve um erro ao atualizar a imagem de perfil");
            });
        },(error) => {
            console.log(error);
            this.notifyMessage.error("Houve um erro ao atualizar a imagem de perfil");
        });
    }

    refresh() {
        this.router
            .navigateByUrl('/', {skipLocationChange: true})
            .then(()=> {
                console.log(this.router.url);
                this.router.navigate(["/admin/perfil-panel"])
            });
    }
}
