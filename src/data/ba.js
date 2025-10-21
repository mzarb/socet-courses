import { coreModules } from './coremodules';

const baData = 

      {
    name: "BSc (Hons) Business Analytics (26-27)",
    stages: [
      {
        stageName: "Stage 1",
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
                ...coreModules.stage1.semester1,
              { code: "CM1108", name: "Creative Design", type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                  "CM1131: Cyber Security Fundamentals",
                  "CM1122: AI, Data and Society",
                  "CM1109: Exploring Computing Devices",
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
                ...coreModules.stage1.semester2,
              { code: "CM1116", name: "Visual Development Fundamentals", type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                  "CM1132: Computing Network Fundamentals",
                  "CM1123: Data Analysis",
                  "CM1113: Software Design and Development",
                ],
              },
            ],
          },
        ],
      },
      {
        stageName: "Stage 2",
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
                ...coreModules.stage2.semester1,
                { code: "CE2000", name: "Dynamic Web Technologies", type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "CM2115", name: "Advanced Software Design and Development", type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                  "CM2133: Social and Human Factors in Cyber Security",
                  "CM2137: Data Mining",
                  "CM2125: 2D Animation Fundamentals",
                  "CM2120: Game Design and Gameeplay",
                  "CE2000: Dynamic Web Technologies",
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
              ...coreModules.stage2.semester2,
              {
                code: "CE2001",
                name: "Full Stack Applications",
                type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "CM2116", name: "Data Structures and Algorithms", type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                  "CM2136: Cryptography",
                  "CM2138: Business Intelligence",
                  "CM2121: 3D Reconstructive Techniques",
                  "CM2123: Programming for Video Games",
                  "CE2001: Full Stack Applications",
                ],
              },
            ],
          },
        ],
      },
            {
        stageName: "Stage 3",
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
                ...coreModules.stage3.semester1,
              { code: "CM3113", name: "Concurrent Programming", type: "Subject Core", size: 1, source: "subject" },
              { 
                code: "Routes", 
                name: "Routes", 
                type: "Elective Choice", 
                size: 1, source: "subject" ,
              options: [
                "Route A - CM3131: Machine Learning",
                "Route B - CM2119: Experimental Game Mechanics",
              ],
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                  "CM3144: Information Risk & Security Management",
                  "CM2137: Data Mining",
                  "CM3151: Machine Learning",
                  "CM3112: 3D Modelling",
                  "CM3137: Gamification Practices",
                  "CM3147: Native Mobile Apps",
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
                ...coreModules.stage3.semester2,
              { code: "CM3142", name: "Internet of Things", type: "Subject Core", size: 1, source: "subject" },
              { 
                code: "Routes", 
                name: "Routes", 
                type: "Elective Choice", 
                size: 1, source: "subject" ,
              options: [
                "Route A - CM3131: Machine Learning",
                "Route B - CM2119: Experimental Game Mechanics",
              ],
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                  "CM3144: Information Risk & Security Management",
                  "CM2137: Data Mining",
                  "CM3151: Machine Learning",
                  "CM3112: 3D Modelling",
                  "CM3137: Gamification Practices",
                  "CM3147: Native Mobile Apps",
                ],
              },
            ],
          },
        ],
      },
            {
        stageName: "Stage 4",
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
              { code: "CM2112", name: "Real World Projects and Professional Skills", type: "Subject Core", size: 1, source: "subject"  },
              { code: "CE2000", name: "Dynamic Web Technologies", type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "CM2115", name: "Advanced Software Design and Development", type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                  "CM2133: Social and Human Factors in Cyber Security",
                  "CM2137: Data Mining",
                  "CM2125: 2D Animation Fundamentals",
                  "CM2120: Game Design and Gameeplay",
                  "CE2000: Dynamic Web Technologies",
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
              ...coreModules.stage4.semester2,
            ],
          },
        ],
      },
      // You can add more stages here (e.g., Stage 3)
    ],
  }

  export default baData;