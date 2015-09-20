Template.recommendations.rendered = function() {
  $.get('http://37cee33b.ngrok.com/brands/review?user_id=' + Meteor.userId(), function(result) {
    updateProducts(result);
    console.log(result);
  });

  function updateProducts(products) {
    $('#products-recommendations').html('');
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      console.log(product);
      var reviewer = Meteor.users.findOne({_id: product.reviewer_id});
      console.log(reviewer);
      $('#products-recommendations').append('<div class="col-xs-12 col-sm-6 col-md-3">' +
                                              '<a href="' + product.storeUrl + '"" target="_blank">' +
                                                '<img class="image-center thumbnail" src="' + product.imageUrl + '">' +
                                                '<p class="text-center brand-name truncate">' + product.name + '</p>' +
                                                '<p class="text-center">$' + product.price + '</p>' +
                                              '</a>' +
                                              '<p class="text-center">' + reviewer.profile.name + ': <i>' + product.comment + '</i></p>' +
                                            '</div>');
    }
  }
}
