$('.animalButton').on('click', function() {
    $('#images').empty()

    var animals = $(this).text()
    console.log(animals)

    var queryURL =
        'https://api.giphy.com/v1/gifs/search?api_key=Wd1nwIPnurr7kMfFss8tTOo83MOpiWO7&q=' +
        animals

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response) {
        console.log(response.data)

        for (var i = 0; i < response.data.length; i++) {
            var animalImage = $('<img>')

            animalImage.attr('src', response.data[i].images.original.url)
            animalImage.attr('alt', animals)
            $('#images').append(animalImage)
        }
    })
})