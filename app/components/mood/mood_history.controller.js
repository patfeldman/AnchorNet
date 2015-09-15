(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoodHistoryController', MoodHistoryController);

    MoodHistoryController.$inject = ['$state', '$stateParams', 'UserService', 'FlashService'];
    function MoodHistoryController($state, $stateParams, UserService, FlashService) {
        var vm = this;


        vm.moodHistory = GetMoodHistory();

        function GetMoodHistory() {
            var retData = [];

            UserService.GetMyLastMoods(Constants.DefaultNumMoods)
                .then(function (response) {
                    if (response.data.success) {
                        for (var i = 0; i < response.data.data.length; i++){
                            var element = {};
                            var data = response.data.data[i];
                            element.GroupName = Constants.Moods[data.GroupId].GroupName;
                            element.Mood = Constants.Moods[data.GroupId].Moods[data.MoodId];
                            element.Time = data.Time; 
                            retData.push(element);
                        };

                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
            return retData;
        };
    }

})();