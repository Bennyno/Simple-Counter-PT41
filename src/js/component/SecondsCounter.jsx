import React from "react";
import propTypes from "prop-types";
import { useState, useEffect } from "react";

export function SecondsCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div class="d-flex p-5">
      <div class="card">
        <div class="card-body bg-dark">
          <i class="fa-solid fa-clock text-light"></i>
        </div>
      </div>
      <div class="card">
        <div class="card-body bg-dark">
          <div class="text-light">{Math.floor(counter/100000)%10}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-body bg-dark">
          <div class="text-light">{Math.floor(counter/10000)%10}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-body bg-dark">
          <div class="text-light">{Math.floor(counter/1000)%10}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-body bg-dark">
          <div class="text-light">{Math.floor(counter/100)%10}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-body bg-dark">
          <div class="text-light">{Math.floor(counter/10)%10}</div>
        </div>
      </div>
      <div class="card">
        <div class="card-body bg-dark">
          <div class="text-light">{Math.floor(counter/1)%10}</div>
        </div>
      </div>
    </div>
  );
}


