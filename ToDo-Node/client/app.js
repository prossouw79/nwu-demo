var app = angular.module('todolist', []);

angular.module("todolist")
    .controller("todoCtrl", function ($scope, $http) {

        $scope.people = [];

        function init() {

            $scope.name = 'Pieter';
            $scope.surname = 'Rossouw';
        }

        function getPerson() {
            $http.get('/api/getPerson').then(function (response) {
                console.log("API RETURNED:" + response);
                $scope.people = response.data;
            })
        }
        getPerson();

        init()
    });