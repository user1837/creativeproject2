$(document).ready(function() {
	$("#tvSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#tvInput").val();
		value = value.replace(/\s/g, '+'); 
		console.log(value);
		var myurl = "https://itunes.apple.com/search?term=" + value + "&entity=tvSeason";
		$.ajax({
	    	url : myurl,
	    	dataType : "json",
	    	success : function(json) {
				console.log(json);
				var response = "";
				if (json.resultCount === 0) {
					response += "<p>No results for this search</p>";
				}
				else {
					for (var i = 0; i < json.results.length; i++) {
						var genre = json.results[i].primaryGenreName;
						if (genre === "Romance" || genre === "Drama" || genre === "Comedy") {
							response += "<h3>" + json.results[i].collectionName + "</h3>";
							response += "<img src=" + json.results[i].artworkUrl100 + " />";
							response += "<p>Release date: " + json.results[i].releaseDate.slice(0, 4) + "</p>";
							response += "<p>" + json.results[i].longDescription + "</p>";
						}
					}
				}
				$("#tvResults").html(response);
			}
		});
	});
	$("#movieSubmit").click(function(e) {
		e.preventDefault();
		var value = $("#movieInput").val();
		value = value.replace(/\s/g, '+'); 
		console.log(value);
		var myurl = "https://itunes.apple.com/search?term=" + value + "&entity=movie";
		$.ajax({
	    	url : myurl,
	    	dataType : "json",
	    	success : function(json) {
				console.log(json);
				var response = "";
				if (json.resultCount === 0) {
					response += "<p>No results for this search</p>";
				}
				else {
					for (var i = 0; i < json.results.length; i++) {
						var genre = json.results[i].primaryGenreName;
						if (genre === "Romance" || genre === "Drama" || genre === "Comedy") {
							response += "<h3>" + json.results[i].trackName + "</h3>";
							response += "<img src=" + json.results[i].artworkUrl100 + " />";
							response += "<p>Release date: " + json.results[i].releaseDate.slice(0, 4) + "</p>";
							response += "<p>" + json.results[i].longDescription + "</p>";
						}
					}
				}
				$("#movieResults").html(response);
			}
		});
	});
});