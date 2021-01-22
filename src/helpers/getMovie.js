export const getMovie = async() => {

    const api_key = '31e831131f1b935d152458ccbf59c06c';
    const res =  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`);
    const data = await res.json();
    const { results } = data;

    const movies = results.map( req =>  {

        const {id, title, overview, release_date, poster_path, vote_average, original_language} = req;

        return{
            id,
            title,
            overview,
            release_date,
            poster_path,
            vote_average,
            original_language 
        }
    });

    return movies;

}