// fetch("./centroids.json")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     get_data(data);
//   });

// let data = {};
// let get_data = (centroids) => {
//   fetch("./co2emissions.json")
//     .then((response) => {
//       return response.json();
//     })
//     .then((co2_data) => {
//       centroids.forEach((country) => {
//         let sum = 0;
//         let cc = "";
//         co2_data.forEach((country_c) => {
//           if (country_c.Name == country.long_name) {
//             cc = country_c.Country_code_A3
//             if (!isNaN(country_c.Y_2018)) {
//               sum = sum + Number(country_c.Y_2018);
//             }
//           }
//         });
//         data[cc] = {
//           ln: country.long_name,
//           sn: country.short_name,
//           c_lat: country.center_lat,
//           c_lng: country.center_lng,
//           co2: sum,
//         };
//       });
//       return;
//     })
//     .then(() => {
//       fetch("./methemissions.json")
//         .then((response) => {
//           return response.json();
//         })
//         .then((meth_data) => {
//           Object.entries(data).forEach((k) => {
//             // console.log(k);
//             let sum = 0;
//             meth_data.forEach((country_m) => {
//               if (country_m.Name == k[0]) {
//                 if (!isNaN(country_m.Y_2018)) {
//                   sum = sum + Number(country_m.Y_2018);
//                 }
//               }
//             });
//             data[k[0]].meth = sum;
//           });
//           main();
//           return;
//         });
//     });
// };

// let main = () => {
//   console.log(data)
//   render_globe();
//   // document.getElementById("data-view").innerHTML = JSON.stringify(data);
// };

