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
        <div className="d-flex flex-row m-4 display-1 bg-dark text-white">
            <i class="fa fa-clock fa-2xl myclock"></i>
          <div className="d-flex flex-row mb-3 display-1">
              {digits.map((digit, index) => (
                <p className="text centered">{digit}</p>
                  ))}
          </div>
        </div>
       
    );
};

export default Home;
