import Mapbox from "./AzureMap";
import React, { useState, useEffect } from "react";
import * as hospitalsData from "./hospital.json";

const Maps = () => {
  const [hospitals, setHospitals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setHospitals(hospitalsData.features);
  }, []);

  const filteredHospitals = hospitals.filter((hospital) =>
    hospital.properties.NAME.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearchInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <section className="w-full bg-white" id="home">
      <div className="mx-auto max-w-7xl h-full lg:py-1 lg:grid items-center lg:grid-cols-12">
        <div className="flex flex-col justify-start px-4 py-2 md:py-16 lg:col-span-5 lg:gap-x-6 lg:px-6 lg:py-10 xl:col-span-3">
          <div className="flex items-center mt-8 mb-10">
            <input
              type="text"
              placeholder="Search for hospitals..."
              className="border rounded-l py-2 px-4"
              value={searchTerm}
              onChange={handleSearchInputChange}
            />
            <button
              className="bg-blue-500 text-white py-2 px-4 rounded-r"
              onClick={() => setSearchTerm("")}
            >
              Clear
            </button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {filteredHospitals.map((hospital, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-1">
                <h2 className="text-xl font-semibold">{hospital.properties.NAME}</h2>
                <p className="text-gray-600">{hospital.properties.DESCRIPTIO}</p>
                {/* You can add more hospital information here */}
              </div>
            ))}
          </div>
        </div>
        <div className="py-6 relative lg:col-span-7 lg:-mr-8 xl:col-span-8 flex items-center justify-center">
          <Mapbox />
        </div>
      </div>
    </section>
  );
};

export default Maps;




// import Mapbox from "./AzureMap";
// import React, { useState, useEffect } from "react";
// // import hospitalsData from "./hospitals.json"; // Import the JSON data
// import * as hospitalsData from "./hospital.json";

// const Maps = () => {
//   const [hospitals, setHospitals] = useState([]);

//   useEffect(() => {
//     // Set the hospitals data from the imported JSON
//     setHospitals(hospitalsData.features);
//   }, []);

//   return (
//     <section className="w-full bg-white" id="home">
//       <div className="mx-auto max-w-7xl h-full lg:py-1  lg:grid items-center lg:grid-cols-12">
//         {" "}
//         <div className="flex flex-col justify-start px-4 py-2 md:py-16 lg:col-span-5 lg:gap-x-6 lg:px-6 lg:py-10 xl:col-span-3">
//           {" "}
//           <div className="flex items-center mt-8 mb-10">
//             <input
//               type="text"
//               placeholder="Search for doctors..."
//               className="border rounded-l py-2 px-4 "
//             />
//             <button className="bg-blue-500 text-white py-2 px-4 rounded-r">
//               Search
//             </button>
//           </div>{" "}
//           <div className="max-h-80 overflow-y-auto">
//             {hospitals.map((hospital, index) => (
//               <div key={index} className="bg-white rounded-lg shadow-md p-4 mb-1">
//                 <h2 className="text-xl font-semibold">{hospital.properties.NAME}</h2>
//                 <p className="text-gray-600">{hospital.properties.DESCRIPTIO}</p>
//                 {/* You can add more hospital information here */}
//               </div>
//             ))}
//           </div>{" "}
//         </div>{" "}
//         <div className="py-6 relative lg:col-span-7 lg:-mr-8 xl:col-span-8 flex items-center justify-center">
//           <Mapbox />
//         </div>{" "}
//       </div>
//     </section>
//   );
// };

// export default Maps;