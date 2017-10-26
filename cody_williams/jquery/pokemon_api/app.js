$(function() {
    $('#pokeForm').submit(function() {
        var pokemon = $('#myPokemon').val();
        console.log(pokemon);
        var url = `http://pokeapi.co/api/v2/pokemon/${pokemon}`;

        // make an AJAX request
        $.get(url, function(pokemon) {
            console.log(pokemon);
            var html_str = '';
            html_str += `<h1 style="display: inline-block">${pokemon.name}</h1>`;
            html_str += `<img src="${pokemon.sprites.front_shiny}">`;
            html_str += `<h3>My abilities are</h3>`;
            html_str += '<ul>';
            for (let ability of pokemon.abilities) {
                html_str += `<li>${ability.ability.name}</li>`
            }
            html_str += '</ul>';
            $('.pokeDex').html(html_str);
        }, 'json');
        return false;
    })
});

// Types of HTTP Requests
    // Get Request - getting data from server
    // Post Request - posting data to the server