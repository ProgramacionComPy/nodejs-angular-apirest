angular.module('angularClient', []);  
function mainController($scope, $http) {  
    $scope.formData = {};
     getClients();

    // Create Client
    $scope.createClient = function(){
        $http.post('/api/v1/clients', $scope.formData)
            .success(function(data) {
                $scope.formData = {};
                getClients();
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    // Delete Client
    $scope.deleteClient = function(id) {
        $http.delete('/api/v1/clients/' + id)
            .success(function(data) {
                getClients();
            })
            .error(function(data) {
                console.log('Error:' + data);
            });
    };

    function getClients(){
        $http.get('/api/v1/clients')
            .success(function(data) {
                $scope.clients = data;
                console.log(data)
            })
            .error(function(data) {
                console.log('Error: ' + data);
            }); 
    };
}