import SliderComponent from "./SliderComponent";
import TermYears from "./TermYears";

const LeftSection: React.FC = () => {
  return (
    <div>
      <SliderComponent />
      <SliderComponent />
      <TermYears />
    </div>
  );
};

export default LeftSection;