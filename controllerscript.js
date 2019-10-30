var mymodule=angular.module('mymodule',[]);
mymodule.controller('headingcontroller',function($scope){
    $scope.heading="Angularjs Tutorials";
    
});
mymodule.controller('datacontroller',['$scope',function($scope){
    var data=[
        {name:"vikash",roll:"34",class:"12th",phone:"9255003434"},
        {name:"vikash",roll:"34",class:"12th",phone:"9255003434"},
        {name:"vikash",roll:"34",class:"12th",phone:"9255003434"},
        {name:"vikash",roll:"34",class:"12th",phone:"9255003434"}

    ];
    $scope.student_master=data;
}]);
