import { moduleList } from './listofmodules'; // Import the central module list

const meData = {
name: "BEng/MEng Mechanical Engineering",
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
                        { ...moduleList.CE2007, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2008, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
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
                        { ...moduleList.CE3010, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3021, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3024, type: "Subject Core", source: "subject" },
                        {
                            code: "Routes",
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CM3151, label: "Mechanical Engineering" },
                                { ...moduleList.CE3013, label: "Mechanical and Electrical Engineering" },
                                { ...moduleList.CE3018, label: "Mechanical and Offshore Engineering" }
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE3015, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE3012, type: "Subject Core", source: "subject" },
                        {
                            code: "Routes",
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CE3017, label: "Mechanical Engineering" },
                                { ...moduleList.CE3016, label: "Mechanical and Electrical Engineering" },
                                { ...moduleList.CE3019, label: "Mechanical and Offshore Engineering" }
                            ],
                        },
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
                        { ...moduleList.CE4003, type: "Subject Core", source: "subject" },
                        {
                            code: "Routes",
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CE4011, label: "Mechanical Engineering" },
                                { ...moduleList.CE4005, label: "Mechanical and Electrical Engineering" },
                                { ...moduleList.CE4007, label: "Mechanical and Offshore Engineering" }
                            ],
                        },
                        {
                            code: "Routes",
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CE4010, label: "Mechanical Engineering" },
                                { ...moduleList.CE4009, label: "Mechanical and Electrical Engineering" },
                                { ...moduleList.CE4004, label: "Mechanical and Offshore Engineering" }
                            ],
                        },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [] },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CM4134, type: "Subject Core", source: "subject" },
                    ],
                },
                {
                    semesterName: "Semester 3",
                    modules: [
                        { ...moduleList.EN5600, type: "Subject Core", source: "subject", tag: "MEng-F" },
                        {
                            code: "Routes",
                            type: "Route Choice",
                            size: 2, source: "subject",
                            tag: "MEng-F",
                            options: [
                                { ...moduleList.CE5001, label: "Mechanical Engineering" },
                                { ...moduleList.CE5007, label: "Mechanical and Electrical Engineering" },
                                { ...moduleList.CE5002, label: "Mechanical and Offshore Engineering" }
                            ],
                        },
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
                        {
                            code: "Routes",
                            type: "Route Choice",
                            size: 2, source: "subject",
                            tag: "MEng-5",
                            options: [
                                { ...moduleList.CE5001, label: "Mechanical Engineering" },
                                { ...moduleList.CE5007, label: "Mechanical and Electrical Engineering" },
                                { ...moduleList.CE5002, label: "Mechanical and Offshore Engineering" }
                            ],
                        },
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

export default meData