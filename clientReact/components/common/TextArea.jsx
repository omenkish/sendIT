import React from 'react';
import PropTypes from "prop-types";

const TextArea = ({ label, text, placeholder, id, value, handleChange}) => (
  <div className="">
    <label htmlFor={label}><b>{text}</b></label>
    <textarea 
      id={id}
      value={value}
      placeholder={placeholder}
      onChange={handleChange}
      required
    ></textarea>
  </div>
);

TextArea.propTypes = {
  id: PropTypes.string.isRequired,
  value: PropTypes.string,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func,
}

export default TextArea;