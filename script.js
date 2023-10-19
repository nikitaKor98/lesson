const numberOfFilms = prompt("Сколько фильмов вы уже посмотрели", "");
const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat:false
};

const oneAsk = prompt("Один из последних просмотренных фильмов?", "");
const twoAsk = prompt("Насколько оцените его?", "");
const threeAsk = prompt("Один из последних просмотренных фильмов?", "");
const foureAsk = prompt("Насколько оцените его?", "");

personalMovieDB.movies[oneAsk] = twoAsk;
personalMovieDB.movies[threeAsk] = foureAsk;

console.log(personalMovieDB);