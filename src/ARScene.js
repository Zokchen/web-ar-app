// src/ARScene.js
import React, { useEffect } from "react";

const ARScene = () => {
  useEffect(() => {
    // Ensure aframe and aframe-ar scripts are loaded
    const scriptAFrame = document.createElement("script");
    scriptAFrame.src = "https://aframe.io/releases/1.2.0/aframe.min.js";
    scriptAFrame.async = true;
    document.body.appendChild(scriptAFrame);

    const scriptARjs = document.createElement("script");
    scriptARjs.src =
      "https://cdn.rawgit.com/jeromeetienne/ar.js/1.6.2/aframe/build/aframe-ar.js";
    scriptARjs.async = true;
    document.body.appendChild(scriptARjs);

    return () => {
      document.body.removeChild(scriptAFrame);
      document.body.removeChild(scriptARjs);
    };
  }, []);

  return (
    <a-scene embedded arjs="sourceType: webcam;">
      <a-marker preset="hiro">
        <a-box position="0 0.5 0" material="color: red;"></a-box>
      </a-marker>
      <a-entity camera></a-entity>
    </a-scene>
  );
};

export default ARScene;
