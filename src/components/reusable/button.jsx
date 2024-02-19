import "./style.scss";
const Button = ({ children, loading, className, type, onClick, disabled,id,isRowBtn }) => {
  
  return (
    <button
      type={type}
      className={`btn  ${className} ${disabled?"disabled-btn":""} ${isRowBtn?"disabled-btn-table":""}`}
      disabled={loading || disabled}
      onClick={onClick}
      id={id}
    >
      {!loading && <span>{children}</span>}
      {loading && <i className="fa fa-spin fa-spinner"></i>}
    </button>
  );
};
export default Button;