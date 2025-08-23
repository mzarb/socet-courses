import { coreModules } from './coremodules';
import { electives } from './electives';
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
                { ...moduleList.BS2293, type: "Subject Core", size: 1, source: "subject"  },
              {
                ...moduleList.CM2137, type: "Subject Core",
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
                                electives.stage2.semester1.cyElec.name,
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
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage2.semester2.ccdElec.name,
                                electives.stage2.semester2.csElec.name,
                                electives.stage2.semester2.dsElec.name,
                                electives.stage2.semester2.gdElec.name,
                                electives.stage2.semester1.wmElec.name,
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
                name: "Elective Choice",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage3.semester1.ccdElec.name,
                                electives.stage3.semester1.csElec.name,
                                electives.stage3.semester1.cyElec.name,
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
              { ...moduleList.BS4411, type: "Subject Core", size: 1, source: "subject" },
              { 
               ...moduleList.CM3153,
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
                                electives.stage3.semester2.cyElec.name,
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
              { ...moduleList.CM4125, type: "Subject Core", size: 1, source: "subject"  },
              { ...moduleList.BS4104, type: "Subject Core", size: 1, source: "subject"  },
              {
                ...moduleList.BS4329, type: "Subject Core",
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
                                electives.stage4.semester1.cyElec.name,
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

  export default dsbmData