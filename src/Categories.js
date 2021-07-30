import React from 'react';

const Categories = ({filterMenuItem, allCategories}) => {
  return (
    <div className="btn-container">
      {allCategories.map((category, index)=>{
          return (
            <button className="filter-btn" key={index} onClick={()=>{filterMenuItem(category)}} >{category}</button>
          )
      })}
    </div>
  )
};

export default Categories;
