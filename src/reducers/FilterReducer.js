import { actions } from '../actions';

const {
  LOAD_PRODUCTS,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} = actions;

const FilterReducer = (state, action) => {
  const { allProducts } = state;

  switch (action.type) {
    case LOAD_PRODUCTS:
      let min = Math.min(...action.payload.map((product) => product.price));
      let max = Math.max(...action.payload.map((product) => product.price));

      return {
        ...state,
        allProducts: [...action.payload],
        filteredProducts: [...action.payload],
        filters: {
          ...state.filters,
          minPrice: min,
          maxPrice: max,
          price: max,
        },
      };
    case UPDATE_SORT:
      return {
        ...state,
        sort: action.payload,
      };
    case SORT_PRODUCTS:
      const { sort, filteredProducts } = state;
      let tempProductsOne = [...filteredProducts];
      if (sort === 'relevance') {
        tempProductsOne = [
          ...allProducts.filter((product) =>
            filteredProducts.includes(product)
          ),
        ];
      }
      if (sort === 'price-lowest') {
        tempProductsOne = tempProductsOne.sort((a, b) => a.price - b.price);
      }
      if (sort === 'price-highest') {
        tempProductsOne = tempProductsOne.sort((a, b) => b.price - a.price);
      }
      if (sort === 'name-a') {
        tempProductsOne = tempProductsOne.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
      if (sort === 'name-z') {
        tempProductsOne = tempProductsOne.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }
      return { ...state, filteredProducts: tempProductsOne };
    case UPDATE_FILTERS:
      const { name, value } = action.payload;

      return { ...state, filters: { ...state.filters, [name]: value } };
    case FILTER_PRODUCTS:
      let tempProductsTwo = [...allProducts];
      const { search, category, rating, price, unavailable } = state.filters;

      if (search) {
        tempProductsTwo = tempProductsTwo.filter(
          (product) =>
            product.title.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
        );
      }

      if (!category.includes('All')) {
        tempProductsTwo = tempProductsTwo.filter((product) =>
          product.genres.find((genre) => category.includes(genre))
        );
      }

      if (rating) {
        tempProductsTwo = tempProductsTwo.filter(
          (product) => product.rating <= rating
        );
      }

      if (price) {
        tempProductsTwo = tempProductsTwo.filter(
          (product) => product.price <= price
        );
      }

      if (!unavailable) {
        tempProductsTwo = tempProductsTwo.filter(
          (product) => product.available
        );
      }

      return { ...state, filteredProducts: tempProductsTwo };
    case CLEAR_FILTERS:
      return {
        ...state,
        filters: {
          ...state.filters,
          search: '',
          category: ['All'],
          rating: 10,
          price: state.filters.maxPrice,
          unavailable: true,
        },
      };
    default:
      return state;
  }
};

export default FilterReducer;
