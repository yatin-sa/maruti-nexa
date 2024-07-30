import styles from "./Common.module.css";
const Button = ({ label, onClick, type, className }) => {
  return (
    <button
      className={`${className} ${styles.button}`}
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
