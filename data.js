/* =========================================
   Dummy data for Marketplace and Peer Connect
   This file holds static arrays for items,
   student profiles, and help posts.
   ========================================= */

// Items listed in Campus Community Marketplace
// Each item: { id, title, price, description, department }
const MARKETPLACE_ITEMS = [
  {
    id: 1,
    title: "Second-hand Physics Textbook",
    price: "₹400",
    description: "H.C. Verma Concepts of Physics Vol 1, lightly used.",
    department: "Physics"
  },
  {
    id: 2,
    title: "Arduino Uno Board",
    price: "₹900",
    description: "Original Arduino Uno, perfect for first-year projects.",
    department: "Electronics"
  },
  {
    id: 3,
    title: "Laptop Stand",
    price: "₹600",
    description: "Metal stand, helps with posture during long study sessions.",
    department: "Common"
  },
  {
    id: 4,
    title: "Data Structures Notes (Printed)",
    price: "₹150",
    description: "Concise notes with examples for C++ & Java.",
    department: "Computer Science"
  },
  {
    id: 5,
    title: "Engineering Drawing Set",
    price: "₹300",
    description: "Compass, protractor, ruler; barely used.",
    department: "Mechanical"
  },
  {
    id: 6,
    title: "Lab Coat",
    price: "₹350",
    description: "White lab coat suitable for chemistry labs.",
    department: "Chemistry"
  }
];

// Student profiles for Peer Connect
// Each student: { id, name, branch, year, skills: [] }
const STUDENT_PROFILES = [
  {
    id: 101,
    name: "Aisha Khan",
    branch: "Computer Science",
    year: "1st Year",
    skills: ["C Programming", "HTML", "Data Structures"]
  },
  {
    id: 102,
    name: "Rohit Sharma",
    branch: "Electronics",
    year: "2nd Year",
    skills: ["Arduino", "Circuit Design", "MATLAB"]
  },
  {
    id: 103,
    name: "Sneha Iyer",
    branch: "Mechanical",
    year: "3rd Year",
    skills: ["CAD", "Thermodynamics", "Project Planning"]
  },
  {
    id: 104,
    name: "Dev Patel",
    branch: "Physics",
    year: "2nd Year",
    skills: ["LaTeX", "Experimental Design", "Python"]
  },
  {
    id: 105,
    name: "Meera Rao",
    branch: "Chemistry",
    year: "1st Year",
    skills: ["Organic Chemistry", "Lab Safety", "Report Writing"]
  }
];

// Static help posts displayed on Peer Connect
// Each post: { id, title, author, details }
const HELP_POSTS = [
  {
    id: 201,
    title: "Need help with pointers in C",
    author: "Aisha K.",
    details: "Struggling with pointer arithmetic and function pointers."
  },
  {
    id: 202,
    title: "Looking for Arduino sample projects",
    author: "Rohit S.",
    details: "Want to build a basic sensor module for lab demo."
  },
  {
    id: 203,
    title: "CAD tips for assembly drawing",
    author: "Sneha I.",
    details: "Any short videos or cheatsheets appreciated."
  }
];

// Departments derived from items (computed in app.js as needed)
