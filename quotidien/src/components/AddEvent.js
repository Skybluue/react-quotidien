import CustomAppBar from './CustomAppBar';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import {api} from "../api";
import { v4 as uuidv4 } from 'uuid';
import React, {useState} from "react";
import {Link} from 'react-router-dom';

function AddEvent() {
    const Div = styled('div')(({ theme }) => ({
        ...theme.typography.button,
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(1),
      }));
      const [titre, setTitre] = useState("");
      const [lieu, setLieu] = useState("");
      const [description, setDesc] = useState("");
  return (
    <div>
      <CustomAppBar />
      <Container maxWidth="lg">
        <Box sx={{ pt: 2 }}>
            <div>
                <Div>{"Ajouter un évènement :"}</Div>
                <TextField value={titre} onChange={(event) => {setTitre(event.target.value)}} id="titre" label="Titre" variant="outlined" />
            </div>
            <div>
            <Box sx={{ m: 1 }} />
            <TextField value={lieu} onChange={(event) => {setLieu(event.target.value)}} id="lieu" label="Lieu" variant="outlined" />
            </div>
            <div>
            <Box sx={{ m: 1 }} />
            <TextField value={description} onChange={(event) => {setDesc(event.target.value)}} id="description" label="Description" variant="outlined" />
            </div>
            <div>
            <Div>{"Date :"} <input type="date" id='date' required pattern="\d{4}-\{d}2-\{d}2"></input></Div>    
            </div>
            <Link to="/" style={{ textDecoration: 'none' }}><Button variant="contained" onClick={() => api.createEvent({
                "id": uuidv4(),
                "date": document.getElementById("date").value,
                "lieu": lieu,
                "titre": titre,
                "importance" : 1,
                "description": description
            })}>Ajouter</Button></Link>
        </Box>
      </Container>
    </div>
  );
}

export default AddEvent;
