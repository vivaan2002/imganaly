import React from 'react'

async function Img_analysis(img_url) {
  console.log("Clicked");
    const response = await fetch("https://test200229.cognitiveservices.azure.com/computervision/imageanalysis:analyze?api-version=2023-02-01-preview&features=read,caption&language=en", {
      method: 'POST',
      body: `{"url": "${img_url}"}`,
      headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key': '97576a0a5be044abb47f0df138bdd26f' 
      }
    });
    console.log(response);
    const result = await response.json();
    console.log(result);
  return (result)
}

export default Img_analysis
