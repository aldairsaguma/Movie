import { useState, useEffect } from 'react';
import { getMovie } from '../helpers/getMovie';

export const useMovie = () => {

    const [state, setState] = useState({
        data : []
    });

    useEffect(() => {

        getMovie().then( data =>  {

            setState({
                data : data
            })

        });

    }, []);

    return state;
}
