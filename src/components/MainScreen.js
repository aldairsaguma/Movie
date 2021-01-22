import React from 'react';
import { useMovie } from '../hooks/useMovie';
import { GridItem } from './GridItem';


export const MainScreen = () => {

    const {data} = useMovie();

    return (
        <div className="MainScreen__Movies">
                {
                    data.map( (res, key) => (
                        
                        <GridItem key={key} {...res} />

                    ))
                }
        </div>  
    )
}
