// Define model sources
const models = {
  model1: {
    src: "modles/VDart3DLogoFinal19.glb",
    iosSrc: "modles/VDart 3D Logo 19.usdz",
  },
  model2: {
    src: "modles/Model2.glb",
    iosSrc: "modles/Model2.usdz",
  },
  model3: {
    src: "modles/Model3.glb",
    iosSrc: "modles/Model3.usdz",
  },
  model4: {
    src: "modles/Model4.glb",
    iosSrc: "modles/Model4.usdz",
  },
};

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Get references to elements
  const modelViewer = document.getElementById("modelViewer");
  const modelSelector = document.getElementById("model-selector");

  // Handle dropdown change
  modelSelector.addEventListener("change", (event) => {
    const selectedModel = event.target.value;
    const modelData = models[selectedModel];

    if (modelData) {
      modelViewer.src = modelData.src;
      modelViewer.setAttribute("ios-src", modelData.iosSrc);
    }
  });
});
