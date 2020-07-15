// @ts-ignore
const packageJson = require("../../../package.json");



export const fromEmail =
  '"Grocery Guru" <einkaufenhero@gmail.com>';
export const awsRegion = "eu-central-1";
export const projectName = packageJson.name.replace(/[-_]/g, " ");
export const companyName = projectName; // For copyright ownership
export const emailLegalText =
  // Envvar here so we can override on the demo website
  //TODO: figure out legal text before project moves too far along
  process.env.LEGAL_TEXT || "All rights reserved, protected under some license probably";
