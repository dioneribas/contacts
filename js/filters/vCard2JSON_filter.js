app.filter('vCard2JSON', function() {
	return function(input) {
		return vCard.parse(input);
	};
});