import { moduleList } from './listofmodules'; // Import the central module list

const edData = {
    name: "BEng/MEng Engineering Design",
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
                        { ...moduleList.CE1007, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE1008, type: "Subject Core", source: "subject" },
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
                        { ...moduleList.CE2006, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2008, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2009, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2010, type: "Subject Core", source: "subject" },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE2012, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2013, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2014, type: "Subject Core", source: "subject" },
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
                        { ...moduleList.CE3024, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3014, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE4010, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE3015, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3019, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3023, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
                    ],
                },
                {
                    semesterName: "Semester 3",
                    modules: [
                        { ...moduleList.CE5004, type: "Subject Core", source: "subject", tag: "MEng-F" }, // From 5-year S3 text
                        { ...moduleList.EN4601, type: "Subject Core", source: "subject", tag: "MEng-F" }, // From MEng-F S3 text
                        { ...moduleList.CE5000, type: "Subject Core", source: "subject", tag: "MEng-F" }, // From MEng-F S3 text
                        { ...moduleList.CE5006, type: "Subject Core", source: "subject", tag: "MEng-F" }, // From MEng-F S3 text
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
                        { ...moduleList.CE4003, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE4006, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE4011, type: "Subject Core", source: "subject" },
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
                        { ...moduleList.CE5008, type: "Subject Core", source: "subject", tag: "MEng-F" },
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
                        { ...moduleList.CE5008, type: "Subject Core", source: "subject", tag: "MEng-5" },
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


export default enData