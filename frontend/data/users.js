import bcrypt from "bcryptjs";

const users = [
  {
    name: "Derek Oware",
    email: "derekoware47@gmail.com",
    spassword: bcrypt.hashSync("derekoware2021", 10),
    isAdmin: true,
    isModerator: true,
    department: "Computer Science & Engineering",
    username: "dchole",
    phone: "0248245692",
  },
  {
    name: "Oduro Twumasi John Barnes",
    email: "ohenesetwumasi@gmail.com",
    password: bcrypt.hashSync("jaybarnes2021", 10),
    isAdmin: true,
    isModerator: true,
    department: "Computer Science & Engineering",
    username: "barnes",
    phone: "0543288549",
  },
  {
    name: "Akakpo Prince",
    email: "deon@gmail.com",
    password: bcrypt.hashSync("prince2021", 10),
    isAdmin: true,
    isModerator: true,
    department: "Renewable Energy Engineering",
    username: "deon",
    phone: "0248245692",
  },
];
