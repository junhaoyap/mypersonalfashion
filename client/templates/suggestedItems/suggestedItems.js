Template.suggestedItems.rendered = function() {
  $('#magic-facebook-button').click(function() {
    // Insert liked items into database linked to current user's ID
  });
  $('#magic-done-button').click(function() {
    window.location.href = "/recommendations/?_id=" + Meteor.userId();
  });
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
