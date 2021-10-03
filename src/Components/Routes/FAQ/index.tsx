import * as React from "react";
import Footer from "../../GeneralComponents/Footer/footer";
import NavBar from "../../GeneralComponents/NavBar/navbar";
import "./styles.css";
import flag from "../../../assets/vectors/flag.svg";
import pricing from "../../../assets/vectors/pricing.svg";
import bag from "../../../assets/vectors/bag.svg";
import book from "../../../assets/vectors/book.svg";
import { Accordion, AccordionCollapse, AccordionToggle } from "react-bootstrap";

const FAQ = () => {
  return (
    <>
      <NavBar />
      <div className="generalContainer faqContainer">
        <h2 className="faqContainerTtl">Have any questions?</h2>
        <div className="faqSectionOneWrap">
          <div className="faqSectionOneItem">
            <img src={flag} alt="" />
            <p>Getting Started</p>
          </div>
          <div className="faqSectionOneItem">
            <img src={pricing} alt="" />
            <p>Getting Started</p>
          </div>
          <div className="faqSectionOneItem">
            <img src={bag} alt="" />
            <p>Getting Started</p>
          </div>
          <div className="faqSectionOneItem">
            <img src={book} alt="" />
            <p>Getting Started</p>
          </div>
        </div>
        <div className="faqAccordionWrap">
          <Accordion defaultActiveKey="0">
            <AccordionToggle eventKey="0" className="faqToggle">
              <span>System related questions:</span>
              <span>+</span>
            </AccordionToggle>
            <AccordionCollapse eventKey="0" className="faqBody">
              <>
                <div>
                  <h6>How do I earn ?</h6>
                  <p>
                    The only way to earn from Internify Network is to first
                    become a premium member then get your own personalised link
                    to refer your friends and you make 1,000 naira when those
                    friends sign up and also becomes a premium member just like
                    you.
                  </p>
                </div>
              </>
            </AccordionCollapse>
            <AccordionToggle eventKey="1" className="faqToggle">
              <span>Payment related questions:</span>
              <span>+</span>
            </AccordionToggle>
            <AccordionCollapse eventKey="1" className="faqBody">
              <>
                <div>
                  <h6>How do i join the premium service?</h6>
                  <p>
                    First register to become an intern on the internify network,
                    from your home page select premium.
                  </p>
                </div>
                <div>
                  <h6>How much does it cost to be a premium member?</h6>
                  <p>It cost 4,000 naira a year to become a premium member.</p>
                </div>
                <div>
                  <h6>Whats the benefit of been a premium member?</h6>
                  <p>
                    Access to unlimited intern searches, access to cv creator,
                    recommendation letter from internify network, access to make
                    use of internify mobile app platform, access to free
                    internship courses.
                  </p>
                </div>
              </>
            </AccordionCollapse>
            <AccordionToggle eventKey="2" className="faqToggle">
              <span>Registration related questions:</span>
              <span>+</span>
            </AccordionToggle>
            <AccordionCollapse eventKey="2" className="faqBody">
              <>
                <div>
                  <h6>What do i need to register?</h6>
                  <p>
                    All you need is your personal information such as name,
                    school, course, university, date of birth and others.
                  </p>
                </div>
              </>
            </AccordionCollapse>
            <AccordionToggle eventKey="3" className="faqToggle">
              <span>Other related questions:</span>
              <span>+</span>
            </AccordionToggle>
            <AccordionCollapse eventKey="3" className="faqBody">
              <>
                <div>others</div>
              </>
            </AccordionCollapse>
          </Accordion>
        </div>
        <h4 className="faqTtl">Still have questions?</h4>
        <p className="faqTxt">
          If you can not find your answer in FAQ, you can always contact us. We
          will answer you shortly!
        </p>
      </div>
      <Footer />
    </>
  );
};

export default FAQ;
