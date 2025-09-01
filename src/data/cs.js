import { coreModules } from './coremodules';
import { electives } from './electives';
import { moduleList } from './listofmodules';

const csData =
{
    name: "BSc (Hons) Computer Science",
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
            stageName: "Stage 2", gapYear: true,
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
                             ...moduleList.CE2001, type: "Subject Core",size: 1, source: "subject"},
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
                        {
                            code: "Routes",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                "Route A - CM3151: Machine Learning",
                                "Route B - CM2119: Experimental Game Mechanics",
                            ],
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester1.ccdElec.name,
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
                        {  ...moduleList.CM3142, type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Routes",
                            name: "Routes",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                "Route A - CM3131: Machine Learning",
                                "Route B - CM2119: Experimental Game Mechanics",
                            ],
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester2.ccdElec.name,
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
                        { ...moduleList.CM4106, type: "Subject Core", size: 1, source: "subject" },
                       {
                            code: "Routes",
                            type: "Elective Choice",
                            size: 2, source: "subject",
                            options: [
                                "Route A - CE4145 Natural Language Processing // CM4126 Computer Vision",
                                "Route B - CM4110 Human Computer Interaction // CM4114 Games Development"
                            ],
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage4.semester1.ccdElec.name,
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
        // You can add more stages here (e.g., Stage 3)
    ],
}

export default csData