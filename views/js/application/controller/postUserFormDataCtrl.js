/**
 * Created by arao on 10/17/16.
 */
app.controller('postUserFormDataCtrl', function($scope, $http) {
    $scope.user = {};

    var config = {
        headers: {
            'Content-Type': 'application/json'
        }
    };
    $scope.createUser = function() {
        $http.post('/postUserFormData',$scope.user,config).then(function () {

        });
    }
});