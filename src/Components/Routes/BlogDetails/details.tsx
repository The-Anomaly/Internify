import * as React from "react";
import "./details.css";
import "../Blog/blog.css"
import img1 from "../../../assets/images/blogImg1.png"
import NavBar from "../../GeneralComponents/NavBar/navbar";

const BlogDetails = () => {
    return (
        <>
        <NavBar />
            <div className="blog-details generalContainer">
                <div className="blog-item1 details-item">
                    <img src={img1} alt="" />
                    <div className="blog-item1-info">
                        <div>
                            <span className="blog-item-hd">Blog Post</span>
                            <span className="blog-item-date">* July 2, 2020</span>
                        </div>
                        <p className="blog-item-ttl">Difficulty getting the right company!</p>
                    </div>
                </div>
                <p className="details-txt" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero deserunt non quas. Veritatis nisi ipsum modi? Quas laboriosam quaerat ratione labore aperiam? Fuga blanditiis quo nulla! Mollitia, eligendi saepe.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto, nostrum commodi recusandae velit accusantium esse sequi excepturi, omnis quis nam. Cum praesentium, sed ipsum omnis aspernatur vel optio accusamus.
                </p>
                <p className="details-txt" >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus libero deserunt non quas. Veritatis nisi ipsum modi? Quas laboriosam quaerat ratione labore aperiam? Fuga blanditiis quo nulla! Mollitia, eligendi saepe.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non architecto, nostrum commodi recusandae velit accusantium esse sequi excepturi, omnis quis nam. Cum praesentium, sed ipsum omnis aspernatur vel optio accusamus.
                </p>
            </div>
        </>
    )
}

export default BlogDetails;