if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    skills1 : [
      { image_url: "images/android.png", name: "Android", level: "90%",
        description: "Possuo conhecimentos avançados no desenvolvimento de aplicativos para a plataforma android, com mais de 4 anos de experiência. Com mais de 1 milhão de downloads obtidos com os aplicativos próprios publicados no Google Play.", image: true},
      { image_url: "images/git.png", name: "GIT", level: "80%",
        description: "Domínio da ferramenta de controle de versão GIT, através da linha de comando.", image: true},
      { image_url: "images/linux.png", name: "Linux", level: "70%",
        description: "Avançados conhecimentos da plataforma Linux, com bons conhecimentos nas ferramentas do bash, na linguagem shell script, assim com também conhecimentos básicos na configuração de servidores.", image: true},
    ],
    skills2 : [
      { image_url: "images/rails.png", name: "Ruby on Rails", level: "50%",
        description: "Conhecimentos básicos no framework Ruby on Rails, no qual continuo em constante processo de aprimoramento.", image: true},
      { image_url: "images/vim.png", name: "Vim", level: "80%",
        description: "O vim atualmente é mais do que um editor de textos para mim. Ele substituiu quase que por completo a maioria das IDEs que utilizava, e em troca eu ganhei um boost de produtividade sem precedentes.", image: true},
      { image_url: "images/nodejs.png", name: "NodeJS", level: "10%",
        description: "Atualmente estou estudando a tecnologia, pois assim como todo desenvolvedor, procuro estar em constante aprendizado. Iniciei o aprendizado, após me fascinar com a robustez de uma biblioteca tão pequena e tão poderosa.", image: true},
    ],
    skills3 : [
      { image_url: "images/meteor.png", name: "Meteor", level: "10%",
        description: "Estou estudando o Meteor como uma possível alternativa para desenvolvimento web de sistemas de tempo real, usando códigos reativos.", image: true}
    ]
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
