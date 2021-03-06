Template.home.rendered = function() {
  $('#request-button').click(function() {
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
					MaleBrands.insert(item);
				}
		});
		Meteor.call("checkFemaleBrands", function(error, results) {
				var parsedData = JSON.parse(results.content);
				var items = parsedData.items;
				for (i = 0; i < items.length; i++) {
					var item = items[i];
					FemaleBrands.insert(item);
				}
		});
	}
};

Template.home.helpers({
	profiles: function() {
	    var objects = Meteor.users.find({'profile.isWantAdvice': true}).fetch();
	    return objects;
	}
});
