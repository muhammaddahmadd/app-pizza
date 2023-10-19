import { useSelector } from 'react-redux';
import { formatCurrency } from '../utilities/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQty from './UpdateItemQty';
import { getQtyById } from './cartSlice';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getQtyById(pizzaId));
  return (
    <li className="py-3  sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQty pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
