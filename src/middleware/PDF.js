import React, { Component } from "react";
import jsPDF from "jspdf";

const MyDoc = props => {
  const {firstNameValue, lastNameValue} = props;
  console.log(firstNameValue, lastNameValue)
  var doc = new jsPDF();
  doc.text(`${firstNameValue}`, 10, 10);
  doc.save("CheckAccessForm.pdf");
}

export default MyDoc;