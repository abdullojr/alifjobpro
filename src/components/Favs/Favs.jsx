import React, { useEffect, useState } from "react";
import "./style.scss";
import { Grid } from "@mui/material";
import Bar from "@mui/material/AppBar";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Favs = () => {
  let favorites = localStorage.getItem("favs");
  let exectData = JSON.parse(favorites);

  const [fevs, setFevs] = useState(exectData);

  const handleRemove = (data, index) => {
    let newArray = [];
    for (let i = 0; i <= data.length - 1; i++) {
      if (index !== data[i]) {
        newArray.push(data[i]);
        setFevs(newArray);
      }
    }
    localStorage.setItem("favs", JSON.stringify(newArray));
  };

  useEffect(() => {
    console.log("Chnaged!");
  }, [fevs]);

  const favs = fevs.map((e, i) =>
    e != "" ? (
      <Grid item xs={12} key={i} className="fav-element-container">
        <Bar position="relative" className="fav-element">
          <div className="part-one">
            <h1 className="text">{e}</h1>
          </div>
          <div className="part-two">
            <DeleteForeverIcon
              className="text"
              onClick={() => handleRemove(exectData, e)}
            />
          </div>
        </Bar>
      </Grid>
    ) : (
      <></>
    )
  );

  return (
    <div className="favs_main">
      <h1>Favorites: </h1>
      <Grid container>{favs}</Grid>
    </div>
  );
};

export default Favs;
