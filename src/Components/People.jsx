
import React from 'react'
import { useState } from "react"
import { Card, Grid } from 'semantic-ui-react'

export default function People({ data }) {

    const [personaje, setPersonaje] = useState("");
    
    const capturaInput = (e) => {
        setPersonaje(e.target.value)
    }

    const [search, setSearch] = useState("");
    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };
    
    const filtered = !search ? data :
        data.filter((personaje) =>
        personaje.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
        <h1 className='pe'>Personajes</h1>
        <br /> <br /> <br />
        <span><img className='p1' src="https://filesedc.com/uploads/144/img/2018/11/1200/una-guia-completa-de-los-personajes-de-star-wars-en-todas-las-peliculas-de-la-saga-5bfc091745d6b.webp" alt="icono" /></span>
        <br />
        <br />
          <Grid className='input-container' columns={1}>
            <input onChange={(e) => setSearch(e.target.value)}  id="buscador" name="buscador" type="search" placeholder="Buscar Personaje "/>
        </Grid>
        <br /><br /><br /><br />

        <Grid columns={3}>
            {
                filtered.sort((a, b) => a.name > b.name ? 1 : -1,).map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                    <Card.Description>
                                    Altura:  <b>{people.height} cm.</b> <br />
                                    Color de Pelo: <b>{people.hair_color}</b> <br />
                                    Color de Ojos: <b>{people.eye_color}</b><br />
                                    
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