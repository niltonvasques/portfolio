if (Meteor.isClient) {
  // counter starts at 0
  Session.setDefault('counter', 0);

  Template.body.helpers({
    skills : [
      { image_url: "images/android.png", name: "Android", 
        description: "Possuo conhecimentos avançados no desenvolvimento de aplicativos para a plataforma android, com mais de 4 anos de experiência. Com mais de 1 milhão de downloads obtidos com os aplicativos próprios publicados no Google Play.", image: true},
      { image_url: "images/rails.png", name: "Ruby on Rails", 
        description: "Conhecimentos básicos no framework Ruby on Rails, no qual continuo em constante processo de aprimoramento.", image: true},
      { image_url: "images/nodejs.png", name: "NodeJS", 
        description: "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.", image: true},
      { image_url: "images/meteor.png", name: "Meteor", 
        description: "We did most of the heavy lifting for you to provide a default stylings that incorporate our custom components. Additionally, we refined animations and transitions to provide a smoother experience for developers.", image: true}
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
