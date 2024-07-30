import React from "react";
import styles from "./Common.module.css";
const FormInput = ({ type, name, onChange, placeholder }) => {
  return (
    <input
      placeholder={placeholder}
      className={`form-control form-control-lg ${styles.input}`}
      type={type}
      name={name}
      onChange={onChange}
    />
  );
};

export default FormInput;
