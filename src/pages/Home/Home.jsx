import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import SearchForm from '../../components/SearchForm';



function Home () {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link className="" to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>

                  <div className="icons">
                    <AppsIcon />
                    <Avatar />
                  </div>
                </div>
            </div>

            <div className="home__body">
                <div className="logo">
                    <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt=""/>
                </div>
                
                <div className="home__inputContainer">
                    <div className="search-field">
                        <SearchForm />
                    </div>
                </div>
            </div>

        </div>
    )
}


export default Home;