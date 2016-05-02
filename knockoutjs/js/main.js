define(function(){
	$(document).ready(function(){
		var vm = {
				shout: ko.observable()
			},
			app = Sammy('#main', function(){
			this.get('#/alertOne', function(){
				vm.shout('Alert from One');
			});
			this.get('#/alertTwo', function(){
				vm.shout('Alert from Two');
			});

		});
		app.run();
		ko.applyBindings(vm);
	});
});