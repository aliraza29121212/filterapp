import React, { useState, useEffect } from "react";
import FilterPanel from "../../components/Home/FilterPanel";
import List from "../../components/Home/List";
import SearchBar from "../../components/Home/SearchBar";
import { dataList } from "../../constants";
import "./Style.css";

const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const handleSelectCategory = (event, value) =>
    !value ? null : setSelectedCategory(value);

  const [selectedRating, setSelectedRating] = useState(null); // for Rating Star
  const handleSelectRating = (event, value) =>
    !value ? null : setSelectedRating(value);

  const [cusines, setCusines] = useState([
    {
      id: 1,
      checked: false,
      label: "American",
    },
    {
      id: 2,
      checked: false,
      label: "Chinese",
    },
    {
      id: 3,
      checked: false,
      label: "Italian",
    },
  ]);
  const handleChangeChecked = (id) => {
    const cuisinesStateList = cusines;
    const changeCheckedCuisines = cuisinesStateList.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setCusines(changeCheckedCuisines);
  };

  const [selectedPrice, setSelectedPrice] = useState([1000, 5000]); // for price range
  const handleChangePrice = (event, value) => {
    setSelectedPrice(value);
  };

  const [list, setList] = useState(dataList); // this is for all list data of cards

  // this function is used for filtering the cards
  const applyFilters = () => {
    let updatedList = dataList;

    // Ratng Filter
    if (selectedRating) {
      updatedList = updatedList.filter(
        (item) => parseInt(item.rating) === parseInt(selectedRating)
      );
    }
    // Category filter
    if (selectedCategory) {
      updatedList = updatedList.filter(
        (item) => item.category === selectedCategory
      );
    }

    // Cusine Filter
    const cuisineChecked = cusines
      .filter((item) => item.checked)
      .map((item) => item.label.toLowerCase());
    if (cuisineChecked.length) {
      updatedList = updatedList.filter((item) =>
        cuisineChecked.includes(item.cuisine)
      );
    }

    setList(updatedList);
  };
  useEffect(() => {
    applyFilters();
  }, [selectedRating, selectedCategory, cusines]);

  return (
    <div className="home">
      {/* {Search Bar} */}
      <SearchBar />
      <div className="home_panelList-wrap">
        <div className="home_panel-wrap">
          {/* {Side Panel} */}
          <FilterPanel
            selectToggle={handleSelectCategory}
            selectedCategory={selectedCategory}
            selectRating={handleSelectRating}
            selectedRating={selectedRating}
            cusines={cusines}
            changeChecked={handleChangeChecked}
            selectedPrice={selectedPrice}
            changePrice={handleChangePrice}
          />
        </div>
        <div className="home_list-wrap">
          {/* {List & Empty View} */}
          <List list={list} />
        </div>
      </div>
    </div>
  );
};

export default Home;
