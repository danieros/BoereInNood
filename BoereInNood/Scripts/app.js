//var app = angular.module('myApp', ['ngRoute', 'ngCookies', 'angularModalService', 'ngNotificationsBar', 'ngMessages']);
var app = angular.module('myApp', ['ngRoute', 'ngNotificationsBar', 'ui.bootstrap']);

// configure our routes
app.config(function ($routeProvider) {
    $routeProvider

        // route for the home page
        .when('/', {
            templateUrl: 'Default.html',
            controller: 'mainController'
        })

        // route for the home page
        .when('/MyContacts', {
            templateUrl: 'MyContacts.html',
            controller: 'myContactsController'
        })

         .when('/About', {
             templateUrl: 'About.html',
             controller: 'aboutController'
         })

          .when('/FAQ', {
             templateUrl: 'FAQ.html',
             controller: 'faqController'
         })

                  .when('/ContactUs', {
             templateUrl: 'ContactUs.html',
             controller: 'contactusController'
         })

        // route for the contact page
        .when('/dogbreedselect', {
            templateUrl: 'DogBreedSelect.html',
            controller: 'InstantSearchController'
        });


});