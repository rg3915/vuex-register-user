# vuex-register-user

Teste de cadastro de usuário com vuex e vue-router

# Cadastro de Usuários

## Usando backend com json-server

```
mkdir api

cat << EOF > api/db.json
{
  "users": [
    {
      "id": 1,
      "email": "admin@email.com"
    }
  ]
}
EOF
```

### Instalando

```
npm install -g json-server
```

### Rodando backend

```
json-server --watch api/db.json
```

## Cria app

```
vue create app

Vue CLI v5.0.8
? Please pick a preset: 
  Default ([Vue 3] babel, eslint) 
  Default ([Vue 2] babel, eslint) 
❯ Manually select features   <<< ESCOLHA ESTE

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: (Press <space> to select, <a> to toggle all, <i> to invert selection, and <enter> to 
proceed)
 ◉ Babel
 ◯ TypeScript
 ◯ Progressive Web App (PWA) Support
 ◉ Router      <<< INSTALE ESTE
❯◉ Vuex        <<< INSTALE ESTE
 ◯ CSS Pre-processors
 ◉ Linter / Formatter
 ◯ Unit Testing
 ◯ E2E Testing

Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router, Vuex, Linter
? Choose a version of Vue.js that you want to start the project with (Use arrow keys)
❯ 3.x   <<< ESTE
  2.x 
```

## Instalação

https://vuex.vuejs.org/

https://router.vuejs.org/installation.html#direct-download-cdn

```
cd app
npm install axios
```

## Cadastro

Somente e-mail

Veja os arquivos

```
src/router/index.js
src/store/index.js
src/views/RegisterView.vue
src/views/EmailView.vue
```

