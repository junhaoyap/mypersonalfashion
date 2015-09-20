Template.suggestedItems.rendered = function() {

}

Template.suggestedItems.helpers({
  itemsToShow: function() {
    // don't care about category, just pull men / female for now so we can complete on time, fake
    // the user's experience
    var gender = Meteor.user().services.facebook.gender;
		if (gender === "female") {
      // fetch female items, limit to 200?
		} else {
      // fetch male items, limit to 200?
		}
  }
});
