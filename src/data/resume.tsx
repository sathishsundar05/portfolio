import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  "name": "Sathish Sundar",
  "initials": "SS",
  "url": "https://www.linkedin.com/in/sathish-sundar-1972b3a2",
  "location": "Chennai, Tamil Nadu",
  "locationLink": "https://www.google.com/maps/place/Chennai",
  "description": "Experienced Frontend Developer specializing in JavaScript frameworks and modern web technologies",
  "summary": "Skilled frontend developer with 6 years of expertise in building responsive and scalable web applications. [Developed micro-frontend architectures](/#work) and [created innovative UI components using modern JavaScript frameworks](/#projects).",
  "avatarUrl": "https://avatars.githubusercontent.com/u/22155144?s=400&u=48f927f4a57f5895659070be1826e7c58cd3187e&v=4",
  "skills": [
    "Vue.js",
    "React.js", 
    "JavaScript",
    "HTML5",
    "CSS3",
    "Vuetify",
    "Vuex",
    "Pinia",
    "Redux",
    "Webpack",
    "Docker"
  ],
  "navbar": [
    { "href": "/", "icon": HomeIcon, "label": "Home" },
  ],
  "contact": {
    "email": "sundarsathish05@gmail.com",
    "tel": "+9940898993",
    "social": {
      "LinkedIn": {
        "name": "LinkedIn",
        "url": "https://www.linkedin.com/in/sathish-sundar-1972b3a2",
        "icon": Icons.linkedin,
        "navbar": true
      },
      "Github": {
        "name": "Github",
        "url": "https://github.com/sathishsundar05",
        "icon": Icons.github,
        "navbar": true
      }
    }
  },
  "work": [
    {
      "company": "Intellect Design Arena Ltd",
      "href": "https://www.intellectdesign.com/",
      "location": "Chennai, Tamil Nadu",
      "title": "Consultant",
      "logoUrl": "/intellect.png",
      "start": "Apr 2020",
      "end": "Present",
      "description": "Led architectural transition to micro-frontend structure, implemented JSON schema-based UI components, and developed a canvas-based image viewer with advanced annotation features. Improved product performance and developer efficiency through innovative frontend solutions."
    },
    {
      "company": "Xerago",
      "href": "https://www.xerago.com/",
      "location": "Chennai, Tamil Nadu", 
      "title": "Associate - Software Engineering",
      "logoUrl": "/xerago.png",
      "start": "Aug 2017",
      "end": "Mar 2020",
      "description": "Developed responsive web applications for various clients including WorldVision, TVS Insurance, and NoorBank. Implemented dynamic UI components, REST API integrations, and performance optimization techniques."
    }
  ],
  "education": [
    {
      "school": "Anna University",
      "href": "https://www.annauniv.edu/",
      "degree": "Bachelor of Engineering (EIE)",
      "logoUrl": "/annauniv.png",
      "start": "2012",
      "end": "2016",
      "gpa": "7.01/10"
    }
  ],
  "projects": [
    {
      "title": "IDX 3.0 Micro Frontend Architecture",
      "href": "#",
      "dates": "2020 - Present",
      "active": true,
      "description": "Transformed monolithic Vue.js application into modular micro-frontend architecture using single-spa, enabling independent deployment and framework flexibility.",
      "technologies": [
        "Vue.js",
        "Single-spa",
        "RxJS",
        "SystemJS"
      ]
    },
    {
      "title": "Canvas-based Image Annotation Tool",
      "href": "#",
      "dates": "2021",
      "active": true,
      "description": "Developed a Fabric.js-powered image viewer with robust annotation capabilities, supporting machine learning data extraction workflows.",
      "technologies": [
        "Fabric.js",
        "Vue.js",
        "JSON Schema"
      ]
    }
  ],
  "certifications": [
    {
      "title": "GEM Award",
      "date": "Oct 2021",
      "description": "Recognized for implementing Micro frontend architecture that streamlined processes and improved project efficiency."
    },
    {
      "title": "SHOOTING STAR",
      "date": "Jun 2019",
      "description": "Recognized for implementing Docker composer based setup in Drupal"
    }
  ],
  "hackathons": [],
} as const;
