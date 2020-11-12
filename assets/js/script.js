
// Initial array of movies
var movies = [];
var actors = [];
var nationality = [];
var count = 0;

// displayMovieInfo function re-renders the HTML to display the appropriate content
function displayMovieInfo(event) {

    event.preventDefault();

    // var movie = $(this).attr("data-name");
    var movie = $("#movie-input").val().trim();
    var queryURL = "https://www.omdbapi.com/?t=" + movie + "&apikey=trilogy";
    console.log(movie);

    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);

        // Creating a div to hold the movie
        var movieDiv = $("<div class='movie'>");

        // Storing the rating data
        var rating = response.Rated;

        console
        // Creating an element to have the rating displayed
        var pOne = $("<p>").text("Rating: " + rating);

        // Displaying the rating
        movieDiv.append(pOne);

        // Storing the release year
        var released = response.Released;

        // Creating an element to hold the release year
        var pTwo = $("<p>").text("Released: " + released);

        // Displaying the release year
        movieDiv.append(pTwo);

        // Storing the plot
        var plot = response.Plot;

        // Creating an element to hold the plot
        var pThree = $("<p>").text("Plot: " + plot);

        // Appending the plot
        movieDiv.append(pThree);

        // Retrieving the URL for the image
        var imgURL = response.Poster;

        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);

        // Appending the image
        movieDiv.append(image);

        // Putting the entire movie above the previous movies
        $("#movies-view").append(movieDiv);
    });

}



// Adding a click event listener to all elements with a class of "movie-btn"
$(document).on("click", "#add-movie", displayMovieInfo);
