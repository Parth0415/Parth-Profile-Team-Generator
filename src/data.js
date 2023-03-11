// function createMyHTML(allData) {
//   return `
    

//     <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Profile Team Generator</title>
//     <link rel="stylesheet" href="./styles.css" />
//   </head>
//   <body>
//     <header>My team</header>

//     <main>
      

//       ${allData}
//     </main>

    
//   </body>
// </html>

    
    
//     `
// }

// function createTeam(details) {
//   var secondary = "";
//   var secondaryData = "";
//   if (details.getRole() == "Manager") {
//     secondary = "OfficeNumber";
//     secondaryData = details.getofficeNumber();
//   } else if (details.getRole() == "Engineer") {
//     secondary = "Github";
//     secondaryData = details.getGithub();
//   } else if (details.getRole() == "Inter") {
//     secondary = "School";
//     secondaryData = details.getSchool();
//   }

//   return `
//     <div class="profileTile">
//         <div class="profileTileHeader">
//           <h1>${details.getName()}</h1>

//           <div class="profileTileHeaderRole">
//            <img src="./images/${details
//              .getRole()
//              .toLowerCase()}.png" alt="icon">
//             <h3>${details.getRole()}</h3>
//           </div>
//         </div>
//         <div class="profileTileMainDataContainer">
//           <div class="profileTileMainData">
//             <p>ID</p>
//             <p>${details.getId()}</p>
//           </div>
//           <div class="profileTileMainData">
//             <p>Email</p>
//             <p>${details.getEmail()}</p>
//           </div>
//           <div class="profileTileMainData">
//             <p>${secondary}</p>
//             <p>${secondaryData}</p>
//           </div>
//         </div>
//       </div>    
    
//     `;
// }
