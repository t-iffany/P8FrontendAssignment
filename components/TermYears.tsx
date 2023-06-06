// import styles from "./Main.module.css";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';
// import { Dispatch, SetStateAction } from "react";

interface TermYearsProps {
  termOfLoan: number;
  // setTermOfLoan: Dispatch<SetStateAction<number>>;
  setTermOfLoan: (value: number) => void;
}

const TermYears = (props: TermYearsProps) => {
  // const TermYears: React.FC<TermYearsProps> = ({ termOfLoan, setTermOfLoan }) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setTermOfLoan(parseInt(event.target.value, 10));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" id="termYears-radio-group-label"
        sx={{
          fontSize: "12px",
        }}
      >
        Period
      </FormLabel>
      <RadioGroup
        aria-labelledby="termYears-radio-group-label"
        name="radio-group"
        sx={{
          "& .TermYears-root .Mui-checked": {
            color: "#4C3272",
          },
          paddingLeft: "0.4rem",
        }}
        value={props.termOfLoan.toString()}
        onChange={handleChange}
      >
        <FormControlLabel value="20" control={<Radio />} label="20 Years" />
        <FormControlLabel value="25" control={<Radio />} label="25 Years" />
        <FormControlLabel value="30" control={<Radio />} label="30 Years" />
      </RadioGroup>
    </FormControl>
  );
};

export default TermYears;