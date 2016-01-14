app.controller('gebiedeOndersteunController', function ($scope) {
    //Google maps
    //function initialize() {

    var lat = -29.745962;
    var lng = 25.309449;
    var myLatLng = { lat: lat, lng: lng };

    $(function () {
        var mapOptions = {
            //center: new google.maps.LatLng(myLatLng),
            center: myLatLng,
            zoom: 4,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            scrollwheel: true,
            draggable: true,
            panControl: true,
            zoomControl: true,
            mapTypeControl: true,
            scaleControl: true,
            streetViewControl: false,
            overviewMapControl: true,
            rotateControl: true
        };

        var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

        var contentString = '<div id="content">HALLO</div>';
      //'<div id="siteNotice">' +
      //'</div>' +
      //'<h1 id="firstHeading" class="firstHeading">Uluru</h1>' +
      //'<div id="bodyContent">' +
      //'<p><b>Uluru</b>, also referred to as <b>Ayers Rock</b>, is a large ' +
      //'sandstone rock formation in the southern part of the ' +
      //'Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) ' +
      //'south west of the nearest large town, Alice Springs; 450&#160;km ' +
      //'(280&#160;mi) by road. Kata Tjuta and Uluru are the two major ' +
      //'features of the Uluru - Kata Tjuta National Park. Uluru is ' +
      //'sacred to the Pitjantjatjara and Yankunytjatjara, the ' +
      //'Aboriginal people of the area. It has many springs, waterholes, ' +
      //'rock caves and ancient paintings. Uluru is listed as a World ' +
      //'Heritage Site.</p>' +
      //'<p>Attribution: Uluru, <a href="https://en.wikipedia.org/w/index.php?title=Uluru&oldid=297882194">' +
      //'https://en.wikipedia.org/w/index.php?title=Uluru</a> ' +
      //'(last visited June 22, 2009).</p>' +
      //'</div>' +
      //'</div>';

        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });

        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Fauresmith'
        });

        marker.addListener('click', function () {
            infowindow.open(map, marker);
        });



        lat = -29.113336;
        lng = 26.216199;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Bloemfontein'
        });


        lat = -28.536885;
        lng = 24.526196;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Barkley-Wes'
        });

        lat = -27.960935;
        lng = 22.714930;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Olifantshoek'
        });


        lat = -28.425139;
        lng = 21.333477;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Upington'
        });


        lat = -26.116544;
        lng = 26.169475;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Lichtenburg'
        });

        lat = -24.587530;
        lng = 27.395227;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Thabazimbi'
        });

        lat = -23.041243;
        lng = 29.919013;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Louis Trichardt'
        });

        lat = -27.380310;
        lng = 26.625671;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Bothaville'
        });


        lat = -28.695830;
        lng = 26.452476;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Brandfort'
        });


        lat = -28.673071;
        lng = 25.766741;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Dealesville'
        });

        lat = -28.542773;
        lng = 25.224264;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Boshof'
        });


        lat = -31.608489;
        lng = 18.741777;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'VanRhynsdorp'
        });


        lat = -26.876962;
        lng = 22.049180;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'VanZylsrus'
        });



        lat = -28.352983;
        lng = 24.273340;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Ulco'
        });


        lat = -28.102049;
        lng = 24.857969;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Warrenton'
        });


        lat = -29.745185;
        lng = 24.787574;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Luckhof'
        });



        lat = -29.663011;
        lng = 17.889996;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Spingbok'
        });



        lat = -32.735839;
        lng = 28.297393;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Black Rock'
        });



        lat = -27.184231;
        lng = 25.323108;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Schweizer Reneke'
        });



        lat = -27.899592;
        lng = 25.155028;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Christiana'
        });

        lat = -29.652509;
        lng = 26.178077;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Reddersburg'
        });



        lat = -29.119093;
        lng = 25.408180;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Petrusburg'
        });


        lat = -27.874985;
        lng = 26.680566;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Odendaalsrus'
        });



        lat = -28.675568;
        lng = 27.433087;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Marquard'
        });



        lat = -27.232279;
        lng = 27.581288;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Koppies'
        });




        lat = -28.123170;
        lng = 25.503264;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Hertzogville'
        });


        lat = -28.672544;
        lng = 25.767599;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Dealesville'
        });



        lat = -28.691915;
        lng = 26.458828;
        myLatLng = { lat: lat, lng: lng };

        marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: 'Brandfort'
        });


        //var cityCircle = new google.maps.Circle({
        //    strokeColor: '#FF0000',
        //    strokeOpacity: 0.8,
        //    strokeWeight: 2,
        //    fillColor: 'Yellow',
        //    fillOpacity: 0.35,
        //    map: map,
        //    center: myLatLng,
        //    radius: 5000
        //});

    });
});


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

    var translatemessage = "We are busy updating the site to also work in English. The translations will take a bit of time but come back regularly to see what changed.";
    translatemessage += "We looking at tackling translations in the following order";
    translatemessage += "<ul>";
    translatemessage += "<li>Menu</li>";
    translatemessage += "<li>Intro</li>";
    translatemessage += "<li>Forms</li>";
    translatemessage += "<li>Home page carousel</li>";
    translatemessage += "<li>Rest</li>";
    translatemessage += "<ul>";

    $scope.translate = function () {
        var howManyDialogs = 1;
        var titles = ["Translation from Afrikaans to English"];
        var messages = [translatemessage];
        var buttonlabels = ["Volgende"];

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

    $scope.mystate = false;
    $scope.Taal = "Change language to ";

    $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function (event, state) {
        console.log(this); // DOM element
        console.log(event); // jQuery event
        console.log(state); // true | false

        if (state == true) {
            $scope.translate();
           // alert("We are busy updating site to also work in English. Translations may not to liking of purists but ...");
            $scope.Taal = "Verander taal na ";
        }
        else {
            $scope.Taal = "Change language to ";
        }
    });




    $('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function (event, state) {
        console.log(this); // DOM element
        console.log(event); // jQuery event
        console.log(state); // true | false
    });




    var message1 = "Dink nie dis nodig om die effek van die droogte uit te lig nie, almal is bewus daarvan en as ons nie nou ingryp nie, gaan baie boere tot niet gaan in die afsienbare toekoms, wat astronomiese gevolge inhou vir die land se voedsel-sekerheid. Die boere is raadop en moedeloos. Nc Schoombee en Nico Gerber het Boere in Nood begin November gestig toe hulle en van die boere voer en vervoer begin reel het vir hulle broeders in nood. Gou daarna het vele ander boere, met God se leiding, ook ingespring en land-wyd hulp begin kry in die vorm van voer en kontant-skenkings. Party boere-verenigings asook gemeente-leraars in sekere gevalle, help om die boere wat hulp die dringendste nodig het, uit te wys.";

    var message2 = "Boere in die Suid-Kaap het al meer as 1500 bale voer geskenk, waarvan die meeste reeds na boere in nood versprei is, maar die nood is landwyd en ons kon nog nie naastenby by al die boere kon uitkom nie. Vervoer na boere in die binneland, wie se vee al vrek van die droogte, is ook ‘n groot probleem. Van die kontant skenkings is al gebruik vir vervoerkoste, maar steeds bly voer en vervoer ‘n massiewe probleem vir Boere in Nood. Sonder vervoer maatskappye se hulp kan ons nie die voer skenkings uitkry na waar die nood groot is nie. Indien daar mense is wat wil deel neem aan die veldtog kan hulle aansluit by die Boere in Nood Facebook groep of direk met Nc Schoombee of Nico Gerber in kontak tree.  <a href=\"https://www.facebook.com/groups/925517180818254/\" target=\"_blank\"><img class=\"img-responsivesmall\" src=\"../Images/facebook.png\" width=\"50\" /></a>";
    var message3 = "Enige hulp sal waardeer word. Ons doen dit vir die liefde van die saak. God is ons redding en Hy sal ons uitkoms bied. Sy genade is groot, ons het net vrywilligers nodig om te help met voer en vervoer.";


    var message4 = "Nico Gerber"
    message4 += "<br />Nc Schoombee"
    message4 += "<br />Carina Swartz"
    message4 += "<br />Jacobus Venter";
    message4 += "<br/><br/>Jy kan ook enige van die bestuur se kontak besonderhede kry deur te 'click' op "
    message4 += "<br/><br/>Ons opregte dank aan elke persoon en besigheid wat op enige manier al ‘n bydrae gelewer het aan Boere in Nood.";



    $scope.showintro = function () {
        var howManyDialogs = 4;
        var titles = ["Bestuur <br /><span class=\"dialognumber\">4 van 4</span>", "Meer inligting <br /><span class=\"dialognumber\">3 van 4</span>", "Meer inligting <br /><span class=\"dialognumber\">2 van 4</span>", "Wat is ons doel? <br /><span class=\"dialognumber\">1 van 4</span>"];
        var messages = [
                           message4,
               message3,
        message2,
message1];
        var buttonlabels = ["Volgende", "Volgende", "Volgende", "Volgende"];

        for (var i = 1; i <= howManyDialogs; i++) {
            if (i == 1) {
                var dialog = new BootstrapDialog({
                    title: titles[i - 1],
                    message: messages[i - 1],
                    cssClass: 'intro-dialog',
                    buttons: [{
                        label: 'Klaar',
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