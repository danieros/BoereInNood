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

         // route for the boodskappe argief
        .when('/MessageArchive', {
            templateUrl: 'MessagesArgief.html',
            controller: 'messagesArgiefController'
        })

         // route for the VoerAfgelewer
        .when('/afegelewer', {
            templateUrl: 'GebiedeOndersteun.html',
            controller: 'gebiedeOndersteunController'
        })

        // route for the doen Aansoek
        .when('/DoenAansoek', {
            templateUrl: 'DoenAansoek.html',
            controller: 'doenaansoekController'
        })

          // route for the engele
        .when('/Angels', {
            templateUrl: 'MuurVanEngele.html',
            controller: 'muurvanenengeleController'
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

app.directive('bootstrapSwitch', [
    function() {
        return {
            restrict: 'A',
            require: '?ngModel',
            link: function(scope, element, attrs, ngModel) {
                element.bootstrapSwitch();

                element.on('switchChange.bootstrapSwitch', function(event, state) {
                    if (ngModel) {
                        scope.$apply(function() {
                            ngModel.$setViewValue(state);
                        });
                    }
                });

                scope.$watch(attrs.ngModel, function(newValue, oldValue) {
                    if (newValue) {
                        element.bootstrapSwitch('state', true, true);
                    } else {
                        element.bootstrapSwitch('state', false, true);
                    }
                });
            }
        };
    }
]);