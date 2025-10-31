const anemos = require("@ohayocorp/anemos");
const Component = require("./component");
// highlight-next-line
const helloWorld = require("@ohayocorp/anemos-hello-world");

const builder = new anemos.Builder();

// highlight-start
helloWorld.add(builder, {
    name: "example-hello-world",
    replicaCount: 2,
});
// highlight-end

builder.addComponent(new Component({
    image: "nginx:1.27",
    replicas: 3,
}));

builder.build();