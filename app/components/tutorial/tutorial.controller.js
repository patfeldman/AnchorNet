(function () {
    'use strict';

    angular
        .module('app')
        .controller('TutorialController', TutorialController);

    TutorialController.$inject = ['$rootScope'];
    function TutorialController($rootScope) {
        var vm = this;
        vm.dots = [0,1,2,3];
        vm.currentIndex = 0;
        
        vm.setCurrentSlideIndex = function (index) {
            vm.currentIndex = index;
            
        };

        vm.isCurrentSlideIndex = function (index) {
            return vm.currentIndex === index;
        };


    }

})();

