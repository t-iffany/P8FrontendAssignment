// import styles from "./Main.module.css";
import { Typography, Slider } from '@mui/material';
import styles from "./SliderComponent.module.css";

const SliderComponent: React.FC = () => {

  const value = 250000;

  const calculateValue = (value: number) => {
    // calculate value
    return value;
  };

  const valueLabelFormat = (value: number) => {
    return `${value}`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    // handle slider change
  };

  return (
    <div className={styles.sliderContainer}>
      <Typography id="non-linear-slider">
        <div className={styles.title}>Purchase Price</div>
        <div className={styles.value}>{valueLabelFormat(calculateValue(value))}</div>
      </Typography>
      <Slider
        size="small"
        value={value}
        min={50000}
        step={1}
        max={2500000}
        scale={calculateValue}
        getAriaValueText={valueLabelFormat}
        valueLabelFormat={valueLabelFormat}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="non-linear-slider"
        classes={{
          thumb: styles.thumb,
          track: styles.track,
          rail: styles.rail,
        }}
      />
      <div className={styles.sliderMinMax}>
        <div>$50K</div>
        <div>$2.5M</div>
      </div>
    </div>
  );
};

export default SliderComponent;