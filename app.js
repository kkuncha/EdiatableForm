var app = angular.module("app", ["xeditable"],['angularModalService']);


app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  
});

app.controller('Controller', function($scope, ModalService) {
    
    $scope.show = function() {
        ModalService.showModal({
            templateUrl: 'modal.html',
            controller: "ModalController"
        }).then(function(modal) {
            modal.element.modal();
            modal.close.then(function(result) {
                $scope.message = "You said " + result;
            });
        });
    };
    
});

app.controller('ModalController', function($scope, close) {
  
 $scope.close = function(result) {
 	close(result, 500); // close, but give 500ms for bootstrap to animate
 };

});

app.controller('Ctrl', function($scope) {
$("#debug").hide();
  $scope.user = {
    name: 'MC admin User1'
  };  
   $scope.status = {
    Status: 'Approved'
  }; 
 $scope.$watch(function() {
  return $scope.user.name;
}, function(newValue, oldValue) {
console.log("change detected: " + oldValue);
console.log("change detected: " + newValue);
$scope.user.oldValue=  + oldValue ;
$("#oldvalue").html(oldValue);

});

$(".editable-click")
});


