import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { AuthService } from "../../services/auth.service";
import { Router } from "@angular/router";
import { NotifyMessageService } from "../../services/notify-message.service";
import {
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";

@Component({
  selector: 'forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  btnRecupera: boolean = true;

  showMessageError: boolean = false;

  // Formulário Reativo
  form: FormGroup;

  constructor(private authService: AuthService,
              private router: Router,
              private notifyMessage: NotifyMessageService,
              private formBuilder: FormBuilder,
              private changeRef: ChangeDetectorRef) {

    this.form = this.formBuilder.group({
      email       :   [ '' ,[ Validators.required,Validators.email ]]
    });
  }

  ngOnInit() {}

  submit()
  {
    this.btnRecupera = false;

    this.authService.forgot(this.form.value).subscribe((response) => {
      if(response.result){
        this.notifyMessage.success(response.msg);
      }else{
        this.notifyMessage.error(response.msg);
      }

      this.btnRecupera = true;
      this.changeRef.detectChanges();
    },() => {
      this.notifyMessage.error("Houve um erro ao recuperar a senha!");
      this.btnRecupera = true;
      this.changeRef.detectChanges();
    });
  }
}
