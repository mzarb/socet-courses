import { coreModules } from './coremodules';
import { electives } from './electives';
import { moduleList } from './listofmodules';

const mscicsData =
{
    name: "MSci Computing Science",
    stages: [
        {
            stageName: "Stage 1",
            semesters: [
                {
                    semesterName: "Semester 1",
                    modules: [
                        ...coreModules.stage1.semester1,
                        { ...moduleList.CM1109, type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage1.semester1.ccdElec.name,
                                electives.stage1.semester1.cyElec.name,
                                electives.stage1.semester1.dsElec.name

                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage1.semester2,
                        { ...moduleList.CM1113, type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage1.semester2.ccdElec.name,
                                electives.stage1.semester2.cyElec.name,
                                electives.stage1.semester2.dsElec.name
                            ],
                        },
                    ],
                },
            ],
        },
        {
            stageName: "Stage 2",
            semesters: [
                {
                    semesterName: "Semester 1",
                    modules: [
                        ...coreModules.stage2.semester1,
                        { ...moduleList.CE2000, type: "Subject Core", size: 1, source: "subject" },
                        {
                            ...moduleList.CM2115, type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage2.semester1.ccdElec.name,
                                electives.stage2.semester1.cyElec.name,
                                electives.stage2.semester1.dsElec.name,
                                electives.stage2.semester1.gdElec.name,
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage2.semester2,
                        {
                            ...moduleList.CE2001, type: "Subject Core", size: 1, source: "subject"
                        },
                        {
                            ...moduleList.CM2116, type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage2.semester2.ccdElec.name,
                                electives.stage2.semester2.cyElec.name,
                                electives.stage2.semester2.dsElec.name,
                                electives.stage2.semester2.gdElec.name,
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
                        { ...moduleList.CM3113, type: "Subject Core", size: 1, source: "subject" },
                        { ...moduleList.CM3151, type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester1.ccdElec.name,
                                electives.stage3.semester1.cyElec.name,
                                electives.stage3.semester1.dsElec.name,
                                electives.stage3.semester1.gdElec.name,
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage3.semester2,
                        { ...moduleList.CM3142, type: "Subject Core", size: 1, source: "subject" },
                        { ...moduleList.CM3152, type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester2.ccdElec.name,
                                electives.stage3.semester2.cyElec.name,
                                electives.stage3.semester2.dsElec.name,
                                electives.stage3.semester2.gdElec.name,
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
                        {
                            code: "Routes",
                            type: "Elective Choice",
                            size: 3, source: "subject",
                            options: [
                                "CM4305: MSci Industrial Placement",
                                "CM4307: MSci Study Abroad",
                                "CM4309: MSci Research Placement",
                            ],
                        },
                        { ...moduleList.CM4304, type: "Subject Core", size: 1, source: "subject" },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        {
                            code: "Routes",
                            type: "Elective Choice",
                            size: 3, source: "subject",
                            options: [
                                "CM4306: MSci Industrial Placement",
                                "CM4308: MSci Study Abroad",
                                "CM4310: MSci Research Placement",
                            ],
                        },
                        { ...moduleList.CM4304, type: "Subject Core", size: 1, source: "subject" },
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
                        { ...moduleList.CMM302, type: "Subject Core", size: 1, source: "subject" },
                        { ...moduleList.CMM304, type: "Subject Core", size: 1, source: "subject" },
                        { ...moduleList.CMM306, type: "Subject Core", size: 1, source: "subject" },
                        { ...moduleList.CEM300, type: "Subject Core", size: 1, source: "subject" },
                    ]
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        { ...moduleList.CMM303, type: "Core", size: 4, source: "Core" },
                    ],
                },
            ],
        },
        // You can add more stages here (e.g., Stage 3)
    ],
}

export default mscicsData