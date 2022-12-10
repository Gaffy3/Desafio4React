
import React from 'react'
import { useState } from "react"
import { Card, Grid } from 'semantic-ui-react'

export default function Films({ data }) {

    const [Pelicula, setPelicula] = useState("");

    const capturaInput = (e) => {
        setPelicula(e.target.value)
    }

    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filtered = !search ? data :
        data.filter((pelicula) =>
            pelicula.title.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div>
           <h1 className='p'>Películas</h1>
           <br /> <br /> <br />
           <span><img className='p1' src="https://i.ebayimg.com/images/g/CjUAAOSwe2JeCj1I/s-l1600.jpg" alt="icono" /></span>
           <br />
           <br />
            <Grid className='input-container' >
                <input onChange={(e) => setSearch(e.target.value)} id="buscador" className="buscador" type="search" placeholder="Buscar Película" />
            </Grid>
            <br /><br />
            <br />
            <br />
             <Grid columns={3}>
                {
                    filtered.sort((a, b) => a.episode_id > b.episode_id ? 1 : -1,).map((films, i) => {
                        return (
                            <Grid.Column key={i}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{films.title}</Card.Header>
                                        <Card.Description>
                                            Episodio:  <b>{films.episode_id} </b> <br />
                                            Director: <b>{films.director}</b> <br />
                                            Productor: <b>{films.producer}</b><br />
                                            Fecha de realización: <b>{films.release_date}</b><br />
                                        </Card.Description>
                                    </Card.Content>
                                </Card>
                            </Grid.Column>
                        );
                    })}
            </Grid>
        </div>
    );
}