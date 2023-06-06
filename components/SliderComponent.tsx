// import styles from "./Main.module.css";
import { Typography, Slider } from '@mui/material';
import styles from "./SliderComponent.module.css";
import { useState } from 'react';

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
    return `${value}`;
  };

  const handleChange = (event: Event, newValue: number | number[]) => {
    // handle slider change
    props.setValue(newValue as number);
  };

  return (
    <div className={styles.sliderContainer}>
      <Typography id="non-linear-slider">
        <div className={styles.title}>{props.title}</div>
        <div className={styles.value}>{valueLabelFormat(calculateValue(props.value))}</div>
      </Typography>
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
        <div>{props.min}</div>
        <div>{props.max}</div>
      </div>
    </div>
  );
};

export default SliderComponent;