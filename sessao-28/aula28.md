# Aula 28 — Serviços, Injeção de Dependência e Observables

## Serviços

### O que são?

Serviços são classes usadas para centralizar regras de negócio e funcionalidades compartilhadas, evitando duplicação de código nos componentes.

### Quando usar?

Use serviços quando a lógica:

- será reutilizada em mais de um componente;
- não pertence à interface (HTML/CSS);
- envolve acesso a API, autenticação, estado global ou utilitários.

### Exemplo mental

- **Componente** = “tela” (mostra dados e reage a eventos);
- **Serviço** = “motor” (busca/processa dados).

### Exemplo simples

```ts
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class MensagemService {
  obterSaudacao(): string {
   return 'Olá, Angular!';
  }
}
```

## Injeção de Dependência (DI)

### O que é?

É o mecanismo em que o Angular cria e fornece instâncias de classes (como serviços) para quem precisa.

Em vez de fazer `new MeuServico()` manualmente, o componente declara a dependência e o Angular entrega a instância.

### Vantagens

- Baixo acoplamento;
- Código mais limpo;
- Maior facilidade para testes (mock de serviço).

### Exemplo no componente

```ts
import { Component } from '@angular/core';
import { MensagemService } from './mensagem.service';

@Component({
	selector: 'app-home',
	template: '<p>{{ mensagem }}</p>'
})
export class HomeComponent {
	mensagem = '';

	constructor(private mensagemService: MensagemService) {
		this.mensagem = this.mensagemService.obterSaudacao();
	}
}
```

## Observables

### O que são?

Observables representam fluxos de dados ao longo do tempo.

Eles são muito usados no Angular para:

- requisições HTTP;
- eventos do utilizador;
- streams reativos (RxJS).

### Como pensar

- `Promise` entrega 1 valor e termina;
- `Observable` pode entregar vários valores ao longo do tempo.

### Exemplo conceitual

```ts
import { of } from 'rxjs';

const nomes$ = of('Ana', 'Bruno', 'Carla');

nomes$.subscribe((nome) => {
	console.log(nome);
});
```

### Exemplo comum no Angular (HTTP)

```ts
obterUtilizadores(): Observable<Utilizador[]> {
	return this.http.get<Utilizador[]>('/api/utilizadores');
}
```

No componente:

```ts
this.utilizadorService.obterUtilizadores().subscribe((dados) => {
	this.utilizadores = dados;
});
```

> Em componentes reais, lembre-se de gerir subscrições (ex.: `takeUntil`, `async pipe`) para evitar memory leaks.

## Ligando os 3 conceitos

Fluxo típico no Angular:

1. Componente injeta um serviço via DI;
2. Serviço busca dados (geralmente via HTTP, retornando Observable);
3. Componente consome esse Observable e atualiza a interface.

Resumo mental: **Componente exibe**, **Serviço processa**, **Observable transporta os dados no tempo**.
