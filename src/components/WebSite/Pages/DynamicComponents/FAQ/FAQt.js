import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "FAQs",
  rows: [
    {
      title: "What is RT-PCR test for COVID-19 and why is it necessary?",
      content: `RT-PCR test deducts the presence of genetic material (ribonucleic acid or RNA) of the virus that causes COVID-19 (SARS-CoV-2). 
      RT-PCR test for COVID-19 is the best quality and accurate test to deduct the active infection in the body and get the proper treatment accordingly. It is required to get the RT-PCR test done if the early signs of COVID symptoms are visible. 
      It has been made compulsory to get the RT-PCT test done if we are traveling to different states. Since the increase in the number of cases in India has gone high, it is very much required to get this test done. It will be safe for you and for the entire family.`
    },
    {
      title: "Sample Collection ",
      content: "RT-PCR test requires nose or throat swab or sample of saliva to accurately detect the presence of virus. The person who would be conducting the test will insert a long flexible swab with soft brush deep into your nose or back of throat and twirl for a few seconds. The sample will be sent to our certified laboratory."
    },
    {
      title: "Result",
      content: "COVID positive means you are infected with COVID-19 virus and need treatment. COVID negative means you are not infected with COVID-19 virus."
    }]
}

export default class FAQt extends Component {
  render() {
    return (
      <div>
        <Faq data={data}/>
      </div>
    )
  }
}