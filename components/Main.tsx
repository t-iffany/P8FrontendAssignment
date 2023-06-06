import styles from "./Main.module.css";
import LeftSection from "./LeftSection";
import SliderComponent from "./SliderComponent";
import TermYears from "./TermYears";
// import PaymentCard from "./PaymentCard";
import { useState } from "react";

const Main = () => {

  // const [state, setState] = useState({
  //   principal: 250000,
  //   annualInterestRate: 1.5,
  //   termOfLoan: 25,
  // });

  const [principal, setPrincipal] = useState<number>(250000);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(1.5);
  const [termOfLoan, setTermOfLoan] = useState<number>(25);

  const handleTermOfLoanChange = (currentTermOfLoan: number) => {
    setTermOfLoan(currentTermOfLoan);
  };


  return (
    <div className={styles.main}>

      <div className={styles.title}>Get started with Digital Credit Experience</div>
      <div className={styles.subTitle}>Qualify or apply your mortgage in minutes</div>

      <div className={styles.container}>

        {/* <div className={styles.left}>
          <LeftSection />
        </div> */}
        <div>
          <SliderComponent />
          <SliderComponent />
          <TermYears termOfLoan={termOfLoan} setTermOfLoan={handleTermOfLoanChange} />
          <p>Selected Term Of Loan: {termOfLoan} Years</p>
        </div>

        <div className={styles.right}>
          {/* <PaymentCard /> */}
        </div>

      </div>

    </div>
  );
};

export default Main;