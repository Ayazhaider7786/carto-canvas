import React, { useEffect, useRef } from "react";
import {
  Viewer,
  Cartesian3,
  OpenStreetMapImageryProvider,
  ScreenSpaceEventHandler,
  ScreenSpaceEventType,
  Math,
  Cartographic,
  defined,
} from "cesium";

import { clearMarkerArray } from "../../acion/index";
import { addMarker } from "../../acion/index";
import { clearMarkerBtnClicked } from "../../acion/index";

import { useSelector, useDispatch } from "react-redux";

const Map = () => {
  let heightOfEntity = 10;
  let markerImg =
    "http://localhost:3000/src/components/assests/mapicons/marker.png ";

  const divRef = useRef(null);
  const mapRef = useRef(null);
  const coordinatesRef = useRef(null);

  const markerCoordinates = useSelector((state) => state.addMarker.markers);
  const markerArrays = useSelector((state) => state.addMarker.markerArray);
  const isMarkerAllow = useSelector((state) => state.addMarker.isMarkerAllow);
  const BtnClearAll = useSelector((state) => state.addMarker.btnClearMarker);

  const dispatch = useDispatch();
  // function to draw Marker

  function drawMarker(map, lat, lng, name, description) {
    map.entities.add({
      name: "marker",
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
        "</p>",
    });
  }

  //------------
  function handleClearMarkerArray(e) {
    e.preventDefault();
    dispatch(clearMarkerArray());
  }

  // is there an Entity where we clicked

  function isEntityClicked(map, click) {
    var pickedObject = map.scene.pick(click.position);
    if (defined(pickedObject)) {
      return true;
    }

    return false;
  }

  // --------------------------------- Initial Map

  useEffect(() => {
    mapRef.current = new Viewer(divRef.current);
    let map = mapRef.current;

    // map.imageryLayers.addImageryProvider(
    //   new OpenStreetMapImageryProvider({
    //     url: "https://a.tile.openstreetmap.org/",
    //   })
    // );

    map.entities.add({
      name: "Fixed marker",
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
        "<p>This is a Islamabad. Islamabad is the Capital of Pakistan</p>",
    });

    map.camera.flyTo({
      destination: Cartesian3.fromDegrees(73.0479, 33.6844, 1000000),
    });

    // map.flyTo(Cesium.Cartesian3.fromDegrees(33.333, 73.333));
    return () => map.destroy();
  }, []);

  // --------------------------------- Draw Marker

  useEffect(() => {
    // 33.6844° N, 73.0479

    if (markerCoordinates[0].lat != undefined) {
      // function to draw Marker
      let map = mapRef.current;
      //sandbox

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
          map,
          parseFloat(markerCoordinates[0].lat),
          parseFloat(markerCoordinates[0].lng),
          markerCoordinates[0].name,
          markerCoordinates[0].description
        );
      }
    }
  }, [markerCoordinates]);

  // --------------------------------- show Coordinates

  useEffect(() => {
    // ...

    let map = mapRef.current;

    // Add screen space event handler to show coordinates on mouse move
    const handler = new ScreenSpaceEventHandler(map.canvas);
    handler.setInputAction((movement) => {
      const ellipsoid = map.scene.globe.ellipsoid;
      const cartesian = map.camera.pickEllipsoid(
        movement.endPosition,
        ellipsoid
      );
      if (cartesian) {
        const cartographic = ellipsoid.cartesianToCartographic(cartesian);
        const longitudeString = Math.toDegrees(cartographic.longitude).toFixed(
          6
        );
        const latitudeString = Math.toDegrees(cartographic.latitude).toFixed(6);
        // console.log(`Mouse position: ${latitudeString}, ${longitudeString}`);
        const coordinatesBox = coordinatesRef.current;
        coordinatesBox.innerText = `Mouse position: ${latitudeString}, ${longitudeString}`;
      }
    }, ScreenSpaceEventType.MOUSE_MOVE);

    return () => {
      map.destroy();
      handler.destroy();
    };
  }, []);

  // ------------------- should we drop marker or not (true and false)

  useEffect(() => {
    // .........................................
    let handler;

    if (isMarkerAllow) {
      let map = mapRef.current;

      // Create a new ScreenSpaceEventHandler and pass in the Cesium Viewer's canvas
      handler = new ScreenSpaceEventHandler(map.canvas);
      handler.setInputAction(function (event) {
        console.log("Dude i am dropping 222");

        // here is issue dude
        // ---------- should I drop marker or show properties
        if (isEntityClicked(map, event)) {
          return;
        }
        // Get the cartesian coordinates of the click location on the map
        let cartesian = map.camera.pickEllipsoid(
          event.position,
          map.scene.globe.ellipsoid
        );

        // Convert cartesian coordinates to geographic coordinates
        let cartographic = Cartographic.fromCartesian(cartesian);
        var lon = Math.toDegrees(cartographic.longitude);
        var lat = Math.toDegrees(cartographic.latitude);

        dispatch(addMarker(lat, lon, "Drop Marker", "This is a Drop Marker"));
        // Do something with the geographic coordinates, such as adding a marker
      }, ScreenSpaceEventType.LEFT_CLICK);

      return () => {
        if (handler) {
          // remove input action and destroy handler
          handler.removeInputAction(ScreenSpaceEventType.LEFT_CLICK);
          handler.destroy();
        }
      };
    }
  }, [isMarkerAllow]);

  // --------------------------------- Delete All Markers From Map Point from
  // --------------------------------- Entties not from self made array

  //there is a mistake in here
  // Marker array is just coordiantes `not an Entity array`
  // create entity array and store in array
  // then try to delete that bitch

  useEffect(() => {
    // console.log("button Cliked  00 : ", BtnClearAll);
    // console.log("markerArrays : 11 ", markerArrays);
    if (BtnClearAll) {
      let map = mapRef.current;
      //let item = map.entity.indexAt(0);
      console.log("map. entity : ", map.entities);
      let entityArray = map.entities._entities._array;
      if (markerArrays.length > 0) {
        console.log("Entity length is : ", entityArray.length);

        for (let i = entityArray.length - 1; i >= 0; i--) {
          console.log("ENtity name is " + i + " : ", entityArray[i].name);
          if (entityArray[i].name === "marker") {
            console.log("happy : ", i);
            map.entities.remove(entityArray[i]);
          }
        }
      }
      // handleClearMarkerArray();
    }

    dispatch(clearMarkerBtnClicked(false));

    // let map = mapRef.current;
    // map.entities.removeAll();
  }, [BtnClearAll]);

  return (
    <>
      <div className="Map">
        <div className="cesium" ref={divRef} style={{ height: "100vh" }} />
        <div ref={coordinatesRef} className="coordinatesRefStyles" />
      </div>
    </>
  );
};

export default Map;
