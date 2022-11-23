import React from "react";
import LoadingSpinnerStyles from "../LoadingSpinner/LoadingSpinner.module.css";

export default function LoadingSpinner() {
  return (
    <div className={LoadingSpinnerStyles.spinnerContainer}>
      <div className={LoadingSpinnerStyles.loadingSpinner}>
      </div>
    </div>
  );
}