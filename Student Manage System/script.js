var app = angular.module("studentApp", []);

app.controller("StudentController", function ($scope) {
  $scope.students = JSON.parse(localStorage.getItem("students")) || [];
  $scope.student = {};

  $scope.addStudent = function () {
    if ($scope.student.name && $scope.student.email && $scope.student.phone) {
      $scope.students.push(angular.copy($scope.student));
      saveData();
      $scope.student = {};
    }
  };

  $scope.editStudent = function (index) {
    const stu = $scope.students[index];
    const query = `?index=${index}&name=${encodeURIComponent(stu.name)}&email=${encodeURIComponent(stu.email)}&phone=${stu.phone}`;
    window.open("edit.html" + query, "_blank", "width=400,height=400");
  };

  $scope.deleteStudent = function (index) {
    $scope.students.splice(index, 1);
    saveData();
  };

  function saveData() {
    localStorage.setItem("students", JSON.stringify($scope.students));
  }
});
