import React from 'react'
import { Accordion } from 'react-bootstrap'

const Faq = () => {
  return (
    <div style={{margin:"1rem"}}>
      <h1>FAQ</h1>
      <Accordion>
      <Accordion.Item eventKey="0">
          <Accordion.Header>How to use</Accordion.Header>
          <Accordion.Body>
            To use this website, you just have to upload the image you want to convert into text format and then click on the convert button. After that you will get the text format of the image you uploaded.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>What is OCR?</Accordion.Header>
          <Accordion.Body>
            OCR stands for Optical Character Recognition. It is a technology that converts printed or handwritten text into machine-readable text.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does OCR work?</Accordion.Header>
          <Accordion.Body>
            OCR works by analyzing the shapes and patterns of characters in an image. It uses algorithms to recognize and convert these characters into digital text.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What are the applications of OCR?</Accordion.Header>
          <Accordion.Body>
            OCR has various applications, including document digitization, text extraction from images, automatic data entry, invoice processing, ID card scanning, and more.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>Can OCR recognize handwritten text?</Accordion.Header>
          <Accordion.Body>
            Yes, OCR can recognize handwritten text to some extent, depending on the quality of the handwriting and the specific OCR software used. However, accuracy may vary compared to printed text recognition.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>What types of files can be processed with OCR?</Accordion.Header>
          <Accordion.Body>
            OCR can process various file formats, including scanned images (JPEG, PNG, TIFF, etc.), PDF documents, and even photographs containing text.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>Is OCR a perfect technology?</Accordion.Header>
          <Accordion.Body>
            No, OCR is not perfect. While it has significantly improved over the years, the accuracy of OCR depends on factors like image quality, text font, language, and handwriting style. It may occasionally produce errors and require human verification.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7">
          <Accordion.Header>What is the difference between OCR and ICR?</Accordion.Header>
          <Accordion.Body>
            OCR (Optical Character Recognition) primarily deals with printed text, while ICR (Intelligent Character Recognition) focuses on recognizing and converting handwritten text.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="8">
          <Accordion.Header>Are there any privacy concerns with OCR?</Accordion.Header>
          <Accordion.Body>
            OCR may process sensitive information, such as personal or confidential data. It is important to use reliable OCR services that prioritize data security, adhere to privacy regulations, and offer encryption options.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="9">
          <Accordion.Header>Can OCR recognize text in multiple languages?</Accordion.Header>
          <Accordion.Body>
            Yes, OCR can recognize text in various languages, including but not limited to English, Spanish, French, German, Chinese, Japanese, and more. The language support may vary depending on the OCR software used.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="10">
          <Accordion.Header>What is the speed of OCR processing?</Accordion.Header>
          <Accordion.Body>
            The processing speed of OCR depends on factors like image size, complexity, and the capabilities of the OCR software. Some OCR services offer real-time processing, while others may take a few seconds or minutes to complete the conversion. But with help of azure cognitive services, we can achieve real time processing.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="11">
          <Accordion.Header>Can OCR preserve the original formatting of the text?</Accordion.Header>
          <Accordion.Body>
            Basic OCR primarily focuses on converting text into machine-readable format and may not preserve the original formatting. However, some OCR tools offer advanced features to retain formatting elements like font styles, sizes, and text positioning.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>

    </div>
  )
}

export default Faq
