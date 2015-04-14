Meteor.subscribe('channels');

Template.channels.helpers({

  channels: function () {
    return Channels.find();
  }

});

Template.channels.events({

  'submit form': function (event) {
    var name = event.target.name.value;
    Meteor.call('Channels.insert', name);
    event.target.name.value = '';
    return false;
  }

});