(function () {
    'use strict';

    var mainApp = angular.module('app', ['ui.router', 'ngCookies', 'ngAnimate', 'ngTouch'])
            .config(config)
            .run(run);


    config.$inject = ['$stateProvider', '$urlRouterProvider'];
    function config($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('main', {
                url:'/main',
                views: {
                    '': {
                        templateUrl: 'app/components/main/main.view.html'
                    }
                }
            })

            .state('home', {
                url:'/home',
                views: {
                    '': {
                        templateUrl: 'app/components/home/home.view.html',
                        controller:'HomeController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@home':{
                        templateUrl: 'app/components/menu_top/menu_top.view.html',
                        controller:'TopMenuController', 
                        controllerAs: 'vm'                        
                    }
                }
            })

            .state('login', {
                url: '/login', 
                views: {
                    '': {
                        controller: 'LoginController',
                        templateUrl: 'app/components/login/login.view.html', 
                        controllerAs: 'vm'
                    }
                }
            })

            .state('register', {
                url: '/register', 
                views: {
                    '': {
                        controller: 'RegisterController',
                        templateUrl: 'app/components/register/register.view.html', 
                        controllerAs: 'vm'
                    }
                }
            })

            .state('tutorial', {
                url: '/walkthrough', 
                views: {
                    '': {
                        controller: 'TutorialController',
                        templateUrl: 'app/components/tutorial/tutorial.view.html', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@tutorial':{
                        templateUrl: 'app/components/menu_top/menu_top.view.html',
                        controller:'TopMenuController', 
                        controllerAs: 'vm'                        
                    }

                }

            })
        $urlRouterProvider.otherwise('/main');
    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http', '$state'];
    function run($rootScope, $location, $cookieStore, $http, $state) {
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }

        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray($state.current.name, ['login', 'register', 'main']) === -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                $state.go('login');
            }
        });
    }
})();