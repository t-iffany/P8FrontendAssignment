import styles from "./Main.module.css";
import LeftSection from "./LeftSection";
import PaymentCard from "./PaymentCard";

const Main: React.FC = () => {
  return (
    <div className={styles.main}>

      <div className={styles.title}>Get started with Digital Credit Experience</div>
      <div className={styles.subTitle}>Qualify or apply your mortgage in minutes</div>

      <div className={styles.container}>

        <div className={styles.left}>
          <LeftSection />
        </div>

        <div className={styles.right}>
          <PaymentCard />
        </div>

      </div>

    </div>
  );
};

export default Main;