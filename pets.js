// const subcommand = process.argv[2];

// import fs from "fs";
// import { readFile, writeFile } from "fs/promises";
// import { appendFile } from "fs";

// //console.log('Usage: node pets.js [read | create | update | destroy]');

// switch (subcommand) {
//   case "read": {
//     readFile("pets.json", "utf-8").then((str) => {
//       const data = JSON.parse(str);
//       const lessThan = data.length - 1;
//       if (process.argv[3] >= data.length || process.argv[3] < 0) {
//         console.log(`Usage: node pets.js read INDEX (0-${lessThan})`);
//       } else if (process.argv[3] === undefined) {
//         console.log(`Usage: node pets.js read INDEX (0-${lessThan})`);
//       } else {
//         console.log(data[process.argv[3]]);
//       }
//     });
//   }
//   case "create": {
//     readFile("pets.json", "utf-8").then((str) => {
//       const data = JSON.parse(str);

//       if (
//         parseInt(process.argv[3]) === NaN ||
//         process.argv[4] === undefined ||
//         process.argv[5] === undefined
//       ) {
//         console.log("Usage: node pets.js create AGE KIND NAME");
//       } else {
//         let Age = process.argv[3];
//         let Kind = process.argv[4];
//         let Name = process.argv[5];
//         const addData = { age: Age, kind: Kind, name: Name };

//         data.push(addData);

//         writeFile("pets.json", JSON.stringify(data))
//           .then(() => {
//             console.log(addData);
//           })
//           .catch((err) => {
//             if (err) throw err;
//           });
//       }
//     });
//   }
//   case "update":
//   case "destroy":
//   default:
//     "Usage: node pets.js [read | create | update | destroy]";
// }
