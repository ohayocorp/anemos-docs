const anemos = require("@ohayocorp/anemos");
const Component = require("./component");

const builder = new anemos.Builder();

builder.addComponent(new Component());

builder.build();