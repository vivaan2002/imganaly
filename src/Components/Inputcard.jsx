import React,{ useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Uploadimg from "./Azure/Uploadimg";
import Imganalysis from "./Azure/Imganalysis";

const Inputcard = () => {
  const [image, setimage]=useState('https://images.imyfone.com/filme/video/Make-a-YouTube-Video-on-Your-Phone-upload.jpg');
    const [imageUrl, setimageUrl]=useState('https://images.imyfone.com/filme/video/Make-a-YouTube-Video-on-Your-Phone-upload.jpg');
    const [visiblness, setvisiblness]=useState("");
    const [text, settext]=useState("");
        
    async function handel() {
        if(image === 'https://images.imyfone.com/filme/video/Make-a-YouTube-Video-on-Your-Phone-upload.jpg'){
            alert("Please select image");
            return;
        }    
        console.log("Hello World");
        await Uploadimg(image).then(async (res)=>{await Imganalysis(res).then((res)=>{settext(res);})});
        setimageUrl(URL.createObjectURL(image));

        setvisiblness("visible");
    }
    return (
        <center>
            
            <div>
                <Card style={{ margin: "10rem",backgroundColor:'#dcdcde',width:"50%"}} >
                    <Card.Img style={{ margin:"2%" ,width:"96%"}} src={imageUrl} />
                    <Card.Body>
                        <Card.Title>Upload Image</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
                        <Card.Text>
                            Chose the image you want to convert into text format.
                        </Card.Text>
                        <div>
                            <input type="file" onChange={(e) => {setimage(e.target.files[0])}}/>
                            <br/><br/>
                            <Button variant="info" onClick={handel}>Covert</Button>
                        </div>
                    </Card.Body>
                </Card>

                {visiblness === "" ? null : 
                    <Card style={{ margin: "10rem",backgroundColor:'#dcdcde',width:"50%"}} >
                        <Card.Body>
                            {console.log(text["captionResult"]["text"])}
                            <h3>Caption:</h3>
                            <p>{text["captionResult"]["text"]}</p>
                            <h3>Text in Image:</h3>
                            <p>{text["readResult"]["content"]}</p>
                        </Card.Body>
                    </Card>                   
                
                
                }

                
            </div>
        </center>
    )
}

export default Inputcard
