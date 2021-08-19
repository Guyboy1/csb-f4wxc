import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Button2 from "./Button2/Button2.js";
import Button3 from "./Button3/Button3.js";
import Sprite1 from "./Sprite1/Sprite1.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Button2: new Button2({
    x: 27.647058823529417,
    y: -71.88235294117646,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Button3: new Button3({
    x: -173.1764705882353,
    y: -65.8235294117647,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  }),
  Sprite1: new Sprite1({
    x: 36,
    y: 28,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true
  })
};

const project = new Project(stage, sprites);
export default project;
