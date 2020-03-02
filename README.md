# Desafio Truckpad
Sistema disponivel e instalado
<a target="_blank" href="http://truckpad.ddns.net">Aqui</a>.
<br />
<h2>Pré Requisitos</h2>
<ul>
    <li>PHP ^7.0</li>
    <li>Mysql</li>
    <li>Angular</li>
</ul>
<h2>Instalação</h2>
<p>Caso queira instalar o projeto localmente</p>
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
<h2>Dados de Teste</h2>
<p>Abaixo está a situação atual do banco com dados fictícios</p>
<p>
Motorista: Jonas<br />
Descrição: Tem 2 Caminhoes sendo 1 proprio. 
Ele está no destino, descarregado, aguardando.<br />
Endereço: R. Sergipe, 3815, Jardim Paulista, 
São Joaquim da Barra - SP, 14600-000,-20.5929892,-47.8822286<br />
Local: Destino<br />
Situação: Descarregado<br />
Viagens:(Direção + Status)<br />
Origem > Destino -> Finalizado -> id 10 - Datas: 0 - 28/02/2020 06:00:00 -> 1 - 28/02/2020 08:00:00 -> 2 - 28/02/2020 18:00:00 <br />
Destino > Origem -> Aguardando -> id 11 - Datas: 0 - 29/02/2020 06:00:00<br />
<br /><br />

Motorista A<br />
Descrição: Tem 2 Caminhões sendo 2 proprio. Está na origem, descarregado e aguardando.<br />
Endereço: R. Dr. Emílio Ribas, 619 - Cambuí, Campinas - SP, 13025-141, -22.8990782,-47.0526986<br />
Local: Origem<br />
Situação: Descarregado.<br />
Viagens:(Direção + Status)<br />
Origem > Destino -> Finalizado -> id 12 - Datas: 0 - 27/02/2020 06:00:00 -> 1 - 27/02/2020 08:00:00 -> 2 - 27/02/2020 18:00:00<br />
Destino > Origem -> Aguardando -> id 13 - Datas: 0 - 28/02/2020 06:00:00 <br />
<br /><br />
Motorista B<br />
Descrição: Tem 2 Caminhões nenhum proprio. Saíndo do Destino, Carregado e a caminho pra origem.<br />
Endereço: R. Crispim Mira, 359 - Centro, Florianópolis - SC, 88020-540, -27.5910996,-48.5440434<br />
Local: Destino<br />
Situação: Carregado<br />
Viagens:(Direção + Status)<br />
Origem > Destino -> Finalizado -> id 14 - Datas: 0 - 26/02/2020 06:00:00 -> 1 - 26/02/2020 08:00:00 -> 2 - 26/02/2020 18:00:00<br />
Destino > Origem -> A caminho -> id 15 - Datas: 0 - 02/03/2020 06:00:00 -> 1 - 02/03/2020 08:00:00 <br />
<br /><br />
Motorista C<br />
Descrição: Tem 2 Caminhões sendo 2 proprio. Está no Destino e descarregado.<br />
Endereço: R. Silveira Martins, 95 - Cabula, Salvador - BA, 04150-000, -12.9658692,-38.4729615<br />
Local: Destino<br />
Situação: Descarregado<br />
Viagens:(Direção + Status)<br />
Origem > Destino -> Finalizado -> id 16 - Datas: 0 - 02/03/2020 06:00:00 -> 1 - 02/03/2020 08:00:00 -> 2 - 02/03/2020 18:00:00<br />
Destino > Origem -> Aguardando -> id 17 - Datas: 0 - 03/03/2020 06:00:00 <br />
</p>
<br />
<h2>Documentação da API</h2>
<p>
Acesse a documentação básica da API pelo menu Documentation clicando aqui 
<a target="_blank" href="http://backtruckpad.ddns.net/apigility/ui#/">aqui</a>
</p>
<p>Outros serviços solicitados no desafio terão seus endpoints incluídos abaixo</p>
<h2>Desafio Front End</h2>
<p>
Tela de Motorista<br />
Ao acessar o sistema, o módulo responsável por cadastro de mostorista se encontra 
logo na tela inicial acessando "Módulo de Motoristas"
</p>
<h2>Desafio Back End</h2>
<p>
    Tipos de Caminhões<br />
    Logado no sistema acesse 
    <a target="_blank" href="http://truckpad.ddns.net/admin/transporte/categoria">Aqui</a>
    ou pela api <a target="_blank" href="http://truckpad.ddns.net/api/categoria">
     http://truckpad.ddns.net/api/categoria
    </a>
</p>
<p>
    Motoristas<br />
    Logado no sistema acesse 
    <a target="_blank" href="http://truckpad.ddns.net/admin/cadastro/motorista">Aqui</a>
    ou pela api <a target="_blank" href="http://truckpad.ddns.net/api/motorista">
        http://truckpad.ddns.net/api/motorista
    </a>
</p>
<p>
    Localização de cada Motorista<br />
    Acesse a api<br/>
    <a target="_blank" href="http://backtruckpad.ddns.net/api/viagem">
        http://backtruckpad.ddns.net/api/viagem
    </a>
</p>
<p>
    Motorista que não tem carga para voltar ao destino de origem<br />
    Acesse a api<br />
    <a target="_blank" href="http://backtruckpad.ddns.net/services/sem-carga">
        http://backtruckpad.ddns.net/services/sem-carga[/:motorista][/page/:page][/order_by/:order_by][/:order]
    </a><br />
    Observações: Você pode filtrar a consulta substituindo os parâmetros:<br />
    Ex: http://backtruckpad.ddns.net/services/sem-carga/1/page/1/order_by/asc<br />
    Busca todos os motoristas que tem viagem com status 0 (Aguardando), 
    Caminhão não carregado(tab. motorista_veiculo campo carregado = 0) e
    Origem da viagem igual ao endereço que seja terminal (terminal = 1).
</p>
<p>
    Caminhões carregados pelo terminal por período<br />
    Acesse a api<br />
    <a target="_blank" href="http://truckpad.dev.br/services/viagem/carregado/inicio/2020-02-26/final/2020-03-03">
        http://truckpad.dev.br/services/viagem/carregado[/inicio/:inicial][/final/:final][/page/:page][/order_by/:order_by][/:order]
    </a><br />
    Observações:<br />
    Busca todas as viagens que possua histórico de status e que um desses status seja status 2 (Finalizado),
    que tenha como destino um terminal e que seja operação 0 (A carregar).
</p>
<p>
    Motorista com veículo próprio<br />
    Acesse a api<br />
    <a target="_blank" href="http://truckpad.dev.br/services/motorista/veiculo-proprio">
        http://truckpad.dev.br/services/motorista/veiculo-proprio[/:motorista]][/page/:page]
    </a><br />
    Observações:<br />
    Buscar todas as relações entre motorista e veiculo, com a chave dessa relação próprio com valor 1
</p>
<p>
    Lista de origem e destino agrupado por cada um dos tipos<br />
    Acesse a api<br />
    <a target="_blank" href="http://truckpad.dev.br/services/viagem/viagem-categoria/inicio/2020-02-26/final/2020-03-03">
        http://truckpad.dev.br/services/viagem/viagem-categoria[/inicio/:inicial][/final/:final][/page/:page][/order_by/:order_by][/:order]
    </a>
</p>
