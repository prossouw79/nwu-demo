var app = angular.module('todolist', []);

angular.module("todolist")
    .controller("todoCtrl", function ($scope) {

        $scope.name = 'Pieter';
        $scope.surname = 'Rossouw';

        function init() {
            
        }

        init()
    });