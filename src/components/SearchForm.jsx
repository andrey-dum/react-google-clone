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
    const [error, setError] = useState(null);
    const history = useHistory();

    const handleChange = e => {
        setInput(e.target.value)
        if (input.length < 1 || input === '') {
            setError('Enter your search term!')
        } else {
            setError(null)
        }
    }

    const goSearch = event => {
        event.preventDefault();

        if(!error && input !== '') {
            dispatch({
                type: actionTypes.SET_SEARCH_TERM,
                term: input
            })
    
            history.push('/search')
        } else {
            setError('Enter your search term!')
        }
        
    }
    

    return (
        <form className="search">
           <div className="search__input">
               <SearchIcon className="search__inputIcon" />
                <input value={input} onChange={handleChange} type="text"  />
               <MicIcon />
            </div> 
            { error && <small style={{color: 'red'}}>{error}</small> }

            { !hideButtons ? (
                <div className="search__buttons">
                    <Button type="submit" onClick={goSearch} className="btn" variant="outlined">Google Search</Button>
                    <Button type="submit" onClick={goSearch} className="btn" variant="outlined">I'm Feeling Lucky</Button>
                    
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
                        onClick={goSearch} 
                        className="btn search__buttonsHidden" 
                        variant="outlined"
                    >I'm Feeling Lucky</Button>
                    
                </div>
            )}
            
        </form>
    )
}


export default SearchForm;