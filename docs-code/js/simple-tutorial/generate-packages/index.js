const anemos = require('@ohayocorp/anemos');
const myPackage = require("./my-package.js");
// It is also possible to import packages from remote URLs.
// const myPackage = require("https://example.com/my-package.js");

const builder = new anemos.Builder();

myPackage.add(builder, {
  name: "custom-app",
  namespace: "custom-namespace",
  image: "hashicorp/http-echo:1.0"
});

builder.build();