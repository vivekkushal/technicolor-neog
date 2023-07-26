import React, { useContext } from 'react';
import { FilterContext } from '../../contexts/FilterContext';
import styled from 'styled-components';
const Sort = () => {
  const { filteredProducts, sort, updateSort } = useContext(FilterContext);

  return (
    <Wrapper>
      <div className="btn-container"></div>
      <p>{filteredProducts.length} movies found</p>
      <hr />
      <form>
        <label htmlFor="sort">sort by: </label>
        <select
          name="sort"
          id="sort"
          className="sort-input"
          value={sort}
          onChange={updateSort}
        >
          <option value="relevance">relevance</option>
          <option value="price-lowest">price (lowest)</option>
          <option value="price-highest">price (highest)</option>
          <option value="name-a">name (a-z)</option>
          <option value="name-z">name (z-a)</option>
        </select>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: auto auto 1fr auto;
  align-items: center;
  margin-bottom: 2rem;
  column-gap: 2rem;
  @media (max-width: 576px) {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.75rem;
    label {
      display: inline-block;
      margin-right: 0.5rem;
    }
  }
  @media (min-width: 768px) {
    column-gap: 2rem;
  }
  p {
    color: var(--clr-grey-6);
    text-transform: capitalize;
    margin-bottom: 0;
  }
  .sort-input {
    background-color: var(--clr-black-light);
    border-color: transparent;
    color: var(--clr-grey-6);
    font-size: 1rem;
    text-transform: capitalize;
    padding: 0.25rem 0.5rem;
  }
  label {
    color: var(--clr-grey-6);
    font-size: 1rem;
    text-transform: capitalize;
  }
`;

export default Sort;
