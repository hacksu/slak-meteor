Meteor.subscribe('messages');

Template.messages.helpers({

  messages: function () {
    return Messages.find({channel: this.channelId});
  },

  channel: function () {
    return Channels.findOne(this.channelId);
  }

});

Template.messages.events({

  'submit form': function (event) {
    var text = event.target.text.value;
    Meteor.call('Messages.insert', text, this.channelId);
    event.target.text.value = '';
    return false;
  }

});