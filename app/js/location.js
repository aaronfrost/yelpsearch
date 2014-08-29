angular.module('yapp').service('locationService', function($http, $q){



  return {
    getCurrentPosition: getPosition,
    getAddressFromPosition: getAddress
  };

  function getPosition(){
    var deferred = $q.defer();

    window.navigator.geolocation.getCurrentPosition(function(results){
      deferred.resolve(results);
    }, function(error){
      deferred.reject(error);
    });

    return deferred.promise;
  }

  function getAddress(pos){

    return $http.get('http://maps.googleapis.com/maps/api/geocode/json?latlng='+pos.coords.latitude+','+pos.coords.longitude+'&sensor=true').then(function(res){
      console.log(res.data);
      return res.data;
    });
  }

});


function getAddressFromLatLong(pos){


}