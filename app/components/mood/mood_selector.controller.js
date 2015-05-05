(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoodSelectorController', MoodSelectorController);

    MoodSelectorController.$inject = ['$state', '$stateParams'];
    function MoodSelectorController($state, $stateParams) {
        var vm = this;
        vm.mood = Constants.Moods[$stateParams.moodGroupId];
        vm.moodTypes = vm.mood.Moods;
        vm.moodGroupName = vm.mood.GroupName;

        function selectMood(index) {
            MoodService.addMood(index).then(function () {
            	$state.to('mood')
            });            
        }

    }

})();