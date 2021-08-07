const express = require("express");

const { google } = require("googleapis");
const credentials = require("./credentials.json");
const scopes = ["https://www.googleapis.com/auth/drive"];
const auth = new google.auth.JWT(
  credentials.client_email,
  null,
  credentials.private_key,
  scopes
);

const drive = google.drive({ version: "v3", auth });
const sheets = google.sheets({ version: "v4", auth });

drive.files.list({ pageSize: 1, fields: "*" }, (err, res) => {
  if (err) throw err;
  const files = res.data.files;
  if (files.length) {
    files.map((file) => {
      console.log(file);
    });
  } else {
    console.log("No files found");
  }
});
