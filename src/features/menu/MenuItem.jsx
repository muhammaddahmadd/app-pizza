import { useDispatch, useSelector } from 'react-redux';
import Button from '../ui/Button';
import { formatCurrency } from '../utilities/helpers';
import { addItem, getQtyById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQty from '../cart/UpdateItemQty';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQty = useSelector(getQtyById(id));
  const dispatch = useDispatch();
  const isInCart = currentQty > 0;
  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  }

  return (
    <li className="flex gap-3 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-60 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5 ">
        <p className="font-medium">{name}</p>
        <p className="text-sm capitalize italic text-stone-500">
          {ingredients.join(', ')}
        </p>
        <div className="mt-auto flex items-center justify-between text-sm">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          {isInCart && (
            <div className="flex items-center gap-3 sm:gap-8">
              <UpdateItemQty pizzaId={id} currentQuantity={currentQty} />
              <DeleteItem pizzaId={id} />
            </div>
          )}
          {!soldOut && !isInCart && (
            <Button type="small" onClick={handleAddToCart}>
              Add
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

// MenuItem.propTypes = {
//   pizza: PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     name: PropTypes.string.isRequired,
//     unitPrice: PropTypes.number.isRequired,
//     ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
//     soldOut: PropTypes.bool.isRequired,
//     imageUrl: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default MenuItem;
