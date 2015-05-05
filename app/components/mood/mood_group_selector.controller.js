(function () {
    'use strict';

    angular
        .module('app')
        .controller('MoodGroupSelector', MoodGroupSelector);

    MoodGroupSelector.$inject = ['$state'];
    function MoodGroupSelector($state) {
        var vm = this;
        vm.groups = Constants.Moods;
    }

})();