var app = angular.module("app", ["xeditable"]);

app.run(function(editableOptions) {
  editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
  
});

app.controller('Ctrl', function($scope) {
   $scope.user = {
    name:'admin1',
    email: 'email@example.com',
    tel: '123-45-67',
	date: null
};   

/***watch Form ***/
 $scope.$watch(function($scope) {
   return $scope.user.name;
}, function(nnewValue, noldValue) {
console.log("change detected: " + noldValue);
console.log("change detected: " + nnewValue);
$scope.user.name.oldValue=  + noldValue ;
$scope.user.name.nnewValue=  + nnewValue ;
$(".noldvalue").html(noldValue);
$(".ncurrentval").html(nnewValue);
});
$scope.$watch(function($scope) {
   return $scope.user.email;
}, function(newValue, oldValue) {
console.log("change detected: " + oldValue);
console.log("change detected: " + newValue);
$scope.user.email.oldValue=  + oldValue ;
$scope.user.email.newValue=  + newValue ;
$(".oldvalue").html(oldValue);
$(".currentval").html(newValue);
});
$scope.$watch(function($scope) {
   return $scope.user.tel;
}, function(tnewValue, toldValue) {
console.log("change detected: " + toldValue);
console.log("change detected: " + tnewValue);
$scope.user.tel.oldValue=  + toldValue ;
$scope.user.tel.newValue=  + tnewValue ;
$(".toldvalue").html(toldValue);
$(".tcurrentval").html(tnewValue);
});
});

 app.controller('SelectNobuttonsCtrl', function($scope, $filter) {
  $scope.user = {
    status: 2
  };
	
  $scope.statuses = [
    {value: 1, text: 'status1'},
    {value: 2, text: 'status2'},
    {value: 3, text: 'status3'},
    {value: 4, text: 'status4'}
  ];
      $scope.GetValue = function (status) {
                var DId = $scope.DDval;
                var DName = $.grep($scope.statuses, function (status) {
                    return status.value == DId;
                })[0].text;
                $window.alert("Selected Value: " + DId + "\nSelected Text: " + DName);
            }
      
  $scope.showStatus = function() {
    var selected = $filter('filter')($scope.statuses, {value: $scope.user.status});
    return ($scope.user.status && selected.length) ? selected[0].text : 'Not set';
	alert(s.text);
  };
  
});




