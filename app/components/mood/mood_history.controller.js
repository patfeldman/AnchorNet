(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoodHistoryController', MoodHistoryController);

    MoodHistoryController.$inject = ['$state', '$stateParams'];
    function MoodHistoryController($state, $stateParams) {
        var vm = this;


        vm.moodHistory = GetMoodHistory();

        function GetMoodHistory() {
            // test info
            var retData = [];
            var storedData = [
                {'GroupId':0, 'MoodId':3, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':1, 'MoodId':3, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':2, 'MoodId':3, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':2, 'MoodId':2, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':0, 'MoodId':0, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':0, 'MoodId':1, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':0, 'MoodId':2, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':0, 'MoodId':3, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':1, 'MoodId':0, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':1, 'MoodId':1, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':1, 'MoodId':2, 'Time':'11:24 pm, Sept 24, 2014'},
                {'GroupId':1, 'MoodId':3, 'Time':'11:24 pm, Sept 24, 2014'}
            ];

            for (var i = 0; i < storedData.length; i++){

                var element = {};
                var data = storedData[i];
                element.GroupName = Constants.Moods[data.GroupId].GroupName;
                element.Mood = Constants.Moods[data.GroupId].Moods[data.MoodId];
                element.Time = data.Time; 
                retData.push(element);
            };
            return retData;
        };
    }

})();