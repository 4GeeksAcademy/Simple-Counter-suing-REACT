import React from "react";
import { useState, useEffect } from "react";


const Home = () => {
	const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });

  const formattedCount = count.toString().padStart(6, "0");
  const digits = formattedCount.split("");

  return (
        <div className="container">
            <div className="clock">
              <i class="fa fa-clock fa-2xl myclock"></i>
            </div>
          <div className="numbers">
              {digits.map((digit, index) => (
                <p className="text centered">{digit}</p>
                  )
                )}
          </div>
        </div>
       
    );
};

export default Home;
