///<reference path="./typings/globals/jquery/index.d.ts" />


window.onload = function () {


    $("#buttonsDiv").hide().delay(200).fadeIn(500);
    $("#video").hide().delay(200).fadeIn(1000);
    $("#label1").hide().delay(200).fadeIn(1500);

}

$(function () {

    $("#bt1").click(function () {
        $("#label1").css("color", "white").fadeOut(2000)
            .css("color", "white").fadeIn(2000)
            .html("Click play button to start animation.");

    });
});

$(function () {
    $("#bt2").click(function () {
        // $("#text1").append("Ahmo");

        var video = $("#video").get(0);
        if (video.paused) {
            video.play();
            $("#bt2").html("Pause");

        } else {
            video.pause();
            $("#bt2").html("Play");
        }

        if ($("#video").ended(0)) {
            $("#bt2").html("Play");
        }

    });
});

$(function () {
    $("#button3").click(function () {
        jQuery.get('cod.txt', function (data) {
            $('#text1').html(data.replace());
        });
    });

});



