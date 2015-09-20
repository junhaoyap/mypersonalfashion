Template.recommendations.rendered = function() {
  $.post('', {

  }, function(result) {
    updateProducts(data);
  });

  function updateProducts(products) {
    $('#products-recommendations').html('');
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
      console.log(product);
      $('#products-recommendations').append('<div class="col-xs-12 col-sm-6 col-md-3">' +
                                              '<a href="' + product.url + '"" target="_blank">' +
                                                '<img class="image-center thumbnail" src="' + product.media.images[0].smallHdUrl  + '">' +
                                                '<p class="text-center brand-name truncate">' + product.name + '</p>' +
                                                '<p class="text-center">$' + product.price + '</p>' +
                                              '</a>' +
                                              '<p class="text-center">' + Us + ': <i>' + 'This sunglasses will definitely look good on you' + '!</i></p>' +
                                            '</div>');
    }
  }
}
