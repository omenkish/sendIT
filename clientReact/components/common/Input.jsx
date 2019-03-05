import React from 'react';
import PropTypes from "prop-types";

const Input = ({ label, text, placeholder, type, id, value, handleChange, required}) => (
  <div className="">
    <label htmlFor={label}>{text}</label>
    <input 
      type={type}
      className=""
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required={required}
    />
  </div>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  required: PropTypes.bool.isRequired,
}
export default Input;