import { Slider } from '@mui/material';
import styles from "./SliderComponent.module.css";

interface SliderComponentProps {
  title: string;
  min: number;
  max: number;
  value: number;
  setValue: (value: number) => void;
  step: number;
}

const SliderComponent = (props: SliderComponentProps) => {

  const calculateValue = (value: number) => {
    // calculate value
    return value;
  };

  const valueLabelFormat = (value: number) => {
    if (props.title === "Purchase Price") {

      return `${value.toLocaleString()}`;

    } else if (props.title === "Interest Rate") {

      return `${value.toFixed(1)}%`;
    }

    return `${value}`;
  };

  const formatMinValue = () => {
    if (props.title === "Purchase Price") {
      const minValue = props.min / 1000;
      return `$${minValue}K`;
    }

    return props.min;
  };

  const formatMaxValue = () => {
    if (props.title === "Purchase Price") {
      const maxValue = props.max / 1000000;
      return `$${maxValue}M`;
    } else if (props.title === "Interest Rate") {
      return `${props.max}%`;
    }

    return props.max;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    // handle slider change
    props.setValue(newValue as number);
  };

  return (
    <div className={styles.sliderContainer}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.value}>
        {props.title === "Purchase Price" && (
          <span className={styles.dollar}>$</span>
        )}
        {valueLabelFormat(calculateValue(props.value))}
      </div>
      <Slider
        size="small"
        value={props.value}
        min={props.min}
        step={props.step}
        max={props.max}
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
        <div className={styles.min}>{formatMinValue()}</div>
        <div className={styles.max}>{formatMaxValue()}</div>
      </div>
    </div>
  );
};

export default SliderComponent;