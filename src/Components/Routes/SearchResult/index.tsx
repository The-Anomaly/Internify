import * as React from "react";
import Footer from "../../GeneralComponents/Footer/footer";
import NavBar from "../../GeneralComponents/NavBar/navbar";
import "./styles.css";
import search from "../../../assets/vectors/searchIconBlack.svg";
import filter from "../../../assets/vectors/filter.svg";
import sort from "../../../assets/vectors/sort.svg";
import result from "../../../assets/images/searchImg.png";
import arrow from "../../../assets/vectors/arrowUp.svg";
import { useHistory } from "react-router";


const SearchResult = () => {
    let history = useHistory();
    const details = () => {
        history.push("/search/details/")
    }
  return (
    <>
      <NavBar />
      <div className="searchContainer">
        <div className="generalContainer searchSectionOne">
          <div className="searchSectionOneInputWrap">
            <img
              className="searchSectionOneIcon"
              src={search}
              alt="search icon"
            />
            <input
              className="internify-input searchSectionOneInput"
              placeholder="search"
              value="computer"
            />
          </div>
          <p className="searchSectionOneTxt">
            Showing 1-3 of 1480 results for <b>"computer"</b>
          </p>
          <div className="searchSectionOneRelated">
            <span>Computer science</span>
            <span>Computer tech</span>
            <span>Computer studies</span>
          </div>
        </div>
        <hr className="searchLine" />
        <div className="searchSectionTwo generalContainer">
          <div className="searchSectionTwoFilter">
            <span>
              <img src={filter} alt="filter" />
              Filter
            </span>
            <span>
              <img src={sort} alt="sort" />
              Sort
            </span>
          </div>
          <div className="searchResultCard" onClick={details} role="button">
              <p className="searchResultCardTxt1" >Catergory: Computer Engineering</p>
              <div className="searchResultCard2" >
                  <img className="searchResultCardImg" src={result} alt="" />
                  <div className="searchResultCardInfosec" >
                      <p className="searchResultCardTxt2" >Aito Tech</p>
                      <h4 className="searchResultCardTxt3" >Sr. Front--end Developer</h4>
                      <p className="searchResultCardTxt4" >21 Adebiyi Crescent, Chevron Drive, Lekki</p>
                  </div>
              </div>
          </div>
          <div className="searchResultCard" onClick={details} role="button">
              <p className="searchResultCardTxt1" >Catergory: Computer Engineering</p>
              <div className="searchResultCard2" >
                  <img className="searchResultCardImg" src={result} alt="" />
                  <div className="searchResultCardInfosec" >
                      <p className="searchResultCardTxt2" >Aito Tech</p>
                      <h4 className="searchResultCardTxt3" >Sr. Front--end Developer</h4>
                      <p className="searchResultCardTxt4" >21 Adebiyi Crescent, Chevron Drive, Lekki</p>
                  </div>
              </div>
          </div>
          <div className="searchResultCard" onClick={details} role="button">
              <p className="searchResultCardTxt1" >Catergory: Computer Engineering</p>
              <div className="searchResultCard2" >
                  <img className="searchResultCardImg" src={result} alt="" />
                  <div className="searchResultCardInfosec" >
                      <p className="searchResultCardTxt2" >Aito Tech</p>
                      <h4 className="searchResultCardTxt3" >Sr. Front--end Developer</h4>
                      <p className="searchResultCardTxt4" >21 Adebiyi Crescent, Chevron Drive, Lekki</p>
                  </div>
              </div>
          </div>
          <div className="searchSeeMore">See more results <img src={arrow} alt="arrow up" /> </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SearchResult;
