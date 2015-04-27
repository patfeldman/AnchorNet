(function () {
    'use strict';

    angular
        .module('app')
        .controller('SelectPhotoController', SelectPhotoController);

    SelectPhotoController.$inject = ['$rootScope', '$state'];
    function SelectPhotoController($rootScope, $state) {
        var vm = this;
        vm.avatarIndex = [1,2,3,4,5,6];
        vm.selectedAvatar = 0;

        vm.selectAvatar = function (index){
            vm.selectedAvatar=index;
        }

        vm.processSelection = function(){
            if (vm.selectedAvatar > 0 ){
                $state.go('tutorial');
            }
        }
    }
})();

