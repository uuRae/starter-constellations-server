// const axios = require("axios");

// const url = "http://localhost:5001/constellations";
// axios
//   .get(url)
//   .then((response) => {
//     console.log(response.status);
//     console.log(response.statusText);
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });


// Now that you have these responses in JavaScript, you can perform all kinds of 
// operations on them. For example, try writing code that prints out an array of 
// constellations with starsWithPlanets values that are less than 10. Try writing 
// the code on your own before looking at the solution below.


// const axios = require("axios");

// const url = "http://localhost:5001/constellations";
// axios
//   .get(url)
//   .then((response) => {
//     const result = response.data.filter((constellation) => {
//       return constellation.starsWithPlanets < 10;
//     });
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error.message);
//   });

// const url = "http://localhost:5001/constellations";
// axios
//   .post(url, {
//     name: "Ara",
//     meaning: "Altar",
//     starsWithPlanets: 7,
//     quadrant: "SQ3",
//   })
//   .then((response) => {
//     console.log(response.data);
//   });

  // Since the ID for the newly created constellation
// is randomly generated, yours will look different from
// what is shown here.
// Since the ID for the newly created constellation
// is randomly generated, yours will look different from
// what is shown here.
const axios = require("axios");

const url = "http://localhost:5001/constellations";
const idToDelete = "VRBiOSV";
// axios.delete(`${url}/${idToDelete}`);

axios.get(`${url}/${idToDelete}`); // should return a 404 error, since the constellation was deleted in the previous API call