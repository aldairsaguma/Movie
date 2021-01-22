import React from 'react'

export const GridItem = ({ id,title,overview,release_date,poster_path,vote_average,original_language }) => {

    return (

        <div className="movie">
            <div className="box-poster_path">
                <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" className="poster_path" />
                <div className="vote_average">
                    {
                        vote_average
                    }
                </div>
            </div>
            <div>
                <div className="title">
                    {
                        title
                    }
                    <span className="release_date"> {release_date} </span>
                </div>
                <div className="original_language">
                    {'Idioma: '}
                    {
                        original_language
                    }
                </div>
            </div>
            <div className="overview">
                {
                    overview
                }
            </div>
        </div>

    )
}
