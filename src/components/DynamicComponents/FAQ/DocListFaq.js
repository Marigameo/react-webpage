import React, { Component } from 'react';
import './DocListFaq.css'
import { Container } from 'react-bootstrap';
import Faq from 'react-faq-component';

const data = {
  rows: [
    {
      title: "What does a General Practitioner do?",
      content: "A general practitioner is your first point of contact when you’re seeking treatment for basic physical or mental health.<br/>The list of their duties includes - assessing you with a physical exam and a review of your medical history. If required, they may order additional tests, recommend treatment, or connect you with a specialist. For emerging care, they can provide a consultation over the phone or through a video call."
    }]
}

export default class DocListFaq extends Component {
  render() {
    return (
      <div>
        <Container style={{width: 'fit-content'}}>
        <Faq data={data}/>
        </Container>
      </div>
    )
  }
}