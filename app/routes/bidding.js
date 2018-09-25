import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return Ember.$.ajax({
			url: 'http://localhost/CarromTournamentServer/users.json',
			method: "GET",
			dataType: 'json',
		}).then(players => {
			return players;
		}, (err) => {
			console.log(err);
		});
	}
});
