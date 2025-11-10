import PropTypes from 'prop-types';

function Button({ label, onClick }) {
  return <button onClick={onClick}>{label}</button>;
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default function Button({ children, variant = 'primary', className = '', ...props }) {
const base = 'inline-flex items-center justify-center rounded-2xl px-5 py-3 font-medium focus:outline-none focus:ring-2 focus:ring-offset-2'
const variants = {
primary: `${base} bg-primary text-white hover:opacity-95 focus:ring-primary/30`,
secondary: `${base} bg-secondary text-neutralDark hover:opacity-95 focus:ring-secondary/30`,
outline: `${base} border border-neutralDark text-neutralDark hover:bg-neutralLight`,
}
return <button className={`${variants[variant]} ${className}`} {...props}>{children}</button>
}

Button.propTypes = {
children: PropTypes.node,
variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
className: PropTypes.string,
}