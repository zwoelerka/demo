var demoApp = angular.module('demoApp', []);

demoApp.controller('demoController', function demoController($scope, $timeout) {
    $scope.callBtnVisible = 1;
   
	$scope.hideCallBtn = function () {
		$scope.callBtnVisible = 0;
	}
	$scope.showCallBtn = function () {
		$scope.callBtnVisible = 1;
	}

	$timeout(function () {
         	$scope.navbarHeight = document.getElementById("navbar").offsetHeight;
		    $scope.navbarHeight = $scope.navbarHeight.toString() + 'px';
		    $scope.mainHeight = 'calc(100vh - ' + $scope.navbarHeight + ')';

			$scope.mainStyle = {
				"color" : "red",
		        "min-height" : $scope.mainHeight
		    }
          });

});


function startCall() {
   
    var div2 = document.getElementById("remotesVideos");
    div2.style.width = "100%";
    div2.style.height = "101.5%";


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