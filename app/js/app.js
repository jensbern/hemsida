
var dinnerPlannerApp = angular.module('dinnerPlanner', ['ngRoute','ngResource']);


dinnerPlannerApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: 'partials/home.html'
      }).
      when('/search', {
        templateUrl: 'partials/search.html',
        controller: 'SearchCtrl'
      }).
      when('/dish/:dishId', {
        templateUrl: 'partials/dish.html',
        controller: 'DishCtrl'
      }).
      // TODO in Lab 5: add more conditions for the last two screens (overview and preparation)
      otherwise({
        redirectTo: '/home'
      });
  }]);