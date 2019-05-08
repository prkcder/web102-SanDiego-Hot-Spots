$(document).ready(function() {
    // write your code here
        $.getJSON("data.json", function(data) {
            $.each(data, function(i, sd) {
                let work = "<tr><td>"+ sd.name +"</td><td>"+ sd.description +"</td><td><a href = https://www.google.com/maps?q="+ sd.location +"><button class=\"button\">Open in Google Maps</button></a></td></tr>"
                $("table").append(work);
            });   
        });
    });