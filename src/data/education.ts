import type { Education } from "./types";

export const educations: Education[] = [
  {
    id: 1,
    degree: {
      en: "Engineering Degree - Computer Software Engineering",
      fr: "Diplome d'Ingenieur - Genie Logiciel",
      ar: "شهادة مهندس - هندسة البرمجيات",
    },
    institution: "Universite Sesame",
    period: "Sept 2024 - Sep 2028",
    status: {
      en: "In progress",
      fr: "En cours",
      ar: "قيد الإنجاز",
    },
    note: {
      en: "Part-time program, one day per week.",
      fr: "Programme a temps partiel, un jour par semaine.",
      ar: "برنامج بدوام جزئي، يوم واحد في الأسبوع.",
    },
  },
  {
    id: 2,
    degree: {
      en: "Master's Degree - Data Science",
      fr: "Master - Data Science",
      ar: "شهادة الماجستير - علم البيانات",
    },
    institution: "Higher Institute of Applied Languages and Computer Science of Beja",
    period: "Sep 2025 - Jul 2027",
    status: {
      en: "In progress",
      fr: "En cours",
      ar: "قيد الإنجاز",
    },
    note: {
      en: "Exam-based, part-time program.",
      fr: "Programme base sur examens, a temps partiel.",
      ar: "برنامج قائم على الامتحانات وبدوام جزئي.",
    },
  },
  {
    id: 3,
    degree: {
      en: "Licentiate Degree - Information Technology",
      fr: "Licence - Technologies de l'Information",
      ar: "شهادة الإجازة - تكنولوجيا المعلومات",
    },
    institution: "Higher Institute of Technological Studies of Beja (ISET Beja)",
    period: "Oct 2021 - Jul 2024",
    status: {
      en: "Completed",
      fr: "Termine",
      ar: "منجزة",
    },
  },
];
