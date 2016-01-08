app.controller('NavController', function ($scope) {
    // console.log("username = " + getCookie("yourname"));
    if (getCookie("yourname") == 'undefined' || getCookie("yourname") == null || getCookie("yourname") == "") {
        console.log("NavController = 1");
        $scope.showlogin = true;
        $scope.showlogout = false;
    }
    else {
        console.log("NavController = 2");
        $scope.showlogin = false;
        $scope.showlogout = true;
    }
});

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
    }
    return "";
}



app.controller('mainController', function ($scope, notifications, $route, $location, $window, $http) {
    $scope.userloggedin = true;

    
    $scope.messages = function () {
        notifications.closeAll();
        $http.get("/api/UserMessages/GetUserMessages?memberid=1")
  .success(function (response) {
      $scope.names = response;
      notifications.showSuccess(response[0].MessageText);
  });
    };
});

app.controller('muurvanenengeleController', function ($scope, $route, $location, $window, $http) {

 $http.get("/api/Heroes/GetHeroes")
   .success(function (response) {
       $scope.names = response;
       //$scope.nameofspca = response[0].Name;
       //$scope.office = response[0].Office;
       //$scope.afterhours = response[0].Afterhours;
       //$scope.emailaddress = response[0].emailaddress;
       //$scope.physicaladdress = response[0].physicaladdress;
   });

});



function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    console.log(expires);
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function delete_cookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}