Router.route('/:id', function () {

  this.render('messages', {
    data: function () {
      return {channelId: this.params.id};
    }
  });

});