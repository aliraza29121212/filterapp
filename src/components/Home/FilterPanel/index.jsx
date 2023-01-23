import React from "react";
import FilterListToggle from "../../common/FilterListToggle";
import CheckboxProton from "../../common/CheckboxProton";
import SliderProton from "../../common/SliderProton";

import { categoryList, ratingList } from "../../../constants";
import "./style.css";

const FilterPanel = ({
  selectedCategory,
  selectToggle,
  selectedRating,
  selectRating,
  cusines,
  changeChecked,
  changePrice,
  selectedPrice,
}) => {
  return (
    <div>
      {/* {Category} */}
      <div className="input-group">
        <p className="label">Category</p>
        <FilterListToggle
          options={categoryList}
          value={selectedCategory}
          selectToggle={selectToggle}
        />
      </div>

      {/* {Cusine} */}
      <div className="input-group">
        <p className="label">Cuisine</p>
        {cusines.map((cusines) => (
          <CheckboxProton
            key={cusines.id}
            cusines={cusines}
            changeChecked={changeChecked}
          />
        ))}
      </div>

      {/* {Price Range} */}
      <div className="input-group">
        <p className="label-range">Range</p>
        <SliderProton value={selectedPrice} changePrice={changePrice} />
      </div>

      {/* {Star Rating} */}
      <div className="input-group">
        <p className="label">Star Rating</p>
        <FilterListToggle
          options={ratingList}
          value={selectedRating}
          selectToggle={selectRating}
        />
      </div>
    </div>
  );
};

export default FilterPanel;
