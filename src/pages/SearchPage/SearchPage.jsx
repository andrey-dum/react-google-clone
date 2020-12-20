import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import { useStateValue } from '../../StateProvider';
import SearchForm from '../../components/SearchForm';
import useGoogleSearch from '../../useGoogleSearch';

import Respone from '../../response'
import SearchIcon from '@material-ui/icons/Search';
import DescriptionIcon from '@material-ui/icons/Description';
import ImageIcon from '@material-ui/icons/Image';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import RoomIcon from '@material-ui/icons/Room';
import MoreVertIcon from '@material-ui/icons/MoreVert';


function SearchPage () {
    const [{term}, dispatch] = useStateValue();

    // search
    //const { data } = useGoogleSearch(term)

    const data = Respone;
    console.log(data.items);

    // https://developers.google.com/custom-search/v1/using_rest
    // https://cse.google.com/cse/all

    return (
        <div className="search-page">
             
             <div className="searchPage__header">

                <Link to="/">
                    <img
                        className="searchPage__logo"
                        alt=""
                        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
                    />
                </Link>

                <div className="searchPage__headerBody">
                    <SearchForm hideButtons />
               

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
                
                    </div>
                
             </div>
             <div className="searchPage__results">

                </div>

             

            

        </div>
    )
}


export default SearchPage;