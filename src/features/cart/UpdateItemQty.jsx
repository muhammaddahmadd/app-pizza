import { useDispatch } from 'react-redux';
import Button from '../ui/Button';
import { decreaseQty, increaseQty } from './cartSlice';
function UpdateItemQty({ pizzaId }) {
  const dispatch = useDispatch();
  return (
    <div>
      <Button type="round" onClick={() => dispatch(decreaseQty(pizzaId))}>
        -
      </Button>
      <Button type="round" onClick={() => dispatch(increaseQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQty;
