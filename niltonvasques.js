if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    skills1 : [
      { image_url: "images/android.png", name: "Android", level: "90%",
        description: "Possuo conhecimentos avançados no desenvolvimento de aplicativos para a plataforma android, com mais de 4 anos de experiência. Com mais de 1 milhão de downloads obtidos com os aplicativos próprios publicados no Google Play.", image: true},
      { image_url: "images/git.png", name: "GIT", level: "75%",
        description: "Fico me perguntando como devia ser caótico o desenvolvimento colaborativo, sem o GIT. Integrar alterações em diversas partes do código, realizadas por vários desenvolvedores nunca foi tão simples e eficaz. Possuo amplos conhecimentos no uso do GIT, através da linha de comando.", image: true},
      { image_url: "images/linux.png", name: "Linux", level: "80%",
        description: "Avançados conhecimentos da plataforma Linux, com bons conhecimentos nas ferramentas do bash, na linguagem shell script, assim com também conhecimentos básicos na configuração de servidores.", image: true},
    ],
    skills2 : [
      { image_url: "images/rails.png", name: "Ruby on Rails", level: "50%",
        description: "Esse framework mudou completamente minha forma de pensar o desenvolvimento web. O que antes eu considerava um tarefa entendiante, hoje considero prazerosa. E isso se deve a robustez de um framework, escrito sobre os ombros da poderosa e inteligível linguagem ruby.", image: true},
      { image_url: "images/vim.png", name: "Vim", level: "80%",
        description: "O vim atualmente é mais do que um editor de textos para mim. Ele substituiu quase que por completo a maioria das IDEs que utilizava, e em troca eu ganhei um boost de produtividade sem precedentes.", image: true},
      { image_url: "images/nodejs.png", name: "NodeJS", level: "10%",
        description: "Atualmente estou estudando a tecnologia, pois assim como todo desenvolvedor, procuro estar em constante aprendizado. Iniciei o aprendizado, após me fascinar com a robustez de uma biblioteca tão pequena e tão poderosa.", image: true},
    ],
    skills3 : [
      { image_url: "images/meteor.png", name: "Meteor", level: "10%",
        description: "Estou estudando o Meteor como uma possível alternativa para desenvolvimento web de sistemas de tempo real, usando códigos reativos.", image: true},
      { image_url: "images/docker.jpg", name: "Docker", level: "20%",
        description: "Após conhecer o docker, toda a dor de cabeça nas fases de configuração de ambientes de desenvolvimento e de deploy se foram.", image: true}
    ],
    projects : [
      { name: "Pega Ladrão", image: "images/pega-ladrao.jpg", link_text: "Google Play",
        rating: "4.4", fa: "android",fa_color: "lime-text text-accent-4",
        link : "https://play.google.com/store/apps/details?id=com.mobiloucos2.pegaladrao",
        description: "Você teme que seu telefone seja levado enquanto você estiver distraído? Ou que alguém olhe suas informações pessoais? Pega Ladrão é o aplicativo certo para você, caso alguma pessoa pegue o seu telefone enquanto o Pega Ladrão estiver ativo, ele vai soar um alarme alto, disparar um sirene da polícia, começar a vibrar e a piscar efeitos na tela, fazendo assim que a pessoa desista de levar seu telefone, ou melhor que você perceba que alguém está com ele." },
      { name: "Marcador de Livros Android", image: "images/bookmark.jpg", fa: "android",
        link_text: "Google Play", rating: "4.5", fa_color: "lime-text text-accent-4",
        link : "https://play.google.com/store/apps/details?id=com.mobiloucos2.marcadordelivros",
        description: "Marque onde parou as leituras de seus livros com o Marcador de Livros.          Faça no celular, as marcações dos livros que você lê! Economize espaço, papel, e nunca perca as marcações das leituras de seus livros favoritos! Acompanhe o andamento das leituras de todos seus livros com o Marcador de Livros, além de guardar na lista os livros que você já leu ou vai ler, como uma estante virtual móvel!." },
      { name: "Atlântico Português", image: "images/atlantico.jpg", fa: "desktop",
        link_text: "Atlântico Portal",fa_color: "black-text",
        link : "https://www.atlanticoportugues.ufba.br",
        description: "O portal Atlântico Português foi desenvolvido em Ruby on Rails, e tem como objetivo hospedar documentos históricos. Facilitando assim o acesso dos documentos aos pesquisadores envolvidos no projeto. Para a realização das buscas, utilizou-se o robusto framework de indexação reversa Solr, acelerando assim a velocidade do resultado das buscas." },
      { name: "Project Management System", image: "images/pms.jpg", fa: "desktop",
        link_text: "PMS",fa_color: "black-text",
        link : "https://pms.wolkenbox.com",
        description: "O sistema de gerenciamento de projetos industriais (PMS) foi desenvolvido com o objetivo de otimizar os processos internos de requisição, estimativa, planejamento, execução e medição de serviços industriais. Desenvolvido em Ruby on Rails utilizando containers Docker." }
    ]
  });

  Template.project.helpers({
  });

  Template.hello.helpers({
    counter: function () {
      return Session.get('counter');
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set('counter', Session.get('counter') + 1);
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
