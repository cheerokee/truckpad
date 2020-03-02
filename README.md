# Desafio Truckpad
Sistema disponivel 
<a href="http://truckpad.ddns.net">Aqui</a>.
<br />
<h2>Pré Requisitos</h2>
<ul>
    <li>PHP ^7.0</li>
    <li>Mysql</li>
    <li>Angular</li>
</ul>
<h2>Instalação</h2>
<p>Faça o clone do projeto</p>
<div class="highlight highlight-source-shell">
<pre>$ git clone https://github.com/cheerokee/truckpad.git</pre>
</div>
Instalar bibliotecas
<div class="highlight highlight-source-shell">
<pre>$ cd [pasta do projeto]</pre>
<pre>$ composer update</pre>
</div>
<div class="highlight highlight-source-shell">
<pre>$ cd [pasta do projeto]/_app</pre>
<pre>$ npm install</pre>
</div>
<h2>Configuração de Banco de Dados</h2>
<p>Criar um banco de dados com nome truckpad_front</p>
<p>
    Realizar o download do backup do banco de dados 
    <a href="http://backtruckpad.ddns.net/truckpad_front.sql">aqui</a>
</p>
<p>Faça a importação do banco de dados para o banco criado</p>
<p>A configuração da biblioteca Doctrine de conexão do o banco de dados 
está configurado para acesssar o mysql com username root e senha vazia, 
caso os dados de acesso sejam diference, altere a configuração no arquivo 
/config/autoload/doctrine_orm.global.php</p>
<h2>Executando o Projeto</h2>
<p>Acesse /_app e execute:</p>
<div class="highlight highlight-source-shell">
<pre>$ ng serve</pre>
</div>
<h2>Modelagem do Projeto</h2>
<img class="img-responsive" src="http://backtruckpad.ddns.net/banco.png" />

