define(function(){
	var vm = {
		activate: function(parentVm){
			parentVm.shout('Alert from Two');
		}
	};
	return vm;
});