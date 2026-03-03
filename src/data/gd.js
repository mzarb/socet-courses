import { coreModules } from './coremodules';
//import { electives } from './electives';
import { moduleList } from './listofmodules'; // Import the central module list

const gdData =
{
    name: "BSc (Hons) Games Design",
    stages: [
        {
            stageName: "Stage 1",
            semesters: [
                {
                    semesterName: "Semester 1",
                    modules: [
                        ...coreModules.stage1.semester1,
                        { ...moduleList.CM1108, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CM1109, type: "Elective" }, 
                                { ...moduleList.CM1122, type: "Elective" },
                                { ...moduleList.CM1131, type: "Elective" }, 
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage1.semester2,
                        { ...moduleList.CM1113, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CM1123, type: "Elective" },
                                { ...moduleList.CM1132, type: "Elective" },
                                { ...moduleList.CM1123, type: "Elective" },
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
                        { ...moduleList.CM2119, type: "Subject Core", source: "subject" },
                        {
                            ...moduleList.CM2120, type: "Subject Core",
                            source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CE2000, type: "Elective" },
                                { ...moduleList.CM2115, type: "Elective" },
                                { ...moduleList.CM2133, type: "Elective" },
                                { ...moduleList.CM2137, type: "Elective" },
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage2.semester2,
                        {
                            ...moduleList.CM2122,
                            type: "Subject Core",
                            source: "subject"
                        },
                        {
                            ...moduleList.CM2121, type: "Subject Core",
                            source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CE2001, type: "Elective" },
                                { ...moduleList.CM2116, type: "Elective" },
                                { ...moduleList.CM2136, type: "Elective" },
                                { ...moduleList.CM2138, type: "Elective" },
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
                        { ...moduleList.CM3137, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM3112, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CM2119, type: "Elective" },
                                { ...moduleList.CM3113, type: "Elective" },
                                { ...moduleList.CM3144, type: "Elective" },
                                { ...moduleList.CM3147, type: "Elective" },
                                { ...moduleList.CM3151, type: "Elective" },
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage3.semester2,
                        { ...moduleList.CE3025, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM3150, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CM2124, type: "Elective" },
                                { ...moduleList.CM3138, type: "Elective" },
                                { ...moduleList.CM3142, type: "Elective" },
                                { ...moduleList.CM3145, type: "Elective" },
                                { ...moduleList.CM3149, type: "Elective" },
                                { ...moduleList.CM3153, type: "Elective" },
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
                        { ...moduleList.CM4110, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM4114, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM4137, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CE4145, type: "Elective" },
                                { ...moduleList.CM4136, type: "Elective" },
                                { ...moduleList.CM4125, type: "Elective" },
                                { ...moduleList.CM4132, type: "Elective" },
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
    ],
}

export default gdData