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
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [
                { ...moduleList.CE2000, type: "Elective" },
                { ...moduleList.CM2115, type: "Elective" },
                { ...moduleList.CM2120, type: "Elective" },
                { ...moduleList.CM2125, type: "Elective" },
                { ...moduleList.CM2133, type: "Elective" },
                { ...moduleList.BS2103, type: "Elective" }
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
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [
                { ...moduleList.CE2001, type: "Elective" },
                { ...moduleList.CM2116, type: "Elective" },
                { ...moduleList.CM2121, type: "Elective" },
                { ...moduleList.CM2123, type: "Elective" },
                { ...moduleList.CM2136, type: "Elective" },
                { ...moduleList.CM2138, type: "Elective" },
                { ...moduleList.BS2916, type: "Elective" }
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
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [
                { ...moduleList.CM3112, type: "Elective" },
                { ...moduleList.CM3137, type: "Elective" },
                { ...moduleList.CM3144, type: "Elective" },
                { ...moduleList.CM3147, type: "Elective" },
                { ...moduleList.CM3151, type: "Elective" },
                { ...moduleList.BS3033, type: "Elective" },
                { ...moduleList.CM3113, type: "Elective" }
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
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [
                { ...moduleList.BS3112, type: "Elective" },
                { ...moduleList.CM3138, type: "Elective" },
                { ...moduleList.CM3142, type: "Elective" },
                { ...moduleList.CM3145, type: "Elective" },
                { ...moduleList.CM3149, type: "Elective" },
                { ...moduleList.CM3150, type: "Elective" },
                { ...moduleList.CM3153, type: "Elective" }
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
              type: "Elective Choice",
              size: 1, source: "subject",
              options: [
                { ...moduleList.CE4145, type: "Elective" },
                { ...moduleList.CM4110, type: "Elective" },
                { ...moduleList.CM4125, type: "Elective" },
                { ...moduleList.CM4137, type: "Elective" },
                { ...moduleList.CM4143, type: "Elective" },
                { ...moduleList.BS4329, type: "Elective" },
                { ...moduleList.CM4132, type: "Elective" }
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