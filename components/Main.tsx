import styles from "./Main.module.css";
import LeftSection from "./LeftSection";
import SliderComponent from "./SliderComponent";
import TermYears from "./TermYears";
import PaymentCard from "./PaymentCard";
import { useState, useEffect } from "react";
import axios from "axios";

const Main = () => {

  // const [state, setState] = useState({
  //   principal: 250000,
  //   annualInterestRate: 1.5,
  //   termOfLoan: 25,
  // });

  const [principal, setPrincipal] = useState<number>(250000);
  const [annualInterestRate, setAnnualInterestRate] = useState<number>(1.5);
  const [termOfLoan, setTermOfLoan] = useState<number>(25);
  const [monthlyPayment, setMonthlyPayment] = useState<number>(853.5);

  useEffect(() => {
    // fetch monthlyPayment when any of the query parameters change
    const fetchData = async () => {
      try {
        console.log("principal, interest, term: ", principal, annualInterestRate, termOfLoan);

        const response = await axios.post("/api/mortgageCalculation", {
          principal,
          annualInterestRate,
          termOfLoan,
        });
        const { monthlyPayment } = response.data;
        setMonthlyPayment(monthlyPayment);
        console.log("Response.data : ", response.data);

      } catch (error) {
        console.log("Error calculating payment: ", error);
      }
    };

    fetchData();

  }, [principal, annualInterestRate, termOfLoan]);


  return (
    <div className={styles.main}>

      <div className={styles.title}>Get started with Digital Credit Experience</div>
      <div className={styles.subTitle}>Qualify or apply your mortgage in minutes</div>

      <div className={styles.container}>

        <div className={styles.left}>
          <LeftSection
            principal={principal}
            setPrincipal={setPrincipal}
            annualInterestRate={annualInterestRate}
            setAnnualInterestRate={setAnnualInterestRate}
            termOfLoan={termOfLoan}
            setTermOfLoan={setTermOfLoan}
          />
          <p>principal: {principal}</p>
          <p>annualInterestRate: {annualInterestRate}</p>
          <p>Selected Term Of Loan: {termOfLoan} Years</p>
        </div>

        <div className={styles.right}>
          <PaymentCard monthlyPayment={monthlyPayment} setMonthlyPayment={setMonthlyPayment} />
          <p>MonthlyPayment: {monthlyPayment}</p>
        </div>

      </div>

    </div>
  );
};

export default Main;