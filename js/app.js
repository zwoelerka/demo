var demoApp = angular.module('demoApp', []);

demoApp.controller('demoController', function demoController($scope) {
    $scope.callBtnVisible = 1;


	$scope.hideCallBtn = function () {
		$scope.callBtnVisible = 0;
	}
	$scope.showCallBtn = function () {
		$scope.callBtnVisible = 1;
	}
});


function startCall() {
    var div1 = document.getElementById("remoteImg");
    div1.style.width = "0";
    var div2 = document.getElementById("remotesVideos");
    div2.style.width = "98%";
    div2.style.height = "98%";


    var div3 = document.getElementById("localImg");
    div3.style.width = "0";
    var div4 = document.getElementById("localVideo");
    div4.style.width = "100%";
    div4.style.height = "100%";
}

function endCall() {
    var div1 = document.getElementById("remoteImg");
    div1.style.width = "55%";
    var div2 = document.getElementById("remotesVideos");
    div2.style.width = "0";
    div2.style.height = "0";


    var div3 = document.getElementById("localImg");
    div3.style.width = "100%";
    var div4 = document.getElementById("localVideo");
    div4.style.width = "0";
    div4.style.height = "0";
}