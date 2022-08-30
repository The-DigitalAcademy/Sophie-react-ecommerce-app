import React from "react";
import "./Loginform.css";
import { Icon } from '@iconify/react';

const Loginform = () => {
  return (
    <div className="page">
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placedolder="username" />
            <input type="password" placedolder="password" />

            <div className="login-btn">Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook">
                    <Icon className="facebook" icon="cib:facebook-f" color="white" />
                </div>
                <div className="google">
                    <Icon className="google" icon="akar-icons:google-fill" color="white" />
                </div>
            </div>

        </div>
    </div>
  );
}

export default Loginform;