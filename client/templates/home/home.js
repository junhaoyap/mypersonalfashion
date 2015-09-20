Template.home.rendered = function() {
	console.log(Meteor.user());
  $('#requestButton').click(function() {
    if (Meteor.user()) {
			Meteor.users.update({ _id: Meteor.userId() }, { $set: { 'profile.isWantAdvice': true }});
		}
  });
};
