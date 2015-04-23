Meteor.subscribe('messages');

Template.Chat.helpers({

  messages: function () {
    return Messages.find({channel: this.channelId});
  }

});

Template.Chat.events({

  'submit form': function (event) {
    var text = event.target.message.value;
    Meteor.call('Messages.insert', text, this.channelId);
    event.target.message.value = '';
    return false;
  },

  'click button': function (event) {
    Meteor.call('Messages.delete', this._id);
  }

});