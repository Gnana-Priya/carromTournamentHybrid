import Route from '@ember/routing/route';

export default Route.extend({
	model() {
		return Ember.$.ajax({
			url: 'http://localhost/CarromTournamentServer/users',
			method: "GET",
			dataType: 'json',
		}).then(players => {
			return players;
		}, (err) => {
			console.log(err);
		});
	},
	actions:{
		sendSelectedPlayer(user_id){
			let data = {
				"user_id": user_id
			};
			this.get('ajax').request('http://localhost/CarromTournamentServer/users/user_id'),{
				method : 'POST',
				data : data
				// data : user_id,
			}
		}
	}

});
