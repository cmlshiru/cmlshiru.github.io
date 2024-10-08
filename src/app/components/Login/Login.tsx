import React, { FC } from "react";
import styles from "./Login.module.css";
import Image from 'next/image';


interface LoginProps {
  loginHeadText?:string;
}

const Login: FC<LoginProps> = () => (
  <div className={styles.Login}>
    <div className="col-12 mt-3 h-50 d-flex justify-content-center">
    <Image src="/imgs/cleansmart.png" alt="page icon" width={200} height={200} />
    </div>
    <div className="col-12  px-5  my-3 h-50">
      <div className="py-2 d-flex justify-content-center">
        <input
          type="text"
          name="user"
          id="user"
          placeholder="User"
        />
      </div>
      <div className="py-3 d-flex justify-content-center">
        <input type="password" name="password" id="password" className="login-input" placeholder="***"/>
      </div>
      <div className="py-3 d-flex justify-content-center">
        <button type="button" className="login-button">Log in</button>
      </div>
    </div>
  </div>
);

export default Login;
