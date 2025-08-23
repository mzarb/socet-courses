import { coreModules } from './coremodules';
import { electives } from './electives';
import { moduleList } from './listofmodules'; // Import the central module list

const ccdData =
{
    name: "BSc (Hons) Computing & Creative Design",
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
                                electives.stage1.semester1.csElec.name,
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
                        { ...moduleList.CM1116, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage1.semester2.csElec.name,
                                electives.stage1.semester2.cyElec.name,
                                electives.stage1.semester2.dsElec.name
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
                            ...moduleList.CM2125, type: "Subject Core",
                            source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage2.semester1.csElec.name,
                                electives.stage2.semester1.cyElec.name,
                                electives.stage2.semester1.dsElec.name,
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
                            ...moduleList.CM2121,
                            type: "Subject Core",
                            source: "subject"
                        },
                        {
                            ...moduleList.CM2126, type: "Subject Core",
                            source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage2.semester2.csElec.name,
                                electives.stage2.semester2.cyElec.name,
                                electives.stage2.semester2.dsElec.name,
                                electives.stage2.semester2.gdElec.name,
                                electives.stage2.semester2.wmElec.name
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
                        { ...moduleList.CM3112, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM3128, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester1.csElec.name,
                                electives.stage3.semester1.cyElec.name,
                                electives.stage3.semester1.dsElec.name,
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
                        { ...moduleList.CM3136, type: "Subject Core", source: "subject" },
                        {
                            code: "Routes",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                "Route A - " + electives.stage3.semester2.ccdElec.name,
                                "Route B - " + electives.stage3.semester2.gdElec.name,
                            ],
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester2.csElec.name,
                                electives.stage3.semester2.cyElec.name,
                                electives.stage3.semester2.dsElec.name,
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
                        { ...moduleList.CM4110, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM4114, type: "Subject Core", source: "subject" },
                        {
                            ...moduleList.CM4136, type: "Subject Core",
                            source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage4.semester1.csElec.name,
                                electives.stage4.semester1.cyElec.name,
                                electives.stage4.semester1.dsElec.name,
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
    ],
}

export default ccdData