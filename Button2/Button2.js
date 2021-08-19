/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Button2 extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("button2-a", "./Button2/costumes/button2-a.svg", {
        x: 58.98200000000003,
        y: 29.212999999999994
      }),
      new Costume("button2-b", "./Button2/costumes/button2-b.svg", {
        x: 72,
        y: 72
      })
    ];

    this.sounds = [new Sound("pop", "./Button2/sounds/pop.wav")];

    this.triggers = [
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue!" },
        this.whenIReceiveContinue
      ),
      new Trigger(Trigger.CLICKED, this.whenthisspriteclicked),
      new Trigger(
        Trigger.BROADCAST,
        { name: "Continue!" },
        this.whenIReceiveContinue2
      ),
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenIReceiveContinue() {
    while (true) {
      if (this.stage.vars.check == 0) {
        this.stage.vars.check += 1;
      }
      yield;
    }
  }

  *whenthisspriteclicked() {
    yield* this.wait(1);
    yield* this.sayAndWait("ok so your user id is..", 2);
    yield* this.thinkAndWait("loading...", 2);
    this.say("ok so your user id is...");
    yield* this.sayAndWait(this.stage.vars.check, 2);
    this.stage.vars.check += 1;
    this.stage.vars.world += 1;
  }

  *whenIReceiveContinue2() {
    while (true) {
      if (this.stage.vars.check < this.stage.vars.world) {
        this.stage.vars.check += 1;
      }
      yield;
    }
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.stage.vars.check == this.stage.vars.world) {
        this.stage.vars.check += 1;
      }
      yield;
    }
  }
}
