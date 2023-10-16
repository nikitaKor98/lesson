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

personalMovieDB.movies[oneAsk] = twoAsk;

console.log(personalMovieDB);