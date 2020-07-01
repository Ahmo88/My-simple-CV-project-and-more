///<reference path="../typings/globals/jquery/index.d.ts" />


window.onload = function () {

    $('button').prop("disabled", true)
    $("#topBar").hide().fadeIn(1500);
    $("#welcomeTitle").css("display:", "inline-block").slideDown(1500).delay(2000).fadeOut(500);

    $.when($("#welcomeTitle").delay(100)).done(function () {
        $('button').prop("disabled", false)
    });

    //display,hide,show elements... 
    $(function () {
      
        $("#aboutMeBtn").click(function (){
            $("#divMyExperience").hide();
            $("#myHobbiesDiv").hide();
            $("#iLikeDiv").hide();
            $("#divCloud").hide();
            $("#example").hide();
            $("#aboutFinlandDiv").hide();
        });

        $("#moreAboutMeBtn").click(function () {
            $("#divMyExperience").hide();
            $("#myHobbiesDiv").hide();
            $("#divCloud").css("display", "cover").hide().fadeIn(1000);
            $("#iLikeDiv").hide();
            $("#example").hide();
            $("#aboutFinlandDiv").hide();

        });

        $("#hideCloudBtn").click(function () {
            $("#divCloud").fadeOut(1000);
            $("#divMyExperience").hide();
            $("#myHobbiesDiv").hide();
            $("#iLikeDiv").hide();
            $("#example").hide();
            $("#aboutFinlandDiv").hide();
        });

        $("#myExperienceBtn").click(function () {
            $("#divCloud").hide();
            $("#myHobbiesDiv").hide();
            $("#divMyExperience").css("display", "inherit").hide().slideToggle(1000);
            $("#iLikeDiv").hide();
            $("#example").hide();
            $("#aboutFinlandDiv").hide();
        });

        $("#myHobbiesBtn").click(function () {
            $("#divCloud").hide();
            $("#divMyExperience").hide();
            $("#myHobbiesDiv").css("display", "inherit").hide().show(500);
            $("#iLikeDiv").hide();
            $("#example").hide();
            $("#aboutFinlandDiv").hide();
        });

        $("#iLikeBtn").click(function () {
            $("#divCloud").hide();
            $("#divMyExperience").hide();
            $("#myHobbiesDiv").hide();
            $("#iLikeDiv").css("display", "inherit").hide().show(500);
            $("#example").hide();
            $("#aboutFinlandDiv").hide();

        });

        $("#abotFinlandBtn").click(function () {
            $("#divCloud").hide();
            $("#divMyExperience").hide();
            $("#myHobbiesDiv").hide();
            $("#iLikeDiv").hide();
            $("#aboutFinlandDiv").css("display:", "inherit").show(500);
            $("#example").hide();
        });

        //open my video in new new browser tab
        $("#3dBtn").click(function (e) {

            window.open('./Animation/myAnimation.html');
            e.preventDefault();
        });

        $("#guessBtn").click(function () {
            $("#divCloud").hide();
            $("#divMyExperience").hide();
            $("#myHobbiesDiv").hide();
            $("#iLikeDiv").hide();
            $("#example").css("display:", "inherit").show(500);
            $("#aboutFinlandDiv").hide();

        });

    });

}
