/**************************************
 TITLE: Simple Validation James Lewis (JL)
 CREATE DATE: 18 April 2016
 PURPOSE: Steps for Form Validation
 LAST MODIFIED ON: 18 April 2016
 LAST MODIFIED BY: James Lewis (JL)
 MODIFICATION HISTORY:
 Update: 21 February 2017
 ***************************************/
$(document).ready(function () {

    $("#accordion").accordion();


    var availableTags = [
        "ActionScript",
        "AppleScript",
        "Asp",
        "BASIC",
        "C",
        "C++",
        "Clojure",
        "COBOL",
        "ColdFusion",
        "Erlang",
        "Fortran",
        "Groovy",
        "Haskell",
        "Java",
        "JavaScript",
        "Lisp",
        "Perl",
        "PHP",
        "Python",
        "Ruby",
        "Scala",
        "Scheme"
    ];
    $("#autocomplete").autocomplete({
        source: availableTags
    });


    //$("#button").button();
    $("#submit").button();
    $("#reset").button();
    $("#getValue").button();
    $("#radioset").buttonset();


    $("#tabs").tabs();


    $("#dialog").dialog({
        autoOpen: false,
        width: 400,
        buttons: [{
            text: "Ok",
            click: function () {
                $(this).dialog("close");
            }
        }, {
            text: "Cancel",
            click: function () {
                $(this).dialog("close");
            }
        }]
    });

    // Link to open the dialog
    $("#dialog-link").click(function (event) {
        $("#dialog").dialog("open");
        event.preventDefault();
    });


    $("#datepicker").datepicker({
        inline: true
    });


    $("#slider").slider({
        range: true,
        values: [17, 67]
    });


    $("#progressbar").progressbar({
        value: 20
    });


    $("#spinner").spinner();


    $("#menu").menu();


    $("#tooltip").tooltip();


    $("#selectmenu").selectmenu();


    // Hover states on the static widgets
    $("#dialog-link, #icons li").hover(
        function () {
            $(this).addClass("ui-state-hover");
        },
        function () {
            $(this).removeClass("ui-state-hover");
        }
    );
    /*
     $("#button").click(function() {
     alert("Hello World");
     return false;
     });
     */


});
