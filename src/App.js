import React from 'react';
import { MainScreen } from './components/MainScreen';
import './styles/styles.scss';


const App = () => {
    return (
        <div className="page-wrapper">
            <header className="page-header">
                <div>
                    <h3>Movie API</h3>
                </div>
            </header>
            <div id="maincontent" className="page-main">
               <div className="body">
                    <MainScreen />
               </div>
            </div>
        </div>
    )
}

export default App;