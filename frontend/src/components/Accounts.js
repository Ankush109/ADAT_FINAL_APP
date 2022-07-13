import React, { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import "./account.css";
import Loader from "./layout/Loader";

const Profile = () => {
  const { user, loading, isAuthenticated } = useSelector((state) => state.user);
const navigate =useNavigate()
  useEffect(() => {
    if (isAuthenticated === false) {
      navigate("/login");
    }
  }, [navigate, isAuthenticated]);
  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
  
          <div className="profileContainer">
            <div>
              <h1>My Profile</h1>
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAvY5L-SW4Q9hR6jVWSBTsCBAuMGO8rXtq9Q&usqp=CAU"alt={user.name} />
              <Link to="/me/update">Edit Profile</Link>
            </div>
            <div>
              <div>
                <h4>Full Name</h4>
                <p>{user.name}</p>
              </div>
              <div>
                <h4>Email</h4>
                <p>{user.email}</p>
              </div>
              <div>
                <h4>Joined On</h4>
                <p>{String(user.createdat).substr(0,10)}</p>
              </div>

              <div>
                <Link to="/orders">My Orders</Link>
                <Link to="/"> Back Home</Link>
              
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Profile;