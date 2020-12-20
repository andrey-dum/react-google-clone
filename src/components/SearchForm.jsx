import React, { useState } from 'react';
import './SearchForm.css'

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import { useStateValue } from '../StateProvider';
import { actionTypes } from '../reducer';


function SearchForm ({hideButtons = false}) {
    const [{}, dispatch] = useStateValue();

    const [input, setInput] = useState('');
    const history = useHistory();

    const goSearch = event => {
        event.preventDefault();

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })

        history.push('/search')
    }


    return (
        <form className="search">
           <div className="search__input">
               <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={e => setInput(e.target.value)} type="text"  />
               <MicIcon />
            </div> 

            { !hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={goSearch} className="btn" variant="outlined">Google Search</Button>
                    <Button type="submit" className="btn" variant="outlined">I'm Feeling Lucky</Button>
                    
                </div>
            ) : (
                <div className="search__buttons search__buttonsHidden">
                    <Button 
                        type="submit" 
                        onClick={goSearch} 
                        className="btn search__buttonsHidden" 
                        variant="outlined"
                    >Google Search</Button>
                    <Button 
                        type="submit" 
                        className="btn search__buttonsHidden" 
                        variant="outlined"
                    >I'm Feeling Lucky</Button>
                    
                </div>
            )}
            
        </form>
    )
}


export default SearchForm;