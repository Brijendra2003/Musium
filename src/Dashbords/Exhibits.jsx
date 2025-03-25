import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
//

//
import "../Styles/Exhibits.css";
import Navigation from "./Navigation.jsx";
import { useEffect, useState } from "react";
import Loading from "../Components/loading.jsx";
import data from "../HelperFiles/data.js";
export default function Exhibits() {
  let [showDetails, setShowDetails] = useState(false);
  let [showData, setShowdata] = useState({
    imgurl: "",
    title: "",
    dsc: "",
    collection: "",
    artist: "",
    objType: "",
    date: "",
    location: "",
  });
  return (
    <>
      <Navigation exhibits={true} />
      {showDetails && (
        <div className="showDetails-container">
          <div className="innerContainer">
            <i
              onClick={() => setShowDetails(false)}
              className="fa-solid fa-square-xmark fa-xl"
            ></i>
            <div className="showItem">
              <img
                className="exhibit-img"
                src={`https://api.allorigins.win/raw?url=${encodeURIComponent(
                  showData.imgurl
                )}`}
                alt={showData.title}
                crossOrigin="anonymous"
              />

              <div className="exhibit-showdetails-container">
                <p className="exhibit-description">
                  <h3>{showData.title}</h3>
                  <h4>About:</h4> <br />
                  {showData.dsc}
                </p>
                <div>
                  <h4>Collection: </h4> {showData.collection}
                </div>
                <div>
                  <h4>Artist: </h4> {showData.artist}
                </div>
                <div>
                  <h4>Object Type: </h4> {showData.objType}
                </div>
                <div>
                  <h4>Date: </h4> {showData.date}
                </div>
                <div>
                  <h4>Location: </h4> {showData.location}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="exhibits-container">
        <ImageList sx={{ width: 700, height: 450 }}>
          <ImageListItem key="Subheader" cols={2}>
            <ListSubheader component="div">Exhibits</ListSubheader>
          </ImageListItem>
          {itemData.map((item) => (
            <ImageListItem key={item.imgurl}>
              <img
                srcSet={`https://api.allorigins.win/raw?url=${encodeURIComponent(
                  item.imgurl
                )}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`https://api.allorigins.win/raw?url=${encodeURIComponent(
                  item.imgurl
                )}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.artist}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <div
                      onClick={() => {
                        setShowdata({
                          imgurl: item.imgurl,
                          title: item.title,
                          dsc: item.dsc,
                          collection: item.collection,
                          artist: item.artist,
                          objType: item.objType,
                          date: item.date,
                          location: item.location,
                        });
                        setShowDetails(true);
                      }}
                    >
                      <InfoIcon />
                    </div>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    </>
  );
}

const itemData = data;

// const itemData = [
//   {
//     img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
//     title: "Breakfast",
//     author: "@bkristastucchio",
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
//     title: "Burger",
//     author: "@rollelflex_graphy726",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
//     title: "Camera",
//     author: "@helloimnik",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
//     title: "Coffee",
//     author: "@nolanissac",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
//     title: "Hats",
//     author: "@hjrc33",
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
//     title: "Honey",
//     author: "@arwinneil",
//     rows: 2,
//     cols: 2,
//     featured: true,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
//     title: "Basketball",
//     author: "@tjdragotta",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
//     title: "Fern",
//     author: "@katie_wasserman",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
//     title: "Mushrooms",
//     author: "@silverdalex",
//     rows: 2,
//     cols: 2,
//   },
//   {
//     img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
//     title: "Tomato basil",
//     author: "@shelleypauls",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
//     title: "Sea star",
//     author: "@peterlaster",
//   },
//   {
//     img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
//     title: "Bike",
//     author: "@southside_customs",
//     cols: 2,
//   },
// ];
