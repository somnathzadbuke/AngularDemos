mainApp.controller("studentController", function($scope) {
 $scope.student = {
 firstName: "Somanath",
 lastName: "Zadbuke",
 fees:15000,
 subjects:[
 {name:'Java',marks:70},
 {name:'MongoDB',marks:80},
 {name:'NodeJS',marks:65},
 {name:'AngularJS',marks:75},
 {name:'Ajax',marks:67}
 ],
 fullName: function() {
 var studentObject;
 studentObject = $scope.student;
 return studentObject.firstName + " " + studentObject.lastName;
 }
 };
});
