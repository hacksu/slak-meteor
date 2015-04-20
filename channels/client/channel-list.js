Meteor.subscribe('channels');

Template.channels.helpers({

  channels: function () {
    return Channels.find();
  }

});

Template.channels.events({

  'submit form': function (event) {
    var text = event.target.channel.value;
    Meteor.call('Channels.insert', text);
    event.target.channel.value = '';
    return false;
  }

});