Meteor.methods({

  'Messages.insert': function (text, channelId) {
    Messages.insert({
      text: text,
      channel: channelId,
      created: new Date()
    });
  },

  'Messages.delete': function (id) {
    Messages.remove(id);
    var message = Messages.find({text: 'hi'});
    Messages.update({text: 'hi'}, { $set: {text: 'hello'} });
  }

});