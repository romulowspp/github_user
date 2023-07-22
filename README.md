# Projeto GitHub Profiles

Este projeto é uma aplicação que mostra informações de um usuário do github.

## Requisitos

Antes de começar, você precisará ter as seguintes ferramentas instaladas em sua máquina:

- Docker
- Docker Compose
- Node.js
- NPM

## Configuração e Execução

Siga estas etapas para configurar e executar a aplicação.

### Backend (github_back)

O backend do projeto está configurado para ser executado usando o Docker Compose. Para iniciar o serviço, navegue até o diretório raiz do projeto, onde o arquivo 'docker-compose.yaml' está localizado, e execute o seguinte comando:

```
docker-compose up
```

Isso vai iniciar todos os serviços definidos no arquivo 'docker-compose.yaml'.

### Frontend (github_front)

O frontend do projeto é executado separadamente. Para iniciar o serviço, navegue até o diretório 'github_front' a partir do diretório raiz do projeto e execute o seguinte comando:

```
npm run dev
```

Esse comando iniciará o serviço de frontend no modo de desenvolvimento.
