
import React from 'react'
import { useState } from "react"
import { Card, Grid } from 'semantic-ui-react'

export default function Planets({ data }) {

    const [planeta, setPlaneta] = useState("");

    const capturaInput = (e) => {
        setPlaneta(e.target.value)
    }

    const [search, setSearch] = useState("");

    const handleSearchChange = (e) => {
        setSearch(e.target.value);
    };

    const filtered = !search ? data :
        data.filter((planeta) =>
            planeta.name.toLowerCase().includes(search.toLowerCase())
        );

    return (
        <div>
           <h1 className='pl'>Planetas</h1> 
           <br /> <br /> <br />
           <span><img className='p1' src="https://www.smashmexico.com.mx/wp-content/uploads/sites/4/2017/04/24145601/trend_info_planetas.jpg" alt="icono" /></span>

           <br /><br /> 
            <Grid className='input-container' >
                <input onChange={(e) => setSearch(e.target.value)} id="buscador" className="buscador" type="search" placeholder="Buscar Planeta" />
            </Grid>
            
            <br /><br /><br /><br />

            <Grid columns={3}>
                {
                    filtered.sort((a, b) => a.name > b.name ? 1 : -1,).map((planets, i) => {
                        return (
                            <Grid.Column key={i}>
                                <Card>
                                    <Card.Content>
                                        <Card.Header>{planets.name}</Card.Header>
                                        <Card.Description>
                                            Clima:  <b>{planets.climate} </b> <br />
                                            Terreno: <b>{planets.terrain}</b> <br />
                                            Población: <b>{planets.population}</b><br />
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