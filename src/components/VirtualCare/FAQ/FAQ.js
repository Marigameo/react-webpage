import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Faq from 'react-faq-component';

const data = {
  title: "FAQs",
  rows: [
    {
      title: "Lorem ipsum dolor sit amet,",
      content: "Lorem ipsum dolor sit amet, consectetur "
    },
    {
      title: "Nunc maximus, magna at ultricies elementum",
      content: "Nunc maximus, magna at ultricies elementum, risus turpis vulputate quam."
    },
    {
      title: "Curabitur laoreet, mauris vel blandit fringilla",
      content: "Curabitur laoreet, mauris vel blandit fringilla, leo elit rhoncus nunc"
    },
    {
      title: "What is the package version",
      content: "v1.0.5"
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