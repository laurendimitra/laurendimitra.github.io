var topics = ["Rick and Morty", "The Good Place", "BoJack Horseman", "Dirk Gently's Holisitc Detective Agency",
"South Park", "Shameless", "Archer", "This is Us", "Bob's Burgers"
];


// Function for displaying movie data


$(document).ready(function () {
function renderButtons() {

    // Deleting the movies prior to adding new movies
    // (this is necessary otherwise we will have repeat buttons)
    $("#buttons-view").empty();

    // Looping through the array of movies
    for (var i = 0; i < topics.length; i++) {
        console.log(topics[i]);
        // Then dynamicaly generating buttons for each movie in the array
        // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
        var aButton = $("<button>");
        // Adding a class
        aButton.addClass("show");
        // Added a data-attribute
        aButton.attr("data-name", topics[i]);
        // Provided the initial button text
        aButton.text(topics[i]);
        // Added the button to the HTML
        $("#buttons-view").append(aButton);
    }

}

renderButtons();

$("#add-show").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var newShow = $("#show-input").val().trim();

    // The movie from the textbox is then added to our array
    topics.push(newShow);

    // Calling renderButtons which handles the processing of our movie array
    renderButtons();
});

$(document).on("click", ".show", function () {
    console.log("clicked")
    var show = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        show + "&api_key=fVUJsvbd8N3uQ6B4QVb0YClWVcPS4am3&limit=10";
    $("#gifs-appear-here").empty();
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);
        var results = response.data
        for (var i = 0; i < results.length; i++) {
            var showGifDiv = $("<div class='gifImage'>");
            var p = $("<p>").text("Rating: " + results[i].rating);
            var showImage = $("<img>")
            showImage.attr({
                src: results[i].images.fixed_height_still.url,
                data_animatesrc: results[i].images.fixed_height.url,
                data_stillsrc: results[i].images.fixed_height_still.url,
                data_state: "still"
            });

            showGifDiv.append(p);
            showGifDiv.append(showImage);
            $("#gifs-appear-here").prepend(showGifDiv);
        }

        $(".gifImage").on("click", "img", function () {
            var state = $(this).attr("data_state");
            console.log(state)

            // =============================================

            // STEP THREE: Check if the variable state is equal to 'still',
            // then update the src attribute of this image to it's data-animate value,
            // and update the data-state attribute to 'animate'.
            if (state === "still") {
                $(this).attr('src', $(this).attr("data_animatesrc"));
                $(this).attr('data_state', 'animate');
            }

            // // // If state is equal to 'animate', then update the src attribute of this
            // // // image to it's data-still value and update the data-state attribute to 'still'
            // // // ============== FILL IN CODE HERE FOR STEP THREE =========================
            else if (state === "animate") {
                $(this).attr('src', $(this).attr("data_stillsrc"));
                $(this).attr('data_state', 'still');
            }
        });
    });
});

})