import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [ReactiveFormsModule,],
  templateUrl: './auth.html',
  styleUrl: './auth.css',
})
export class Auth {
  form = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    palavraPasse: new FormControl('', [Validators.required, Validators.minLength(6)]),
  });

  onSubmit() {
    if (this.form.valid) {
      const nome = this.form.get('nome')?.value;
      const email = this.form.get('email')?.value;
      const palavraPasse = this.form.get('palavraPasse')?.value;
      alert(`Nome: ${nome}\nEmail: ${email}\nPalavra-passe: ${palavraPasse}`);
    } else {
      alert('Formulário inválido. Por favor, preencha todos os campos corretamente.');
    }
  }
}
