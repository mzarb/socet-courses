import { coreModules } from './coremodules';
//import { electives } from './electives';
import { moduleList } from './listofmodules';

const dsbmData = 
      {
    name: "BSc (Hons) Data Science with Business Management",
    stages: [
      {
        stageName: "Stage 1",
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
                ...coreModules.stage1.semester1,
              { ...moduleList.CM1122, type: "Subject Core", size: 1, source: "subject"  },
              { ...moduleList.BS1009, type: "Subject Core", size: 1, source: "subject" },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
                ...coreModules.stage1.semester2,
              { ...moduleList.CM1123, type: "Subject Core", size: 1, source: "subject"  },
              { ...moduleList.BS1005, type: "Subject Core", size: 1, source: "subject" },
            ],
          },
        ],
      },
      {
        stageName: "Stage 2", gapYear: true,
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
                ...coreModules.stage2.semester1,
                { ...moduleList.BS2268, type: "Subject Core", size: 1, source: "subject"  },
              {
                ...moduleList.CM2137, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                       { ...moduleList.CM2115, type: "Elective" }, 
                      { ...moduleList.CM2120, type: "Elective" },
                      { ...moduleList.CM2119, type: "Elective" },
                      { ...moduleList.CM2133, type: "Elective" },
                      { ...moduleList.CE2000, type: "Elective" },
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
              ...coreModules.stage2.semester2,
              {
                ...moduleList.CM2138,
                type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                ...moduleList.BS2916, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                    { ...moduleList.CE2001, type: "Elective" },
                    { ...moduleList.CM2116, type: "Elective" },
                    { ...moduleList.CM2121, type: "Elective" },
                    { ...moduleList.CM2123, type: "Elective" },
                    { ...moduleList.CM2136, type: "Elective" },
                    { ...moduleList.CM1120, type: "Elective" },
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
              { ...moduleList.CM3151, type: "Subject Core", size: 1, source: "subject" },
              { 
                ...moduleList.BS4256,
                type: "Subject Core", 
                size: 1, source: "subject"},
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                    { ...moduleList.CM3112, type: "Elective" },
                    { ...moduleList.CM3113, type: "Elective" },
                    { ...moduleList.CM3137, type: "Elective" },
                    { ...moduleList.CM3144, type: "Elective" },
                    { ...moduleList.CM3147, type: "Elective" },
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
                ...coreModules.stage3.semester2,
              { ...moduleList.BS4411, type: "Subject Core", size: 1, source: "subject" },
              { 
               ...moduleList.CM3153,
                type: "Subject Core", 
                size: 1, source: "subject",
              },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                    { ...moduleList.CM2124, type: "Elective" },
                    { ...moduleList.CM3138, type: "Elective" },
                    { ...moduleList.CM3142, type: "Elective" },
                    { ...moduleList.CM3145, type: "Elective" },
                    { ...moduleList.CM3149, type: "Elective" },
                    { ...moduleList.CM3150, type: "Elective" },
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
              { ...moduleList.CM4125, type: "Subject Core", size: 1, source: "subject"  },
              { ...moduleList.BS4104, type: "Subject Core", size: 1, source: "subject"  },
              {
                ...moduleList.BS4329, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                      { ...moduleList.CE4145, type: "Elective" },
                      { ...moduleList.CM4110, type: "Elective" },
                      { ...moduleList.CM4132, type: "Elective" },
                      { ...moduleList.CM4137, type: "Elective" },
                      { ...moduleList.CM4143, type: "Elective" },
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

  export default dsbmData