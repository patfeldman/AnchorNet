(function () {
    'use strict';

    angular
        .module('app')
        .controller('Menu1Controller', Menu1Controller);

    Menu1Controller.$inject = ['$state'];
    function Menu1Controller( $state) {
        var vm = this;
        vm.title = $state.$current.title;
        vm.toState = $state.$current.backState;
    }

})();