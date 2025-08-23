import { coreModules } from './coremodules';
import { electives } from './electives';
import { moduleList } from './listofmodules';

const dsaiData = 
      {
    name: "BSc (Hons) Data Science with AI",
    stages: [
      {
        stageName: "Stage 1",
        semesters: [
          {
            semesterName: "Semester 1",
            modules: [
                ...coreModules.stage1.semester1,
              { ...moduleList.CM1122, type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                                electives.stage1.semester1.csElec.name,
                                electives.stage1.semester1.ccdElec.name,
                                electives.stage1.semester1.cyElec.name
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
                ...coreModules.stage1.semester2,
              { ...moduleList.CM1123, type: "Subject Core", size: 1, source: "subject"  },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                                electives.stage1.semester2.csElec.name,
                                electives.stage1.semester2.ccdElec.name,
                                electives.stage1.semester2.cyElec.name
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
                ...moduleList.CM2137, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage2.semester1.ccdElec.name,
                                electives.stage2.semester1.csElec.name,
                                electives.stage2.semester1.cyElec.name,
                                electives.stage2.semester1.gdElec.name
                ],
              },
            ],
          },
          {
            semesterName: "Semester 2",
            modules: [
              ...coreModules.stage2.semester2,
              {
                ...moduleList.CE2001,
                type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                ...moduleList.CM2138, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
                type: "Elective Choice",
                size: 1, source: "subject" ,
                options: [
                               electives.stage2.semester2.ccdElec.name,
                                electives.stage2.semester2.csElec.name,
                                electives.stage2.semester2.dsElec.name,
                                electives.stage2.semester2.gdElec.name
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
                ...moduleList.CM4125,
                type: "Subject Core", 
                size: 1, source: "subject"},
              {
                code: "Elective",
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
              { ...moduleList.CM3152, type: "Subject Core", size: 1, source: "subject" },
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
              { ...moduleList.CE4145, type: "Subject Core", size: 1, source: "subject"  },
              { ...moduleList.CM4140, type: "Subject Core", size: 1, source: "subject"  },
              {
                ...moduleList.CM4144, type: "Subject Core",
                size: 1, source: "subject" 
              },
              {
                code: "Elective",
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

  export default dsaiData