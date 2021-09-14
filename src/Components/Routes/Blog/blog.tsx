import * as React from "react";
import "./blog.css";
import NavBar from "../../GeneralComponents/NavBar/navbar";
import Footer from "../../GeneralComponents/Footer/footer";
import img1 from "../../../assets/images/blogImg1.png"
import img2 from "../../../assets/images/blogImg2.png"
import img3 from "../../../assets/images/blogImg3.png"

const Blog = () => {
    return (
        <>
        <NavBar />
            <div className="blogWrap generalContainer">
                <div className="blog-item1">
                    <img src={img1} alt="" />
                    <div className="blog-item1-info">
                        <div>
                            <span className="blog-item-hd">Blog Post</span>
                            <span className="blog-item-date">* July 2, 2020</span>
                        </div>
                        <p className="blog-item-ttl">Difficulty getting the right company!</p>
                        <p className="blog-item-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ratione neque reiciendis sapiente quaerat eius distinctio?</p>
                    </div>
                </div>
                <div className="blog-item">
                    <img src={img2} alt="" />
                    <div className="blog-item-info">
                        <div>
                            <span className="blog-item-hd">Blog Post</span>
                            <span className="blog-item-date">* July 2, 2020</span>
                        </div>
                        <p className="blog-item-ttl">IT placement</p>
                        <p className="blog-item-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ratione neque reiciendis sapiente quaerat eius distinctio?</p>
                    </div>
                </div>
                <div className="blog-item">
                    <img src={img3} alt="" />
                    <div className="blog-item-info">
                        <div>
                            <span className="blog-item-hd">Blog Post</span>
                            <span className="blog-item-date">* July 2, 2020</span>
                        </div>
                        <p className="blog-item-ttl">Must i have a skill to apply for Internship?</p>
                        <p className="blog-item-txt">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum ratione neque reiciendis sapiente quaerat eius distinctio?</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Blog