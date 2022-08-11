function Button({ children, type, version, isDisabled }) {
  return (
    <button
      type={type}
      isdisabled={isDisabled}
      className={`btn btn-${version}`}
    >
      {children}
    </button>
  );
}

export default Button;
