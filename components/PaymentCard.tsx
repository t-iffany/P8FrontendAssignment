import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./PaymentCard.module.css";

interface PaymentCardProps {
  monthlyPayment: number;
  setMonthlyPayment: (value: number) => void;
}

const PaymentCard = (props: PaymentCardProps) => {

  return (
    <div className={styles.container}>
      <Card className={styles.card}>
        <Typography className={styles.title}>
          Your total monthly payment will be
        </Typography>
        <div className={styles.payment}>
          <span className={styles.dollarSign}>$</span>
          <span className={styles.paymentValue}>{Math.floor(props.monthlyPayment)}</span>
          <span className={styles.cents}>{(props.monthlyPayment % 1 * 100).toFixed(0)}</span>
        </div>
        <Typography className={styles.subText}>
          /month
        </Typography>
        <Button variant="contained" className={styles.button}>Apply Today</Button>
      </Card>
    </div >
  );
};

export default PaymentCard;