Template.home.rendered = function() {
	console.log(Meteor.user());
  $('#requestButton').click(function() {
    if (Meteor.user()) {
			Meteor.users.update({ _id: Meteor.userId() }, { $set: { 'profile.isWantAdvice': true }});
		}
  });
	var maleBrandsArray = MaleBrands.find();
	var femaleBrandsArray = FemaleBrands.find();
	if (maleBrandsArray.count() === 0 && femaleBrandsArray.count() === 0) {
		Meteor.call("checkMaleBrands", function(error, results) {
				var parsedData = JSON.parse(results.content);
				var items = parsedData.items;
				for (i = 0; i < items.length; i++) {
					var item = items[i];
					console.log(item);
					MaleBrands.insert(item);
				}
		});
		Meteor.call("checkFemaleBrands", function(error, results) {
				var parsedData = JSON.parse(results.content);
				var items = parsedData.items;
				for (i = 0; i < items.length; i++) {
					var item = items[i];
					console.log(item);
					FemaleBrands.insert(item);
				}
		});
	}
};
