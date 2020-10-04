import React, { useState } from 'react';

import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';


function SearchInput () {
    const [text, setText] = useState('');
    const history = useHistory();


    const goSearch = event => {
        event.preventDefault();

        history.push('/search')
    }


    return (
        <form className="search">
           <div className="search__input">
               <SearchIcon className="search__inputIcon" />
                <input value={text} onChange={e => setText(e.target.value)} type="text"/>
               <MicIcon />
            </div> 

            <div className="search__buttons">
                <Button type="submit" onClick={goSearch} className="btn" variant="outlined">Google Search</Button>
                <Button type="submit" className="btn" variant="outlined">I'm Feeling Lucky</Button>
                  
            </div>
        </form>
    )
}


export default SearchInput;