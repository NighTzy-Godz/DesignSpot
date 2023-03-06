const ProductCard = ({ data }) => {
  const {
    brand,
    color,
    category,
    desc,
    id,
    img,
    name,
    price,
    size,
    stock,
    sku,
  } = data;

  return (
    <div className="">
      {id}: {name}
    </div>
  );
};

export default ProductCard;
