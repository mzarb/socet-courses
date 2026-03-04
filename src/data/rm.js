import { moduleList } from './listofmodules'; // Import the central module list

const rmData = {
    name: "BEng/MEng Robotics and Mechatronics",
    stages: [
        {
            stageName: "Stage 1",
            semesters: [
                {
                    semesterName: "Semester 1",
                    modules: [
                        { ...moduleList.CE1003, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE1004, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE1005, type: "Subject Core", source: "subject" },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE1006, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM1113, type: "Subject Core", source: "subject" },

                        { ...moduleList.CE1007, type: "Subject Core", source: "subject" },
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
                        { ...moduleList.CE2007, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2008, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2011, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE2012, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2016, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2017, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
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
                        { ...moduleList.CM3151, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3024, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3013, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE3015, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3012, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3022, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
                    ],
                },
                {
                    semesterName: "Semester 3",
                    modules: [
                        { ...moduleList.EN4601, type: "Subject Core", source: "subject", tag: "MEng-F" },
                        { ...moduleList.CE5000, type: "Subject Core", source: "subject", tag: "MEng-F" },
                        { ...moduleList.CE5006, type: "Subject Core", source: "subject", tag: "MEng-F" },
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
                        { ...moduleList.CM4126, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE4005, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE4008, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE4321, type: "Subject Core", source: "subject" },
                    ],
                },
                {
                    semesterName: "Semester 3",
                    modules: [
                        { ...moduleList.EN5600, type: "Subject Core", source: "subject", tag: "MEng-F" },
                        { ...moduleList.CE5009, type: "Subject Core", source: "subject", tag: "MEng-F" },
                    ],
                },
            ],
        },
        {
            stageName: "Stage 5",
            semesters: [
                {
                    semesterName: "Semester 1",
                    modules: [
                        { ...moduleList.CE5000, type: "Subject Core", source: "subject", tag: "MEng-5" },
                        { ...moduleList.CE5006, type: "Subject Core", source: "subject", tag: "MEng-5" },
                        { ...moduleList.CE5009, type: "Subject Core", source: "subject", tag: "MEng-5" },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE5003, type: "Subject Core", source: "subject", tag: "MEng-5" },

                    ],
                },
            ],
        },
    ],
}

export default rmData