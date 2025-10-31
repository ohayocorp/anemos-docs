import * as anemos from "@ohayocorp/anemos";
import { Component } from "./component";
// highlight-next-line
import * as helloWorld from "@ohayocorp/anemos-hello-world";

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