Template.home.rendered = function() {
	console.log(Meteor.user());
  $('#more').click(function() {
    if (Meteor.user()) {
			Meteor.users.update({ _id: Meteor.userId() }, { $set: { 'profile.isWantAdvice': true }});
		}
  });


};


Template.home.helpers({
	profiles: function() {
	    var objects = Meteor.users.find({'profile.isWantAdvice': true}).fetch();
	    return objects;
	}
});

