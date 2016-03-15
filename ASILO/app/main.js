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
    .when("/historia", {
        templateUrl: "partials/historia_asilo.html"
    })
    .when("/administracion",{
        templateUrl: "partials/administracion.html"
    })
    .when("/cuido", {
        templateUrl: "partials/cuido.html"
    })
    .when("/hospital", {
        templateUrl: "partials/hospital.html"
    })
    .when("/servicios", {
        templateUrl: "partials/servicios_asilo.html"
    })
    .when("/donaciones" , {
        templateUrl: "partials/donaciones.html"
    })
    .when("/voluntariado", {
        templateUrl: "partials/voluntariado.html"
    })
    .when("/trabajoComunal", {
        templateUrl: "partials/trabajo_comunal.html"
    })
    .when("/reciclaje", {
        templateUrl: "partials/reciclaje.html"
    })
    .when("/contacto", {
        templateUrl: "partials/contacto.html"
    })
    .otherwise("/404", {
        templateUrl: "partials/404.html"
    });
}]);