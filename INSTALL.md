## Table of Contents
+ [0. Instala��o inicial](#section0)
+ [1. Instala��o Angular](#section1)

## <a name="section0"></a> 0. Instala��o inicial

### Fazendo clone da aplica��o
```bash
git clone https://{login}:{senha}@github.com/cheerokee/saude-sys saude-sys
```
Depois que clonar cria um vhost saudesys.dev.br normal para o saudesys/public, 
faz o composer update na pasta raiz e npm install na pasta _app. 
Para rodar o projeto, da cd na pasta _app e da o comando `ng serve`.

```bash
composer install
```

### fazer pull
```bash
git pull origin master
```
**em seguida**

```bash
composer update
```

## <a name="section1"></a> 1. Instala��o Angular
Para instalar os componentes novos do angular, do jonas

```bash
cd _app
```
```bash 
npm install
```
VERIFICAR: Run `npm i npm@latest -g` to upgrade your npm version, and then `npm audit` to get more info.

Atualizar nodejs

1� Passo: Limpar o cache do npm
```bash
npm cache clean -f
```

2� Passo: Instala��o do pacote n (Pacote para gerenciamento do Node.JS)
```bash
npm install -g n
```

3� Passo: Atualiza��o
```bash
n stable
```

N�o funciona a atualiza��o do nodejs via cli

Requistos instalar o angular-cli pelo git-bash
```bash
npm install -g @angular/cli
```

Para acessar a aplica��o execute na pasta _app
```bash
ng serve
```

Depois de retornar abra no navegador
```bash
http://localhost:4200/
```

Duplicar o arquivo doctrine_orm.global.php e mudar o nome para doctrine_orm.local.php

# atualizar banco
```bash
vendor/bin/doctrine-module orm:schema-tool:update -f
```

Problemas comuns

internal/modules/cjs/loader.js:976
  throw err;
  ^

Error: Cannot find module 'C:\Users\dougl\AppData\Roaming\npm\node_modules\@angular\cli\bin\ng'
[90m    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:973:15)[39m
[90m    at Function.Module._load (internal/modules/cjs/loader.js:855:27)[39m
[90m    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:71:12)[39m
[90m    at internal/main/run_main_module.js:17:47[39m {
  code: [32m'MODULE_NOT_FOUND'[39m,
  requireStack: []
}

#### Abra o cmd em modo administrador
1. Desinstale o angular cli, primeiro
```bash
npm uninstall -g @angular/cli
```
2. Delete the C:\Users\dougl\AppData\Roaming\npm\node_modules@angular folder if it still exists after the uninstall

3. Reinstall angular-cli globally e force
```bash
npm install -g --force @angular/cli
```




# Abra cmd com administrador
execute na pasta C:/wamp/www/saude-sys/_app
ng serve