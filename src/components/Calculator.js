import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <div className="calculator">
          <div className="calc-monitor">0</div>
          <button className="calc-ac-button btn-main-color">AC</button>
          <button className="calc-plusminus-button btn-main-color">+/-</button>
          <button className="calc-percentage-button btn-main-color">%</button>
          <button className="calc-divide-button btn-second-color">÷</button>
          <button className="calc-7-button btn-main-color">7</button>
          <button className="calc-8-button btn-main-color">8</button>
          <button className="calc-9-button btn-main-color">9</button>
          <button className="calc-multiply-button btn-second-color">×</button>
          <button className="calc-4-button btn-main-color">4</button>
          <button className="calc-5-button btn-main-color">5</button>
          <button className="calc-6-button btn-main-color">6</button>
          <button className="calc-subtract-button btn-second-color">-</button>
          <button className="calc-1-button btn-main-color">1</button>
          <button className="calc-2-button btn-main-color">2</button>
          <button className="calc-3-button btn-main-color">3</button>
          <button className="calc-add-button btn-second-color">+</button>
          <button className="calc-0-button btn-main-color">0</button>
          <button className="calc-dot-button btn-main-color">.</button>
          <button className="calc-equal-button btn-second-color">=</button>
        </div>
      </main>
    );
  }
};

export default Calculator;