import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  email:string;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  enviarEmail(){
    alert('Email Enviado Com Sucesso');
    this.email="";
    this.router.navigate(['/']);
  }

}
