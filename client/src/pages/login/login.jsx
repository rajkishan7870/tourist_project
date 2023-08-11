import React, { useState, useEffect } from "react";
import Style from "./login.module.css";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import CloseIcon from "@mui/icons-material/Close";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { Link, useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import axios from "axios";

export default function Login(){
  const [open, setOpen] = useState(true);
  const [touristClientData,setTouristClientData] = useState()
  const [details, setDetails] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();


  useEffect(()=>{
    axios.get("/touristclient")
        .then((res)=>{
            setTouristClientData(res.data);
        }).catch((err)=>{
            console.log(err)
        })
  },[])

//   console.log(data)

  const handleClose = () => {
    setOpen(false);
    navigate("/");
  };
  function handleSubmit(e) {
    e.preventDefault();
    if (details.email === "" && details.password === "") {
      setError("Enter your email and password");
      return;
    } else if (details.email === "" && details.password !== "") {
      setError("Enter your email first");
      return;
    } else if (details.email !== "" && details.password === "") {
      setError("Enter your password first");
      return;
    }

    if (touristClientData.find(obj=>obj.email === details.email && obj.password === details.password)){
      navigate("/home");
    } else if(touristClientData.find(obj=>obj.email !== details.email && obj.password === details.password)){
      setError("Invalid User!!!");
    } else if(touristClientData.find(obj=>obj.email === details.email && obj.password !== details.password)){
      setError("Wrong password!!!");
    }
  }
  return (
    <div>
      <Dialog
        open={open}
        PaperProps={{
          sx: {
            height: "80%",
            padding: "0rem 1rem 1rem 1rem",
            borderRadius: "1.5rem",
            minWidth: "40%",
            position: "relative",
          },
        }}
      >
        <DialogActions>
          <Button
            onClick={handleClose}
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            <CloseIcon sx={{ color: "black" }} />
          </Button>
        </DialogActions>
        <DialogContent>
          <form className={Style.root}>
            
            <Typography
              variant="h4"
              sx={{ alignSelf: "center", fontWeight: "bold" }}
            >
              SignIn!!!!!!!
            </Typography>
            
            <TextField
              id="outlined-basic"
              name="email"
              type="email"
              label="Email"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            <TextField
              id="outlined-basic"
              type="password"
              label="Password"
              name="password"
              variant="outlined"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
              }}
            />
            {error && <Alert
            severity="error"
            sx={{
                width: "50%",
                marginLeft : "22%"
            }}
            >{error}</Alert>}
            <Button
              type="submit"
              variant="contained"
              className={Style.submit}
              onClick={handleSubmit}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Submit
            </Button>
            <Button
              type="submit"
              variant="outlined"
              className={Style.submit}
              onClick={(e) => {
                e.preventDefault();
              }}
              sx={{
                width: "50%",
                alignSelf: "center",
                textTransform: "none",
              }}
            >
              Forgot password
            </Button>
            <div
              style={{
                alignSelf: "center",
              }}
            >
              Don't have an account?{" "}
              <Link to={"/register"} underline="none">
                Sign up
              </Link>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};
