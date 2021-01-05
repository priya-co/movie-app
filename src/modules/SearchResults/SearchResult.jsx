import React from 'react';
import Dancingloader from '../../dancing.gif';
import SearchCard from '../SearchCard/SearchCard';

export default function SearchResult(props) {
  return (
    <div>
      <div className='search-wrapper'>
        {props.searchResults.length ? (
          <>
            <div className='sucess-msg'>
              Showing Search Results for{' '}
              <b>
                <i>{props.userInput}</i>
              </b>
            </div>
            <div className='list-items'>
              {props.searchResults.map((item) => (
                <SearchCard key={item.id} {...item} />
              ))}
            </div>
          </>
        ) : (
          <div>
            {!props.userInput.length ? (
              <div>
                <img className='dancing-img' src={Dancingloader} alt='' />
                <p className='initial-msg'>
                  There are no results yet. Please enter keyword to search or I will keep dancing ..
                </p>
              </div>
            ) : (
              <>
                {!props.searchResults.length && props.loading ? (
                  <p className='initial-msg'>
                    {' '}
                    Please enter another movie ,series or character name
                  </p>
                ) : (
                  <p className='initial-msg'>Please click on search button</p>
                )}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
