Meteor.methods({

  'Channels.insert': function (name) {
    Channels.insert({
      name: name,
      created: new Date()
    });
  }

});