(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuMainTopController', MenuMainTopController);

    MenuMainTopController.$inject = ['$state'];
    function MenuMainTopController( $state) {
        var vm = this;
        vm.title = $state.$current.title;
    }


})();