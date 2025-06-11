# TSender UI - Token Airdrop Interface

A modern web interface for performing ERC-20 token airdrops efficiently and securely, built with Next.js, TypeScript and Web3 technologies.

## Summary

TSender UI is a decentralized application (dApp) that allows users to perform ERC-20 token airdrops to multiple recipients simultaneously. The interface offers an intuitive experience for connecting wallets, approving tokens and executing mass distributions, significantly reducing time and transaction costs compared to individual transfers.

## Getting Started

### Prerequisites

- Node.js 18+ installed
- MetaMask or other compatible Web3 wallet
- ERC-20 tokens to perform the airdrop

### Installation and Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd ts-tsender-ui
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### How to Use

1. **Connect your wallet** using the header button
2. **Enter the token address** of the ERC-20 you want to distribute
3. **List recipients** (separated by comma or new line)
4. **Set amounts** for each recipient
5. **Confirm transaction** and wait for execution

## Description

### Technologies Used

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Web3 Integration**: Wagmi, RainbowKit
- **Blockchain**: Ethereum, Smart Contracts (Solidity)
- **Testing**: Vitest
- **Development**: ESLint, TypeScript

### Key Features

#### 🎯 **Intuitive Interface**
- Responsive and modern design with Tailwind CSS
- Reusable and typed components with TypeScript
- Real-time visual feedback for transactions

#### 🔗 **Web3 Integration**
- Multiple wallet connection via RainbowKit
- Support for different Ethereum networks
- Automatic balance and approval verification

#### 💰 **Token Management**
- Automatic token information detection (name, decimals, balance)
- Sufficient balance verification before execution
- Smart approval system to optimize gas

#### 📊 **Advanced Features**
- Automatic calculation of total to be distributed
- Local persistence of form data
- Loading states with visual feedback
- Address and value validation

### Project Architecture

```
src/
├── app/                 # Next.js App Router
├── components/          # Reusable React components
│   ├── ui/             # Base interface components
│   ├── AirdropForm.tsx # Main form
│   ├── Header.tsx      # Header with connection
│   └── ...
├── utils/              # Utility functions
│   └── calculateTotal/ # Calculation logic with tests
└── constants.ts        # Configurations and ABIs
```

### Smart Contracts

The project interacts with custom smart contracts for:
- **TSender Contract**: Executes optimized batch airdrops
- **ERC-20 Tokens**: Standard for fungible tokens
- **Approval System**: Secure permission management

## Conclusion

TSender UI represents a complete and modern solution for ERC-20 token distribution, demonstrating effective integration between traditional frontend development and emerging blockchain technologies.

### Main Achievements

✅ **User Experience**: Intuitive interface that abstracts blockchain complexity  
✅ **Efficiency**: Significant reduction in costs and time for airdrops  
✅ **Security**: Robust validations and secure approval management  
✅ **Code Quality**: TypeScript, automated tests and modular architecture  

### Next Steps

- [ ] Support for NFT tokens (ERC-721/ERC-1155)
- [ ] Multi-network integration (Polygon, BSC, etc.)
- [ ] Scheduling system for airdrops
- [ ] Dashboard with transaction history
- [ ] Advanced gas optimizations

This project demonstrates proficiency in modern Web3 technologies and serves as a solid foundation for more complex decentralized applications in the DeFi ecosystem.

---

**Main Stack**: Next.js | TypeScript | Tailwind CSS | Wagmi | RainbowKit | Solidity | Ethereum

Uma interface web moderna para realizar airdrops de tokens ERC-20 de forma eficiente e segura, construída com Next.js, TypeScript e Web3 technologies.

## Resumo

O TSender UI é uma aplicação descentralizada (dApp) que permite aos usuários realizar airdrops de tokens ERC-20 para múltiplos destinatários simultaneamente. A interface oferece uma experiência intuitiva para conectar carteiras, aprovar tokens e executar distribuições em massa, reduzindo significativamente o tempo e os custos de transação comparado aos envios individuais.

## Getting Started

### Pré-requisitos

- Node.js 18+ instalado
- MetaMask ou outra carteira Web3 compatível
- Tokens ERC-20 para realizar o airdrop

### Instalação e Execução

1. Clone o repositório:
```bash
git clone <repository-url>
cd ts-tsender-ui
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
# ou
pnpm install
```

3. Execute o servidor de desenvolvimento:
```bash
npm run dev
# ou
yarn dev
# ou
pnpm dev
```

4. Abra [http://localhost:3000](http://localhost:3000) no seu navegador

### Como Usar

1. **Conecte sua carteira** usando o botão no cabeçalho
2. **Insira o endereço do token** ERC-20 que deseja distribuir
3. **Liste os destinatários** (separados por vírgula ou nova linha)
4. **Defina os valores** para cada destinatário
5. **Confirme a transação** e aguarde a execução

## Descrição

### Tecnologias Utilizadas

- **Frontend**: Next.js 14, React, TypeScript
- **Styling**: Tailwind CSS
- **Web3 Integration**: Wagmi, RainbowKit
- **Blockchain**: Ethereum, Smart Contracts (Solidity)
- **Testing**: Vitest
- **Development**: ESLint, TypeScript

### Funcionalidades Principais

#### 🎯 **Interface Intuitiva**
- Design responsivo e moderno com Tailwind CSS
- Componentes reutilizáveis e tipados com TypeScript
- Feedback visual em tempo real para transações

#### 🔗 **Integração Web3**
- Conexão com múltiplas carteiras via RainbowKit
- Suporte a diferentes redes Ethereum
- Verificação automática de saldo e aprovações

#### 💰 **Gestão de Tokens**
- Detecção automática de informações do token (nome, decimais, saldo)
- Verificação de saldo suficiente antes da execução
- Sistema de aprovação inteligente para otimizar gas

#### 📊 **Recursos Avançados**
- Cálculo automático do total a ser distribuído
- Persistência local dos dados do formulário
- Estados de carregamento com feedback visual
- Validação de endereços e valores

### Arquitetura do Projeto

```
src/
├── app/                 # App Router do Next.js
├── components/          # Componentes React reutilizáveis
│   ├── ui/             # Componentes de interface base
│   ├── AirdropForm.tsx # Formulário principal
│   ├── Header.tsx      # Cabeçalho com conexão
│   └── ...
├── utils/              # Funções utilitárias
│   └── calculateTotal/ # Lógica de cálculo com testes
└── constants.ts        # Configurações e ABIs
```

### Smart Contracts

O projeto interage com smart contracts customizados para:
- **TSender Contract**: Executa airdrops otimizados em batch
- **ERC-20 Tokens**: Padrão para tokens fungíveis
- **Approval System**: Gestão segura de permissões

## Conclusão

O TSender UI representa uma solução completa e moderna para distribuição de tokens ERC-20, demonstrando a integração eficaz entre desenvolvimento frontend tradicional e tecnologias blockchain emergentes. 

### Principais Conquistas

✅ **Experiência do Usuário**: Interface intuitiva que abstrai a complexidade blockchain  
✅ **Eficiência**: Redução significativa de custos e tempo para airdrops  
✅ **Segurança**: Validações robustas e gestão segura de aprovações  
✅ **Qualidade de Código**: TypeScript, testes automatizados e arquitetura modular  

### Próximos Passos

- [ ] Suporte a tokens NFT (ERC-721/ERC-1155)
- [ ] Integração com múltiplas redes (Polygon, BSC, etc.)
- [ ] Sistema de agendamento para airdrops
- [ ] Dashboard com histórico de transações
- [ ] Otimizações avançadas de gas

Este projeto demonstra proficiência em tecnologias Web3 modernas e serve como base sólida para aplicações descentralizadas mais complexas no ecossistema DeFi.

---

**Stack Principal**: Next.js | TypeScript | Tailwind CSS | Wagmi | RainbowKit | Solidity | Ethereum