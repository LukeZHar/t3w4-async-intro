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
const fs = require("node:fs");

// Synchronous way
// fs.writeFileSync(".env", contentToWrite);

// Asynchronous way
// fs.writeFile(filepath, filecontents, callback)
fs.writeFile(".env", contentToWrite, (error) => {
    if (error) {
        console.log("Error encountered: ", error.message);
    } else {
        console.log("File written successfully");
    }
})
console.log("File created successfully");