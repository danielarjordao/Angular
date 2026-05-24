# Aula 29

## Single Page Application (SPA)

### O que é SPA?

SPA é um tipo de aplicação web onde toda a navegação acontece dentro de uma única página, sem recarregar o navegador. O conteúdo é carregado dinamicamente usando JavaScript, proporcionando uma experiência mais fluida e rápida.

### Vantagens

- Melhor performance (menos recarregamentos);
- Experiência de usuário mais fluida;
- Possibilidade de criar interfaces mais ricas.

## Roteamento

### O que é Roteamento?

Roteamento é o mecanismo que permite navegar entre diferentes "páginas" ou "telas" dentro de uma SPA. No Angular, isso é feito usando o módulo `Router`, que mapeia URLs para componentes específicos. Esse mecanismo permite:

- Navegação sem recarregar a página;
- Manutenção do estado da aplicação;
- Suporte a URLs amigáveis e compartilháveis.
- Permite a criação de rotas aninhadas e rotas com parâmetros.
- Protege rotas usando guardas de autenticação.

### Configuração básica

1. Importar `RouterModule` no módulo principal:

```ts
import { RouterModule } from '@angular/router';
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 // ...
})
export class AppModule { }
```
