import React, { useState, useEffect } from "react";
import { Button, TextField, Rating, Typography } from "@mui/material";
import style from "./home.module.css";
import axios from "axios";
import Alert from "@mui/material/Alert";
import Result from "../result/result";

export default function Home() {
  const [value, setValue] = useState("");
  const [details, setDetails] = useState({});
  const [searchData, setSearchData] = useState({});
  const [touristPlaceData, setTouristPlaceData] = useState([]);
  const [error, setError] = useState("");
  const [searchedData,setSearchedData] = useState([{
    place : "",
    description : "",
    rating : 0
  }]);

  useEffect(() => {
    axios
      .get("/tourist-place")
      .then((res) => {
        setTouristPlaceData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();

    touristPlaceData.forEach((obj)=>{
      if (searchData.place === "") {
        setError("Enter place first");
      }
      else if(obj.place===searchData.place){
        setSearchedData([{place : obj.place, description : obj.description, rating : obj.rating}])
      }
      else {
        setError("No Data present till Now!!!!!!!!!");
      }
    })
      
     
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/tourist-place", {
      method: "POST",
      body: JSON.stringify({
        place: details.place,
        description: details.description,
        rating: details.rating,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);
    e.target.reset();
  };

  return (
    <div className={style.topCont}>
      <div>
        <form method="POST" onSubmit={handleSubmit}>
          <div className={style.formParentCont}>
            <Typography sx={{ alignSelf: "flex-start", fontWeight: "bold" }}>
              Submit your Tourist-Place Data!!!
            </Typography>
            <TextField
              sx={{
                width: "50%",
              }}
              placeholder="Enter Tourist place"
              name="place"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />

            <TextField
              sx={{
                "& fieldset": { border: "none" },
                width: "80%",
              }}
              placeholder="Enter Description"
              name="description"
              onChange={(e) => {
                setDetails({ ...details, [e.target.name]: e.target.value });
              }}
            />
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
                setDetails({ ...details, rating: newValue });
              }}
            />
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                width: "20%",
              }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </form>
      </div>
      <div>
        <form onSubmit={handleSearchSubmit}>
          <div className={style.searchForm}>
            <Typography sx={{ alignSelf: "flex-start", fontWeight: "bold" }}>
              Search any Tourist-Place Data!!!
            </Typography>
            <TextField
              sx={{
                width: "50%",
              }}
              placeholder="Enter Tourist place"
              name="place"
              onChange={(e) => {
                setSearchData({
                  ...searchData,
                  [e.target.name]: e.target.value,
                });
              }}
            />
            <Button
              sx={{
                textTransform: "none",
                width: "20%",
              }}
              type="submit"
            >
              Search
            </Button>

            {error && (
              <Alert
                severity="error"
                sx={{
                  width: "50%",
                  
                }}
              >
                {error}
              </Alert>
            )}
            <Result data={searchedData}/>
          </div>
        </form>
      </div>
    </div>
  );
}
