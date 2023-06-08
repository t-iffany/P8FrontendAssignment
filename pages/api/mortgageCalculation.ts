// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = {
  monthlyPayment?: string;
  error?: string;
};

type MortgageParams = {
  principal: number;
  annualInterestRate: number;
  termOfLoan: number;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === 'POST') {
    const { principal, annualInterestRate, termOfLoan } = req.body;
    const values = calculatePayment({ principal: parseInt(principal.toString()), annualInterestRate: parseFloat(annualInterestRate.toString()), termOfLoan: parseInt(termOfLoan.toString()) });
    setTimeout(() => {
      if (values !== "NaN") res.status(200).json({ monthlyPayment: values });
      else
        res
          .status(400)
          .json({
            error:
              "There was a problem calculating your mortgage. Please check your inputs",
          });
    }, 1000);
  } else {
    res.status(400).json({ error: 'Only accepts POST' });
  }
}

function calculatePayment({ principal, annualInterestRate, termOfLoan }: MortgageParams) {
  // console.log('principal: ', principal);
  // console.log('annualInterestRate: ', annualInterestRate);
  // console.log('termOfLoan: ', termOfLoan);

  var percentageRate = annualInterestRate / 1200;

  // console.log("percentageRate: ", percentageRate);

  var lengthOfLoan = 12 * termOfLoan;

  // console.log('lengthOfLoan: ', lengthOfLoan);

  var monthlyPayment = (principal * percentageRate) / (1 - (Math.pow((1 + percentageRate), lengthOfLoan * -1)));

  // console.log('monthlyPayment: ', monthlyPayment);

  const payment = monthlyPayment.toFixed(2);

  // console.log('payment: ', payment);

  return payment;
} 