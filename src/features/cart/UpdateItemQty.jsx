import { useDispatch } from 'react-redux';
import Button from '../ui/Button';
import { decreaseQty, increaseQty } from './cartSlice';
function UpdateItemQty({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type="round" onClick={() => dispatch(decreaseQty(pizzaId))}>
        -
      </Button>
      <span className="text-sm font-medium">{currentQuantity}</span>
      <Button type="round" onClick={() => dispatch(increaseQty(pizzaId))}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQty;
