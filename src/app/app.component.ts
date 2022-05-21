import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ModalService } from './services/modal.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'alaraby-angular';

  auth: boolean = !!localStorage.getItem('auth') || false;

  email = new FormControl('');
  password = new FormControl('');
  roleId = new FormControl('');

  signupForm = new FormGroup({
    email: this.email,
    password: this.password,
    roleId: this.roleId,
  });

  constructor(public modal: ModalService, private userSrv: UserService) {}

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
}
