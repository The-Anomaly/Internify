import * as React from "react";
import "./home.css";
import NavBar from "../../GeneralComponents/NavBar/navbar";
import sectionOne from "../../../assets/vectors/landingSectionOne.svg";
import sectionOneVector from "../../../assets/vectors/landingSectionOneVector.svg";
import search from "../../../assets/vectors/searchIcon.svg";
import profiling from "../../../assets/vectors/profiling.svg";
import generate from "../../../assets/vectors/generate.svg";
import searchRed from "../../../assets/vectors/searchIconRed.svg";
import blogOne from "../../../assets/images/blogOne.png";
import blogTwo from "../../../assets/images/blogTwo.png";
import blogThree from "../../../assets/images/blogThree.png";
import arrow from "../../../assets/vectors/arrowRight.svg";
import sectionSixImg from "../../../assets/images/sectionSixImg.png";
import plus from "../../../assets/vectors/purplePlus.svg";
import Footer from "../../GeneralComponents/Footer/footer";
import { useHistory } from "react-router";

const Home = () => {
  let history = useHistory();
  const applyForPremium = () => {
    return history.push("/premium");
  };
  return (
    <>
      <NavBar />
      <div className="homeOneBg">
      <div className="homeSectionOne generalContainer">
        <img className="homeSectionOneVector" src={sectionOneVector} alt=""  />
        <div className="homeSectionOneInfo">
          <p className="homeSectionOneTxt1">Jump Start Your Career</p>
          <h1 className="homeSectionOneTxt2">
            We help you identify and curate over 1000 top{" "}
            <span>Internships</span> in Nigeria.
          </h1>
        </div>
        <img className="homeSectionOneImg" src={sectionOne} alt="" />
      </div>
      </div>
      <div className="homeOneBg">
      <div className="homeSectionTwo generalContainer">
        <div className="homeSectionTwoInputWrap">
          <input
            placeholder="Search"
            className="homeSectionTwoInput"
            type="text"
          />
          <button className="homeSectionTwoBtn appBtnFill">
            <img src={search} alt="search"  />
          </button>
        </div>
      </div></div>
      <div className="homeSectionThree">
        <h2 className="homeSectionThreeTtl">
          What Internify will do for you !
        </h2>
        <div className="homeSectionThreeItemWrapBg">
        <div className="homeSectionThreeItemWrap generalContainer">
          <div className="homeSectionThreeItem">
            <div className="homeSectionThreeItem1">
              <img src={profiling} alt=""  />
            </div>
            <h6>Company Profiling</h6>
            <p>
              Internify network helps who carry out the job of searching for the
              right company for your internship{" "}
            </p>
          </div>
          <div className="homeSectionThreeItem">
            <div className="homeSectionThreeItem2">
              <img src={searchRed} alt=""  />
            </div>
            <h6>Target Audience</h6>
            <p>
              Internify network targets Nigerian Students in helping them secure
              great internship placement across the Country.
            </p>
          </div>
          <div className="homeSectionThreeItem">
            <div className="homeSectionThreeItem3">
              <img src={generate} alt=""  />
            </div>
            <h6>CV Generator</h6>
            <p>
              Don???t have cv? Internify has you covered, generate your curriculum
              vitae with Internify system
            </p>
          </div>
        </div>
      </div></div>
      <div className="homeSectionFour">
        <h2 className="homeSectionFoutTtl">Be inspired by success stories</h2>
        <div className="homeSectionFourItemWrap generalContainer">
          <div className="homeSectionFourItem">
            <img src={blogOne} alt=""  />
            <p>Blog Post</p>
            <p>IT placement</p>
          </div>
          <div className="homeSectionFourItem">
            <img src={blogTwo} alt=""  />
            <p>Blog Post</p>
            <p>Must i have a skill to apply for Internship?</p>
          </div>
          <div className="homeSectionFourItem">
            <img src={blogThree} alt=""  />
            <p>Blog Post</p>
            <p>Difficulty getting the right company!</p>
          </div>
        </div>
      </div>
      
      
      <div className="homeSectionSix">
        <h1 className="homeSectionFiveTtl">
          INTERNIFY <span>FEATURES</span>
        </h1>
        <div className="homeSectionSixWrap generalContainer">
          <div className="homeSectionFiveListWrap">
            <div className="homeSectionFiveListHd">
              <h5>What we offer</h5>
            </div>
            <ul className="homeSectionFiveList">
              <li>
                <div className="homeSectionFiveListItem">
                  <p>Unlimited job search results</p>
                </div>
              </li>
              <li>
                <div className="homeSectionFiveListItem">
                  <p>Affiliate marketing job</p>
                </div>
              </li>
              <li>
                <div className="homeSectionFiveListItem">
                  <p>Availability to blog posts</p>
                </div>
              </li>
              <li>
                <div className="homeSectionFiveListItem">
                  <p>Ability to create CV</p>
                </div>
              </li>
              <li>
                <div className="homeSectionFiveListItem">
                  <p>CV exposure</p>
                </div>
              </li>
              <li>
                <div className="homeSectionFiveListItem">
                  <p>Access to Skill courses</p>
                </div>
              </li>
              <li>
                <div className="homeSectionFiveListItem">
                  <p>Webinars with educationists</p>
                </div>
              </li>
            </ul>
          </div>

          <img className="homeSectionSixImg" src={sectionSixImg} alt=""  />
        </div>
        <p className="homeSectionSixTxt">
          Over{" "}
          <span>
            29850
            <img src={plus} alt="plus" />
          </span>{" "}
          Students Use Internify
        </p>
        <button
          className="appBtnFill homeSectionFiveBtn"
          onClick={applyForPremium}
        >
          Apply <img src={arrow} alt="right arrow" />{" "}
        </button>
      </div>
      <Footer />
    </>
  );
};

export default Home;
