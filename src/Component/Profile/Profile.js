import React from "react";
import "../Profile/Profile.css";
import PersonIcon from "@material-ui/icons/Person";
import EmailIcon from "@material-ui/icons/Email";
import HttpIcon from "@material-ui/icons/Http";
import PhoneIcon from "@material-ui/icons/Phone";

const Profile = ({ user }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <div className="card user-card">
            <div className="card-header">
              <h5>Profile</h5>
            </div>
            <div className="card-block">
              <div className="user-image">
                <img
                  src="https://bootdey.com/img/Content/avatar/avatar7.png"
                  className="img-radius"
                  alt="User-Profile"
                />
              </div>
              <h5>
                <span className="person">
                  <PersonIcon />
                  <p> {user.name}</p>
                </span>
              </h5>
              <p className="f-w-600 m-t-25 m-b-10">
                Username : {user.username}
              </p>
              <p>
                {" "}
                <span className="person">
                  <HttpIcon />
                  <a href={user.website}>{user.website}</a>{" "}
                </span>
              </p>
              <h6>
                <span className="mail">
                  <EmailIcon />
                  <a href={user.email}> {user.email}</a>
                </span>
              </h6>
              <h6>
                <span className="mail">
                  <PhoneIcon />
                  {user.phone}
                </span>
              </h6>
              <hr />
              <h6 className="f-w-600 m-t-25 m-b-10">
                Company : {user.company.bs}, <br /> {user.company.catchPhrase},{" "}
                <br /> {user.company.name}
              </h6>
              <hr />
              <h6 className="f-w-600 m-t-25 m-b-10">
                Address : {user.address.city}, {user.address.street},
                {user.address.suite}, <br /> {user.address.zipcode} <br />
                Lat : {user.address.geo.lat}, lng : {user.address.geo.lng}
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
