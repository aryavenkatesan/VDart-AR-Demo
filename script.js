// Define model sources
const models = {
  model1: {
    src: "modles/VDart3DLogoFinal19.glb",
    iosSrc: "modles/VDart 3D Logo 19.usdz",
  },
  model2: {
    src: "modles/VDartDigital3Dmodel3.glb",
    iosSrc: "modles/VDart Digital 3D Model4.usdz",
  },
  model3: {
    src: "modles/TrustPeople3DModel3.glb",
    iosSrc: "modles/Trust People 3D Model 4.usdz",
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
