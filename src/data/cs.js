import { coreModules } from './coremodules';
import { electives } from './electives';
import { moduleList } from './listofmodules';

const csData =
{
    name: "BSc (Hons) Computer Science (26-27)",
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
                                electives.stage1.semester1.ccdElec,
                                electives.stage1.semester1.cyElec,
                                electives.stage1.semester1.dsElec

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
                                electives.stage1.semester2.ccdElec,
                                electives.stage1.semester2.cyElec,
                                electives.stage1.semester2.dsElec
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
                                electives.stage2.semester1.ccdElec,
                                electives.stage2.semester1.cyElec,
                                electives.stage2.semester1.dsElec,
                                electives.stage2.semester1.gdElec,
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
                                electives.stage2.semester2.ccdElec,
                                electives.stage2.semester2.cyElec,
                                electives.stage2.semester2.dsElec,
                                electives.stage2.semester2.gdElec,
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
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                moduleList.CM3151,
                                moduleList.CM2119
                            ],
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester1.ccdElec,
                                electives.stage3.semester1.cyElec,
                                electives.stage3.semester1.dsElec,
                                electives.stage3.semester1.gdElec,
                                electives.stage3.semester1.wmElec
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
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                moduleList.CM3152,
                                moduleList.CM2124
                            ],
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester2.ccdElec,
                                electives.stage3.semester2.cyElec,
                                electives.stage3.semester2.dsElec,
                                electives.stage3.semester2.gdElec,
                                electives.stage3.semester2.wmElec
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
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                moduleList.CE4145,
                                moduleList.CM4110
                            ],
                        },
                                               {
                            code: "Routes",
                            type: "Route Choice",
                            size: 1, source: "subject",
                            options: [
                                moduleList.CM4126,
                                moduleList.CM4114
                            ],
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage4.semester1.ccdElec,
                                electives.stage4.semester1.cyElec,
                                electives.stage4.semester1.dsElec,
                                electives.stage4.semester1.gdElec,
                                electives.stage4.semester1.wmElec
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