import styles from "./layout.module.css";
import footer from "../../assets/img/footer.PNG";

const Footer = () => {
  return (
    <footer style={{ width: "100%" }}>
      <img src={footer} height={60} width="100%" />
    </footer>
  );
};

export default Footer;
