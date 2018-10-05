import Route from '@ember/routing/route';

export default Route.extend({
	model(){
		return Ember.$.ajax({
			url: 'http://localhost/CarromTournamentServer/getBid',
			method: "GET",
			dataType: 'json',
		}).then(player => {
			return player;
		}, (err) => {
			console.log(err);
		});
	}
});
