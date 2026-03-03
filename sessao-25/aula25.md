# Sessão 25 — Introdução ao Angular

## Angular no ecossistema frontend

### O que é Angular?

Angular é um **framework frontend completo** (Google) para construir aplicações web modernas. Ele já traz recursos principais do dia a dia:

- Componentes e templates;
- Roteamento (routing);
- HTTP Client;
- Forms;
- Injeção de dependências;
- Ferramentas de projeto (CLI).

### O que é React?

React é uma **biblioteca** (Meta) focada na camada de interface e renderização reativa com componentes.

### Framework vs Biblioteca (resumo)

- **Angular (framework):** define mais estrutura e padrões;
- **React (biblioteca):** fornece a base de UI, e a arquitetura final depende das bibliotecas escolhidas.

### Analogia prática

- **Angular decide mais por você:** estrutura, integração e fluxo padrão;
- **React dá mais liberdade:** você escolhe como combinar as peças.

## Angular + TypeScript

Angular usa TypeScript como linguagem principal, trazendo:

- Tipagem forte;
- Classes e interfaces;
- Detecção antecipada de erros;
- Melhor manutenção e escalabilidade.

## Angular CLI

### O que é?

CLI (Command Line Interface) oficial para:

- Criar projetos;
- Gerar artefatos (componentes, serviços etc.);
- Executar localmente;
- Gerar build de produção.

### Comandos essenciais

```bash
npm install -g @angular/cli
ng version

ng new meu-projeto
ng serve

ng generate component header
# abreviação:
ng g c header
```

### O que o `ng serve` faz

- Compila TypeScript em JavaScript;
- Inicia servidor local;
- Observa alterações no código;
- Recarrega automaticamente (hot reload no fluxo de desenvolvimento).

## Anatomia do projeto Angular

### Estrutura geral

Ao criar um projeto com CLI, os principais pontos são:

- `src/`: código-fonte da aplicação;
- `src/index.html`: página base carregada no navegador;
- `src/main.ts`: ponto de entrada da aplicação;
- `src/app/`: componentes e configuração principal.

### `index.html`

Contém a tag raiz (ex.: `<app-root></app-root>`), onde o Angular renderiza a aplicação.

### `main.ts`

Dispara a inicialização via `bootstrapApplication(...)`, carregando o componente raiz.

### Pasta `app/`

Aqui fica a implementação da aplicação (componente raiz + demais componentes).

### `app.ts` (componente raiz)

- Define comportamento e metadata do componente principal;
- O `selector` deve corresponder à tag usada no `index.html`.

### `app.spec.ts`

- Arquivo de testes automatizados gerado pelo CLI;
- Não é foco inicial, mas é importante para qualidade e regressão.

## Componentes e metadata

### O que é um componente?

Unidade fundamental da aplicação Angular. Normalmente combina:

- Estrutura (HTML);
- Estilo (CSS);
- Lógica (TypeScript).

### O que é `@Component`?

Decorator que informa ao Angular como a classe deve funcionar como componente, por exemplo:

- `selector` (nome da tag);
- `templateUrl` (arquivo HTML);
- `styleUrl`/`styleUrls` (arquivo(s) CSS).

### Classe do componente

A classe concentra a lógica e os dados usados no template.

## Bootstrap da aplicação

### Conceito

Bootstrap é o processo de inicialização do Angular.

### Fluxo mental (ordem)

1. Navegador carrega `index.html`;
2. Angular inicia a partir de `main.ts`;
3. `bootstrapApplication(AppComponent, ...)` é executado;
4. O `AppComponent` é associado ao seletor (ex.: `app-root`);
5. A interface aparece no DOM.

> Em projetos com SSR, há também arquivos de servidor como `main.server.ts`, mas o fluxo base no cliente continua partindo de `main.ts`.

## Decorators no Angular

Decorator é uma função que adiciona metadata a classes/funções, permitindo ao Angular interpretar o papel daquela estrutura.

Principais decorators:

- `@Component` → componente;
- `@Injectable` → serviço para DI;
- `@Directive` → comportamento reutilizável no template;
- `@Pipe` → transformação de dados na view.

Sem decorators, a classe seria apenas TypeScript “puro”, sem integração com o motor do Angular.
