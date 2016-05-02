define(['alertOne', 'alertTwo'], function(alertOne, alertTwo){
	$(document).ready(function(){
		var vm = {
				shout: ko.observable()
			},
			app = Sammy('#main', function(){
			this.get('#/alertOne', function(){
				alertOne.activate(vm);
			});
			this.get('#/alertTwo', function(){
				alertTwo.activate(vm);
			});

		});
		app.run();
		ko.applyBindings(vm);
	});
});