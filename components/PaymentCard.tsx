import Card from '@mui/material/Card';
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import styles from "./PaymentCard.module.css";

const PaymentCard = () => {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <Typography className={styles.title}>
          Your total monthly payment will be
        </Typography>
        <Typography className={styles.payment}>
          853
        </Typography>
        <Typography className={styles.subText}>
          /month
        </Typography>
      </CardContent>
      {/* <CardActions> */}
      {/* <div className={styles.buttonContainer}> */}
      <Button variant="contained" className={styles.button}>Apply Today</Button>
      {/* </div> */}
      {/* </CardActions> */}
    </Card>
  );
};

export default PaymentCard;