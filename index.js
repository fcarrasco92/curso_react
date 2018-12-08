import React from 'react';
import {render} from 'react-dom';
import Playlist from './src/playlist/components/playlist';
import data from './src/api.json';
const app = document.getElementById('app');
const holaMundo = <h1>Hola Mundo!</h1>;
                    
//ReactDOM.render("que voy a renderizar ", "dondé lo haré");
render(<Playlist data={data} />, app);
//console.log('Hola Mundo!');

