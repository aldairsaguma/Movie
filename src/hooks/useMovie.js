import { useState, useEffect } from 'react';
import { getMovie } from '../helpers/getMovie';

export const useMovie = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        getMovie().then( data =>  {
            setState(data)
        })
    }, [])

    return state;
}