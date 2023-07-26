import React, { useContext } from 'react';
import styled from 'styled-components';
import { FilterContext } from '../../contexts/FilterContext';
import { CategoriesContext } from '../../contexts/CategoriesContext';

const Filters = () => {
  const {
    filters: {
      search,
      category,
      rating,
      minPrice,
      maxPrice,
      price,
      unavailable,
    },
    updateFilters,
    clearFilters,
  } = useContext(FilterContext);

  const { categories } = useContext(CategoriesContext);
  const allCategories = ['All', ...categories.map((ctg) => ctg.categoryName)];

  return (
    <Wrapper>
      <div className="content">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <input
              type="text"
              name="search"
              placeholder="search"
              className="search-input"
              value={search}
              onChange={updateFilters}
            />
          </div>
          <div className="form-control">
            <h5>movie genres</h5>
            <div>
              {allCategories.map((ctg, ind) => (
                <div className="category-container" key={ind}>
                  <input
                    type="checkbox"
                    name="category"
                    onChange={updateFilters}
                    id={ctg}
                    value={ctg}
                    checked={category.includes(ctg)}
                    className={category.includes(ctg) ? 'active' : null}
                  />
                  <label htmlFor={ctg}>{ctg}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="form-control">
            <h5>rating</h5>
            <select
              name="rating"
              value={rating}
              onChange={updateFilters}
              className="rating"
            >
              <option value="10">upto 10</option>
              <option value="8">upto 8</option>
              <option value="6">upto 6</option>
              <option value="4">upto 4</option>
              <option value="2">upto 2</option>
            </select>
          </div>
          <div className="price-container form-control">
            <h5>price</h5>
            <p className="price">{price}</p>
            <input
              type="range"
              name="price"
              onChange={updateFilters}
              min={minPrice}
              max={maxPrice}
              value={price}
              step="50"
            />
          </div>
          <div className="unavailable form-control">
            <input
              type="checkbox"
              name="unavailable"
              id="unavailable"
              onChange={updateFilters}
              checked={unavailable}
            />
            <label htmlFor="unavailble">include unavailable</label>
          </div>
        </form>
        <button type="button" className="btn" onClick={clearFilters}>
          clear filters
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    margin-bottom: 1.25rem;
    h5 {
      margin-bottom: 0.5rem;
    }
  }
  .search-input {
    padding: 0.5rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    letter-spacing: var(--spacing);
  }
  .search-input::placeholder {
    color: var(--clr-black);
    text-transform: capitalize;
  }

  .category-container {
    display: flex;
  }
  .category-container input {
    accent-color: var(--clr-primary-11);
    display: block;
    margin: 4px 0;
    padding: 4px 0;
    text-transform: capitalize;
    background: transparent;
    border: none;
    border-bottom: 1px solid transparent;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-6);
    cursor: pointer;
    margin-right: 10px;
  }
  .category-container .active + label {
    border-bottom: 2px solid var(--clr-primary-11);
    margin: 0;
    padding 0;
  }
  .rating {
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    border-color: transparent;
    padding: 0.25rem;
    text-transform: capitalize;
  }

  .price-container input {
    accent-color: var(--clr-primary-11);
  }
  .price {
    color: var(--clr-grey-7);
    margin-bottom: 0.25rem;
  }
  .unavailable {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    text-transform: capitalize;
    column-gap: 0.5rem;
    font-size: 1rem;
    max-width: 200px;
  }
  .unavailable input {
    accent-color: var(--clr-primary-11);
  }
  .btn {
    background: var(--clr-purple);
    color: var(--clr-primary-1);
    margin-top: 1rem;
  }
  @media (min-width: 768px) {
    .content {
      position: sticky;
      top: 1rem;
    }
  }
`;

export default Filters;
