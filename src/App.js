import React, {Component} from 'react';
import './App.css';

import { Slide, Title, Subtitle, Text, List, Browser, Image } from "@sambego/diorama";

import TalkTitle from "./slides/TalkTitle";
import About from "./slides/About";

import DeckOnSteroids from "./components/DeckOnSteroids";
import QuizSlide from "./components/QuizSlide";
import GetReady from "./components/GetReady";
import StorySlide from "./components/StorySlide";
import SectionSlide from "./components/SectionSlide";
import OAuthGrant from "./components/OAuthGrant";
import CodeSlide from "./components/CodeSlide";
import Login from "./components/Login";
import Callback from "./components/Callback";
import ContactAPI from "./components/ContactAPI";

import TwitterWoohoo from "./slides/TwitterWoohoo";
import Stickers from "./slides/Stickers";
import OAuth from "./slides/OAuth";
import JWT from "./slides/JWT";
import JwtAnatomy from "./slides/JwtAnatomy";
import ThankYou from "./slides/ThankYou";

import ImgImplicit1 from "./img/oauth-implicit-1.svg";
import ImgImplicit2 from "./img/oauth-implicit-2.svg";
import ImgImplicit3 from "./img/oauth-implicit-3.svg";
import ImgImplicit4 from "./img/oauth-implicit-4.svg";
import ImgImplicit5 from "./img/oauth-implicit-5.svg";
import ImgImplicit6 from "./img/oauth-implicit-6.svg";
import ImgImplicit7 from "./img/oauth-implicit-7.svg";
import ImgImplicit8 from "./img/oauth-implicit-8.svg";
import ImgImplicit9 from "./img/oauth-implicit-9.svg";
import ImgAuthCode1 from "./img/oauth-authcode-1.svg";
import ImgAuthCode2 from "./img/oauth-authcode-2.svg";
import ImgAuthCode3 from "./img/oauth-authcode-3.svg";
import ImgAuthCode4 from "./img/oauth-authcode-4.svg";
import ImgAuthCode5 from "./img/oauth-authcode-5.svg";
import ImgAuthCode6 from "./img/oauth-authcode-6.svg";
import ImgAuthCode7 from "./img/oauth-authcode-7.svg";
import ImgAuthCode8 from "./img/oauth-authcode-8.svg";
import ImgAuthCode9 from "./img/oauth-authcode-9.svg";
import ImgAuthServer1 from "./img/auth-server-1.svg";
import ImgAuthServer2 from "./img/auth-server-2.svg";
import ImgAuthServer3 from "./img/auth-server-3.svg";
import ImgAuthServer4 from "./img/auth-server-4.svg";
import ImgAuthHeader from "./img/authheader.png";
import ImgOpenIdConnect1 from "./img/oidc-1.svg";
import ImgOpenIdConnect2 from "./img/oidc-2.svg";
import ImgOpenIdConnect3 from "./img/oidc-3.svg";
import ImgOpenIdConnect4 from "./img/oidc-4.svg";
import ImgOpenIdConnect5 from "./img/oidc-5.svg";

import ImgBye from "./img/bye1.gif";

import global from "./utils/global";

const LANGUAGE = global.LANGUAGE;
const BACKFRONT = global.BACKFRONT;
const OAUTH_LEVEL = global.OAUTH_LEVEL;
const JWT_LEVEL = global.JWT_LEVEL;

const PRESENTATION_TIME_MINUTES = 50;
const QUESTION_TIMEOUT = 30;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = global.getAll();

    const timeLeft = () => {
      const now = (new Date()).getTime();
      const start = global.getGlobalProp("startTs") || now - 2000;
      const duration = (now - start)/1000;
      const timeLeft = (PRESENTATION_TIME_MINUTES * 60) - duration;
      let minutes = Math.floor(timeLeft/60);
      let seconds = Math.round(timeLeft % 60);
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;
      return `${minutes}:${seconds}`;
    };

    const self = this;
    const timer = () => {
      global.setGlobalProp("timeLeft", timeLeft());
      console.log(self.state.timeLeft);
      setTimeout(timer, 30000);
    };
    timer();

    this.updateState = this.updateState.bind(this);
  }

  updateState() {
    this.setState(global.getAll());
  }

  componentWillMount() {
    global.subscribe(this.updateState);
  }

  componentWillUnmount() {
    global.unsubscribe(this.updateState);
  }

  render() {
    const SLIDES = {
      TEST_QUESTION: 6,
      LANGUAGE: 14,
      BACKFRONT: 21,
      OAUTH_LEVEL: 26,
      IMPLICIT_ANALOGY_START: 27,
      TROLL: 31,
      PROVE_TO_WIZARD: 39,
      IMPLICIT_SECTION: 49,
      ACCESSCODE_ANALOGY_START: 60,
      PROVE_TO_ENCHANTRESS: 70,
      ACCESSCODE_SECTION: 83,
      TOKENS_START: 93,
      JWT_LEVEL: 97,
      SECURE_APPS: 113,
      AUTH_API_DEMO: 131,
      LAST_SECTION: 138,
      OIDC_ANALOGY_START: 139,
      OIDC_START: 147,
      HACKJWT: 153,
      CLOSING: 150
    };

    return (
      <div className="App">
        <DeckOnSteroids swipeToChange={false}>
          {/*0*/}
          <TalkTitle nextSlide="0" previousSlide="0" />

          {/*1*/}
          <About/>
          {/*2*/}
          <TwitterWoohoo/>
          {/*3*/}
          <Stickers/>

          {/*4*/}
          <Slide>
            <Title>Not your normal talk</Title>
            <Subtitle><a href="https://ezurl.to/idcity">https://ezurl.to/idcity</a></Subtitle>
          </Slide>

          {/*5*/}
          <GetReady/>

          {/*6*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 1,
            question: "How do you want to make your choices?",
            choices: [
              {value: 1, moveToSlide: SLIDES.TEST_QUESTION + 1, text: "Raise Hands"},
              {value: 2, moveToSlide: SLIDES.TEST_QUESTION + 2, text: "Shout as loud as we can"},
              {value: 3, moveToSlide: SLIDES.TEST_QUESTION + 3, text: "Use this app"},
              {
                value: 4,
                moveToSlide: SLIDES.TEST_QUESTION + 4,
                text: "I don't care, I just want this demo to fail miserably"
              }
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*7*/}
          <Slide nextSlide={SLIDES.TEST_QUESTION + 5} previousSlide={SLIDES.TEST_QUESTION - 1}>
            <Title>Raise Hands Slides</Title>
          </Slide>

          {/*8*/}
          <Slide nextSlide={SLIDES.TEST_QUESTION + 5} previousSlide={SLIDES.TEST_QUESTION - 1}>
            <Title>Shouting!</Title>
          </Slide>

          {/*9*/}
          <Slide nextSlide={SLIDES.TEST_QUESTION + 5} previousSlide={SLIDES.TEST_QUESTION - 1}>
            <Title>Cool! Let's use the app</Title>
          </Slide>

          {/*10*/}
          <Slide nextSlide={SLIDES.TEST_QUESTION + 5} previousSlide={SLIDES.TEST_QUESTION - 1}>
            <Title>Fuck you too!</Title>
          </Slide>

          {/*11*/}
          <Slide previousSlide={SLIDES.TEST_QUESTION - 1}>
            <Title>Moving on</Title>
          </Slide>

          {/*12*/}
          <Slide>
            <Title>Let's get to know each other</Title>
          </Slide>

          {/*13*/}
          <GetReady/>

          {/*14*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 2,
            question: "What's your language of choice?",
            choices: [
              {
                value: 1,
                moveToSlide: SLIDES.LANGUAGE + 1,
                text: LANGUAGE.JAVASCRIPT,
                globalProp: {prop: "lang", val: LANGUAGE.JAVASCRIPT}
              },
              {value: 2, moveToSlide: SLIDES.LANGUAGE + 2, text: LANGUAGE.PHP, globalProp: {prop: "lang", val: LANGUAGE.PHP}},
              {value: 3, moveToSlide: SLIDES.LANGUAGE + 3, text: LANGUAGE.PYTHON, globalProp: {prop: "lang", val: LANGUAGE.PYTHON}},
              {
                value: 4,
                moveToSlide: SLIDES.LANGUAGE + 4,
                text: "Other (sucks to be you...)",
                globalProp: {prop: "lang", val: LANGUAGE.JAVASCRIPT}
              }
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*15*/}
          <Slide nextSlide={SLIDES.LANGUAGE + 5} previousSlide={SLIDES.LANGUAGE - 1}>
            <Title>JavaScript!</Title>
            <Text>Great choice!</Text>
          </Slide>

          {/*16*/}
          <Slide nextSlide={SLIDES.LANGUAGE + 5} previousSlide={SLIDES.LANGUAGE - 1}>
            <Title>PHP</Title>
            <Text>Ok then...</Text>
          </Slide>

          {/*17*/}
          <Slide nextSlide={SLIDES.LANGUAGE + 5} previousSlide={SLIDES.LANGUAGE - 1}>
            <Title>Python</Title>
            <Text>Ugh, I'll do my best</Text>
          </Slide>

          {/*18*/}
          <Slide nextSlide={SLIDES.LANGUAGE + 5} previousSlide={SLIDES.LANGUAGE - 1}>
            <Title>Sorry</Title>
            <Text>I pick for you. JavaScript it is!</Text>
          </Slide>

          {/*19*/}
          <Slide previousSlide={SLIDES.LANGUAGE - 1}>
            <Title>You picked {this.state.lang}</Title>
            <Text>From here on, demos will be in {this.state.lang}</Text>
            <Text>Next question</Text>
          </Slide>

          {/*20*/}
          <GetReady/>

          {/*21*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 3,
            question: "Would you consider yourself a...",
            choices: [
              {
                value: 1,
                moveToSlide: SLIDES.BACKFRONT + 1,
                text: "Back-end developer",
                globalProp: {prop: "backfront", val: BACKFRONT.BACKEND}
              },
              {value: 2, moveToSlide: SLIDES.BACKFRONT + 1,
                text: "Front-end developer",
                globalProp: {prop: "backfront", val: BACKFRONT.FRONTEND}
              },
              {value: 3, moveToSlide: SLIDES.BACKFRONT + 1,
                text: "Full Stack developer",
                globalProp: {prop: "backfront", val: BACKFRONT.FULLSTACK}
              },
              {value: 4, moveToSlide: SLIDES.BACKFRONT + 1,
                text: "Other",
                globalProp: {prop: "backfront", val: BACKFRONT.OTHER}
              }
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*22*/}
          <Slide>
            <Title>Great!</Title>
            <Text>I feel like we already know each other</Text>
            <Text>This talk will be oriented towards {this.state.lang} {this.state.backfront} developers</Text>
          </Slide>

          {/*23*/}
          <Slide>
            <Title>Let's get started!</Title>
          </Slide>

          {/*24*/}
          <OAuth />

          {/*25*/}
          <GetReady/>

          {/*26*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 4,
            question: "How familiar with OAuth are you?",
            choices: [
              {
                value: 1,
                moveToSlide: SLIDES.IMPLICIT_ANALOGY_START,
                text: "Not much, explain with analogies",
                globalProp: {prop: "oauthLevel", val: OAUTH_LEVEL.BEGINNER}
              },
              {value: 2, moveToSlide: SLIDES.IMPLICIT_SECTION,
                text: "I know enough of it, remind me with boxes and arrows",
                globalProp: {prop: "oauthLevel", val: OAUTH_LEVEL.KNOWLEDGEABLE}
              },
              {value: 3, moveToSlide: SLIDES.TOKENS_START,
                text: "I know all there is to know, skip this OAuth stuff",
                globalProp: {prop: "oauthLevel", val: OAUTH_LEVEL.SKIP}
              }
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/************ Beginner with OAuth ************/}
          {/*27*/}
          <StorySlide
            image="forest"
            text="You wake up in a forest clearing with nothing except your clothes. You don't remember how you got here.
            Your head hurts a bit. The only thing you remember are the words 'horse battery staple'. There is a path in front of you."
          />
          {/*28*/}
          <StorySlide
            image="pathvillage"
            text="After walking for hours, you finally see a village up ahead. Finally, you'll be able to find food and shelter."
          />
          {/*29*/}
          <StorySlide
            image="troll"
            text="As you get the to a bridge, a troll jumps out of nowhere. 'Who dares enter without my permission' he screams."
          />
          {/*30*/}
          <GetReady/>
          {/*31*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 5,
            question: "What shall you do?",
            choices: [
              {value: 1, moveToSlide: SLIDES.TROLL + 1, text: "Pay the troll"},
              {value: 2, moveToSlide: SLIDES.TROLL + 2, text: "Beat him up"},
              {value: 3, moveToSlide: SLIDES.TROLL + 3, text: "Negociate with the troll"}
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*32*/}
          <Slide nextSlide={SLIDES.TROLL - 1} previousSlide={SLIDES.TROLL - 1}>
            <Title>Pay the troll</Title>
            <Text>You don't have any money, remember? Pay attention!</Text>
          </Slide>

          {/*33*/}
          <Slide nextSlide={SLIDES.TROLL - 1} previousSlide={SLIDES.TROLL - 1}>
            <Title>Beat him up</Title>
            <Text>The trolls always win.<br/>Never engage with trolls.<br/>You die.</Text>
            <Title>The End</Title>
          </Slide>

          {/*34*/}
          <Slide nextSlide={SLIDES.TROLL + 4} previousSlide={SLIDES.TROLL - 1}>
            <Title>Negociate</Title>
            <Text>"I don't have any money", you tell the troll.</Text>
            <Text>"Maybe we can find some sort of agreement?"</Text>
          </Slide>

          {/*35*/}
          <StorySlide
            image="troll2"
            text="'The wizard told me a hero would come', says the troll. 'If you can prove to the wizard you are said hero, I will let you in'"
          />
          {/*36*/}
          <StorySlide
            image="wizardtower"
            text="You head to the wizard tower. The place looks abandoned. 'Anyone there?'"
          />
          {/*37*/}
          <StorySlide
            image="wizard"
            text="The wizard appears in front of you. 'Prove me you are the Hero and I will tell the troll to let you cross the bridge'"
          />

          {/*38*/}
          <GetReady/>
          {/*39*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 6,
            question: "How do you prove the wizard who you are?",
            choices: [
              {value: 1, moveToSlide: SLIDES.PROVE_TO_WIZARD + 1, text: "Scream 'horse battery staple'"},
              {value: 2, moveToSlide: SLIDES.PROVE_TO_WIZARD + 2, text: "Show him your hands"},
              {value: 3, moveToSlide: SLIDES.PROVE_TO_WIZARD + 3, text: "Use a carrier pigeon to track down the hero"},
              {value: 4, moveToSlide: SLIDES.PROVE_TO_WIZARD + 4, text: "All of the above"}
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*40*/}
          <Slide nextSlide={SLIDES.PROVE_TO_WIZARD + 5} previousSlide={SLIDES.PROVE_TO_WIZARD - 1}>
            <Title>Horse Battery Staple</Title>
            <Text>Maybe you shouldn't share your password out loud, but that is correct.</Text>
            <Text>Sure, passwords work but be careful how you handle it.</Text>
          </Slide>
          {/*41*/}
          <Slide nextSlide={SLIDES.PROVE_TO_WIZARD + 5} previousSlide={SLIDES.PROVE_TO_WIZARD - 1}>
            <Title>Show Hand</Title>
            <Text>Yes, those vein patterns in your hands prove that it's you.</Text>
            <Text>Biometrics! So cool, but make sure the wizard doesn't store this data.</Text>
          </Slide>
          {/*42*/}
          <Slide nextSlide={SLIDES.PROVE_TO_WIZARD + 5} previousSlide={SLIDES.PROVE_TO_WIZARD - 1}>
            <Title>Carrier Pigeon</Title>
            <Text>The carrier pigeon finds you and give you a link. You click on the link.</Text>
            <Text>One time use email passwords, clever!</Text>
          </Slide>
          {/*43*/}
          <Slide nextSlide={SLIDES.PROVE_TO_WIZARD + 5} previousSlide={SLIDES.PROVE_TO_WIZARD - 1}>
            <Title>All of the above</Title>
            <Text>You give a password, show your hands and use a single use link.</Text>
            <Text>MFA! So smart!</Text>
          </Slide>

          {/*44*/}
          <StorySlide
            image="scroll"
            text="You prove the wizard that you are the prophetized Hero. He hands you a scroll. 'Show this to the troll, he will let you go through.'"
          />
          {/*45*/}
          <StorySlide
            image="pathvillage"
            text="Now that you have the scroll, you head back to the village, confident that you will be able to get in."
          />
          {/*46*/}
          <StorySlide
            image="troll2"
            text="'You again! Can you prove you are the Hero?' You show him the scroll. 'Sorry about this, hero. I will let you in.'."
          />
          {/*47*/}
          <StorySlide
            image="village"
            text="The Troll lets you in and you finally get in the village, just before dark."
          />
          {/*48*/}
          <Slide>
            <Title>Quest complete!</Title>
            <Subtitle>What have we learned here?</Subtitle>
          </Slide>

          {/*49*/}
          <SectionSlide text="Implicit Grant" />

          {/*50*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit1} />
          {/*51*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit2} />
          {/*52*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit3} />
          {/*53*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit4} />
          {/*54*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit5} />
          {/*55*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit6} />
          {/*56*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit7} />
          {/*57*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit8} />
          {/*58*/}
          <OAuthGrant flow="Implicit Flow" image={ImgImplicit9} nextSlide={this.state.oauthLevel === OAUTH_LEVEL.BEGINNER ? SLIDES.ACCESSCODE_ANALOGY_START : SLIDES.ACCESSCODE_SECTION}/>

          {/*59*/}
          <GetReady/>
          {/*60*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 7,
            question: "Do you want another analogy for the access code grant?",
            choices: [
              {value: 1, moveToSlide: SLIDES.ACCESSCODE_ANALOGY_START + 1, text: "Sure"},
              {value: 2, moveToSlide: SLIDES.ACCESSCODE_SECTION, text: "No, enough with this nonsense"}
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*61*/}
          <StorySlide
            image="mayor"
            text="As you get in the village, you are greeted by the mayor. 'I can provide you with food and shelter if you agree to do a quest for me', he proposes."
          />
          {/*62*/}
          <StorySlide
            image="mayor"
            text="'All of our treasures are locked in a cave nearby and only the Enchantress knows the code to get in. If you are the True Hero, maybe she'll give you the code to get in.'"
          />
          {/*63*/}
          <StorySlide
            image="pathvillage"
            text="And off you go again, through the same path that brought you here. Headed for the enchantress castle."
          />
          {/*64*/}
          <StorySlide
            image="forest"
            text="You walk days and night through the forest, fighting hordes of evil creature that are not relevant for this talk."
          />
          {/*65*/}
          <StorySlide
            image="enchantresscastle"
            text="Finally, you arrive at the enchantress castle. You knock at the door."
          />
          {/*66*/}
          <StorySlide
            image="enchantress"
            text="'Ah! Hero! I've been expecting you', the enchantress says."
          />
          {/*67*/}
          <StorySlide
            image="enchantress"
            text="'It has come to my attention that you seek the code to get in the cave.'"
          />
          {/*68*/}
          <StorySlide
            image="enchantress"
            text="'If you can prove to me that you are the True Hero, I will help you.'"
          />
          {/*69*/}
          <GetReady/>
          {/*70*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 8,
            question: "How will you prove you are the hero?",
            choices: [
              {value: 1, moveToSlide: SLIDES.PROVE_TO_ENCHANTRESS + 1, text: "Show the wizard scroll"},
              {value: 2, moveToSlide: SLIDES.PROVE_TO_ENCHANTRESS + 2, text: "Engage in a fight"},
              {value: 3, moveToSlide: SLIDES.PROVE_TO_ENCHANTRESS + 3, text: "Shout 'horse battery staple'"}
            ],
          }} countdown={QUESTION_TIMEOUT}/>
          {/*71*/}
          <Slide nextSlide={SLIDES.PROVE_TO_ENCHANTRESS + 4} previousSlide={SLIDES.PROVE_TO_ENCHANTRESS - 1}>
            <Title>Show the Wizard scroll</Title>
            <Text>Oh, the wizard already authenticated you, fair enough.</Text>
            <Text>Single Sign on! So clever!</Text>
          </Slide>
          {/*72*/}
          <Slide nextSlide={SLIDES.PROVE_TO_ENCHANTRESS} previousSlide={SLIDES.PROVE_TO_ENCHANTRESS - 1}>
            <Title>Engage in a fight</Title>
            <Text>You die!</Text>
            <Text>You can't brute force your way in.</Text>
          </Slide>
          {/*73*/}
          <Slide nextSlide={SLIDES.PROVE_TO_ENCHANTRESS + 4} previousSlide={SLIDES.PROVE_TO_ENCHANTRESS - 1}>
            <Title>Horse Battery Staple</Title>
            <Text>Stop shouting your password, will you?</Text>
            <Text>Password authentication, not the best choice but good enough.</Text>
          </Slide>
          {/*74*/}
          <StorySlide
            image="enchantress"
            text="You truly are the Hero from the prophecy! Still, I can't trust you with the code."
          />
          {/*75*/}
          <StorySlide
            image="pigeon"
            text="Bring this carrier pigeon to the mayor, he will be able to get the code with it."
          />
          {/*76*/}
          <StorySlide
            image="forest"
            text="Equipped with your carrier pigeon, you head back to the village."
          />
          {/*77*/}
          <StorySlide
            image="village"
            text="Back in town, you quickly find the mayor and show him the pigeon."
          />
          {/*78*/}
          <StorySlide
            image="mayor"
            text="'That is great!', exclaims the mayor. He adds his seal to the pigeon message and lets it go. You wait patiently for the pigeon to come back."
          />
          {/*79*/}
          <StorySlide
            image="pigeon"
            text="The pigeon comes back with a message."
          />
          {/*80*/}
          <StorySlide
            image="mayor2"
            text="'Thank you Hero!', says the Mayor. 'This is a message from the enchantress, she shared the secret code with me'."
          />
          {/*81*/}
          <StorySlide
            image="fireworks"
            text="The villagers were then able to access all of their treasures and even shared some of it with you."
          />

          {/*82*/}
          <Slide>
            <Title>Quest complete!</Title>
            <Subtitle>What have we learned here?</Subtitle>
          </Slide>

          {/*83*/}
          <SectionSlide text="Authorization Code Grant" />

          {/*84*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode1} />
          {/*85*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode2} />
          {/*86*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode3} />
          {/*87*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode4} />
          {/*88*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode5} />
          {/*89*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode6} />
          {/*90*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode7} />
          {/*91*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode8} />
          {/*92*/}
          <OAuthGrant flow="Authorization Code" image={ImgAuthCode9} />

          {/************ Skipped OAuth ******************/}
          {/*93*/}
          <Slide>
            <Title>Congratulations, you are an OAuth expert</Title>
            <Subtitle>Now, let's take a look at the tokens</Subtitle>
          </Slide>

          {/*94*/}
          <Slide>
            <Title>Tokens</Title>
            <List>
              <li>WS-*</li>
              <li>SAML</li>
              <li>Custom stuff</li>
              <li>JWT</li>
            </List>
          </Slide>

          {/*95*/}
          <JWT />

          {/*96*/}
          <GetReady/>

          {/*97*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 9,
            question: "How familiar with JWTs are you?",
            choices: [
              {
                value: 1,
                moveToSlide: SLIDES.JWT_LEVEL + 1,
                text: "I don't know what they are",
                globalProp: {prop: "jwtLevel", val: JWT_LEVEL.BEGINNER}
              },
              {value: 2, moveToSlide: SLIDES.JWT_LEVEL + 1,
                text: "I used them but I'd like to know more",
                globalProp: {prop: "jwtLevel", val: JWT_LEVEL.KNOWLEDGEABLE}
              },
              {value: 3, moveToSlide: SLIDES.SECURE_APPS,
                text: "I am familiar enough, skip this",
                globalProp: {prop: "jwtLevel", val: JWT_LEVEL.SKIP}
              }
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*98*/}
          <SectionSlide text="Anatomy of a JWT" />

          {/*99*/}
          <JwtAnatomy>A simple JWT</JwtAnatomy>
          {/*100*/}
          <JwtAnatomy highlight="all">Three parts separated by "."</JwtAnatomy>
          {/*101*/}
          <JwtAnatomy highlight="header">Header</JwtAnatomy>
          {/*102*/}
          <JwtAnatomy highlight="header" partial>Header</JwtAnatomy>
          {/*103*/}
          <JwtAnatomy highlight="header" partial>atob(**header**);</JwtAnatomy>
          {/*104*/}
          <JwtAnatomy highlight="header" partial code>
            &#123;<br/>
            &nbsp;&nbsp;"alg": "HS256",<br/>
            &nbsp;&nbsp;"typ": "JWT"<br/>
            &#125;
          </JwtAnatomy>
          {/*105*/}
          <JwtAnatomy highlight="payload">Payload</JwtAnatomy>
          {/*106*/}
          <JwtAnatomy highlight="payload" partial>Payload</JwtAnatomy>
          {/*107*/}
          <JwtAnatomy highlight="payload" partial>atob(**payload**);</JwtAnatomy>
          {/*108*/}
          <JwtAnatomy highlight="payload" partial code>
            &#123;<br/>
            &nbsp;&nbsp;"sub": "1234567890",<br/>
            &nbsp;&nbsp;"name": "John Doe",<br/>
            &nbsp;&nbsp;"iat": 1516239022<br/>
            &#125;
          </JwtAnatomy>
          {/*109*/}
          <JwtAnatomy highlight="signature">Signature</JwtAnatomy>
          {/*110*/}
          <JwtAnatomy highlight="signature" partial>Signature</JwtAnatomy>
          {/*111*/}
          <JwtAnatomy highlight="signature" partial code>
            hmacsha256(<br/>
            &nbsp;&nbsp;header + payload,<br/>
            &nbsp;&nbsp;SECRET_KEY<br/>
            )
          </JwtAnatomy>
          {/*112*/}
          <Slide>
            <Browser url="https://jwt.io"/>
          </Slide>

          {/*113*/}
          <SectionSlide text="Using JWTs to Secure Apps" />

          {/*114*/}
          <Slide>
            <Title>Securing Applications</Title>
            <Subtitle>Authorization Server</Subtitle>
          </Slide>

          {/*115*/}
          <OAuthGrant flow="Authorization Server" image={ImgAuthServer1} />
          {/*116*/}
          <OAuthGrant flow="Authorization Server" image={ImgAuthServer2} />
          {/*117*/}
          <OAuthGrant flow="Authorization Server" image={ImgAuthServer3} />
          {/*118*/}
          <OAuthGrant flow="Authorization Server" image={ImgAuthServer4} />

          {/*119*/}
          <Slide>
            <Title>Authorization Server in Code</Title>
            <Subtitle>IIRC, this should be {this.state.lang}</Subtitle>
          </Slide>

          {/*120*/}
          <CodeSlide lang={this.state.lang}>
            {(this.state.lang === LANGUAGE.JAVASCRIPT && `
app.post("/login", function(req, res) {
  // Validate request
  if (!req.body.username || !req.body.password) {
    return res.status(400).send(\`Need username and password\`);
  }
});
            `) || (this.state.lang === LANGUAGE.PHP && `
// /login/index.php
if ($_SERVER['REQUEST_METHOD'] === "POST") {
	// Validate request
	$username = $_POST["username"];
	$password = $_POST["password"];

	if (!$username || !$password) {
		echo "Need username and password";
		exit;
	}
}
            `) || (this.state.lang === LANGUAGE.PYTHON && `
@app.route("/login", methods=["POST"])
  #Validate request
  username = request.form.get("username")
  password = request.form.get("password")

  if (username is "" or password is ""):
    abort(400)
            `)}
          </CodeSlide>
          {/*121*/}
          <CodeSlide>
            {(this.state.lang === LANGUAGE.JAVASCRIPT && `
app.post("/login", function(req, res) {
  // Validate request
  // ...

  // Find a matching user
  var user = users.find(function(u) {
    return (u.username === req.body.username &&
      u.password === req.body.password);
  });
  if (!user) return res.status(401).send(\`User not found\`);
});
          `) || (this.state.lang === LANGUAGE.PHP && `
// /login/index.php
if ($_SERVER['REQUEST_METHOD'] === "POST") {
	// Validate request
	// ...

	// Find a matching user
	for ($i = 0; $i < count($users); $i++) {
		if ($users[$i]["username"] === $username && $users[$i]["password"] === $password) {
			$matchingUser = $users[$i];
			break;
		}
	}
}
          `) || (this.state.lang === LANGUAGE.PYTHON && `
@app.route("/login", methods=["POST"])
  #Validate request
  #...

  # Find a matching user
  user = next((user for user in users if user["username"] == username and
                                        user["password"] == password), False)
  if (user == False):
    abort(401)
          `)}
          </CodeSlide>
          {/*122*/}
          <CodeSlide>
            {(this.state.lang === LANGUAGE.JAVASCRIPT && `
app.post("/login", function(req, res) {
  // Validate request
  // ...

  // Find user in DB
  // ...

  // Generate a JWT (jsonwebtoken)
  var token = jwt.sign({
    sub: user.id,
    username: user.username,
    admin: false
  }, "abcd");
});
          `) || (this.state.lang === LANGUAGE.PHP && `
// /login/index.php
if ($_SERVER['REQUEST_METHOD'] === "POST") {
	// Validate request
	// ...

	// Find a matching user
	// ...

	// Generate a JWT (ReallySimpleJWT)
	$builder = new TokenBuilder();

	$token = $builder->addPayload([
	  ['key' => 'sub', 'value' => $matchingUser["id"]],
	  ['key' => 'username', 'value' => $matchingUser["username"]],
	  ['key' => 'admin', 'value => false]])
	    ->setSecret("abcd")
	    ->build();
}
          `) || (this.state.lang === LANGUAGE.PYTHON && `
@app.route("/login", methods=["POST"])
  #Validate request
  #...

  # Find a matching user
  # ...

  # Generate a JWT (jose)
  token = jwt.encode({
        "sub": str(user["id"]),
        "username": user["username"],
        "admin": False
    }, "abcd", algorithm='HS256')
          `)}
          </CodeSlide>
          {/*123*/}
          <CodeSlide>
            {(this.state.lang === LANGUAGE.JAVASCRIPT && `
app.post("/login", function(req, res) {
  // Validate request
  // ...

  // Find user in DB
  // ...

  // Generate a JWT
  // ...

  // Redirect the user with a JWT
  res.redirect(req.body.callback + "#access_token=" + token);
});
          `) || (this.state.lang === LANGUAGE.PHP && `
// /login/index.php
if ($_SERVER['REQUEST_METHOD'] === "POST") {
	// Validate request
	// ...

	// Find a matching user
	// ...

	// Generate a JWT (ReallySimpleJWT)
	// ...

  // Redirect the user with a JWT
  header('Location: '.$callback."#access_token=".$token);
}
          `) || (this.state.lang === LANGUAGE.PYTHON && `
@app.route("/login", methods=["POST"])
  #Validate request
  #...

  # Find a matching user
  # ...

  # Generate a JWT (jose)
  # ...

  # Redirect the user with a JWT
  redirect_url = callback + "#access_token=" + token
  return redirect(redirect_url, code=302)
          `)}
          </CodeSlide>
          {/*124*/}
          <Slide>
            <Title>Securing Applications</Title>
            <Subtitle>Front End</Subtitle>
          </Slide>
          {/*125*/}
          <Slide>
            <Subtitle>Add Authorization Header</Subtitle>
            <Image src={ImgAuthHeader} />
          </Slide>
          {/*126*/}
          <Slide>
            <Title>Securing Applications</Title>
            <Subtitle>API</Subtitle>
          </Slide>

          {/*127*/}
          <CodeSlide>
            {(this.state.lang === LANGUAGE.JAVASCRIPT && `
app.get("/admindata", (req, res) => {
  // Check for an Authorization header
  if (!req.headers.authorization) {
    res.status(401).send("No authorization header found");
  }
});
          `) || (this.state.lang === LANGUAGE.PHP && `
// /admindata/index.php
if ($_SERVER['REQUEST_METHOD'] === "GET") {
  // Check for an Authorization header
  $token = substr($_SERVER["HTTP_AUTHORIZATION"], 7);
  if (!$token) {
		echo "No authorization header found";
		exit;
	}
}
          `) || (this.state.lang === LANGUAGE.PYTHON && `
@app.route("/admindata")
def protected_admindata():
  # Check for an Authorization header
  token = request.headers.get("Authorization", None)
  if (token == None):
    abort(401)
          `)}
          </CodeSlide>
          {/*128*/}
          <CodeSlide>
            {(this.state.lang === LANGUAGE.JAVASCRIPT && `
app.get("/admindata", (req, res) => {
  //Check for an Authorization header
  //...

  //Get the JWT (Authorization: Bearer ..token..
  const jwt = req.headers.authorization.split(" ")[1];
  const payload = jwt.split(".")[1];
  payload = JSON.parse(Buffer.from(payload, "base64"));
});
          `) || (this.state.lang === LANGUAGE.PHP && `
// /admindata/index.php
if ($_SERVER['REQUEST_METHOD'] === "GET") {
  // Check for an Authorization header
  // ...

  // Get the JWT (Authorization: Bearer ..token..)
  $parts = explode(".", $token);
  $payload = json_decode(base64_decode($parts[1]));
}
          `) || (this.state.lang === LANGUAGE.PYTHON && `
@app.route("/admindata")
def protected_admindata():
  # Check for an Authorization header
  # ...

  # Get the JWT (Authorization: Bearer ..token..)
  parts = token.split(".")
  payload = parts[1]
  payload = json.load(base64.b64decode(parts[1]))
          `)}
          </CodeSlide>
          {/*129*/}
          <CodeSlide>
            {(this.state.lang === LANGUAGE.JAVASCRIPT && `
app.get("/admindata", (req, res) => {
  //Check for an Authorization header
  //...

  //Get the JWT (Authorization: Bearer ..token..
  //...

  //Check permissions
  if (payload.admin) {
    res.status(200).send("You have admin rights");
  } else {
    res.status(400).send("Can't show you this");
  }
});
          `) || (this.state.lang === LANGUAGE.PHP && `
// /admindata/index.php
if ($_SERVER['REQUEST_METHOD'] === "GET") {
  // Check for an Authorization header
  // ...

  // Get the JWT (Authorization: Bearer ..token..)
  // ...

  // Check permissions
  if ($payload["admin"]) {
    echo "You have admin rights";
  } else {
    echo "Can't show you this";
    exit;
  }
}
          `) || (this.state.lang === LANGUAGE.PYTHON && `
@app.route("/admindata")
def protected_admindata():
  # Check for an Authorization header
  # ...

  # Get the JWT (Authorization: Bearer ..token..)
  # ...

  # Check permissions
  if (payload.admin)
    print "You have admin rights"
  else
    print "Can't show you this"
    abort(400)
          `)}
          </CodeSlide>
          {/*130*/}
          <GetReady/>

          {/*131*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 10,
            question: "Want to see a demo?",
            choices: [
              {
                value: 1,
                moveToSlide: SLIDES.AUTH_API_DEMO + 1,
                text: "Yeah!"
              },
              {value: 2, moveToSlide: SLIDES.AUTH_API_DEMO + 5,
                text: "Please make this stop!"
              }
            ],
          }} countdown={QUESTION_TIMEOUT}/>

          {/*132*/}
          <SectionSlide text="Demo It Is!" />

          {/*133*/}
          <Login title="" authServer="http://localhost:8080" />

          {/*134*/}
          <Callback/>

          {/*135*/}
          <ContactAPI url="/protecteddata" />

          {/*136*/}
          <Slide>
            <Subtitle>Securing you applications</Subtitle>
            <List>
              <Text>Back end: Add a middleware to check for a JWT</Text>
              <Text>Front end: Add an Authorization header to requests</Text>
              <Text>Delegate sensitive data to a third party</Text>
            </List>
          </Slide>

          {/*137*/}
          <GetReady/>

          {/*138*/}
          <QuizSlide quiz={{
            code: "NEW_QUESTION",
            id: 11,
            question: "We're running out of time. What else do you want to know?",
            choices: [
              {
                value: 1,
                moveToSlide: SLIDES.OIDC_ANALOGY_START,
                text: "Tell me a story about Open ID Connect."
              },
              {
                value: 2,
                moveToSlide: SLIDES.OIDC_START,
                text: "Quickly explain Open ID Connect"
              },
              {
                value: 3,
                moveToSlide: SLIDES.AUTH_API_DEMO + 10,
                text: "Show me how JWTs can be hacked"
              },
              {
                value: 4,
                moveToSlide: SLIDES.CLOSING,
                text: "Let's just end this talk now."
              }
            ]
          }} countdown={QUESTION_TIMEOUT}/>

          {/*139*/}
          <StorySlide
            image="mayorrich"
            text="'Thank you for saving our village', the mayor says. 'You have my eternal gratitude. How can we ever repay you?'"
          />
          {/*140*/}
          <StorySlide
            image="cloud"
            text="'Well, there is one thing', you reply. 'I still don't know who I am and how I ended up here'."
          />
          {/*141*/}
          <StorySlide
            image="mayorrichthink"
            text="'Unfortunately, I can't help you with that. It seems like you just appeared here. But wait! The Echantress should know.
              By giving us the pigeon, she gave us the permission to ask for other information. Let's send another request.'"
          />
          {/*142*/}
          <StorySlide
            image="pigeon"
            text="The mayor takes the pigeon and attaches a new message to its leg. {scope: 'openid profile'} it says."
          />
          {/*143*/}
          <StorySlide
            image="mayorrich"
            text="'We should hear back from the Enchantress soon.'"
          />
          {/*144*/}
          <StorySlide
            image="enchantress2"
            text="When the Enchantress receives the pigeon, she immediately recognizes the seal from the mayor. She uses her magic to find your identity and
              writes everything up on a scroll which she sends back to the village with the carrier pigeon."
          />
          {/*145*/}
          <StorySlide
            image="mayorread"
            text="Finally, the mayor receives the message and is able to reveal you your true identity."
          />
          {/*146*/}
          <Slide>
            <Title>Quest complete!</Title>
            <Subtitle>What have we learned here?</Subtitle>
          </Slide>

          {/*147*/}
          <SectionSlide text="Open ID Connect" />

          {/*148*/}
          <OAuthGrant
            flow="Open ID Connect"
            image={ImgOpenIdConnect1}
          />
          {/*149*/}
          <OAuthGrant
            flow="Open ID Connect"
            image={ImgOpenIdConnect2}
          />
          {/*150*/}
          <OAuthGrant
            flow="Open ID Connect"
            image={ImgOpenIdConnect3}
          />
          {/*151*/}
          <OAuthGrant
            flow="Open ID Connect"
            image={ImgOpenIdConnect4}
          />
          {/*152*/}
          <OAuthGrant
            flow="Open ID Connect"
            image={ImgOpenIdConnect5}
            nextSlide={(this.state.timeLeft.split(":")[0] < 10) ? SLIDES.CLOSING : SLIDES.HACKJWT}
          />

          {/*153*/}
          <SectionSlide text="Hacking JWTs"/>



          {/*Resources: Horse Battery Staple xkcd comic: https://xkcd.com/936/ */}
          <Slide>
            <Title>Resources</Title>
            <Text>Here are some resources</Text>
            <List>
              <li><a href="https://jwt.io">Jwt.io</a></li>
              <li><a href="https://ezurl.to/oauth-talk">Full OAuth Talk</a></li>
              <li><a href="https://auth0.com/blog/a-look-at-the-latest-draft-for-jwt-bcp/">JWT Vulnerabilities</a></li>
              <li><a href="https://xkcd.com/936/">Horse Battery Staple (XKCD)</a></li>
            </List>
          </Slide>

          <Slide>
            <Image src={ImgBye} full />
          </Slide>

          <ThankYou />

        </DeckOnSteroids>
      </div>
    );
  }
}
