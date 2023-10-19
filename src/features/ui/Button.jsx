import { Link } from 'react-router-dom';
function Button({ children, disabled, to, type, onClick }) {
  const base =
    ' rounded-full bg-yellow-400  font-semibold uppercase tracking-wide text-stone-800 transition-all hover:bg-yellow-300 focus:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-1 disabled:cursor-not-allowed duration-300 inline-block duration-300';

  const styles = {
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    small: base + ' text-xs px-4 py-2 md:px-5 md:py-2.5',
    secondary:
      ' rounded-full bg-stone-200 border-stone-300 px-4 py-2.5 md:px-6 md:py-3.5 font-semibold uppercase tracking-wide text-stone-800 transition-all focus:bg-stone-300 focus:outline-none focus:ring focus:ring-stone-300 focus:ring-offset-1 disabled:cursor-not-allowed  inline-block duration-300 hover:bg-stone-800 hover:text-stone-100 ',
  };
  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );
  if (onClick)
    return (
      <button
        className={styles[type]}
        onClick={onClick}
        disabled={disabled}
        to={to}
      >
        {children}
      </button>
    );
  return (
    <button className={styles[type]} disabled={disabled} to={to}>
      {children}
    </button>
  );
}

export default Button;
