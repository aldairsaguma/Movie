export const getMovie = async() => {

    const api_key = '31e831131f1b935d152458ccbf59c06c';
    const res =  await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${api_key}`);
    const data = await res.json();
    const { results } = data;

    results.map( req =>  {
        return{
            id : req.id
        }
    });

    return results;

}