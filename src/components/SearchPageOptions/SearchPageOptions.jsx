import React from 'react'
import './index.css'

import { Link } from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default function SearchPageOptions() {
    return (
        <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
                <div className="searchPage__option">
                    <SearchIcon />
                    <Link to="/all">All</Link>
                </div>
                <div className="searchPage__option">
                    <DescriptionIcon />
                    <Link to="/news">News</Link>
                </div>
                <div className="searchPage__option">
                    <ImageIcon />
                    <Link to="/images">Images</Link>
                </div>
                <div className="searchPage__option">
                    <LocalOfferIcon />
                    <Link to="/shopping">shopping</Link>
                </div>
                <div className="searchPage__option">
                    <RoomIcon />
                    <Link to="/maps">maps</Link>
                </div>
                <div className="searchPage__option">
                    <MoreVertIcon />
                    <Link to="/more">more</Link>
                </div>
            </div>
            <div className="searchPage__optionsRight">
                <div className="searchPage__option">
                    <Link to="/setting">Setting</Link>
                </div>
                <div className="searchPage__option">
                    <Link to="/tools">Tools</Link>
                </div>
            </div>
        </div>
    )
}
