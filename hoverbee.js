const Hoverbee = {
  animate(element, x, y, duration = 300) {
    element.animate([{ translate: `${x}px ${y}px` }], {
      duration,
      fill: "forwards",
    });
  },
};

function hoverbee({
  element,
  strength = 10,
  threshold = 200,
  duration = 300,
  fallbackDuration = 300,
}) {
  let elementInstance = null;
  let calculatedStrength = strength / 100;

  if (typeof element === "string") {
    elementInstance = document.querySelector(element);
  } else if (element instanceof Element) {
    elementInstance = element;
  } else {
    throw new Error(
      "'element' parameter needs to be either a selector string or Element instance"
    );
  }

  const box = elementInstance.getBoundingClientRect();

  elementInstance.addEventListener("mouseenter", () => {
    let callback = (e) => {
      const centerX = (box.left + box.right) / 2;
      const centerY = (box.top + box.bottom) / 2;
      const moveX = centerX - e.x;
      const moveY = centerY - e.y;
      const factor = 1 / calculatedStrength;
      Hoverbee.animate(
        elementInstance,
        -moveX / factor,
        -moveY / factor,
        duration
      );

      const distance = Math.sqrt(
        Math.pow(e.x - centerX, 2) + Math.pow(centerY - e.y, 2)
      );

      if (distance > threshold) {
        removeEventListener("mousemove", callback);
        Hoverbee.animate(elementInstance, 0, 0, fallbackDuration);
      }
    };

    addEventListener("mousemove", callback);
  });
}
