(function () {
    'use strict';

    angular
        .module('app')
        .controller('RegisterController', RegisterController);

    RegisterController.$inject = ['UserService', '$location', '$rootScope', 'FlashService','AuthenticationService', '$state'];
    function RegisterController(UserService, $location, $rootScope, FlashService, AuthenticationService, $state) {
        var vm = this;

        vm.register = register;

        function register() {
            vm.dataLoading = true;
            UserService.Create(vm.user)
                .then(function (response) {
                    if (response.data.success) {
                        FlashService.Success('Registration successful', true);
                        AuthenticationService.Login(vm.user, function (response) {
                            if (response.success) {
                                AuthenticationService.SetCredentials(vm.user.username, vm.user.password, response.authToken);
                                $state.go('selectphoto');
                            } else {
                                FlashService.Error(response.message);
                                vm.dataLoading = false;
                            }
                        });
                    } else {
                        FlashService.Error(response.message);
                        vm.dataLoading = false;
                    }
                });
        }
    }

})();
