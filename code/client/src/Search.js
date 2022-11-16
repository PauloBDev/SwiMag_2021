import React from 'react';
import axios from "axios";
import {Link} from 'react-router-dom';
import './Search.css'
import loupe from './images/Loupe.png'

function Search(props){
    return(
        <section class="search container">
            <form>
                <div class="div_search">
                    <label>Search</label>
                    <input class="input" type="search" id="search" autoComplete="off"/>
                    <div class="div_btn"> <button class='btn' type="submit" name="search">
                        <img src={loupe} alt='Loupe' />
                    </button> </div>
                </div>
            </form>
        </section>
    )
}
export default Search;