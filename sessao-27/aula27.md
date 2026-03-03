
# Sessão 27 — Comunicação entre Componentes & Ciclo de Vida

## Arquitetura baseada em componentes

No Angular, a interface é organizada como uma árvore de componentes (hierarquia).

Exemplo do seu projeto:

- `App` atua como componente pai;
- `Header` atua como componente filho;
- Ao usar `<app-header>` dentro do template do `App`, criamos a relação pai → filho.

Essa arquitetura favorece reutilização, separação de responsabilidades e fluxo de dados previsível.

## Comunicação Pai → Filho com `@Input`

### Conceito

`@Input()` permite que o componente filho receba dados do componente pai.

### Fluxo

1. No filho (`header.ts`), declaramos uma propriedade com `@Input()`;
2. No pai (`app.html`), passamos valor via property binding (`[propriedade]="valor"`).

### Exemplo

Filho (`header.ts`):

```ts
import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.html',
	styleUrl: './header.css'
})
export class Header {
	@Input() titulo: string = '';
}
```

Pai (`app.html`):

```html
<app-header [titulo]="'Dashboard'"></app-header>
```

## Comunicação Filho → Pai com `@Output` e `EventEmitter`

### Conceito

`@Output()` permite que o filho dispare eventos para o pai.

### Fluxo

1. No filho, declaramos um evento com `@Output()` e `EventEmitter`;
2. No template do pai, escutamos o evento com event binding (`(evento)="metodo()"`);
3. O pai executa lógica ao receber o evento.

### Exemplo 1 — evento sem payload (logout)

Filho (`header.ts`):

```ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'app-header',
	templateUrl: './header.html',
	styleUrl: './header.css'
})
export class Header {
	@Output() logout = new EventEmitter<void>();

	sair(): void {
		this.logout.emit();
	}
}
```

Filho (`header.html`):

```html
<button (click)="sair()">Logout</button>
```

Pai (`app.html`):

```html
<app-header (logout)="fazerLogout()"></app-header>
```

Pai (`app.ts`):

```ts
fazerLogout(): void {
	console.log('Logout executado no componente pai');
}
```

### Exemplo 2 — evento com payload (`$event`)

Filho (`header.ts`):

```ts
@Output() utilizadorSelecionado = new EventEmitter<string>();

selecionar(nome: string): void {
	this.utilizadorSelecionado.emit(nome);
}
```

Pai (`app.html`):

```html
<app-header (utilizadorSelecionado)="receber($event)"></app-header>
```

Pai (`app.ts`):

```ts
receber(nome: string): void {
	console.log('Utilizador recebido:', nome);
}
```

## Fluxo unidirecional no Angular

Regra mental importante:

- Dados descem: pai → filho (`@Input`);
- Eventos sobem: filho → pai (`@Output`).

Isso mantém a arquitetura declarativa e previsível.

## Ciclo de Vida dos Componentes (Lifecycle Hooks)

### O que é?

Todo componente passa por fases desde criação até destruição. Hooks são métodos especiais para executar código em momentos específicos.

### `OnInit` (`ngOnInit`)

Executado após inicialização das propriedades do componente. Uso comum:

- Carregar dados iniciais;
- Preparar estado;
- Disparar chamadas HTTP.

### `OnDestroy` (`ngOnDestroy`)

Executado antes do componente ser destruído. Uso comum:

- Cancelar subscriptions;
- Limpar timers;
- Libertar recursos.

### Exemplo prático

```ts
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-exemplo',
	template: '<p>Exemplo de lifecycle</p>'
})
export class ExemploComponent implements OnInit, OnDestroy {
	ngOnInit(): void {
		console.log('Componente inicializado');
	}

	ngOnDestroy(): void {
		console.log('Componente destruído');
	}
}
```
