import * as React from "react";
import "./styles.css";

const Profile = () => {
  return (
    <div>
      <div className="profileBody">
        <div className="profileAvatar">
          <h1>SO</h1>
        </div>
        <label className="profileAvatarUpload" htmlFor="avatar">
          Change Profile Picture
          <input type="image" id="avatar" />
        </label>
        <form className="profileForm">
          <div className="profileInputWrap">
            <label>Full Name</label>
            <input value="Somtochukwu Okafor" />
          </div>
          <div className="profileInputWrap">
            <label>Username</label>
            <input value="Sensei" />
          </div>
          <div className="profileInputWrap profileInputWrapDisable">
            <label>Email</label>
            <input value="somtookaforr@gmail.com" />
          </div>
        </form>
        <p className="profileTxt">Subscription Status <hr /></p>
        <div className="profileSubcrip">
            <p>Payment Date: </p>
            <p>20/09/2020</p>
            <p>Expiration Date:</p>
            <p>20/09/2020</p>
        </div>
        <button className="appBtnFill profileBtn">Password Settings</button>
      </div>
    </div>
  );
};

export default Profile;
