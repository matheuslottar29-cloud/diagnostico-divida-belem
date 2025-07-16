# Diagnóstico Técnico-Financeiro da Dívida Garantida - Belém/PA

Site interativo para apresentação do diagnóstico técnico-financeiro da dívida garantida do Município de Belém/PA, desenvolvido para estruturação de reperfilamento junto ao BIRD.

## 🚀 Como Executar no VS Code

### Pré-requisitos
- **Node.js** (versão 18 ou superior) - [Download aqui](https://nodejs.org/)
- **VS Code** - [Download aqui](https://code.visualstudio.com/)
- **Git** (opcional) - [Download aqui](https://git-scm.com/)

### Passo a Passo

1. **Extrair o projeto**
   ```bash
   # Extraia o arquivo ZIP em uma pasta de sua escolha
   # Exemplo: C:\projetos\diagnostico-divida-belem
   ```

2. **Abrir no VS Code**
   ```bash
   # Abra o VS Code
   # File > Open Folder > Selecione a pasta do projeto
   ```

3. **Instalar dependências**
   ```bash
   # Abra o terminal no VS Code (Ctrl + `)
   # Execute o comando:
   npm install
   
   # OU se preferir usar pnpm:
   npm install -g pnpm
   pnpm install
   ```

4. **Executar o projeto**
   ```bash
   # No terminal do VS Code, execute:
   npm run dev
   
   # OU com pnpm:
   pnpm run dev
   ```

5. **Acessar o site**
   - O terminal mostrará algo como: `Local: http://localhost:5173/`
   - Abra seu navegador e acesse o endereço mostrado
   - O site carregará automaticamente

### 🔧 Comandos Úteis

```bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev

# Fazer build para produção
npm run build

# Visualizar build de produção
npm run preview
```

### 📁 Estrutura do Projeto

```
diagnostico-divida-belem/
├── public/                          # Arquivos públicos
│   ├── diagnostico_divida_belem.md  # Documento para download
│   └── favicon.ico
├── src/                             # Código fonte
│   ├── assets/                      # Imagens e gráficos
│   ├── components/                  # Componentes React
│   │   ├── Header.jsx
│   │   ├── ExecutiveDashboard.jsx
│   │   ├── ContractsTable.jsx
│   │   ├── ChartsSection.jsx
│   │   ├── TechnicalJustification.jsx
│   │   └── Footer.jsx
│   ├── App.jsx                      # Componente principal
│   ├── App.css                      # Estilos principais
│   └── main.jsx                     # Ponto de entrada
├── package.json                     # Dependências do projeto
├── vite.config.js                   # Configuração do Vite
└── README.md                        # Este arquivo
```

### 🎨 Tecnologias Utilizadas

- **React 18** - Framework JavaScript
- **Vite** - Build tool e dev server
- **Tailwind CSS** - Framework CSS
- **Shadcn/UI** - Componentes de interface
- **Recharts** - Gráficos interativos
- **Lucide React** - Ícones

### 📊 Funcionalidades

- ✅ Dashboard executivo com indicadores críticos
- ✅ Tabela detalhada dos contratos ativos
- ✅ Gráficos interativos de análise
- ✅ Visualizações estáticas dos dados
- ✅ Justificativa técnica completa
- ✅ Cronograma de implementação
- ✅ Download do diagnóstico completo
- ✅ Design responsivo (mobile/desktop)

### 🐛 Solução de Problemas

**Erro: "npm não é reconhecido"**
- Instale o Node.js do site oficial
- Reinicie o VS Code após a instalação

**Erro: "Cannot find module"**
- Execute `npm install` novamente
- Verifique se está na pasta correta do projeto

**Porta já em uso**
- O Vite automaticamente tentará outra porta
- Ou pare outros serviços na porta 5173

**Gráficos não carregam**
- Verifique se as imagens estão na pasta `src/assets/`
- Execute `npm run dev` novamente

### 📞 Suporte

Este projeto foi desenvolvido pela **Manus AI** para a Prefeitura de Belém/SEPLAN.

Para dúvidas técnicas:
1. Verifique se seguiu todos os passos
2. Consulte a documentação do React/Vite
3. Verifique se o Node.js está instalado corretamente

### 🎯 Objetivo

Site desenvolvido para apresentação ao Prefeito de Belém e equipe da SEPLAN, fundamentando tecnicamente a necessidade de reperfilamento da dívida garantida junto ao BIRD.

**Dados principais:**
- Exposição total: R$ 954,40 milhões
- Concentração crítica: 53,13% em 5 anos
- Custo médio atual: 13,40% a.a.
- Meta com BIRD: 6-9% a.a.
- Economia estimada: R$ 26 milhões/ano

