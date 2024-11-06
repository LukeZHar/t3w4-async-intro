console.log("This file is running")

let defaultEnv = {
    port: 5050,
    DATABASE_URL: "ASDSA",
    JWT_SECURITY_KEY: "ASDSA",
    SECRET_KEY: "apple",
    SECURE_API_KEY: "ASDSA"
}

let contentToWrite = "";

// What it should look like
// port: 5050,
// DATABASE_URL: "ASDSA",
// JWT_SECURITY_KEY: "ASDSA",
// SECRET_KEY: "apple",
// SECURE_API_KEY: "ASDSA"

Object.keys(defaultEnv).forEach(
    envKey => {
        // Add a line to contentToWrite variable with the key name and value
        contentToWrite += `${envKey}=${defaultEnv[envKey]}\n`;
    }
);

// Give us an idea of what gets stored in the file
console.log(contentToWrite);

// All the file handling operation will be performed using fs
// const fs = require("node:fs");


// Synchronous way
// fs.writeFileSync(".env", contentToWrite);

// Asynchronous way
// fs.writeFile(filepath, filecontents, callback)

// console.log("Before the fs callback");
// fs.writeFile(".env", contentToWrite, (error) => {
//     if (error) {
//         console.log("Error encountered: ", error.message);
//     } else {
//         console.log("File written successfully");
//     }
// });

// console.log("After the fs callback");

// console.log("File created successfully");


// Promise version of node-fs
const fs = require("node:fs/promises");

// console.log("Before the fs promise");
// fs.writeFile(".env", contentToWrite)
// .then(() => {
//     console.log("After the file has been created");
//     console.log("Extra operations");
//     throw new Error("Some error occured");
// // }).then(() => {
// //     fs.writeFile(".env", contentToWrite)
// //     .then(() => {
// //         console.log("After the file has been written in the 2nd file");

// //         fs.writeFile(".env", contentToWrite)
// //         .then(() => {
// //             console.log("Written in the 3rd file");
// //         }).catch((error) => {
// //             console.log("Error encountered in the 3rd file: ", error.message);
// //         });
// //     }).catch((error) => {
// //         console.log("Error encountered in the 2nd file: ", error.message);
// //     });
// }).catch((error) => {
//     console.log("Error encountered: ", error.message);

// }).finally(() => {
//     console.log("All File operations created successfully");
// });
// console.log("After the fs promise");

async function writeEnvFile() {
    console.log("Before the await");
    try {
        let result = await fs.writeFile(".env", contentToWrite);
        console.log("Await process executed here...");
    } catch (error) {
        console.log("Error encountered: ", error.message);
    }
    console.log("After the await");
};

writeEnvFile();

async function app() {
    console.log("Before calling the app function");
    await writeEnvFile().then(() => {
        console.log("Did this work? Let's find out");
    });
    console.log("After calling the app function");
}

app();