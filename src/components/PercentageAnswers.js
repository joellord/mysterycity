import React from "react";

export default function PercentageAnswers(props) {
  let percent = props.answers/props.total;
  if (isNaN(percent)) return "";
  return (
    <span>
      ({Math.round(percent * 100)}%)
    </span>
  )
}