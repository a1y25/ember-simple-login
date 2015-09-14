import Ember from 'ember';

export default Ember.Route.extend({
	actions:{
		login:function(){
			console.log(this.controller.get('user'));
			// console.log(this.controller.get('user.password'));
		}
	}
});
