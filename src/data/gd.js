import { coreModules } from './coremodules';
import { electives } from './electives';
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
                                electives.stage1.semester1.csElec,
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
                        { ...moduleList.CM1116, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage1.semester2.csElec,
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
                                electives.stage2.semester1.csElec,
                                electives.stage2.semester1.cyElec,
                                electives.stage2.semester1.dsElec,
                                electives.stage2.semester1.ccdElec,
                                electives.stage2.semester1.wmElec
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
                            ...moduleList.CM2123, type: "Subject Core",
                            source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage2.semester2.csElec,
                                electives.stage2.semester2.cyElec,
                                electives.stage2.semester2.dsElec,
                                electives.stage2.semester2.ccdElec,
                                electives.stage2.semester2.wmElec
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
                        { ...moduleList.CM4136, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester1.csElec,
                                electives.stage3.semester1.cyElec,
                                electives.stage3.semester1.dsElec,
                                electives.stage3.semester1.ccdElec,
                                electives.stage3.semester1.wmElec
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage3.semester2,
                        { ...moduleList.CM3139, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM3150, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester2.csElec,
                                electives.stage3.semester2.cyElec,
                                electives.stage3.semester2.dsElec,
                                electives.stage3.semester2.ccdElec,
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
                        { ...moduleList.CM4110, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM4114, type: "Subject Core", source: "subject" },
                        { ...moduleList.CM4137, type: "Subject Core", source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage4.semester1.csElec,
                                electives.stage4.semester1.cyElec,
                                electives.stage4.semester1.dsElec,
                                electives.stage4.semester1.ccdElec,
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
    ],
}

export default gdData