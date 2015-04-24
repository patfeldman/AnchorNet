(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuMainController', MenuMainController);

    MenuMainController.$inject = ['$state'];
    function MenuMainController( $state) {
        var vm = this;
        vm.title = $state.$current.title;
        vm.toState = $state.$current.backState;
    }

})();