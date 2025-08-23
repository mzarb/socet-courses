import { coreModules } from './coremodules';
import { electives } from './electives';
import { moduleList } from './listofmodules';

const cyData = 
      {
    name: "BSc (Hons) Cyber Security",
    stages: [
      {
        stageName: "Stage 1",
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
                ...coreModules.stage1.semester1,
              {  ...moduleList.CM1131, type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                                electives.stage1.semester1.csElec.name,
                                electives.stage1.semester1.ccdElec.name,
                                electives.stage1.semester1.dsElec.name
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
                ...coreModules.stage1.semester2,
              {  ...moduleList.CM1132, type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                                electives.stage1.semester2.csElec.name,
                                electives.stage1.semester2.ccdElec.name,
                                electives.stage1.semester2.dsElec.name
                ],
              },
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
                { ...moduleList.CM2133, type: "Subject Core", size: 1, source: "subject"  },
              {
                ...moduleList.CM2134, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage2.semester1.ccdElec.name,
                                electives.stage2.semester1.csElec.name,
                                electives.stage2.semester1.dsElec.name,
                                electives.stage2.semester1.gdElec.name,
                                electives.stage2.semester1.wmElec.name
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
              ...coreModules.stage2.semester2,
              {
                ...moduleList.CM2135,
                type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                ...moduleList.CM2136, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage2.semester2.ccdElec.name,
                                electives.stage2.semester2.csElec.name,
                                electives.stage2.semester2.dsElec.name,
                                electives.stage2.semester2.gdElec.name,
                                electives.stage2.semester2.wmElec.name
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
              {  ...moduleList.CM3144, type: "Subject Core", size: 1, source: "subject" },
              { 
                ...moduleList.CM3146,
                type: "Subject Core", 
                size: 1, source: "subject"},
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage3.semester1.ccdElec.name,
                                electives.stage3.semester1.csElec.name,
                                electives.stage3.semester1.dsElec.name,
                                electives.stage3.semester1.gdElec.name,
                                electives.stage3.semester1.wmElec.name
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
                ...coreModules.stage3.semester2,
              { ...moduleList.CM3145, type: "Subject Core", size: 1, source: "subject" },
              { 
                ...moduleList.CM3148,
                type: "Subject Core", 
                size: 1, source: "subject",
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage3.semester2.ccdElec.name,
                                electives.stage3.semester2.csElec.name,
                                electives.stage3.semester2.dsElec.name,
                                electives.stage3.semester2.gdElec.name,
                                electives.stage3.semester2.wmElec.name
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
              { ...moduleList.CM4141, type: "Subject Core", size: 1, source: "subject"  },
              {  ...moduleList.CM4142, type: "Subject Core", size: 1, source: "subject"  },
              {
                 ...moduleList.CM4143, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage4.semester1.ccdElec.name,
                                electives.stage4.semester1.csElec.name,
                                electives.stage4.semester1.dsElec.name,
                                electives.stage4.semester1.gdElec.name,
                                electives.stage4.semester1.wmElec.name
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

  export default cyData