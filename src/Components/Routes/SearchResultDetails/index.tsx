import * as React from "react";
import NavBar from "../../GeneralComponents/NavBar/navbar";
import "./styles.css"
import computer from "../../../assets/vectors/computerImg.svg"

const Details = () => {
    return (
        <>
        <NavBar />
        <div className="generalContainer detailsContainer">
            <div className="detailsWrap">
                <p className="detailsTxt1" >Catergory: Computer Engineering</p>
                <h2 className="detailsTtl" >Aito Tech <img src={computer} alt="computer icon" /></h2>
                <p className="detailsTxt2">21 Adebiyi Crescent, Chevron Drive, Lekki</p>
                <p className="detailsTxt3">Aito tech company is a system company based company is a system company based company is a system company based</p>
                
                <p className="detailsTtl2">Company Requirements:</p>
                <hr className="detailsLine"></hr>
                <ul className="detailsList">
                    <li>English proficiency</li>
                    <li>English proficiency</li>
                    <li>English proficiency</li>
                </ul>

                <p className="detailsTtl2">Contact Details:</p>
                <hr className="detailsLine"></hr>
                <ul className="detailsList detailsList2">
                    <li>Phone: 08108852949</li>
                    <li>Email: sommy.okafor@yahoo.com</li>
                </ul>
                <button className="detailsBtn appBtnFill">Apply</button>
            </div>
        </div>
        </>
    )
}

export default Details;