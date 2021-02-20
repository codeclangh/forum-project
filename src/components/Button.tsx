const Button: React.FC = ({ children, ...props }) => {
  return (
    <button className="btn" {...props}>
      {children}
    </button>
  );
};

export default Button;
