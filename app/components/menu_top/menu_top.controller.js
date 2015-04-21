(function () {
    'use strict';

    angular
        .module('app')
        .controller('TopMenuController', TopMenuController);

    TopMenuController.$inject = ['$rootScope', '$state'];
    function TopMenuController($rootScope, $state) {
        var vm = this;
        vm.menuItems = [{
            id: 1,
            name: 'Tutorial',
            toState: 'tutorial'
        },
        {
            id: 2,
            name: 'Login',
            toState: 'login'
        },
        {
            id: 3,
            name: 'Register',
            toState: 'register'
        }];
    }
})();