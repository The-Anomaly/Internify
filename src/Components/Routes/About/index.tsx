import * as React from "react";
import "./styles.css";
import NavBar from "../../GeneralComponents/NavBar/navbar";
import Footer from "../../GeneralComponents/Footer/footer";
import avatar from "../../../assets/images/avatar.png";

const team = [
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
  {
    name: "Sam Amith",
    role: "Business",
    avatar: avatar,
  },
];

const About = () => {
  return (
    <>
      <NavBar />
      <div className="generalContainer aboutSectionOne">
        <h1 className="aboutSectionOneTtl">
          {" "}
          Student First Initiative For Internships in Nigeria.
        </h1>
        <div className="aboutSectionOneImgSec">
          <div className="aboutSectionOneImg1"></div>
          <div className="aboutSectionOneImg2"></div>
          <div className="aboutSectionOneImg3"></div>
          <div className="aboutSectionOneImg4"></div>

          {/* <img src={Img1} alt="" />
          <div>
            <img src={Img2} alt="" />
            <img src={Img3} alt="" />
          </div>
          <img src={Img4} alt="" /> */}
        </div>
      </div>
      <div className="aboutSectionTwo">
        <div className="purplebg"></div>
        <div className="generalContainer">
        <h1 className="aboutSectionTwoTtl">Our Team</h1>
        <div className="aboutTeamWrap">
          {team.map((item) => (
            <div className="aboutTeamItem">
              <img src={item.avatar} alt="avatar" />
              <p>{item.name}</p>
              <p>{item.role}</p>
            </div>
          ))}
        </div></div>
      </div>
      <div className=" aboutSectionThree">
        <h1 className="aboutSectionThreeTtl">Our Values</h1>
        <div className="aboutThreeBg">
        <div className="generalContainer aboutSectionThreeWrap">
          <div className="aboutSectionThreeItem">
            <h3>Selfless</h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              quos, vitae possimus corporis dolorem magnam exercitationem.
              Blanditiis, impedit architecto fugiat quaerat voluptatem tenetur
              quo asperiores, cumque odit, incidunt labore ex?
            </p>
          </div>
          <div className="aboutSectionThreeItem">
            <h3>Selfless</h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              quos, vitae possimus corporis dolorem magnam exercitationem.
              Blanditiis, impedit architecto fugiat quaerat voluptatem tenetur
              quo asperiores, cumque odit, incidunt labore ex?
            </p>
          </div>
          <div className="aboutSectionThreeItem">
            <h3>Selfless</h3>
            <hr />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint
              quos, vitae possimus corporis dolorem magnam exercitationem.
              Blanditiis, impedit architecto fugiat quaerat voluptatem tenetur
              quo asperiores, cumque odit, incidunt labore ex?
            </p>
          </div>
        </div></div>
      </div>
      <div className="generalContainer aboutSectionFour">
          <h1 className="aboutSectionFourTtl">Get in Touch</h1>
          <form className="aboutSectionFourForm" >
              <div className="aboutInputSec">
              <label className="aboutSectionFourLabel" > Your Name:
                  <input className="internify-input aboutInput" />
              </label>
              <label className="aboutSectionFourLabel" > Mail:
                  <input className="internify-input aboutInput" />
              </label>
              <label className="aboutSectionFourLabel" > Phone:
                  <input className="internify-input aboutInput" />
              </label>
              </div>
              <label className="aboutSectionFourLabel fillHalf" > Message:
                  <textarea className="aboutTextarea" />
              </label>
          </form>
      </div>
      <Footer />
    </>
  );
};

export default About;
