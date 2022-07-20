import Form from '../Form/Form';
import CartProducts from 'components/CartProducts/CartProducts';
import { Div, P, Button } from './Cart.stuled';

const Cart = ({ onOrder, state, onChange, total }) => {
  return (
    <div>
      <form onSubmit={onOrder}>
        <div style={{ display: 'flex' }}>
          <Form state={state} onChange={onChange} />
          <CartProducts />
        </div>
        <Div>
          <P> Total: {total}</P>
          <Button type="submit">Submit</Button>
        </Div>
      </form>
    </div>
  );
};

export default Cart;
