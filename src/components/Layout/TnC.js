import { Link } from "react-router-dom";
import "./TnC.css";

const TnC = () => {
  return (
    <div className="terms-container">
      <div className="mainbox">
        <div className="toptext">
          <h2>Terms and conditions</h2>
          <p>Last Updated: 12th Jan 2023</p>
          <p>Greetings User,</p>
          <div>Introduction</div>
          <p>
            These Website Standard Terms And Conditions (these “Terms” or these
            “Website Standard Terms And Conditions”) contained herein on this
            webpage, shall govern your use of this website, including all pages
            within this website (collectively referred to herein below as this
            “Website”). These Terms apply in full force and effect to your use
            of this Website and by using this Website, you expressly accept all
            terms and conditions contained herein in full. You must not use this
            Website, if you have any objection to any of these Website Standard
            Terms And Conditions.
          </p>
          <h3>Intellectual Property Rights</h3>
          <p>
            Other than content you own, which you may have opted to include on
            this Website, under these Terms, and/or its licensors own all rights
            to the intellectual property and material contained in this Website,
            and all such rights are reserved. You are granted a limited license
            only, subject to the restrictions provided in these Terms, for
            purposes of viewing the material contained on this Website.
          </p>
          <h3>No warranties</h3>
          <p>
            This Website is provided “as is,” with all faults, and makes no
            express or implied representations or warranties, of any kind
            related to this Website or the materials contained on this Website.
            Additionally, nothing contained on this Website shall be construed
            as providing consult or advice to you.
          </p>
          <h3>Variation of Terms</h3>
          <p>
            is permitted to revise these Terms at any time as it sees fit, and
            by using this Website you are expected to review such Terms on a
            regular basis to ensure you understand all terms and conditions
            governing use of this Website.
          </p>
          <h3>Entire Agreement</h3>
          <p>
            These Terms, including any legal notices and disclaimers contained
            on this Website, constitute the entire agreement between and you in
            relation to your use of this Website, and supersede all prior
            agreements and understandings with respect to the same.
          </p>
        </div>
        <h4>
          I agree to the <span>Terms of Service</span> and i have read the
          Privacy Notice.
        </h4>
        <div className="conditionbuttons">
          <Link to="/courses">
            <button className="mainbtn acceptred-btn">Accept</button>
          </Link>
          <Link to="/">
            <button className="mainbtn acceptred-btn">Decline</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TnC;
