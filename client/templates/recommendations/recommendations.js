Template.recommendations.rendered = function() {
  $.post('', {

  }, function(result) {
    updateProducts(data);
  });

  function updateProducts(products) {
    $('#products-feed').html('');
    for (var i = 0; i < products.length; i ++) {
      var product = products[i];
      console.log(product);
      $('#products-recommendations').append('<a href=' + product.url + '>' +
                                              '<div class="col-xs-12 col-sm-6 col-md-3">' +
                                                '<div class="card-wrapper">' +
                                                  '<div class="brand-img" style="background-image: url(' + product.media.images[0].smallHdUrl + ');"></div>' +
                                                    '<p class="text-center brand-name truncate">' + product.name + '</p>' +
                                                    '<p class="text-center">' + product.price + '</p>' +
                                                  '</div>' +
                                                '</div>' +
                                              '</div>' +
                                            '</a>'
    }
  }
}
