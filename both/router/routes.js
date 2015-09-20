Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/items/new', {
  name: 'items.new'
});

Router.route('/selectbrands', {
  name: 'selectBrands'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
