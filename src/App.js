import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = ["all",...new Set(items.map((menuItem)=>{
  return menuItem.category
}))]

function App() {

  const [menuItem, setMenuItem] = useState(items)
  const [categories, setCategories] = useState(allCategories)

  const filterMenuItem = (category) => {
    if(category === 'all'){
      setMenuItem(items)
    }else{
      const newMenuItem = items.filter((menuItem)=>{
      return menuItem.category === category
    })
    setMenuItem(newMenuItem)
    }
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>  
        <Categories filterMenuItem={filterMenuItem} allCategories={categories}/>
        <Menu menuItems={menuItem}/>
      </section>
    </main>
  );
}

export default App;
