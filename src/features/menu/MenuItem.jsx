import Button from '../ui/Button';
import { formatCurrency } from '../utilities/helpers';

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  console.log(id);
  console.log(pizza);
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
          <Button type="small">Add</Button>
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
