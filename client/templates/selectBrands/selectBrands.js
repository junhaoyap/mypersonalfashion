Template.selectBrands.rendered = function() {
	$('.brand-control').on('click', '.button-like', function() {
		$('.next-step-button').css('display', 'block');
		$(this).hide();
		$(this).next().show();
		// insert liked brands
		// 		Brands.insert({
		// 		  id: el.brand.id,
		// 		  name: el.brand.name,
		// 		  imageUrl: el.brand.umage_url
		// 		});
	});

	$('.brand-control').on('click', '.button-unlike', function() {
		$(this).hide();
		$(this).prev().show();
		// remove liked brands
		// 		Brands.remove({
		// 		  id: el.brand.id,
		// 		  name: el.brand.name,
		// 		  imageUrl: el.brand.umage_url
		// 		});
	});

	$('.button-dislike').click(function() {
		$(this).parent().parent().parent().fadeOut();
	});
};

Template.selectBrands.helpers({
	brandsToShow: function() {
		var gender = Meteor.user().services.facebook.gender;
		if (gender === "female") {
			return FemaleBrands.find().fetch();
		} else {
			return MaleBrands.find().fetch();
		}
	}
});
