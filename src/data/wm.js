import { coreModules } from './coremodules';
//import { electives } from './electives';
import { moduleList } from './listofmodules';

const wmData =
{
    name: "BSc (Hons) Web & Mobile Design",
    id: 6688,
    stages: [
        {
            stageName: "Stage 1",
            semesters: [
                {
                    semesterName: "Semester 1",
                    modules: [
                        ...coreModules.stage1.semester1,
                        { code: "CM1109", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            akariLabel: "Web and Mobile Design - Electives Group 1",
                            options: [
                                //   electives.stage1.semester1.ccdElec,
                                //   electives.stage1.semester1.cyElec,
                                //   electives.stage1.semester1.dsElec

                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage1.semester2,
                        { code: "CM1113", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            akariLabel: "Web and Mobile Design - Electives Group 2",
                            options: [
                                //   electives.stage1.semester2.ccdElec,
                                //   electives.stage1.semester2.cyElec,
                                //   electives.stage1.semester2.dsElec
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
                        { code: "CE2000", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "CM2115", type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            akariLabel: "Web and Mobile Design - Electives Group 3",
                            options: [
                                //  electives.stage2.semester1.ccdElec,
                                // electives.stage2.semester1.cyElec,
                                //  electives.stage2.semester1.dsElec,
                                // electives.stage2.semester1.gdElec,
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage2.semester2,
                        {
                            code: "CE2001",
                            type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "CM2116", type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            akariLabel: "Web and Mobile Design - Electives Group 4",
                            options: [
                                //  electives.stage2.semester2.ccdElec,
                                //  electives.stage2.semester2.cyElec,
                                //  electives.stage2.semester2.dsElec,
                                //  electives.stage2.semester2.gdElec,
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
                        { code: "CM3140", type: "Subject Core", size: 1, source: "subject" },
                        { code: "CM3147", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            akariLabel: "Web and Mobile Design - Electives Group 6",
                            options: [
                                //  electives.stage3.semester1.ccdElec,
                                //  electives.stage3.semester1.cyElec,
                                //  electives.stage3.semester1.dsElec,
                                //  electives.stage3.semester1.gdElec,
                                //  electives.stage3.semester1.csElec
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage3.semester2,
                        { code: "CM3138", type: "Subject Core", size: 1, source: "subject" },
                        { code: "CM3139", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            akariLabel: "Web and Mobile Design - Electives Group 7",
                            options: [
                                //  electives.stage3.semester2.ccdElec,
                                //  electives.stage3.semester2.cyElec,
                                //  electives.stage3.semester2.dsElec,
                                //  electives.stage3.semester2.gdElec,
                                //  electives.stage3.semester2.csElec
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
                        { code: "CM4132", type: "Subject Core", size: 1, source: "subject" },
                        { code: "CM4133", type: "Subject Core", size: 1, source: "subject" },
                        { code: "CB3162", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            akariLabel: "Web and Mobile Design - Electives Group 8",
                            options: [
                                //  electives.stage4.semester1.ccdElec,
                                //  electives.stage4.semester1.cyElec,
                                //  electives.stage4.semester1.dsElec,
                                //  electives.stage4.semester1.gdElec,
                                //  electives.stage4.semester1.csElec
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

export default wmData