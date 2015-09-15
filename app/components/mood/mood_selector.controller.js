(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoodSelectorController', MoodSelectorController);

    MoodSelectorController.$inject = ['$scope', '$state', '$stateParams', 'UserService'];
    function MoodSelectorController($scope, $state, $stateParams, UserService) {
        var vm = this;
        vm.mood = Constants.Moods[$stateParams.moodGroupId];
        vm.moodTypes = vm.mood.Moods;
        vm.moodGroupName = vm.mood.GroupName;
        vm.moodGroupId = vm.mood.GroupId;
        vm.moodGroupTitle = vm.mood.GroupTitle;

        //vm.moodSelect= moodSelect();


        $scope.moodSelect = function(groupId, moodId) {
            UserService.AddMood(groupId, moodId).then(function () {
            	$state.go('mood')
            });            
        }

    }

})();