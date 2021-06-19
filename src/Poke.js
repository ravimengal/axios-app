import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {  } from 'react-bootstrap'

export default function Poke() {

    const [num, setNum] = useState()
    const [name, setName] = useState("Loading...")
    const [moves, SetMoves] = useState("Loading...")


   
    useEffect(() => {

    
        async function getApi() {
            const res =  await axios.get(`https://pokeapi.co/api/v2/pokemon/${ num}`)
           
            console.log( `name of the pokemon` , res.data.name)
            console.log(`numbers of moves `,res.data.moves.length)
            
            setName(res.data.name)
            SetMoves(res.data.moves.length)

        }
        getApi();
         
    },[num])


    return (
        <div>
            <h1 style={{textAlign:'center'}}>Using Axios to fetch data from Poke Api</h1>
            <div className="form-floating container">
                <select value={num} onChange={(e)=>{setNum(e.target.value) }}   
                className="form-select" id="floatingSelect" 
                aria-label="Floating label select example">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                    <option value="13">13</option>
                    <option value="14">14</option>
                    <option value="15">15</option>
                    <option value="16">16</option>
                    <option value="17">17</option>
                    <option value="18">18</option>

                </select>
                <label htmlFor="floatingSelect">Select Your Pokemon</label>
                <br></br>

                <div className="container text-align-center">
                <h1> Your pokemon is {name} </h1> 
                <br></br>
                <h1> Numbers of Moves {moves} moves</h1>
                </div>
            </div>
        </div>
    )
}
