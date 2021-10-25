import styles from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={styles.users}>{props.children}</div>
  );
};

export default Card;
