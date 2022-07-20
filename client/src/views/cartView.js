import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import get from '../API/Api';
import Cart from '../components/Cart/Cart';
import { Link } from 'react-router-dom';

const CartView = () => {
  const [state, setState] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const products = useSelector(state => state.Cart.products);

  const onChange = e => {
    setState(prevState => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const result = products.map(item => Number(item.price) * Number(item.qty));
  const total = result.reduce((sum, elm) => sum + elm, 0);
  const onOrder = e => {
    e.preventDefault();
    const order = {
      ...state,
      products,
      total,
    };
    console.log(order);
    get.makeOrder(order);
  };
  return (
    <>
      {products.length === 0 ? (
        <p style={{ textAlign: 'center' }}>
          Your cart is empty <br /> go for a shopping
          <Link to="/devoveryApp/home"> Delivery page</Link>
        </p>
      ) : (
        <Cart
          onOrder={onOrder}
          state={state}
          onChange={onChange}
          total={total}
        />
      )}
    </>
  );
};

export default CartView;
