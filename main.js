$(document).ready(function () {

    $.ajax("task.php");

    var calls = 1;

    function checkProgress() {
        $.ajax({
            url: "progress.php",
            success: function (data) {
                console.log(calls);
                calls++;
                //$("#progresstext").html(data);
                //$("#progressbar").css("width", (data * 10) + "%").attr("aria-valuenow", (data * 10));
                if (data != "10") setTimeout(checkProgress, 1000);

                if (calls == 3) {
                    $("h4").html("Finding restaurant" + "<br>" + " near you");

                }

                if (calls == 4) {

                    addContent();
                }

            }
        });
    }

    function addContent() {

        $.get({
            url: 'https://csunix.mohawkcollege.ca/tooltime/10133/api/api.php',
            data: { lat: loc.latitude, long: loc.longitude },
            success: function (data) {

                $("h4").html("Found these restaurants..");
                $(".loader").remove();
               // $("#a").append(data);

                var jsonData = JSON.parse(data);

                

                var i;
                for (i = 0; i < 20; i++) {

                    $(".list-unstyled").append("<li class='media'> <img src='" + jsonData.businesses[i].image_url + "'class='mr-3'><div class='media-body'><h5 class='mt-0 mb-1'>"+jsonData.businesses[i].name+"<br></h5>"+jsonData.businesses[i].location.address1+ "<br>"+jsonData.businesses[i].display_phone+ "<br>"+"</div><br></li>")
                    
                   
                }





            }
        })
    }

    setTimeout(checkProgress, 500);



});