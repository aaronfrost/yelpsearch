angular.module('yapp', []);

angular.module('yapp').controller('MainController', function($scope, $http, $timeout){

  $scope.appName = "Yelp App2";

  getCurrentPosition();

  function getCurrentPosition(){
    window.navigator.geolocation.getCurrentPosition(function(pos){
      $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true').then(function(res){

        var components = res.data.results[0].address_components;
        var zip = components[components.length-1];
        console.log(zip);
        if(zip.types[0] == 'postal_code'){
          $scope.zip = zip.short_name;
        }
      });
    }, function(error){
      //Couldn't get position
    });
  }

});