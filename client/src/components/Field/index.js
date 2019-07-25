import React from 'react';

export const myInput = props => {
  return (
    <input {...props.input} type={props.type} placeholder={props.placeholder} />
  );
};