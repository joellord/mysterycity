import * as Ably from "ably";
import Emitter from "es6-event-emitter";

class Realtime extends Emitter {
  constructor() {
    super();
    const ably = new Ably.Realtime("Mudfsw.2PtFoA:Z7ADxjWk_TnM-quN");
    this.mainChannel = ably.channels.get("mysterycity");

    this.mainChannel.subscribe("general", (msg) => {
      switch(msg.data.code) {
        case "ANSWER":
          this.trigger("answer", msg.data);
          break;
        case "NEW_QUESTION":
          //ignore
          break;
        default:
          console.error("Unrecognised code", msg);
      }
    });
  }

  publishNewQuestion(question) {
    question.code = "NEW_QUESTION";
    this.mainChannel.publish("general", question);
  }

  subscribeToAnswers(cb) {
    this.on("answer", cb);
  }

  unsubscribeFromAnswers(cb) {
    this.off("answer", cb);
  }
}

let instance = new Realtime();
export default instance;