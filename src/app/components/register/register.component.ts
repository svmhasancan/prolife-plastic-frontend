import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Notyf } from 'notyf';

import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;

  private notyf = new Notyf();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.createRegitserForm();
  }

  createRegitserForm() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.registerForm.valid) {
      let registerModel = Object.assign({}, this.registerForm.value);
      this.authService.register(registerModel).subscribe(
        (response) => {
          localStorage.setItem('token', response.data.token);
          this.notyf.success('Kayıt OLma İşlemi Başarılı!');
        },
        (repsonseError) => {
          this.notyf.error('Kayıt Olma Sırasına Bir Hata Oluştu');
          this.notyf.error('Lütfen Bilgilerinizi Kontrol Ediniz');
        }
      );
    } else {
      this.notyf.error('Lütfen Gerekli Bilgileri Doldurunuz');
    }
  }
}
