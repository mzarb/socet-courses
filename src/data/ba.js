import { coreModules } from './coremodules';
//import { electives } from './electives';
import { moduleList } from './listofmodules'; // Import the central module list

const baData =

{
  name: "BSc (Hons) Business Analytics",
  stages: [
    {
      stageName: "Stage 1",
      semesters: [
        {
          semesterName: "Semester 1",
          modules: [
            ...coreModules.stage1.semester1,
            { ...moduleList.BS1009, type: "Subject Core", size: 1, source: "subject" },
            { ...moduleList.CM1122, type: "Subject Core", size: 1 },
          ],
        },
        {
          semesterName: "Semester 2",
          modules: [
            ...coreModules.stage1.semester2,
            { ...moduleList.BS1005, type: "Subject Core", size: 1, source: "subject" },
            { ...moduleList.CM1123, type: "Subject Core", size: 1 },
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
            { ...moduleList.BS2293, type: "Subject Core", size: 1, source: "subject" },
            { ...moduleList.CE2003, type: "Subject Core", size: 1 },

            {
              code: "Elective",
              name: "Elective Choice",
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [
                { ...moduleList.CM1112, type: "Elective"},
                { ...moduleList.CM1112, type: "Elective"}
              ],
            },
          ],
        },
        {
          semesterName: "Semester 2",
          modules: [
            ...coreModules.stage2.semester2,
            { ...moduleList.BS2005, type: "Subject Core", size: 1 },
            { ...moduleList.CE2004, type: "Subject Core", size: 1 },

            {
              code: "Elective",
              name: "Elective Choice",
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [

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
            { ...moduleList.CM2137, type: "Subject Core", size: 1 },
            { ...moduleList.CE3005, type: "Subject Core", size: 1 },

            {
              code: "Elective",
              name: "Elective Choice",
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [

              ],
            },
          ],
        },
        {
          semesterName: "Semester 2",
          modules: [
            ...coreModules.stage3.semester2,
            { ...moduleList.BS4411, type: "Subject Core", size: 1 },
            { ...moduleList.CE3006, type: "Subject Core", size: 1 },

            {
              code: "Elective",
              name: "Elective Choice",
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [

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
            { ...moduleList.BS4104, type: "Subject Core", size: 1 },
            { ...moduleList.CMM547, type: "Subject Core", size: 1 },
            { ...moduleList.CE4001, type: "Subject Core", size: 1 },
            {
              code: "Elective",
              name: "Elective Choice",
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [

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

export default baData