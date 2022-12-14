import React from 'react';
import { Button } from './Button';

const NumberButton = ({
  inputNum,
  setInputNum,
  ...props }) => {

  const buttClick = () => {
    setInputNum(
      [...inputNum, props.children]
    )
  }


  return (
    <div onClick={buttClick}>
      <Button children={props.children} />
    </div>
  );
};

export default NumberButton;