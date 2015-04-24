(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuTutorialController', MenuTutorialController);

    MenuTutorialController.$inject = ['$state'];
    function MenuTutorialController( $state) {
        var vm = this;
        vm.title = $state.$current.title;
    }

})();