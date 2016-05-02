var root = 'http://jsonplaceholder.typicode.com';

$.ajax({
	url: root + '/posts/1',
	method: 'GET',
	contentType: 'application/json'
}).then(function(data) {
	console.log(data);
});