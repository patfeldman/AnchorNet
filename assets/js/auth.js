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
            .state('captainChat', {
                url:'/captainChat',
                title: 'Captain Chat', 
                views: {
                    '': {
                        templateUrl: 'app/components/home/home.view.html',
                        controller:'HomeController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@captainChat':{
                        templateUrl: 'app/components/menus/menu_main/menu_main_top.view.html',
                        controller:'MenuMainTopController', 
                        controllerAs: 'vm'                        
                    }
                }
            })
            .state('groupChat', {
                url:'/groupChat',
                title: 'Group Chat', 
                views: {
                    '': {
                        templateUrl: 'app/components/home/home.view.html',
                        controller:'HomeController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@groupChat':{
                        templateUrl: 'app/components/menus/menu_main/menu_main_top.view.html',
                        controller:'MenuMainTopController', 
                        controllerAs: 'vm'                        
                    }
                }
            })

            .state('privateChat', {
                url:'/privateChat',
                title: 'Private Chat', 
                views: {
                    '': {
                        templateUrl: 'app/components/home/home.view.html',
                        controller:'HomeController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@privateChat':{
                        templateUrl: 'app/components/menus/menu_main/menu_main_top.view.html',
                        controller:'MenuMainTopController', 
                        controllerAs: 'vm'                        
                    }
                }
            })

            .state('home', {
                url:'/home',
                title: 'anchor U', 
                views: {
                    '': {
                        templateUrl: 'app/components/home/home.view.html',
                        controller:'HomeController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@home':{
                        templateUrl: 'app/components/menus/menu_main/menu_main_top.view.html',
                        controller:'MenuMainTopController', 
                        controllerAs: 'vm'                        
                    }
                    , 
                    'bottomMenu@home':{
                        templateUrl: 'app/components/menus/menu_main/menu_main_bottom.view.html',
                        controller:'MenuMainBottomController', 
                        controllerAs: 'vm'                        
                    }
                    , 
                    'rightSwipeMenu@home':{
                        templateUrl: 'app/components/menus/menu_right_chat/menu_right_chat.view.html',
                        controller:'MenuRightChatController', 
                        controllerAs: 'vm'                        
                    }
                }
            })

            .state('mood', {
                url:'/mood',
                title: 'Mood', 
                backState:'',
                views: {
                    '': {
                        templateUrl: 'app/components/mood/mood.view.html',
                        controller:'MoodController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@mood':{
                        templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
                        controller:'Menu1Controller', 
                        controllerAs: 'vm'                        
                    }, 
                    'bottomMenu@mood':{
                        templateUrl: 'app/components/menus/menu_main/menu_main_bottom.view.html',
                        controller:'MenuMainBottomController', 
                        controllerAs: 'vm'                        
                    }
                }
            })
            .state('moodGroupSelector', {
                url:'/moodGroup/',
                title: 'Mood', 
                backState:'mood',
                views: {
                    '': {
                        templateUrl: 'app/components/mood/mood_group_selector.view.html',
                        controller:'MoodGroupSelector', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@moodGroupSelector':{
                        templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
                        controller:'Menu1Controller', 
                        controllerAs: 'vm'                        
                    }
                }
            })
            .state('moodSelector', {
                url:'/moodSelector/:moodGroupId',
                title: 'Select Mood', 
                backState:'moodGroupSelector',
                views: {
                    '': {
                        templateUrl: 'app/components/mood/mood_selector.view.html',
                        controller:'MoodSelectorController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@moodSelector':{
                        templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
                        controller:'Menu1Controller', 
                        controllerAs: 'vm'                        
                    }
                }
            })

            .state('moodHistory', {
                url:'/moodHistory',
                title: 'Mood', 
                backState:'mood',
                views: {
                    '': {
                        templateUrl: 'app/components/mood/mood_history.view.html',
                        controller:'MoodHistoryController', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@moodHistory':{
                        templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
                        controller:'Menu1Controller', 
                        controllerAs: 'vm'                        
                    }
                }
            })



            .state('login', {
                url: '/login', 
                title: 'Login', 
                backState:'main',
                views: {
                    '': {
                        controller: 'LoginController',
                        templateUrl: 'app/components/login/login.view.html', 
                        controllerAs: 'vm'
                    },
                    'topMenu@login':{
                        templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
                        controller:'Menu1Controller', 
                        controllerAs: 'vm'                        
                    }

                }
            })

            .state('register', {
                url: '/register', 
                title: 'Create Account', 
                backState:'main',
                views: {
                    '': {
                        controller: 'RegisterController',
                        templateUrl: 'app/components/register/register.view.html', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@register':{
                        templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
                        controller:'Menu1Controller', 
                        controllerAs: 'vm'                        
                    }

                }
            })

            .state('selectphoto', {
                url: '/selectphoto', 
                title: 'Select Photo', 
                backState:'main',
                views: {
                    '': {
                        controller: 'SelectPhotoController',
                        templateUrl: 'app/components/settings/selectphoto.view.html', 
                        controllerAs: 'vm'
                    },
                    'topMenu@selectphoto':{
                        templateUrl: 'app/components/menus/menu_simple/menu_simple.view.html',
                        controller:'Menu1Controller', 
                        controllerAs: 'vm'                        
                    }

                }
            })

            .state('tutorial', {
                url: '/walkthrough', 
                title: 'anchor U', 
                backState:'main',
                views: {
                    '': {
                        controller: 'TutorialController',
                        templateUrl: 'app/components/tutorial/tutorial.view.html', 
                        controllerAs: 'vm'
                    }, 
                    'topMenu@tutorial':{
                        templateUrl: 'app/components/menus/menu_tutorial/menu_tutorial.view.html',
                        controller:'MenuTutorialController', 
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


        $rootScope.$on('$stateChangeStart', function(e, toState, toParams, fromState, fromParams) {
            // redirect to login page if not logged in and trying to access a restricted page
            var restrictedPage = $.inArray(toState.name, ['login', 'register', 'main']) === -1;
            var loginSkipPage = $.inArray(toState.name, ['main']) != -1;
            var loggedIn = $rootScope.globals.currentUser;
            if (restrictedPage && !loggedIn) {
                e.preventDefault();
                $state.transitionTo('main');
            } else if(loginSkipPage && loggedIn){
                e.preventDefault();
                $state.transitionTo('home');
            }
        });

        // $rootScope.$on('$stateChangeStart', function (event, next, current) {
        //     // redirect to login page if not logged in and trying to access a restricted page
        //     var restrictedPage = $.inArray($state.current.name, ['login', 'register', 'main']) === -1;
        //     var loginSkipPages = $.inArray($state.current.name, ['main']) === -1;
        //     var loggedIn = $rootScope.globals.currentUser;
        //     if (restrictedPage && !loggedIn) {
        //         $state.go('login');
        //     }
        // });
    }
})();