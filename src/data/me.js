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
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [
                            { ...moduleList.CE2011, type: "Elective" }, 
                            { ...moduleList.CE2009, type: "Elective" },
                            { ...moduleList.CE2010, type: "Elective" },
                        ] },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CE2012, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2013, type: "Subject Core", source: "subject" },
                        { ...moduleList.CE2014, type: "Subject Core", source: "subject" },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [
                            { ...moduleList.CE2015, type: "Elective" },
                            { ...moduleList.CE2016, type: "Elective" },
                            { ...moduleList.CE2017, type: "Elective" },
                        ] },
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
                                { ...moduleList.CM3151, label: "ME" },
                                { ...moduleList.CE3013, label: "MEE" },
                                { ...moduleList.CE3018, label: "MOE" }
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
                                { ...moduleList.CE3017, label: "ME" },
                                { ...moduleList.CE3016, label: "MEE" },
                                { ...moduleList.CE3019, label: "MOE" }
                            ],
                        },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [
                                { ...moduleList.CE3022, type: "Elective" },
                                { ...moduleList.CE3019, type: "Elective" },
                                { ...moduleList.CE3023, type: "Elective" },
                                { ...moduleList.CE3016, type: "Elective" },
                                { ...moduleList.CE3020, type: "Elective" },
                                { ...moduleList.CE3017, type: "Elective" },
                        ]
                        },
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
                                { ...moduleList.CE4011, label: "ME" },
                                { ...moduleList.CE4005, label: "MEE" },
                                { ...moduleList.CE4007, label: "MOE" }
                            ],
                        },
                        {
                            code: "Routes",
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                { ...moduleList.CE4010, label: "ME" },
                                { ...moduleList.CE4009, label: "MEE" },
                                { ...moduleList.CE4004, label: "MOE" }
                            ],
                        },
                        { code: "Elective", type: "Elective Choice", size: 1, source: "subject", options: [
                            { ...moduleList.CE4008, type: "Elective" },
    { ...moduleList.CE4006, type: "Elective" },
    { ...moduleList.CE4005, type: "Elective" },
    { ...moduleList.CE4007, type: "Elective" },
    { ...moduleList.CE4004, type: "Elective" },
    { ...moduleList.CE4009, type: "Elective" },
    { ...moduleList.CM4126, type: "Elective" },
    { ...moduleList.CE4011, type: "Elective" },
    { ...moduleList.CE4010, type: "Elective" },
                        ] },
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
                                { ...moduleList.CE5001, label: "ME" },
                                { ...moduleList.CE5007, label: "MEE" },
                                { ...moduleList.CE5002, label: "MOE" }
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
                                { ...moduleList.CE5001, label: "ME" },
                                { ...moduleList.CE5007, label: "MEE" },
                                { ...moduleList.CE5002, label: "MOE" }
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