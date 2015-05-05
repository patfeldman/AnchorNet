
(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuMainBottomController', MenuMainBottomController);

    MenuMainBottomController.$inject = ['$state'];
    function MenuMainBottomController( $state) {
        var vm = this;
        vm.title = $state.$current.title;
        vm.toState = $state.$current.backState;
        vm.menuState = $state.$current.name;
    }

})();