import React from 'react';
import { filterByCategory } from '../../utils/selectors/filterBycategory';
import {
  AddToCart,
  PriceSection,
  ProductImage,
  ProductInfo,
  ProductName,
  ProductPrice,
  ProductSection,
  ProductText,
} from './ProductCard.style';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({
  categoryId,
  imageUrl,
  imageAlt,
  name,
  text,
  price,
  productId,
}) => {
  const navigate = useNavigate();
  const category = filterByCategory(categoryId);

  const handleProductDetails = () => {
    navigate(`/productDetails/${productId}`, { replace: true });
  };

  return (
    <ProductSection onClick={handleProductDetails}>
      <ProductImage src={imageUrl} width={208} height={308} alt={imageAlt} />
      <ProductInfo>
        <ProductName>{name}</ProductName>
        <div>{category}</div>
        <ProductText>{text}</ProductText>
        <PriceSection>
          <ProductPrice>${price}</ProductPrice>
        </PriceSection>
        <AddToCart>Add to cart</AddToCart>
      </ProductInfo>
    </ProductSection>
  );
};

ProductCard.propTypes = {
  categoryId: PropTypes.string,
  imageUrl: PropTypes.string,
  imageAlt: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  price: PropTypes.number,
  productId: PropTypes.string,
};

export default ProductCard;