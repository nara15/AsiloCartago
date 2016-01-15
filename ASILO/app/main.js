var app = angular.module('asiloWebApp', [
  'ngRoute'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {
        templateUrl: "partials/home.html"
    })
    .when("/misionvision", {
        templateUrl: "partials/misionvision.html"
    })
    .otherwise("/404", {
        templateUrl: "partials/404.html"
    });
}]);