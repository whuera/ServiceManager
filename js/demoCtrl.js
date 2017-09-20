angular.module('demo', [])
.controller('controladorDemo', function($scope, $http) {
	//only when load page	
   /* $http.get('http://localhost:8090/ServicesRest/allContacts').
        then(function(response) {
            $scope.contactos = response.data; 
        });*/
$scope.flag = false;
$scope.flag2 = false;
  $scope.searchContact = function() {//begin function after click button event
    console.log($scope.paramSearchContact);
    console.log("http://localhost:8090/ServicesRest/allContactById?id="+$scope.paramSearchContact+"");
    varParamSearchContact = "http://localhost:8090/ServicesRest/allContactById?id="+$scope.paramSearchContact+"";
    //varParamSearchContact = $scope.paramSearchContact;
    console.log("varParamSearchContact: "+varParamSearchContact);

    $http.get(varParamSearchContact).
        then(function(response) {
            $scope.contactos = response.data; 
            console.log(response.data);
            varCodeContact = $scope.contactos[0].codigoPer
            console.log("codigoPer: "+$scope.contactos[0].codigoPer);
        });

        $scope.paramSearchContact ="";

  };//end function


    $scope.searchContactAddress = function() {//begin function after click button event for fill address
    //console.log($scope.paramSearchContact);
    //console.log("http://localhost:8090/ServicesRest/allContactAddressById="+$scope.paramSearchContact+"");
    //varParamSearchContact = "http://localhost:8090/ServicesRest/allContactAddressById="+$scope.paramSearchContact+"";
    $scope.flag = true;
     console.log("recibiendo "+varCodeContact);
    varParamSearchContact = "http://localhost:8090/ServicesRest/allContactAddressById?id="+varCodeContact+"";
    //varParamSearchContact = $scope.paramSearchContact;
    console.log("varParamSearchContact: "+varParamSearchContact);

    $http.get(varParamSearchContact).
        then(function(response) {
            $scope.addressList = response.data; 
            console.log(response.data);
        });

        //$scope.paramSearchContact ="";

  };//end function


   $scope.searchInfoFinance = function() {//begin function after click button event for fill address
    //console.log($scope.paramSearchContact);
    //console.log("http://localhost:8090/ServicesRest/allContactAddressById="+$scope.paramSearchContact+"");
    //varParamSearchContact = "http://localhost:8090/ServicesRest/allContactAddressById="+$scope.paramSearchContact+"";
    $scope.flag2 = true;
    
        //$scope.paramSearchContact ="";

  };//end function


});
