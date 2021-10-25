import styles from "./User.module.css";

const User = (props) => {
  return (
    <li className={styles.user}>
      <div>
        <h2>{props.name}: {props.age}</h2>
      </div>
    </li>
  );
};

export default User;
