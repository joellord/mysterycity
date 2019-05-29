import Emitter from "es6-event-emitter";

class Global extends Emitter {
  LANGUAGE = {
    JAVASCRIPT: "JavaScript",
    PHP: "PHP",
    PYTHON: "Python"
  };
  BACKFRONT = {
    BACKEND: "Back-end",
    FRONTEND: "Front-end",
    FULLSTACK: "Full Stack",
    OTHER: "Non Technical"
  };
  OAUTH_LEVEL = {
    BEGINNER: "Beginner",
    KNOWLEDGEABLE: "I know some of it",
    SKIP: "Skip this"
  };
  JWT_LEVEL = {
    BEGINNER: "Beginner",
    KNOWLEDGEABLE: "I know some of it",
    SKIP: "Skip"
  };
  state = {
    lang: this.LANGUAGE.JAVASCRIPT,
    backfront: this.BACKFRONT.BACKEND,
    oauthLevel: this.OAUTH_LEVEL.BEGINNER,
    jwtLevel: this.JWT_LEVEL.BEGINNER
  };
  getGlobalProp(prop) {
    console.log(this.state);
    return this.state[prop];
  }
  getAll() {
    return this.state;
  }
  setGlobalProp(prop, value) {
    this.state[prop] = value;
    this.trigger("propChanged");
  }
  subscribe(cb) {
    this.on("propChanged", cb);
  }
  unsubscribe(cb) {
    this.off("propChanged", cb);
  }
}

let instance = new Global();
export default instance;