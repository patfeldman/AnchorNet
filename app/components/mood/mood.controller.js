(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoodController', MoodController);

    MoodController.$inject = ['$rootScope', '$state', 'UserService'];
    function MoodController($rootScope, $state, UserService) {
        var vm = this;
        //vm.mood = 'enthusiastic';
        vm.mood_lcase = GetLastMood();

        function GetLastMood() {
            var retData = 'enthusiastic';

            UserService.GetMyLastMoods(Constants.DefaultNumMoods)
                .then(function (response) {
                    if (response.data.success) {
                        for (var i = 0; i < response.data.data.length; i++){
                            var element = {};
                            var data = response.data.data[i];
                            vm.mood = Constants.Moods[data.GroupId].Moods[data.MoodId].Title;
                            vm.mood_lcase = vm.mood.toLowerCase();
                            break;
                        };
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        };

    }

})();