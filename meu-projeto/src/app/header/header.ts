import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SaudacaoPipe } from '../pipes/saudacao/saudacao-pipe';
import { BlogInterface } from '../blog-interface';
import { UserService } from '../user-service';

@Component({
  selector: 'app-header',
  imports: [FormsModule, CommonModule, SaudacaoPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})

export class Header  implements OnInit, OnDestroy {
  utilizadores: Array<string> = [];
  posts: Array<BlogInterface> = [];
  titulo: string = 'Meu Projeto';
  logotipo: string = 'logo.png';
  nome: string = '';
  isLogado: boolean = false;
  tipo: string = 'admin';
  nomes: string[] = ['Ana', 'Maria', 'João'];
  cidade: string = 'Florianópolis';
  hoje: Date = new Date();
  @Input() titulo2!: string;
  @Output() logout = new EventEmitter<void>();
  @Output() utilizadorSelecionado = new EventEmitter<string>();

  constructor(private userService: UserService) {
  }

  Clicar() {
    alert('Botão clicado!');
  }
  onLogout() {
    this.logout.emit();
  }
  selecionar() {
    this.utilizadorSelecionado.emit("Ana");
  }
  ngOnInit() {
    this.utilizadores = this.userService.getUtilizadores();
    this.userService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log('Posts recebidos:', posts);
    });
  }
  ngOnDestroy() {
    console.log('Header componente destruído');
  }
}
