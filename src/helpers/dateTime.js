import React from "react";

export default function DateTime() {
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = today.getMonth();
  var yyyy = today.getFullYear();

  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var monthInLetters = monthNames[mm];

  today = monthInLetters + " " + dd + ", " + yyyy;

  return <h1>{today}</h1>;
}
