import React, { useEffect, useRef } from "react";

const Hypno = () => {
  const canvasElement = useRef(null);

  /**
   * rAF polyfill.
   */
  (() => {
    let lastTime = 0;
    let vendors = ["ms", "moz", "webkit", "o"];
    for (let x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
      window.requestAnimationFrame =
        window[vendors[x] + "RequestAnimationFrame"];
      window.cancelAnimationFrame =
        window[vendors[x] + "CancelAnimationFrame"] ||
        window[vendors[x] + "CancelRequestAnimationFrame"];
    }

    if (!window.requestAnimationFrame)
      window.requestAnimationFrame = (callback, element) => {
        let currTime = new Date().getTime();
        let timeToCall = Math.max(0, 16 - (currTime - lastTime));
        let id = window.setTimeout(() => {
          callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
      };

    if (!window.cancelAnimationFrame)
      window.cancelAnimationFrame = (id) => {
        clearTimeout(id);
      };
  })();

  useEffect(() => {
    let canvas = canvasElement.current,
      context = canvas.getContext("2d"),
      width = Math.min(window.innerWidth, window.innerHeight) * 0.85,
      height = width,
      radius = Math.min(width, height) * 0.5,
      // Number of layers
      quality = radius > 300 ? 180 : 90,
      // Layer instances
      layers = [],
      // Width/height of layers
      layerSize = radius * 0.3,
      // Layers that overlap to create the infinity illusion
      layerOverlap = Math.round(quality * 0.1),
      colorBlack = getComputedStyle(document.documentElement).getPropertyValue(
        "--black"
      ),
      colorWhite = getComputedStyle(document.documentElement).getPropertyValue(
        "--white"
      );

    // Takes a step in the simulation
    const step = () => {
      for (let i = 0, len = layers.length; i < len; i++) {
        layers[i].r += 0.005;
      }
    };

    // Clears the painting
    const clear = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);
    };

    const update = () => {
      requestAnimationFrame(update);

      step();
      clear();
      paint();
    };

    // Paints the current state
    const paint = () => {
      // Number of layers in total
      var layersLength = layers.length;

      // Draw the overlap layers
      for (
        let i = layersLength - layerOverlap, len = layersLength;
        i < len;
        i++
      ) {
        context.save();
        context.globalCompositeOperation = "destination-over";
        paintLayer(layers[i]);
        context.restore();
      }

      // Cut out the overflow layers using the first layer as a mask
      context.save();
      context.globalCompositeOperation = "destination-in";
      paintLayer(layers[0], true);
      context.restore();

      // // Draw the normal layers underneath the overlap
      for (let i = 0, len = layersLength; i < len; i++) {
        context.save();
        context.globalCompositeOperation = "destination-over";
        paintLayer(layers[i]);
        context.restore();
      }
    };

    // Pains one layer
    const paintLayer = (layer, mask) => {
      let size = layerSize + (mask ? 10 : 0);
      let size2 = size / 2;

      context.translate(layer.x, layer.y);
      context.rotate(layer.r);

      // No stroke if this is a mask
      if (!mask) {
        context.strokeStyle = colorBlack;
        context.lineWidth = 1;
        context.strokeRect(-size2, -size2, size, size);
      }

      context.fillStyle = colorWhite;
      context.fillRect(-size2, -size2, size, size);
    };

    const resize = () => {
      canvas.width = width;
      canvas.height = height;
    };

    const initialize = () => {
      for (let i = 0; i < quality; i++) {
        layers.push({
          x:
            width / 2 +
            Math.sin((i / quality) * 2 * Math.PI) * (radius - layerSize),
          y:
            height / 2 +
            Math.cos((i / quality) * 2 * Math.PI) * (radius - layerSize),
          r: (i / quality) * Math.PI,
        });
      }

      resize();
      update();
    };

    initialize();
  }, [canvasElement]);

  return <canvas ref={canvasElement}></canvas>;
};

export default Hypno;
