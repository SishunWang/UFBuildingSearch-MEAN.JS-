angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;
    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
      if(($scope.listings.name != null && $scope.listings.name != "") && ($scope.listings.code != null && $scope.listings.code != "")){
      $scope.listings.push({ name:$scope.listings.name, code:$scope.listings.code, address:$scope.listings.address,coordinates:{latitude:$scope.nLatitude,longitude:$scope.nLongitude}});
      $scope.listings.code="";
      $scope.listings.name="";
      $scope.listings.address="";
      $scope.nLatitude="";
      $scope.nLongitude="";
      return 0;
      }
        alert ("Code and Building Name cannot be empty");
    }


    $scope.deleteListing = function(index) {
       $scope.listings.splice(index,1);
      };

    $scope.showDetails = function(index) {
      $scope.detailedInfo = undefined;
      $scope.detailedInfo = "Address: " + $scope.listings[index].address + '.  Coordinates: ' + $scope.listings[index].coordinates.latitude + ", " + $scope.listings[index].coordinates.longitude; 
    };
  }
]);