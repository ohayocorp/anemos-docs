import * as anemos from "@ohayocorp/anemos";
import { Component } from "./component";

const builder = new anemos.Builder();

builder.addComponent(new Component());

builder.build();