import React from 'react';
import { useDispatch } from 'react-redux';
import { activeCategory, deactiveCategory } from '../../actions/categories';
import {
  removeProductsByCategory,
  setProductsByCategory,
} from '../../actions/products';
import {
  finishLoadingCategories,
  startLoadingCategories,
} from '../../actions/ui';
import { CategoryActive, CategoryNotActive } from './CategorySidebar.style';
import PropTypes from 'prop-types';

const Category = ({ id, category, isActive }) => {
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(startLoadingCategories());
    setTimeout(() => {
      dispatch(finishLoadingCategories());
      dispatch(activeCategory(id));
      dispatch(setProductsByCategory(id));
    }, 2000);
  };

  const handleRemove = () => {
    dispatch(deactiveCategory(id));
    dispatch(removeProductsByCategory(id));
  };
  return isActive ? (
    <CategoryActive onClick={handleRemove}>{category}</CategoryActive>
  ) : (
    <CategoryNotActive onClick={handleAdd}>{category}</CategoryNotActive>
  );
};

Category.propTypes = {
  id: PropTypes.string,
  category: PropTypes.string,
  isActive: PropTypes.bool,
  alt: PropTypes.string,
};

export default Category;