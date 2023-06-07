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

  const handleTermOfLoanChange = (currentTermOfLoan: number) => {
    setTermOfLoan(currentTermOfLoan);
  };

  // console.log("principal, interest, term: ", principal, annualInterestRate, termOfLoan);

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


    // fetch('/api/mortgageCalculation', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     principal,
    //     annualInterestRate,
    //     termOfLoan,
    //   }),
    // })
    //   .then((response) => {
    //     if (!response.ok) {
    //       throw new Error('Network response was not ok');
    //     }
    //     return response.json();
    //   })
    //   .then((data) => {
    //     // Process the response data
    //     console.log('data: ', data);
    //     setMonthlyPayment(data.monthlyPayment);
    //   })
    //   .catch((error) => {
    //     // Handle the error
    //     console.error('error: ', error);
    //   });

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
          />
          <p>principal: {principal}</p>
          <p>annualInterestRate: {annualInterestRate}</p>
        </div>
        <div>
          {/* <SliderComponent />
          <SliderComponent /> */}
          <TermYears termOfLoan={termOfLoan} setTermOfLoan={handleTermOfLoanChange} />
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