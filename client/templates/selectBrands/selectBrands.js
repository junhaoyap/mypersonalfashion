Template.selectBrands.rendered = function() {


	//invoke the server method
	if (Meteor.isClient) {
	    Meteor.call("checkMailBrands", function(error, results) {
	    	updateBrands(JSON.parse(results.content));
	    });
	    Meteor.call("checkFemailBrands", function(error, results) {
	    	updateBrands(JSON.parse(results.content));
	    });
	}

	window.asdfasdf = Brands.find().fetch();

	function updateBrands(content) {
		var items = content.items;
		$('#brands-collection').html('');
		for (var i = 0; i < items.length; i ++) {
			var brand = new BrandView(items[i].brand);
			$('#brands-collection').append(brand.init());
		}
	}

	function BrandView(brand){
		var el = this;
		this.brand = brand;
		this.view = $('<div>' + 
							'<div class="card-wrapper">' + 
				    			'<div class="brand-img"></div>' +
				    			'<p class="brand-name truncate"></p>' +
				    			'<div class="brand-control">' +
				    			'<span class="button-dislike"><i class="fa fa-times fa-lg"></i></span>' + 
				    			'<span class="button-like"><i class="fa fa-heart fa-lg"></i></span>' +
				    		'</div>' +
				    	'</div>'+ 
				    '</div>');

		this.view.find('.button-like').click(function() {
			var user_id = Meteor.userId();
			Brands.insert({
			  id: el.brand.id,
			  name: el.brand.name,
			  imageUrl: el.brand.umage_url,
			  userId: user_id
			});
			el.view.fadeOut();
		});

		this.view.find('.button-dislike').click(function() {
			el.view.fadeOut();
		});
	}

	BrandView.prototype = {
		init : function () {
			var el = this;
			el.view.find('.brand-name').text(el.brand.name);
			el.view.find('.brand-img').css('background-image', 'url("'+ el.brand.umage_url + '")');
			return el.view
		}
	}
};


