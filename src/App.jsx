import { useState } from "react";
import Menu from "./Menu";
import Title from "./Title";
import menu from './data'
import Categories from "./Categories";

const allCategories = [ 'all', ...new Set( menu.map( item => item.category ) ) ]

const App = () => {
  const [ categories, setCategories ] = useState( allCategories )
  const [ menuItems, setMenuItems ] = useState( menu );

  const filterCategories = ( category ) => {
    if ( category == 'all' ) {
      setMenuItems( menu );
      return;
    }
    let newItems = menu.filter( menu => menu.category === category )
    setMenuItems( newItems )
  }
  return <main>
    <section className="menu">
      <Title title="Our Menu" />
      <Categories categories={categories} filterCategories={filterCategories} />
      <Menu items={menuItems} />
    </section>
  </main>;
};
export default App;
