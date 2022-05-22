import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ModalService } from './services/modal.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alaraby-angular';

  isAdmin() {
    const user: string = localStorage.getItem('auth') || '';
    if (user) {
      return JSON.parse(user).roleId === '62868f37fac1ca1ac0b61d7a';
    }
    return false;
  }

  auth: boolean = !!localStorage.getItem('auth') || false;

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('', [
    Validators.required,
    Validators.pattern(/^(?=.*[0-9])(?=.*[a-z]).{5,50}$/),
  ]);
  roleId = new FormControl('', [Validators.required]);

  signupForm = new FormGroup({
    email: this.email,
    password: this.password,
    roleId: this.roleId,
  });

  constructor(public modal: ModalService, private userSrv: UserService) {
    console.log(this.isAdmin());
  }

  ngOnInit() {
    console.log(this.isAdmin());
  }

  openModal(e: Event) {
    e.preventDefault();
    this.modal.toggle('question');
  }

  submit() {
    this.userSrv.signup(this.signupForm.value).subscribe({
      next: (data) => {
        console.log(data);
        this.auth = true;
        localStorage.setItem('auth', JSON.stringify(data));
      },
    });
  }

  logout() {
    localStorage.removeItem('auth');
    this.auth = false;
  }
}
