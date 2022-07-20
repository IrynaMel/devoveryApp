import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCard } from 'redux/products/productsSlice';
import { Ul, Li, Div, Qty, Button, Buttons } from './CartProducts.styled';

const CartProducts = () => {
  const products = useSelector(state => state.Cart.products);
  const dispatch = useDispatch();
  console.log(products);

  return (
    <Ul>
      {products?.map(({ _id, price, name, shop, qty, image }) => {
        return (
          <Li key={_id}>
            <img src={image} alt={name} width="120px" />
            <Div>
              <h3>{name}</h3>
              <p>Price:{price}</p>
              <Qty>
                <p>{qty}</p>
                <Buttons>
                  <Button
                    onClick={() =>
                      dispatch(addToCart({ _id, name, price, shop, image }))
                    }
                  >
                    +
                  </Button>
                  <Button
                    onClick={() =>
                      dispatch(
                        removeFromCard({ _id, name, price, shop, image })
                      )
                    }
                  >
                    {' '}
                    -
                  </Button>
                </Buttons>
              </Qty>
            </Div>
          </Li>
        );
      })}
    </Ul>
  );
};

export default CartProducts;
