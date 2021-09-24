import React, { Component } from 'react';
import Faq from 'react-faq-component';

const data = {
  title: "Frequently Asked Questions",
  rows: [
    {
      title: "1.	When Will My Query be Resolved?",
      content: `If you have opted for a free consultation, we will make sure that the doctor replies within the next 24 hours. In case if the consultation is a paid one, we will make sure that users' query is resolved within 2 to 4 hours. Medatu will ensure that the query of users is resolved within the mentioned time or else we will refund the money to the user.  `
    },
    {
      title: "2.	Will the Specialist be able to Resolve My Issue?",
      content: "Our specialists will give expert advice on the specific issues of users and chalk out an appropriate treatment plan. Further tests would be recommended and an in-clinic appointment would be advised as per the requirements. The doctors usually recommend tests, medicines, and certain general tips. A few of the appointments require face-to-face meetings and our specialists would suggest the same to the user."
    },
    {
      title: "3.	What is the Refund Policy of Medatu?",
      content: "We request you to write to our support team or contact us in case you are not satisfied with the online consultation. We would review the consultation as well as the clarifications and queries answered during the consultation. Post-approval, we would refund the full amount.  "
    },
      {
        title: "4.	If an Appointment is Booked, Are There Any Faster Chances of Doctor’s Consultation?",
        content: "The appointment with the doctor will be confirmed on the website and later it can be either a bit earlier or a bit delayed. The chances for the same depends upon the doctor’s availability and the patients at the clinic. The booking is normal at Medatu and it does not provide any special benefits to any of the users."
      },
      {
        title: "5.	Why Medatu is Providing Free Doctor’s Booking to the Users?",
        content: "Medatu aims to provide top-notch service, good doctors, hospitals, and clinics. We have designed to generate revenue from products, video consultations, and other sources. Therefore, the appointment booking will be free for each of the users and they can avail of this benefit."
      },
      {
        title: "6.  Is it Required to Show the Appointment ID When Visiting a doctor?",
        content: "It is not mandatory to show the Appointment ID at the time of visiting a doctor. It is recommended to show the email or the text message sent from Medatu which is sufficient. This is considered as proof of booked appointment and makes the overall process easy as well as hassle-free at the hospitals or clinics."
      },
]
}

export default class FAQGeneral extends Component {
  render() {
    return (
      <div>
        <Faq data={data}/>
      </div>
    )
  }
}