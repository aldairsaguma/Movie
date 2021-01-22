import React from 'react';
import { useMovie } from '../hooks/useMovie';


export const MainScreen = () => {

    
    console.log(useMovie());

    return (
        <div className="MainScreen__Movies">
            <div className="element element1">
                <div className="movie">element1</div>
            </div>
        </div>  
    )
}
