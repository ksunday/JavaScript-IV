// CODE here for your Lambda Classes
class Person {
  constructor(Pers) {
    this.name = Pers.name;
    this.age = Pers.age;
    this.location = Pers.location;
  }
  Speak = function() {
    console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
  };
}

class Instructor extends Person {
  constructor(Inst) {
    super(Inst);
    this.specialty = Inst.specialty;
    this.favLanguage = Inst.favLanguage;
    this.catchPhrase = Inst.catchPhrase;
  }
  demo = function(subject) {
    console.log(`Today we are learning about ${subject}`);
  };
  grade = function(student, subject) {
    console.log(`${Student.name} receives a perfect score on ${subject}`);
  };
}

class Student extends Person {
  constructor(Stud) {
    super(Stud);
    this.previousBackground = Stud.previousBackground;
    this.className = Stud.className;
    this.favSubjects = Stud.favSubjects;
  }
  listsSubjects = function() {
    this.favSubjects.forEach(element => {
      console.log(`I enjoy ${element}`);
    });
  };

  PRAssignment = function(subject) {
    console.log(`${Student.name} has submitted a PR for ${subject}`);
  };
  sprintChallenge = function(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  };
}
class TeamLead extends Instructor {
  constructor(TL) {
    super(TL);
    this.gradClassName = TL.gradClassName;
    this.favInstructor = TL.favInstructor;
  }
  standUp = function(name) {
    return `${name} announces to ${channel} @channel standy times!`;
  };
  debugsCode = function() {
    return `${name} debugs ${student.name}'s code on ${subject}`;
  };
}

const Pace = new Instructor({
  name: "Pace",
  location: "LA",
  age: 29,
  favLanguage: "Binary",
  specialty: "Teaching",
  catchphrase: `Dont Quit`,
  subject: "Javascript"
});

const Navid = new TeamLead({
  name: "Navid",
  location: "Hollywood",
  age: 28,
  favLanguage: "Javascript",
  specialty: "debugging",
  catchphrase: `Show me your code`,
  gradClassName: "WebPT9",
  favInstructor: "Josh Knell",
  channel: "webpt9_navid"
});

const Kyle = new Student({
  name: "Kyle",
  location: "Detroit",
  age: 24,
  favLanguage: "English",
  specialty: "Gaming",
  catchphrase: `Derp`,
  subject: "Javascript"
});

console.log("====instructors====");
console.log(Pace);

console.log("====students====");
console.log(Kyle);

console.log("====PMs====");
console.log(Navid);
console.log("               ==========stuff that they can do==========");
console.log(" ");
console.log("           ===everyone can speak()===");
console.log(Pace.Speak());
console.log(Kyle.Speak());
console.log(Navid.Speak());
console.log(" ");
console.log("           ===teachers and pms can demo() and grade()===");
console.log(Pace.demo("JavaScript"));
console.log(Pace.grade(Kyle, "JavaScript"));
console.log(Navid.demo("Swift"));
console.log(Navid.grade(Kyle, "Swift"));
console.log(" ");
console.log("           ===only PMs can standUp() and debugsCode()===");
console.log(Navid.standUp("WEBpt9"));
console.log(Navid.debugsCode(Kyle, "JavaScript"));
console.log(" ");
console.log(
  "           ===only students can listsSubjects(),PRAssignment(subject), and sprintChallenge(subject)==="
);
console.log(Kyle.listsSubjects());
console.log(Kyle.PRAssignment("prototypes"));
console.log(Kyle.sprintChallenge("classes"));
console.log(" ");
