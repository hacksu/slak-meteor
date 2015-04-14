Meteor.methods({

  'Channels.insert': function (name) {
    var channel = Channels.findOne({name: name});
    if (channel) return;

    Channels.insert({
      name: name,
      created: new Date()
    });
  }

});