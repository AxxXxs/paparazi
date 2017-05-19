/**
 * Created by lanou3g on 17/4/21.
 */
var directiveMoudle = angular.module("directiveModule",[]);
directiveMoudle.directive("buttonBox",function(){
    return{
        templateUrl:"templateView/buttonBox.html",
        scope:{},
        controller:function($scope){
            $scope.name = '段子手';
            $scope.flag = true;
            $scope.showHide=function(){
                $scope.flag = !$scope.flag;
            }
        }
    }
})