
async function Img_analysis(img_url) {
  console.log("Clicked");
    const response = await fetch("https://test292002.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=read,caption&language=en", {
      method: 'POST',
      body: `{"url": "${img_url}"}`,
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': 'de416ad15fe44755b364ab99f8ae1dec' 
      }
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  return (result)
}

export default Img_analysis
