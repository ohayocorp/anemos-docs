const anemos = require("@ohayocorp/anemos");
const app = require("../../lib");

const builder = new anemos.Builder();

app.add(builder, {
    name: "test-example-package",
    namespace: "test-namespace",
    image: "test-image:v1",
});

builder.build();