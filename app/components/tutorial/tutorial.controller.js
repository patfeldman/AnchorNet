(function () {
    'use strict';

    angular
        .module('app')
        .controller('TutorialController', TutorialController);

    TutorialController.$inject = ['$rootScope', '$state'];
    function TutorialController($rootScope, $state) {
        var vm = this;
        vm.dots = [0,1,2,3];
        vm.currentIndex = 0;
        
        vm.setCurrentSlideIndex = function (index) {
            vm.currentIndex = index;
            
        };

        vm.isCurrentSlideIndex = function (index) {
            return vm.currentIndex === index;
        };

        vm.nextSlide = function(){
            vm.currentIndex++;
            if (vm.currentIndex >= vm.dots.length){
                $state.go('home');
            }
        }
    }

})();

