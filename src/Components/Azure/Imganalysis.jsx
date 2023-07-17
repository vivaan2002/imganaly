
async function Imganalysis(img_url) {
  console.log("Clicked");
    const response = await fetch("https://imgreader.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=read,caption&language=en", {
      method: 'POST',
      body: `{"url": "${img_url}"}`,
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'f8f8f394a02f47d58b6024de8a1a0405' 
      }
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  return (result)
}

export default Imganalysis
