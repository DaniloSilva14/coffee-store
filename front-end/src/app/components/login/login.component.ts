import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { KartService } from 'src/app/services/kart/kart.service';
import { TokenService } from 'src/app/services/token/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({});
  flag: number;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private tokenService: TokenService,
    private kartService: KartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isLogged();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required]],
      password: ['', Validators.required],
    });
    this.flag = this.kartService.fromLogin;
    this.inform()
  }

  inform(){
    Swal.fire({
      icon: 'info',
      title: 'Contas default',
      html:
        '<b> Login: </b> admin <br> <b> Password: </b> admin <br><br>' + 
        '<b> Login: </b> user <br> <b> Password: </b> user'
    })
  }

  isLogged() {
    if (this.tokenService.hasToken())
      this.router.navigate(['']);
  }

  login() {
    if (!this.loginForm.valid) return;

    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;

    this.authService.login(email, password).subscribe(() => {
      let isAdmin = this.tokenService.getUserRoles();
        if(isAdmin == 'admin') {
          this.router.navigate(['/admin']);
        } else {
          if(this.flag){
            this.kartService.toKart();
            this.router.navigate(['/store/kart']);
          }
          else
            this.router.navigate(['/']);
        }
      },(err) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Login ou senha inválidos',
        })
      }
    );
  }
}
