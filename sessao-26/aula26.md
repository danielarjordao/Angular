# Sessão 26 — Templates, Data Binding, Diretivas e Pipes

## Fundamentos de Data Binding

### O que é?

Data Binding é o mecanismo que conecta o estado do componente (TS) ao template (HTML). Com isso, conseguimos:

- Exibir dados no template;
- Atualizar a interface automaticamente quando o estado muda;
- Capturar ações do utilizador e executar lógica no componente.

### 4 tipos principais

1. **Interpolation `{{ }}`** (TS → HTML)
   - Exibe valores de propriedades/métodos do componente no template.
   - Exemplo:

```html
<h1>{{ titulo }}</h1>
<p>{{ saudacao() }}</p>
```

2. **Property Binding `[ ]`** (TS → propriedade do elemento)
   - Envia dados para propriedades do DOM/componente.
   - Exemplo:

```html
<img [src]="fotoUrl" [alt]="nome" />
<button [disabled]="carregando">Salvar</button>
```

3. **Event Binding `( )`** (evento do HTML → método TS)
   - Escuta eventos e executa métodos do componente.
   - Exemplo:

```html
<button (click)="incrementar()">+1</button>
<input (input)="atualizarTexto($event)" />
```

4. **Two-way Data Binding `[()]`** (TS ↔ HTML)
   - Comunicação bidirecional entre campo e propriedade.
   - Exemplo:

```html
<input [(ngModel)]="nome" placeholder="Digite seu nome" />
<p>Olá, {{ nome }}</p>
```

> Para usar `[(ngModel)]`, é necessário importar `FormsModule` no componente/módulo onde o input está sendo usado.

## Diretivas Estruturais

### O que são?

Diretivas estruturais controlam criação/remoção de elementos no DOM. Elas permitem:

- Renderização condicional;
- Renderização de listas;
- Controle de fluxo de exibição.

### `@if`, `@else if`, `@else`

```html
@if (isLoggedIn) {
  <p>Bem-vindo, utilizador!</p>
} @else if (isAdmin) {
  <p>Bem-vindo, administrador!</p>
} @else {
  <p>Por favor, faça login.</p>
}
```

### `@for`

```html
@for (item of itens; track item.id) {
  <p>{{ item.nome }}</p>
}
```

> A forma moderna com `@for` usa `track` para melhorar desempenho de renderização.

### `@switch`, `@case`, `@default`

```html
@switch (perfil) {
  @case ('admin') {
    <p>Acesso total</p>
  }
  @case ('user') {
    <p>Acesso padrão</p>
  }
  @default {
    <p>Acesso visitante</p>
  }
}
```

### Observação importante

- Na sintaxe antiga (`*ngIf`, `*ngFor`, `*ngSwitch`), geralmente usamos `CommonModule`.
- Na sintaxe nova (`@if`, `@for`, `@switch`), o fluxo fica mais próximo do TypeScript e mais legível.

## Templates reativos e eventos

Template reativo em Angular significa declarar **o que deve aparecer** com base no estado atual do componente.

Exemplo de combinação:

- Propriedade de estado (`carregando`, `lista`, `perfil`);
- Eventos (`click`, `input`) alterando estado;
- Diretivas estruturais decidindo o que renderizar;
- Pipes formatando saída final.

## Pipes

### Definição

Pipes transformam dados diretamente no template, sem alterar o valor original no TypeScript.

### Pipes nativos comuns

- `date`: `{{ hoje | date:'dd/MM/yyyy' }}`
- `date` com parâmetros: `{{ hoje | date:'fullDate':'':'pt-PT' }}`
- `currency`: `{{ preco | currency:'EUR' }}`
- `percent`: `{{ taxa | percent:'1.0-2' }}`
- `number`: `{{ nota | number:'1.2-2' }}`
- `uppercase`: `{{ nome | uppercase }}`
- `lowercase`: `{{ nome | lowercase }}`

### Pipes vs lógica no TS

- **Pipe no HTML:** rápido para formatação declarativa;
- **Lógica no TS:** melhor quando há regra de negócio complexa.

## Pipes customizados

### Quando usar?

Quando os pipes nativos não resolvem sua necessidade de transformação.

### Gerar com Angular CLI

```bash
ng generate pipe saudacao
```

ou forma curta:

```bash
ng g p saudacao
```

### Estrutura essencial de um pipe

- Decorator `@Pipe(...)`: registra nome e configuração;
- Método `transform(...)`: recebe valor e devolve valor transformado.

### Exemplo didático — saudação por horário

Ideia de regra:

- Manhã → “Bom dia”;
- Tarde → “Boa tarde”;
- Noite → “Boa noite”.

Uso no template:

```html
<p>{{ nome | saudacao }}</p>
```
