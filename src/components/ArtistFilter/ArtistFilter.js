import React from 'react';
import ArtistFilterItem from './ArtistFilterItem';
import ArtistFilterGenre from './ArtistFilterGenre';
import './ArtistFilter.css';
import Artist from '../../img/artist.png';
import Genre from '../../img/genre.png';

function ArtistFilter() {
    return (
        
        <div className= 'ArtistFilter'>
            <form>
                <select className='artist-list'> 
              
                    <option value="any">
                         Nom de l'artiste</option>
                    <ArtistFilterItem />
                   
                </select>
            </form>

            <form>
                <select className='genre-list'>
                    <option value="any">Genre</option>
                    <ArtistFilterGenre />
                </select>
            </form>
        </div>
    );
}







export default ArtistFilter;
