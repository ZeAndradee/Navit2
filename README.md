<h1 align="center"> Plataforma Web - Tennis.ly </h1>

![Group 1655](https://github.com/ZeAndradee/TennisLy/assets/59659214/d37985e7-8c76-419f-8e74-a4c220ea3762)

# Descição do Projeto

Tennis.ly é uma rede social dedicada a tenistas de todos os níveis. Nosso objetivo é conectar jogadores de tênis, permitindo que compartilhem suas experiências, resultados e estatísticas de partidas e torneios. Com o Tennis.ly, você pode:

- **Registrar suas partidas**: Mantenha um histórico detalhado de todas as suas partidas de tênis, incluindo datas, adversários e resultados.
- **Adicionar amigos**: Conecte-se com outros tenistas, acompanhe suas atividades e compare seu desempenho.
- **Verificar estatísticas**: Analise suas estatísticas de jogo para acompanhar seu progresso e identificar áreas de melhoria.
- **Postar resultados**: Compartilhe os resultados das suas partidas e torneios com a comunidade, celebrando suas vitórias e aprendendo com suas derrotas.
- **Acompanhar amigos**: Fique por dentro dos resultados das partidas e torneios dos seus amigos, torcendo por eles e oferecendo suporte.

Tennis.ly é mais do que uma rede social; é uma plataforma para crescimento e interação entre tenistas apaixonados pelo esporte.


# Badges
![Badge Concluído](http://img.shields.io/static/v1?label=STATUS&message=CONCLUÍDO&color=GREEN&style=for-the-badge)
# Índice
* [Badges](#badges)
* [Índice](#índice)
* [Descrição do Projeto](#descrição-do-projeto)
* [Tecnologias utilizadas](#tecnologias-utilizadas)
* [Funcionalidades e Demonstração da Aplicação](#funcionalidades-e-demonstração-da-aplicação)
* [Pessoas Desenvolvedoras do Projeto](#pessoas-desenvolvedoras)

# :white_check_mark: Tecnologias Utilizadas
<ul>
  <li>Trello</li>
  <li>Figma</li>
  <li>Git e Github</li>
  <li>VS Code</li>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>React JS</li>
  <li>Node JS</li>
  <li>MySQL</li>
  <li>Render</li>
  <li>Vercel</li>
  <li>Railway</li>
</ul>

# ⚙ Como Executar a Aplicação:

* Git clone 
* Acessar o diretorio clonado, utilize o git bash
* npm i
* npm run dev

# :hammer: Funcionalidades e Demonstração da Aplicação
`Tela de Login`: <p>Tela de login incial</p> 

![loginScreen](https://github.com/ZeAndradee/TennisLy/assets/59659214/f411aac8-d2a0-40e0-8e73-f8d807f2df61)

<br/>
<br/>

`Tela Principal`: <p>Tela inicial após o terapeuta executar seu login, contem vários dados e tabelas, além de acesso rápido a detalhes de pacientes.</p>

![image](https://github.com/ZeAndradee/Navit/assets/83325914/71cad8a6-e55a-4c48-a9e1-bca98f8ca56f)

A tela de login é composta por 6 arquivos .svelte: Header, SideBarMenu, EstatisticasDiarias, GraficoCliques, ListaPacientes e GraficoComportamento.

<h3>📰​ O Header</h3> 
<ul><li>Por sua vez, contém mais 2 arquivos em sua construção, o SearchCase (responsável pela barra de pesquisa) e o PFP (responsável pela foto de perfil do usuário), ele então estiliza e posiciona as funções de acordo.
</li></ul>
<h3>🗺️​ SideBarMenu </h3>
<ul><li>funciona como a principal navegação do site, possibilitando acessar outras telas, logo ele apenas importa a função { goto } que faz parte do Svelte ($app/navigation).</li></ul>

<h3>📊​ EstatisticasDiarias </h3>
<ul><li>Permite a visuialização de dados gerais ao terapeuta, como tempo total de sessão, progresso de pacientes e status.</li></ul>

<h3>📊​ GraficoCliques</h3>
  <ul><li>Proporciona o acompanhamento dos dados do paciente conforme o aplicativo, assim proporcionando uma visualização mais simples acerca do uso dos pacientes do aplicativo.</li></ul>

<h3>📃​ ListaPacientes</h3>
<ul><li>Disponibiliza fácil acesso a detalhes sobre os pacientes do terapeuta.</li></ul>

<h3>📊​ GraficoComportamento</h3>
<ul><li>Permite que o terapeuta consiga visualizar a média comportamental dos pacientes em 6 tópicos diferentes, Feliz, Atento, Confuso, Agitado, Calmo e Triste.</li></ul>
<br>

<p>Utilizamos principalmente a biblioteca chart.js para construção dos gráficos.</p>

<br/>
<br/>

`Tela de Dúvidas`: <p>Tela de suporte aos usuários para resolver problemas e dúvidas. </p>

![image](https://github.com/ZeAndradee/Navit/assets/83325914/cf252079-d61d-4c3d-b9d5-43324e480e45)


A tela de dúvidas é constituidas por 2 elementos que já apareceram e 1 específico para página: SideBarMenu, Header e Duvidas.

<h3>📰​ O Header</h3> 
<ul><li>Por sua vez, contém mais 2 arquivos em sua construção, o SearchCase (responsável pela barra de pesquisa) e o PFP (responsável pela foto de perfil do usuário), ele então estiliza e posiciona as funções de acordo.
</li></ul>

<h3>🗺️​ SideBarMenu </h3>
<ul><li>funciona como a principal navegação do site, possibilitando acessar outras telas, logo ele apenas importa a função { goto } que faz parte do Svelte ($app/navigation).</li></ul>

<h3>🤔​ Duvidas </h3>
<ul><li>Responsável pela função principal da página, não só cria a barra para descrição do problema como também cria os cards com dúvidas já existentes para facilitar a busca.Além disso, também comtém a estilização.</li></ul>
<br/>
<br/>

`Tela de Prontuários`: <p>Esta tela permite ao terapeuta o acesso aos prontuários, disponibilizando informações mais detalhadas sobre cada paciente</p>

![image](https://github.com/ZeAndradee/Navit/assets/83325914/8d62005d-491f-4615-b40f-258984df03fa)



<p>Para a construção da tela foi utilizado 4 arquivos svelte além dos arquivos Header e SideBarMenu:</p>

⭐ PacienteProntuarioInfo foi onde trabalhamos a apresentação visual dos elementos.

<h3>📰​ HeaderTerapeuta</h3> 
<ul><li>Contém informações gerais sobre o andamento do tratamento dos pacientes
</li></ul>

<h3>🪪​ PacienteProntuarioInfo</h3>
<ul><li> Contém dados sobre os pacientes como: As avaliações da sessão, o ID do paciente, seu gênero, o número de sessões e a data de nascimento do paciente.</li></ul>

<h3>🔍​ SearchBar </h3>
<ul><li> Uma barra de pesquisa para facilitar a busca por pacientes específicos.</li></ul>

<h3>📊​​ PacientesInfo </h3>
<ul><li> Dados de como está o andamento dos tratamentos.</li></ul>

<h3>🪪​ TableProntuarios (CardProntuarios) </h3>
<ul><li> Utiliza dois arquivos para uma função, primeiro ele utiliza os dados do TableProntuarios (nome do paciente, andamento do tratamento, data de nascimento, número de sessões e ultima atualização de paciente) e distribui ele a partir do CardProntuarios.</li></ul>
<br/>
<h3> Além disso, temos uma tela expandida com a informação dos pacientes</h3>

![Paciente - YouMe](https://github.com/ZeAndradee/Navit/assets/59659214/6d711a42-19ed-414e-bcfe-aba1e5da2ad9)

<br/>
<p> Além das informações supracitadas, o terpeuta teria como acompanhar as sessões anteriores dos pacientes através do paciente. Arquivos adicionais foram adicionados para isto, são eles: </p>
<h3>🪪​ InfoPaciente </h3>
<ul><li> Possui informações sobre o paciente.</li></ul>

<h3>📃​​ ListaSessoes </h3>
<ul><li> Disponibiliza uma lista com as sessões anteriores do paciente.</li></ul>

<h3>🪪​ HeaderPaciente</h3>
<ul><li> Cria o estilo para o cabeçalho do paciente.</li></ul>
<br/>
<br/>

`Tela de Configurações`: <p>Tela utilizada para alterar dados do perfil e notificações, também podemos acessar a aba de dúvidas a partir dela</p>

![image](https://github.com/ZeAndradee/Navit/assets/83325914/d84b3de0-e8c8-48b1-b551-5731f4edf4eb)
![image](https://github.com/ZeAndradee/Navit/assets/83325914/15c9b456-c31c-4a49-93cc-1f0a488eebaf)
![image](https://github.com/ZeAndradee/Navit/assets/83325914/d56babc0-e103-4115-be7c-254ac1c7d20f)

<p>Os componentes utilizados para construção desta tela foram:</p>

<h3>🪪​​ ConfiguracoesConta</h3> 
<ul><li>Contém a personalização da conta do terapeuta
</li></ul>

<h3>🔔​ Notificacoes</h3>
<ul><li> Possibilita a personalização das notificações do site</li></ul>

<h3>🤔​ Duvidas </h3>
<ul><li> Facilita o acesso a retirar dúvidas.</li></ul>

<h3>⚙️ Configurações </h3>
<ul><li> Une todos os arquivos acima e os estiliza para a página.</li></ul>

<br/>
<br/>

# Pessoas Por Trás do YouMe
| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/59659214?v=4" width=115><br><sub>José Vinícius</sub>](https://github.com/ZeAndradee) | [<img loading="lazy" src="https://avatars.githubusercontent.com/u/116170926?v=4" width=115><br><sub>Maria Fernanda</sub>](https://github.com/mfhhia) |
| --- | --- |


