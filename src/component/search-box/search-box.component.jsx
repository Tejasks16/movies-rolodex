import React from 'react';

import './seach-box.style.css';

export const SearchBox = ({placeholder, handlechange}) =>(

    <input 
        className="search"
        type='search'    
        placeholder={placeholder}
        onChange={handlechange}
       />

)