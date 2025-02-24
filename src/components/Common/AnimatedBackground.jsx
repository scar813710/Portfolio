import React, { useEffect } from "react";
import "./AnimatedBackground.css"; // Import the CSS file

// Function to generate random values for animation properties
const AnimatedBackground = () => {
  const particleNum = 30;

  useEffect(() => {
    const container = document.querySelector(".bgcontainer");
    if (container) {
      // Dynamically create the circles in the container
      for (let i = 1; i <= particleNum; i++) {
        const circleContainer = document.createElement("div");
        circleContainer.classList.add("circle-container");

        // Generate random animation values for each circle
        const randomStartPositionY = Math.random() * 10 + 100;
        const randomMoveDuration = 28000 + Math.random() * 9000; // Random duration
        const randomDelay = Math.random() * 37000; // Random delay

        const circle = document.createElement("div");
        circle.classList.add("circle");

        // Set animation delays and movement
        circle.style.animationDelay = `${Math.random() * 4000}ms`; // Random delay for fade in/out
        circleContainer.style.animationName = `move-frames-${i}`;
        circleContainer.style.animationDuration = `${randomMoveDuration}ms`;
        circleContainer.style.animationDelay = `${randomDelay}ms`;

        container.appendChild(circleContainer);
        circleContainer.appendChild(circle);

        // Create a dynamic keyframe rule
        const keyframes = document.styleSheets[0];
        const keyframeRule = `
          @keyframes move-frames-${i} {
            from {
              transform: translate3d(${
                Math.random() * 100
              }vw, ${randomStartPositionY}vh, 0);
            }
            to {
              transform: translate3d(${Math.random() * 100}vw, -${
          randomStartPositionY + Math.random() * 30
        }vh, 0);
            }
          }
        `;

        // Add the keyframe rule to the first stylesheet
        keyframes.insertRule(keyframeRule, keyframes.cssRules.length);
      }
    }
  }, []);

  return <div className="bgcontainer"></div>;
};

export default AnimatedBackground;
