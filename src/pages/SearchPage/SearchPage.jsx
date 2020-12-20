import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'
import { useStateValue } from '../../StateProvider';
import SearchForm from '../../components/SearchForm';
import useGoogleSearch from '../../useGoogleSearch';

// import Response from '../../response'
import SearchPageOptions from '../../components/SearchPageOptions/SearchPageOptions';



function SearchPage () {
   
    const [{term}, dispatch] = useStateValue();
    
    // search
    const { data } = useGoogleSearch(term)
    
    // Example response data 
    //const data = Response;
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

                    <SearchPageOptions />
                
                </div>
                
            </div>
            
            { term && (
                <div className="searchPage__results">
                    <p className="searchPage__resultsCout">
                        About {data?.searchInformation.formattedTotalResults} results ({data?.searchInformation.formattedSearchTime} seconds) for {term}
                    </p>

                    { data?.items.map((item, index) => (
                        <div className="searchPage__result" key={index}>
                            <a href={item.link}>
                                {item.pagemap?.cse_image?.length > 0 && item.pagemap?.cse_image[0]?.src && (
                                    <img
                                        className="searchPage__resultImage"
                                        src={item.pagemap?.cse_image[0]?.src}
                                        alt=""
                                    />
                                )}

                                {item.displayLink} 
                            </a>
                            <a href={item.link} className="searchPage__resultTitle">
                                <h2>{item.title}</h2>
                            </a>
                            <p className="searchPage__resultSnippet"> 
                                {item.snippet}
                            </p>

                        </div>
                    )) }

                </div>
            )}               

             

            

        </div>
    )
}


export default SearchPage;