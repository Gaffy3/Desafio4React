import React, { useState, useEffect } from 'react';
import Planets from './Planets';
import People from './People';
import Films from './Films';
import { Card, Grid } from 'semantic-ui-react'



function MiApi() {

    const [films, setFilms] = useState([]);
    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);

    useEffect(() => {
        async function fetchFilms() {
            let res = await fetch('https://swapi.dev/api/films/?format=json');
            let data = await res.json();
            setFilms(data.results);
        }

        async function fetchPeople() {
            let res = await fetch('https://swapi.dev/api/people/?format=json');
            let data = await res.json();
            setPeople(data.results);
        }

        async function fetchPlanets() {
            let res = await fetch('https://swapi.dev/api/planets/?format=json');
            let data = await res.json();
            setPlanets(data.results);
        }

        fetchFilms();
        fetchPeople();
        fetchPlanets();
    }, [])


    return (
        <div>
            <header>
                <div className="titulo">
                    <a href="https://swapi.co/">
                        <img src="https://fontmeme.com/permalink/190512/15d72ad95ac1a2b65ffcba268ccc8c78.png"></img>
                    </a>
                  </div>
            </header>
                        <br />
            <div>
                <br />
                <br />
            </div>
            <div className='informacion'>
                <br />
                <br />
                <Films data={films} />
                <br />      <br />     <br />  <br />    <br />       <br />     <br />     <br />   <br />             <br />       <br />      <br />    <br />  <br />  <br />  <br />     <br />              <br />
                <hr/>   <br />
                
                <People data={people} />
                <br /> <br /> <br /> <br /> <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
                <hr />
                <br />
                <br />
                <Planets data={planets} />
                <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
            </div>
            <footer>
                <br></br>
                <i className="fa-brands fa-facebook"></i>   <i class="fa-brands fa-instagram"></i>
                <br />
                Todos los derechos reservados 2022.
            </footer>
        </div>
    )
}


export default MiApi;