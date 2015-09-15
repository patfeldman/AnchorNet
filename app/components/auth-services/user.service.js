(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);

    UserService.$inject = ['$http', '$rootScope'];
    function UserService($http, $rootScope) {
        var service = {};
        var moodStorage = {};
        moodStorage.doMoodUpdate = true;

        service.GetAll = GetAll;
        service.GetMyLastMoods = GetMyLastMoods;
        service.GetByUsername = GetByUsername;
        service.AddMood = AddMood;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;

        return service;

        function GetAll() {
            return $http.get(Constants.Location.apiLocation + 'api/v1/users').then(handleSuccess, handleError('Error getting all users'));
        }

        function GetMyLastMoods(numMoods) {
            if (moodStorage.doMoodUpdate){
                moodStorage.doMoodUpdate = false;
                moodStorage.history = $http.get(Constants.Location.apiLocation + 'api/v1/moods/history/token/' + $rootScope.globals.currentUser.authtoken + '/amount/' + numMoods).then(handleSuccess, handleError('Error getting user by id'));
            }
            return moodStorage.history;
        }

        function AddMood(groupId, moodId) {
            moodStorage.doMoodUpdate = true;
            var jsonString = {"groupId":groupId, "moodId":moodId};
            return $http.post(Constants.Location.apiLocation + 'api/v1/moods/add/token/' + $rootScope.globals.currentUser.authtoken, jsonString).then(handleSuccess, handleError('Error creating user'));
        }

        function GetByUsername(username) {
            return $http.get(Constants.Location.apiLocation + 'api/v1/users/' + username).then(handleSuccess, handleError('Error getting user by username'));
        }

        function Create(user) {
            return $http.post(Constants.Location.apiLocation + 'api/v1/register', user).then(handleSuccess, handleError('Error creating user'));
        }

        function Update(user) {
            return $http.put(Constants.Location.apiLocation + 'api/v1/users/' + user.id, user).then(handleSuccess, handleError('Error updating user'));
        }

        function Delete(id) {
            return $http.delete(Constants.Location.apiLocation + 'api/v1/users/' + user.id).then(handleSuccess, handleError('Error deleting user'));
        }

        // private functions

        function handleSuccess(data) {
            return data;
        }

        function handleError(error) {
            return function () {
                return { success: false, message: error };
            };
        }
    }

})();