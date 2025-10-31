import * as anemos from "@ohayocorp/anemos";
import * as app from "../../lib";

const builder = new anemos.Builder();

app.add(builder, {
    name: "test-example-package",
    namespace: "test-namespace",
    image: "test-image:v1",
});

builder.build();