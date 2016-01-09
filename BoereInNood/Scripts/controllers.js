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




    var message1 = "Dink nie dis nodig om die effek van die droogte uit te lig nie, almal is bewus daarvan en as ons nie nou ingryp nie, gaan baie boere tot niet gaan in die afsienbare toekoms, wat astronomiese gevolge inhou vir die land se voedsel-sekerheid. Die boere is raadop en moedeloos. Nc Schoombee en Nico Gerber het Boere in Nood begin November gestig toe hulle en van die boere voer en vervoer begin reel het vir hulle broeders in nood. Gou daarna het vele ander boere, met God se leiding, ook ingespring en land-wyd hulp begin kry in die vorm van voer en kontant-skenkings. Party boere-verenigings asook gemeente-leraars in sekere gevalle, help om die boere wat hulp die dringendste nodig het, uit te wys.";


    var message2 = "<i>\"To my pet"
    message2 += "<br />I will never move and not take you with me"
    message2 += "<br />I will never put you in a shelter and leave"
    message2 += "<br />I will never let you starve"
    message2 += "<br />I will never let you hurt"
    message2 += "<br />I will never desert you when you get old"
    message2 += "<br />If that time comes, I will be there to hold you"
    message2 += "<br />Because I love you and you are family\"</i>"
    message2 += "<br /><br />by unkown author and describes our mission. So how do we go about this?";

    var message3 = "Nico Gerber"
    message3 += "<br />Nc Schoombee"
    message3 += "<br />Carina Swartz"
    message3 += "<br />Jacobus Venter";


    $scope.showintro = function () {
        var howManyDialogs = 3;
        var titles = ["Bestuur <br /><span class=\"dialognumber\">3 van 3</span>", "Meer inligting <br /><span class=\"dialognumber\">2 van 3</span>", "Wat is ons doel? <br /><span class=\"dialognumber\">1 van 3</span>"];
        var messages = [
               message3,
        message2,
message1];
        var buttonlabels = ["Next", "Next", "Next"];

        for (var i = 1; i <= howManyDialogs; i++) {
            if (i == 1) {
                var dialog = new BootstrapDialog({
                    title: titles[i - 1],
                    message: messages[i - 1],
                    cssClass: 'intro-dialog',
                    buttons: [{
                        label: 'Finish',
                        cssClass: 'btn-dialogcloseall',
                        action: function () {
                            // You can also use BootstrapDialog.closeAll() to close all dialogs.
                            $.each(BootstrapDialog.dialogs, function (id, dialog) {
                                dialog.close();
                            });
                        }
                    }]
                });
            }
            else {
                var dialog = new BootstrapDialog({
                    title: titles[i - 1],
                    message: messages[i - 1],
                    cssClass: 'intro-dialog',
                    buttons: [{
                        label: buttonlabels[i - 1],
                        cssClass: 'btn-dialogclose',
                        action: function (dialogRef) {
                            dialogRef.close();
                        }
                    }, {
                        label: 'Skip intro',
                        cssClass: 'btn-dialogcloseall',
                        action: function () {
                            // You can also use BootstrapDialog.closeAll() to close all dialogs.
                            $.each(BootstrapDialog.dialogs, function (id, dialog) {
                                dialog.close();
                            });
                        }
                    }]
                });
            }
            dialog.open();
        }
    }










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