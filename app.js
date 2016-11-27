(function () {

  'use strict';
angular.module('LunchCheck',[])
.controller('LunchCheckController',LunchCheckController);
LunchCheckController.$inject =['$scope'];
function LunchCheckController($scope) {
  $scope.name="";
  $scope.statusOP ="";
  $scope.CheckAmt = function () {
    var item = $scope.name;
    var numlog=[];
    var counter=0;
    angular.forEach(item,function(value,key){
      var letters = item.split(',');
      this.push(key +':'+value);

         counter =letters.length;

       },numlog);
        if (counter>=1 && counter >3 )
       {
         $scope.statusOP= "Too Much";
       }
       else if (counter<1) {
         $scope.statusOP="";
       }
       else {
          $scope.statusOP= " Enjoy!";
       }
     };

 }

}



)();
