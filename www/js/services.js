angular.module('starter.services', ['ngResource'])

.factory('Session', function ($resource) {
	return $resource('http://ionic-tutorial.herokuapp.com/sessions/:sessionId');
})