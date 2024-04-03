import React from "react";
import Styles from "./hero.module.css";
export default function Greet() {
  return (
    <div className={Styles.animatedTitle}>
      <div className={Styles.textTop}>
        <div>
          <span>The Model Club</span>
          <span>BIT Sindri</span>
        </div>
      </div>
      <div className={Styles.textBottom}>
        <div>Welcomes You!</div>
      </div>
    </div>
  );
}
