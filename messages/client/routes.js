Router.route('/:id', function () {
  this.render('Chat', {
    data: {
      channelId: this.params.id
    }
  });
});

Router.route('/', function () {
  this.render('channels');
});