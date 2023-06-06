// import styles from "./Main.module.css";
import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const TermYears = () => {
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" id="period-radio-group-label"
        sx={{
          fontSize: "12px",
        }}
      >
        Period
      </FormLabel>
      <RadioGroup
        aria-labelledby="period-radio-group-label"
        name="radio-group"
        sx={{
          "& .TermYears-root .Mui-checked": {
            color: "#4C3272",
          },
          paddingLeft: "0.4rem",
        }}
      // value={value}
      // onChange={handleChange}
      >
        <FormControlLabel value="20" control={<Radio />} label="20 Years" />
        <FormControlLabel value="25" control={<Radio />} label="25 Years" />
        <FormControlLabel value="30" control={<Radio />} label="30 Years" />
      </RadioGroup>
    </FormControl>
  );
};

export default TermYears;