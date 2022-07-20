import { useDispatch } from 'react-redux';
import { addToCart } from 'redux/products/productsSlice';
import { Ul, Li, Button, Img } from './Products.styled';

const Products = ({ products }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <Ul>
        {products.map(({ _id, name, price, shop, image }) => {
          return (
            <Li key={_id}>
              <h3>{name}</h3>
              <p>{price}</p>
              <p> {shop}</p>
              <Img src={image} alt={name} width="150px" height="50px" />
              <Button
                onClick={() =>
                  dispatch(addToCart({ _id, name, price, shop, image }))
                }
              >
                Add to Card
              </Button>
            </Li>
          );
        })}
      </Ul>
    </div>
  );
};

export default Products;
