import React from 'react';


const Footer = () => {
  return (
    <div style={{position:"absolute",background:"Black",maxWidth: "100%",width:"100%"}}>
        <div className="d-md-flex justify-content-around pt-4">
            
        </div>
        <hr style={{ backgroundColor: "grey", maxWidth: "90%", height: "5px" }} className="ms-5"
                />

        <div className="d-md-flex justify-content-around pt-4 pb-5" >
            <h1 style={{color:"white"}}>Image OCR</h1>
            <p style={{color:"white"}}>© 2023 Image OCR. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer
