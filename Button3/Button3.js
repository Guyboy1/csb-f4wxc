/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button3 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button3/costumes/button2-a.svg", {
        x: 58.98200000000003,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button3/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button3/sounds/pop.wav")];

    this.triggers = [new Trigger(Trigger.CLICKED, this.whenthisspriteclicked)];
  }

  *whenthisspriteclicked() {
    yield* this.sayAndWait("checking  server....", 2);
    yield* this.askAndWait("user id!");
    if (this.answer < this.stage.vars.check) {
      window.open("http://anylocation.com");
    } else {
      yield* this.sayAndWait("incorrect!", 3);
    }
  }
}
