import SliderComponent from "./SliderComponent";
import TermYears from "./TermYears";

interface LeftSectionProps {
  principal: number;
  setPrincipal: (value: number) => void;
  annualInterestRate: number;
  setAnnualInterestRate: (value: number) => void;
  termOfLoan: number;
  setTermOfLoan: (value: number) => void;
}

const LeftSection = (props: LeftSectionProps) => {

  const handlePrincipalChange = (value: number) => {
    props.setPrincipal(value);
  };

  const handleInterestChange = (value: number) => {
    props.setAnnualInterestRate(value);
  };

  const handleTermOfLoanChange = (value: number) => {
    props.setTermOfLoan(value);
  };

  return (
    <div>
      <SliderComponent
        title="Purchase Price"
        min={50000}
        max={2500000}
        value={props.principal}
        setValue={handlePrincipalChange}
        step={50000}
      />
      <SliderComponent
        title="Interest Rate"
        min={0}
        max={25}
        value={props.annualInterestRate}
        setValue={handleInterestChange}
        step={0.5}
      />
      <TermYears
        termOfLoan={props.termOfLoan}
        setTermOfLoan={handleTermOfLoanChange}
      />
    </div>
  );
};

export default LeftSection;