# Angular

## Comunicação entre Componentes & Ciclo de Vida dos Componente

### Arquitetura baseda em Componentes

O Angular é um framework de desenvolvimento web que utiliza uma arquitetura baseada em componentes. Um componente é uma unidade reutilizável de código que encapsula a lógica, a estrutura e o estilo de uma parte da interface do usuário. Cada componente é composto por três partes principais:

- **TypeScript**: Define a lógica do componente, incluindo propriedades, métodos e o comportamento do componente.
- **HTML**: Define a estrutura da interface do usuário para o componente.
- **CSS**: Define o estilo visual do componente.

### Comunicação entre Pai e Filho

A comunicação entre componentes é fundamental para criar aplicações interativas. No Angular, existem várias formas de comunicação entre componentes, incluindo:

- **Input**: Permite que um componente pai envie dados para um componente filho usando a diretiva `@Input()`.
- **Output**: Permite que um componente filho envie eventos para um componente pai usando a diretiva `@Output()` e o `EventEmitter`.

### Ciclo de Vida dos Componentes

Os componentes do Angular possuem um ciclo de vida que consiste em várias fases, desde a criação até a destruição do componente. As principais fases do ciclo de vida incluem:

- **ngOnInit()**: Chamado após a inicialização do componente. É um bom lugar para inicializar dados ou fazer chamadas a serviços.
- **ngOnDestroy()**: Chamado antes da destruição do componente. É um bom lugar para limpar recursos, como assinaturas de observáveis ou timers.

