app.controller('index', ['$scope', function($scope){
  // Templates
  $scope.partials = {}
  $scope.partials.components = {

  }
  // Models
  $scope.data = {}
  // Actions
  $scope.setLocalStorageItem = function(item, data){
    localStorage.setItem(item, data);
  }
  $scope.getLocalStorageItem = function(item, type){
    if(type == 'integer'){
      return parseInt(localStorage.getItem(item));
    } else{
      return localStorage.getItem(item);
    }
  }
  $scope.UI = {}
  $scope.UI.balance = $scope.getLocalStorageItem('balance', 'integer') || 0;
  $scope.setLocalStorageItem('balance', $scope.UI.balance);
  $scope.UI.months = $scope.getLocalStorageItem('months', 'integer') || 1;
  $scope.setLocalStorageItem('months', $scope.UI.months);
  $scope.UI.daily = 0;
  $scope.UI.weekly = 0;
  $scope.UI.biweekly = 0;
  $scope.UI.monthly = 0;
  $scope.UI.showAdd = false;
  $scope.UI.showAddText = '+';
  $scope.UI.editBalance = 20;
  $scope.setSpendingLimits = function(){
    var span = $scope.setLocalStorageItem('months', $scope.UI.months);
    var days =    30 * parseInt($scope.UI.months);
    var weeks =    4 * parseInt($scope.UI.months);
    var biweeks =  2 * parseInt($scope.UI.months);
    var months =   1 * parseInt($scope.UI.months);
    var round = function(integer){return Math.round(integer)};
    $scope.UI.daily = round($scope.UI.balance / days);
    $scope.UI.weekly = round($scope.UI.balance / weeks);
    $scope.UI.biweekly = round($scope.UI.balance / biweeks);
    $scope.UI.monthly = round($scope.UI.balance / months);
  }
  $scope.setBalanceUp = function(){
    if(typeof $scope.UI.editBalance == 'number'){
      $scope.UI.balance += parseInt($scope.UI.editBalance);
      $scope.setLocalStorageItem('balance', $scope.UI.balance);
      $scope.setSpendingLimits();
    }
  }
  $scope.setBalanceDown = function(){
    if(typeof $scope.UI.editBalance == 'number'){
      $scope.UI.balance -= parseInt($scope.UI.editBalance);
      $scope.setLocalStorageItem('balance', $scope.UI.balance);
      $scope.setSpendingLimits();
    }
  }
  $scope.setShowAdd = function(){
    $scope.UI.showAdd = !$scope.UI.showAdd;
    $scope.UI.showAddText = ($scope.UI.showAdd == true) ? 'x' : '+';
    $scope.UI.editBalance = 20;
  }
}]);
