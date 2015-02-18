var app = angular.module('app', ['ui.router', 'ngRoute', 'ngResource']);

app.config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        .state('login', {
            url: "/login",
            templateUrl: "app/account/login.html"
        });
})

