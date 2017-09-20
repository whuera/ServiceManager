angular.module('contactModule', [])
.controller('controladorContact', function($scope, $http) {
	//only when load page	
   /* $http.get('http://localhost:8090/ServicesRest/allContacts').
        then(function(response) {
            $scope.contactos = response.data; 
        });*/



    $scope.save = function(smuser) {//begin function after click button event for fill address
    //console.log($scope.paramSearchContact);
    //console.log("http://localhost:8090/ServicesRest/allContactAddressById="+$scope.paramSearchContact+"");
    //varParamSearchContact = "http://localhost:8090/ServicesRest/allContactAddressById="+$scope.paramSearchContact+"";
    $scope.flag = true;
     console.log("recibiendo "+smuser.nombres);
    varParamSearchContact = "http://localhost:8090/ServicesRest/saveContact";
    //varParamSearchContact = $scope.paramSearchContact;
    //console.log("varParamSearchContact: "+varParamSearchContact);
    $scope.base_url = "http://localhost:8090/ServicesRest/";
/*
    $http.post($scope.base_url+"saveContact",$scope.smuser).
        success(function(response) {
            //$scope.addressList = response.data; 
            console.log(response.data);
        });
*/

method = "POST";
url = varParamSearchContact;
formData = {numeroIdentificacion:smuser.documento, primer_nombre:smuser.nombres, primer_apellido:smuser.apellidos, email_primario:smuser.email};
$http({
                        method : method,
                      //  url : "http://localhost:8090/ServicesRest/saveRegister",
                        url : "http://localhost:8090/ServicesRest/saveContact",
                        //data : "documento="+smuser.documento+"nombres="+smuser.nombres,
                        data : formData,
                        headers : {
                            'Content-Type' : 'application/json'
                        }
                    }).success(function(response){
            //$scope.addressList = response.data; 
       		smuser.documento = "";
       		smuser.nombres = "";
       		smuser.apellidos = "";          
       		smuser.email = ""; 
       		//$scope.focusElement = "nombres";  
            console.log(response.data);
        });

        //$scope.paramSearchContact ="";

  };//end function


 


});
