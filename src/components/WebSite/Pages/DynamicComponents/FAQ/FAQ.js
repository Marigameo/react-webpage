import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Faq from 'react-faq-component';

const data = {
  title: "FAQs",
  rows: [
    {
      title: "1.	What is the Cost and Process of Video Consultation?",
      content: "  The cost of video consultation starts at 129 INR per session. The cost tends to vary upon the symptoms of the patients and the doctor. The process is very simple and similar to a video call. The maximum duration of the video session is 15 minutes. Medatu will charge double the price if more than one person joins the call."
    },
    {
      title: "2.	Who are the Doctors for Consultation?",
      content: "  The doctors on Medatu's platform are all registered practitioners who hold the required degrees and possess the necessary qualification. They have several years of experience in their field as a practitioner along with research experience as well. All the doctors are adequately trained and are seasoned experts in their field. Medatu offers highly proficient doctors for video consultations and booking appointments."
    },
    {
      title: "3.	Will the Consultation with the Specialist be Private?",
      content: "  Privacy of data is of immense importance and is the fundamental right of every user. Medatu makes sure to maintain strict confidentiality of users' data. Moreover, the medical history and video consultation with the specialist are completely private as well as secure. Medatu also assures the users of complete safety and security of all data & records."
    },
    {
      title: "4.	What is the Validity of Online Consultation?",
      content: "  If the consultation is a paid one, the users can follow up with the doctor up to a maximum of 3 times. In the case of free consultation, the follow-up is just valid for a day."
    }]
}

export default class FAQ extends Component {
  render() {
    return (
      <div>
        <Container style={{padding: '2rem'}}>
        <Faq data={data}/>
        </Container>
      </div>
    )
  }
}