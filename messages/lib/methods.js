Meteor.methods({

  'Messages.insert': function (text, channelId) {
    Messages.insert({
      text: text,
      channel: channelId,
      created: new Date()
    });
  }

});