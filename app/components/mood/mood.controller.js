(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoodController', MoodController);

    MoodController.$inject = ['$rootScope', '$state'];
    function MoodController($rootScope, $state) {
        var vm = this;
        vm.mood = 'enthusiastic';
        function changeMood(newMood){
        		vm.mood = "WOW";
        }
    }

})();