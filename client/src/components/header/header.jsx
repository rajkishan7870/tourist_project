import React from "react";
import FoundationIcon from "@mui/icons-material/Foundation";
import { Button } from "@mui/material";
import styles from "./header.module.css";
import { useNavigate } from "react-router-dom";

export default function Header() {

    const navigate = useNavigate();

    function handleSignIn(){
        navigate("/login")
    }

    function handleSignUp(){
        navigate("/register")
    }
  return (
    <div className={styles.parentCont}>
      <div>
        <FoundationIcon />
      </div>
      <div className={styles.middle}>
        <h3>dummy</h3>
        <h3>dummy</h3>
        <h3>dummy</h3>
        <h3>dummy</h3>
      </div>
      <div>
        <Button
          variant="text"
          sx={{
            textTransform: "none",
          }}
          onClick={handleSignIn}
        >
          SignIn
        </Button>

        <Button
          variant="text"
          sx={{
            textTransform: "none",
          }}
          onClick={handleSignUp}
        >
          SignUp
        </Button>
      </div>
    </div>
  );
}
