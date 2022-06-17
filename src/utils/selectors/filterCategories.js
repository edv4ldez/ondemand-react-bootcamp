import { results } from '../../mocks/en-us/productCategories.json';

export const filterCategories = () => {
  return results.map((category) => {
    return {
      id: category.id,
      name: category.data.name,
      type: category.type,
      imageHeight: category.data.main_image.dimensions.height,
      imageWidth: category.data.main_image.dimensions.width,
      imageUrl: category.data.main_image.url,
      imageAlt: category.data.main_image.alt,
    };
  });
};