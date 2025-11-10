import PropTypes from 'prop-types';

export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium focus:outline-none focus:ring';
  const variants = {
    primary: `${base} bg-primary text-white hover:opacity-95 focus:ring-primary/30`,
    secondary: `${base} bg-gray-200 text-gray-800 hover:bg-gray-300`,
  };

  return (
    <button className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  className: PropTypes.string,
};
