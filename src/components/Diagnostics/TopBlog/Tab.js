import { useState } from "react";
import "./Main.css";

function Tab() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          RT-PCR test for COVID-19
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
    Sample Collection
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
       Result
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <h2>What is RT-PCR test for COVID-19 and why is it necessary?</h2>
          <hr />
          <p>
          RT-PCR test deducts the presence of genetic material (ribonucleic acid or RNA) of the virus that causes COVID-19 (SARS-CoV-2). 
RT-PCR test for COVID-19 is the best quality and accurate test to deduct the active infection in the body and get the proper treatment accordingly. It is required to get the RT-PCR test done if the early signs of COVID symptoms are visible. 
It has been made compulsory to get the RT-PCT test done if we are traveling to different states. Since the increase in the number of cases in India has gone high, it is very much required to get this test done. It will be safe for you and for the entire family.
          </p>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <hr />
          <p>
          RT-PCR test requires nose or throat swab or sample of saliva to accurately detect the presence of virus. The person who would be conducting the test will insert a long flexible swab with soft brush deep into your nose or back of throat and twirl for a few seconds. The sample will be sent to our certified laboratory. 
          </p>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <hr />
          <h6 className='h6-tabs'>
          COVID positive means you are infected with COVID-19 virus and need treatment. COVID negative means you are not infected with COVID-19 virus. 
          </h6>
        </div>
      </div>
    </div>
  );
}

export default Tab;