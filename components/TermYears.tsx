import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

interface TermYearsProps {
  termOfLoan: number;
  setTermOfLoan: (value: number) => void;
}

const TermYears = (props: TermYearsProps) => {

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
          paddingLeft: "0.4rem",
        }}
        value={props.termOfLoan.toString()}
        onChange={handleChange}
      >
        <FormControlLabel value="20" control={<Radio sx={{ "&.Mui-checked": { color: "#4C3272" } }} />} label="20 Years" />
        <FormControlLabel value="25" control={<Radio sx={{ "&.Mui-checked": { color: "#4C3272" } }} />} label="25 Years" />
        <FormControlLabel value="30" control={<Radio sx={{ "&.Mui-checked": { color: "#4C3272" } }} />} label="30 Years" />
      </RadioGroup>
    </FormControl>
  );
};

export default TermYears;