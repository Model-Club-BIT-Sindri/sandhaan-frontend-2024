import "./input.scss";
const Input = ({ label, name, onChange, value, placeholder }) => {
  return (
    <div className="input">
      <label htmlFor={label}>{label}</label>
      <input
        type="text"
        name={name}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
