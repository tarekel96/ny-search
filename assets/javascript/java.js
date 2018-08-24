
// var apikey = "2b243c0d6a684505adf6051e21c54e42";
// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key='" + apikey +
// "'&q='obama'";

// var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
// url += '?' + $.param({
//   'api-key': "2b243c0d6a684505adf6051e21c54e42",
//   'q': ""
// });


$('#search-btn').on("click", getInfo);

function getInfo() {

    var searchTerm = $('#search').val();
    console.log(searchTerm);
    url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({
      'api-key': "2b243c0d6a684505adf6051e21c54e42",
      'q': searchTerm
    });


    $.ajax({
        url: url,
        method: 'GET',
      }).then(function(result) {
        console.log(JSON.stringify(result));
        $('#top').append(JSON.stringify(result));
      });
}
