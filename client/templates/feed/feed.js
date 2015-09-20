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
      $('#products-feed').append('<div><img src="'+product.media.images[0].smallHdUrl+'"/><p class="product-name truncate">'+product.name+'</p></div>');
    }
  }
};