// console.log("sanity check");

const apiKey = 'fec8b5ab27b292a68294261bb21b04a5';
// All api calls go to the this link
const apiBaseUrl = 'http://api.themoviedb.org/3';
// All images use this link
const imageBaseUrl = 'http://image.tmdb.org/t/p/';
const nowPlayingUrl = `${apiBaseUrl}/movie/now_playing?api_key=${apiKey}`;
$.getJSON(nowPlayingUrl,(movieData)=>{
    // console.log(movieData);
    movieData.results.forEach((movie)=>{
        const posterURL = `${imageBaseUrl}w300${movie.poster_path}`
        const newHTML = `
        <div class="col-4">
            ${movie.title}
            <img src="${posterURL}"/>
        </div>
        `
        $("#movie-grid").append(newHTML);
    })
})

$("#movie-form").submit((event)=>{
    event.preventDefault();   
    const movieSearch = $("#search-input").val();
    //store movie for later
    localStorage.setItem("movieList", movieSearch);
    const searchUrl = `${apiBaseUrl}/search/movie?api_key=${apiKey}&query=${movieSearch}`
    let newHTML = "";
    $.getJSON(searchUrl, (movieData)=>{
        movieData.results.forEach((movie)=>{
            const posterURL = `${imageBaseUrl}w300${movie.poster_path}`
            newHTML += `
            <div class="col-3">
                <img src="${posterURL}" />
            </div>`
        })
        $("#movie-grid").html(newHTML)
    })
});

