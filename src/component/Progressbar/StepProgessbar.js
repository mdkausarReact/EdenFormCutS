import React from 'react'
import "react-step-progress-bar/styles.css";
import "./StepProgessbar.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const StepProgessbar = (props) => {

  {
    return (
      <ProgressBar
        percent={((props.step) * 100) / 3}
        filledBackground="linear-gradient(to right, #fefb72, #f0bb31)"
      >
        <Step transition="scale">
          {({ accomplished, page }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              1
            </div>
          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, page }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              2
            </div>

          )}
        </Step>
        <Step transition="scale">
          {({ accomplished, page }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              3
            </div>

          )}
        </Step>

        <Step transition="scale">
          {({ accomplished, page }) => (
            <div
              className={`step ${accomplished ? "completed" : null}`}
            >
              4
            </div>

          )}
        </Step>
      </ProgressBar>
    );
  }
}
export default StepProgessbar
