Template.feed.rendered = function() {
  //invoke the server method
  if (Meteor.isClient) {
      $.get("https://api.zalando.com/articles?brand=ad1&pageSize=20&sort=popularity", function(data){
        updateProducts(data.content); 
      });
  }

  function updateProducts(products){
    $('#products-feed').html('');
    for (var i = 0; i < products.length; i ++) {
      var product = products[i];
      $('#products-feed').append('<div class="card-wrapper"><img src="'+
                                  product.media.images[0].smallHdUrl+
                                  '"/><p class="product-name truncate">'
                                  +product.name+'</p></div>');
      // '<div class="card-wrapper">' + 
      //             '<div class="brand-img banner-bottom-info"></div>' +
      //             '<div class="banner-bottom-info">' +
      //             '<p class=" brand-name truncate"></p></div>' +
      //             '<div class="brand-control">' +
      //             '<span class="button-dislike"><i class="fa fa-times fa"></i></span>' + 
      //             '<span class="button-like"><i class="fa fa-heart fa"></i></span>' +
      //           '</div>' +

    }
  }
};