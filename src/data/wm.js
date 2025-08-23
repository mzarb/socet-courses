import { coreModules } from './coremodules';
import { electives } from './electives';

const wmData =
{
    name: "BSc (Hons) Web & Mobile Design",
    stages: [
        {
            stageName: "Stage 1",
            semesters: [
                {
                    semesterName: "Semester 1",
                    modules: [
                        ...coreModules.stage1.semester1,
                        { code: "CM1109", name: "Exploring Computing Devices", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            name: "Elective Choice",
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
                        { code: "CM1113", name: "Software Design and Development", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            name: "Elective Choice",
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
                        { code: "CE2000", name: "Dynamic Web Technologies", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "CM2115", name: "Advanced Software Design and Development", type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "Elective",
                            name: "Elective Choice",
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
                            code: "CE2001",
                            name: "Full Stack Applications",
                            type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "CM2116", name: "Data Structures and Algorithms", type: "Subject Core",
                            size: 1, source: "subject"
                        },
                        {
                            code: "Elective",
                            name: "Elective Choice",
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
                        { code: "CM3140", name: "Web and Mobile Development in Practice", type: "Subject Core", size: 1, source: "subject" },
                        { code: "CM3140", name: "Native Mobile Apps", type: "Subject Core", size: 1, source: "subject"},
                        {
                            code: "Elective",
                            name: "Elective Choice",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester1.ccdElec.name,
                                electives.stage3.semester1.cyElec.name,
                                electives.stage3.semester1.dsElec.name,
                                electives.stage3.semester1.gdElec.name,
                                electives.stage3.semester1.csElec.name
                            ],
                        },
                    ],
                },
                {
                    semesterName: "Semester 2",
                    modules: [
                        ...coreModules.stage3.semester2,
                        { code: "CM3138", name: "Hybrid Apps", type: "Subject Core", size: 1, source: "subject" },
                        { code: "CM3139", name: "Visual Communication", type: "Subject Core", size: 1, source: "subject"},
                        {
                            code: "Elective",
                            name: "Elective Choice",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage3.semester2.ccdElec.name,
                                electives.stage3.semester2.cyElec.name,
                                electives.stage3.semester2.dsElec.name,
                                electives.stage3.semester2.gdElec.name,
                                electives.stage3.semester2.csElec.name
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
                        { code: "CM4132", name: "Advanced Mobile Development", type: "Subject Core", size: 1, source: "subject" },
                        { code: "CM4133", name: "Cloud AI", type: "Subject Core", size: 1, source: "subject"},
                       { code: "CB3162", name: "Digital Media & User Experience", type: "Subject Core", size: 1, source: "subject" },
                        {
                            code: "Elective",
                            name: "Elective Choice",
                            type: "Elective Choice",
                            size: 1, source: "subject",
                            options: [
                                electives.stage4.semester1.ccdElec.name,
                                electives.stage4.semester1.cyElec.name,
                                electives.stage4.semester1.dsElec.name,
                                electives.stage4.semester1.gdElec.name,
                                electives.stage4.semester1.csElec.name
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