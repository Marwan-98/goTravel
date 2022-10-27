import React, { useEffect } from "react";

const LocationAttractions = () => {
  // useEffect(() => {
  //   const options = {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //       "X-RapidAPI-Key": "8be7cf2951msheff3a283564814ap167a8fjsnd415b34b76b5",
  //       "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com",
  //     },
  //     body: '{"geoId":293928}',
  //   };
  //   fetch("https://travel-advisor.p.rapidapi.com/attractions/v2/list", options)
  //     .then((response) => response.json())
  //     .then((response) => console.log(response))
  //     .catch((err) => console.error(err));
  // }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold uppercase my-5">top attractions</h1>
      <div className="flex flex-col md:flex-row justify-center items-center">
        <div className="w-80 break-words mx-2">
          <img
            src="/cairo.jpg"
            className="h-40 w-full object-cover object-center"
          />
          <div>
            <h2 className="text-lg font-bold">
              The Museum of Egyptian Antiquities
            </h2>
          </div>
        </div>
        <div className="w-80 break-words mx-2">
          <img
            src="/cairo.jpg"
            className="h-40 w-full object-cover object-center"
          />
          <div>
            <h2 className="text-lg font-bold">
              The Museum of Egyptian Antiquities
            </h2>
          </div>
        </div>
        <div className="w-80 break-words mx-2">
          <img
            src="/cairo.jpg"
            className="h-40 w-full object-cover object-center"
          />
          <div>
            <h2 className="text-lg font-bold">
              The Museum of Egyptian Antiquities
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationAttractions;
