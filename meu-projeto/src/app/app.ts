import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('meu-projeto');
  fazerLogout() {
    alert('Logout realizado!');
  }
  receber(nome: string) {
    alert('Utilizador selecionado: ' + nome);
  }
}
