import * as React from "react";
import { Modal } from "react-bootstrap";
import "./styles.css";

const Profile = () => {
  const [change, setChange] = React.useState<boolean>(false);
  const [reset, setReset] = React.useState<boolean>(false);

  return (
    <>
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
              <input type="text" value="Somtochukwu Okafor" />
            </div>
            <div className="profileInputWrap">
              <label>Username</label>
              <input type="text" value="Sensei" />
            </div>
            <div className="profileInputWrap profileInputWrapDisable">
              <label>Email</label>
              <input type="email" value="somtookaforr@gmail.com" />
            </div>
          </form>
          <p className="profileTxt">
            Subscription Status <hr />
          </p>
          <div className="profileSubcrip">
            <p>Payment Date: </p>
            <p>20/09/2020</p>
            <p>Expiration Date:</p>
            <p>20/09/2020</p>
          </div>
          <button className="appBtnFill profileBtn" onClick={() => setChange(true)}>Password Settings</button>
        </div>
      </div>
      <Modal className="profileModal" show={change} onHide={() => setChange(false)} centered>
        <Modal.Body>
          <div className="profileModalTtl">
            <h4>Change Password</h4>
          </div>
          <form className="profileModalForm">
            <div className="profileInputWrap">
              <label>Old Password</label>
              <input type="text" />
            </div>
            <div className="profileInputWrap">
              <label>NewPassword</label>
              <input type="text" />
            </div>
            <div className="profileInputWrap">
              <label>Confirm Password</label>
              <input type="text" />
            </div>
            <p className="profileModalTxt">Make sure it's at least 15 characters OR at least 8 characters including a number and a lowercase letter.</p>
            <button className="appBtnFill profileModalBtn1">Update Password</button>
          </form>
          <button className="profileModalBtn2" onClick={() => {setChange(false); setReset(true)}}>I forgot my password?</button>
        </Modal.Body>
      </Modal>
      <Modal className="profileModal" show={reset} onHide={() => setReset(false)} centered>
        <Modal.Body>
          <div className="profileModalTtl">
            <h4>Reset Password</h4>
          </div>
          <form className="profileModalForm">
              <p className="profileModalTxt">Enter your user account's verified email address and we will send you a password reset link.</p>
            <div className="profileInputWrap">
              <label>Email</label>
              <input type="text" />
            </div>
            <button className="appBtnFill profileModalBtn1" onClick={() => setReset(false)}>Send Password Reset E-mail</button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Profile;
