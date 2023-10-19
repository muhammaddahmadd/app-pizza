import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { totalCartQty, totalCartPrice } from './cartSlice';

function CartOverview() {
  const totalQty = useSelector(totalCartQty);
  const totalPrice = useSelector(totalCartPrice);
  if (!totalQty) return null;
  return (
    <div className="flex items-center justify-between  bg-stone-700 px-4 py-4 text-sm uppercase text-stone-200 sm:px-6 md:text-base">
      <p className=" space-x-4 font-semibold text-stone-300 sm:space-x-6">
        <span>{totalQty} pizzas</span>
        <span>${totalPrice}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
