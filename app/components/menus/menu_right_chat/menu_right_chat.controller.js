(function () {
    'use strict';

    angular
        .module('app')
        .controller('MenuRightChatController', MenuRightChatController);

    MenuRightChatController.$inject = [ '$scope'];
    function MenuRightChatController($scope) {
        var vm = this;

        // Carousel thing
        vm.index = 0;
        // Hide menu
        vm.showMenu = true;
        // Links
        vm.navigation = [{
            title: "Page A",
            href: "#pageA"
        }, {
            title: "Page B",
            href: "#pageB"
        }, {
            title: "Page C",
            href: "#pageC"
        }];

        function initController() {
        }
    }

})();