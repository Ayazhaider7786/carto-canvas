import React, { useEffect, useRef } from "react";
import {
  Viewer,
  Cartesian3,
  OpenStreetMapImageryProvider,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
} from "cesium";

import { useSelector } from "react-redux";

const Map = () => {
  let heightOfEntity = 10;
  let markerImg =
    "http://localhost:3000/src/components/assests/mapicons/marker.png ";

  const divRef = useRef(null);
  const mapRef = useRef(null);

  const markerCoordinates = useSelector((state) => state.addMarker.markers);

  console.log("new coordiantes are : ");
  console.log(markerCoordinates);

  // console.log(
  //   "lat is : " + markerCoordinates.lat + " lng is : " + markerCoordinates.lng
  // );

  useEffect(() => {
    mapRef.current = new Viewer(divRef.current);
    let map = mapRef.current;

    // map.infoBox.frame.setAttribute(
    //   "sandbox",
    //   "allow-same-origin",
    //   "allow-popups",
    //   "allow-forms",
    //   "allow-top-navigation"
    // );

    map.infoBox.frame.setAttribute("allowScripts", "true");

    console.log("map : ", map.infoBox.frame);

    function handleDeleteMarker(event) {
      console.log("enity is : ", event);
    }

    map.imageryLayers.addImageryProvider(
      new OpenStreetMapImageryProvider({
        url: "https://a.tile.openstreetmap.org/",
      })
    );

    map.entities.add({
      position: Cartesian3.fromDegrees(73.0479, 33.6844, heightOfEntity),
      billboard: {
        image: markerImg,
        width: 40,
        height: 40,
      },
      description:
        "<h1>Islamabad Marker</h1>" +
        "<h3>lat : 33.6844</h3>" +
        "<h3>lng : 73.0479</h3>" +
        "<p>This is a Islamabad. Islamabad is the Capital of Pakistan</p>" +
        "<button class='btn btn-danger' onclick='handleDeleteMarker(entity)'>Delete</button>",
    });

    map.camera.flyTo({
      destination: Cartesian3.fromDegrees(73.0479, 33.6844, 1000000),
    });

    // map.flyTo(Cesium.Cartesian3.fromDegrees(33.333, 73.333));
    return () => map.destroy();
  }, []);

  useEffect(() => {
    // 33.6844° N, 73.0479

    console.log("values of marker Coodianters 22 : ", markerCoordinates);
    if (markerCoordinates[0].lat != undefined) {
      // function to draw Marker
      let map = mapRef.current;
      //sandbox

      function handleDeleteMarker(entity) {
        console.log("enity is : ", entity);
      }

      function drawMarker(lat, lng, name, description) {
        map.entities.add({
          position: Cartesian3.fromDegrees(lng, lat, heightOfEntity),
          billboard: {
            image: markerImg,
            width: 40,
            height: 40,
          },
          description:
            "<h1>" +
            name +
            "</h1>" +
            "<h3>lat : " +
            lat +
            "</h3>" +
            "<h3>lng : " +
            lng +
            "</h3>" +
            "<p>" +
            description +
            "</p>" +
            '<button class="btn btn-danger" onclick="handleDeleteMarker(entity)">Delete</button>',
        });
      }

      if (
        markerCoordinates[0].lat != undefined &&
        markerCoordinates[0].lng != undefined &&
        markerCoordinates[0] != undefined
      ) {
        console.log("haoy");
        console.log(
          "lat is 2 : " +
            markerCoordinates[0].lat +
            " lng is 2: " +
            markerCoordinates[0].lng
        );

        drawMarker(
          parseFloat(markerCoordinates[0].lat),
          parseFloat(markerCoordinates[0].lng),
          markerCoordinates[0].name,
          markerCoordinates[0].description
        );
      }

      // i cannot get value markerCoordinates.lat and  markerCoordinates.lng in this space

      // console.log(
      //   "lat is 3 : " +
      //     markerCoordinates.lat +
      //     " lng is 3 : " +
      //     markerCoordinates.lng
      // );
    }
  }, [markerCoordinates]);

  return (
    <>
      <div className="Map">
        <div className="cesium" ref={divRef} style={{ height: "100vh" }} />
      </div>
    </>
  );
};

export default Map;
