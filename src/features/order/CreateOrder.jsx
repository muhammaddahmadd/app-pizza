import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../services/apiRestaurant';
import Button from '../ui/Button';
import { useSelector } from 'react-redux';
import { clearCart, getcart, totalCartPrice } from '../cart/cartSlice';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';
import { formatCurrency } from '../utilities/helpers';
import { useState } from 'react';
// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const [withPriority, setWithPriority] = useState(false);
  const username = useSelector((state) => state.user.username);
  const navigation = useNavigation();
  const isSubmitting = navigation === 'Submitting';
  const cart = useSelector(getcart);
  const totalpriceCart = useSelector(totalCartPrice);
  const priorityPrice = withPriority ? totalpriceCart * 0.2 : 0;
  const totalOrderPrice = totalpriceCart + priorityPrice;
  // console.log(cart);
  const formError = useActionData();
  if (!cart.length > 0) return <EmptyCart />;
  return (
    <div className="p-4 py-6">
      <h2 className="mb-7 text-xl font-semibold">Ready to order? Lets go!</h2>

      <Form method="POST" action="/order/new">
        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className=" sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            required
            className="input w-full"
            defaultValue={username}
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formError?.phone && (
              <p className="mt-2 rounded-md bg-red-100 p-2 text-xs text-red-700">
                {formError.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-center">
          <label className="sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            type="checkbox"
            name="priority"
            id="priority"
            className="-yellow-400 h-4 w-4 focus:outline-none focus:ring focus:ring-yellow-400 focus:ring-offset-1"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="font-medium">
            Want to yo give your order priority?
          </label>
        </div>
        <input type="hidden" value={JSON.stringify(cart)} name="cart" />
        <div>
          <Button disabled={isSubmitting} type="primary">
            {isSubmitting
              ? 'Submitting..'
              : ` Order now for ${formatCurrency(totalOrderPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}
export async function action({ request }) {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  console.log(data);
  const order = {
    ...data,
    cart: JSON.parse(data.cart),
    priority: data.priority === 'true', // will return true or false
  };
  const errors = {};
  if (!isValidPhone(order.phone))
    // checks for correct phonenumber format
    errors.phone = 'Please write the correct phone number';

  if (Object.keys(errors).length > 0) return errors; // to check if the any error exists
  //if all good
  const newOrder = await createOrder(order);
  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
}

export default CreateOrder;
