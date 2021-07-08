import './App.css';
import { useEffect, useState, useMemo } from 'react';
import Header from './main-page/header';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import FeaturedHouse from './main-page/featured-house';
import SearchResults from './search-results/index';
import HouseFilter from './main-page/house-filter';

function App() {
  const [allHouses, setAllHouses] = useState([]);

  useEffect(() => {
    const fetchHouses = async () => {
      const rsp = await fetch("/houses.json");
      const houses = await rsp.json();
      setAllHouses(houses);
    };
    fetchHouses();
  }, []);

  const featuredHouse = useMemo(() => {
    if(allHouses.length){
      const randomIndex = Math.floor(Math.random() * allHouses.length);
      return allHouses[randomIndex];
  }}, [allHouses])

  return (
    <Router>
      <div className="container">
      <Header subtitle="Providing houses all over the world" />
      <HouseFilter allHouses={allHouses} />
      <Switch>
        <Route path="/searchresults/:country">
          <SearchResults allHouses={allHouses} />
        </Route>
        <Route path="/">
          <FeaturedHouse house={featuredHouse} />
        </Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
