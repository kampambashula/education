import { photos } from "./photos";

// Sample programme data for the section modules in this concept edition.

export const webinarTracks = ["AI in the Classroom", "Inclusive STEM", "AR/VR Frameworks"];

export const upcomingWebinars = [
  {
    day: "12",
    month: "Nov",
    time: "14:00 CAT",
    format: "Live webinar",
    track: "AI in the Classroom",
    title: "AI in the classroom: from policy to practice",
  },
  {
    day: "26",
    month: "Nov",
    time: "14:00 CAT",
    format: "Masterclass",
    track: "Inclusive STEM",
    title: "Inclusive STEM: adapting practicals for learners with SEN",
  },
  {
    day: "10",
    month: "Dec",
    time: "15:00 CAT",
    format: "Live webinar",
    track: "AR/VR Frameworks",
    title: "AR/VR on a budget: immersive lessons with everyday devices",
  },
];

export const awardCategories = [
  { title: "Teacher of the Year", description: "For Zambia's finest classroom educators." },
  { title: "School Administrator of the Year", description: "For transformative heads and school managers." },
  { title: "Visionary Leadership", description: "For leaders reshaping education at district, provincial or national level." },
  { title: "Pioneering Programme", description: "For educational programmes setting new benchmarks for academic success." },
];

export const awardStages = [
  { stage: "Nominations", detail: "Schools, colleagues and communities put forward candidates." },
  { stage: "Judging", detail: "An independent panel reviews evidence and visits shortlisted finalists." },
  { stage: "Awards night", detail: "Winners are honoured at the annual ceremony in Lusaka." },
];

export const magazineEditions = [
  { issue: "Issue 48", date: "October 2026", headline: "Teaching the large class", image: photos.magazine },
  { issue: "Issue 47", date: "July 2026", headline: "Assessment for learning", image: photos.exams },
  { issue: "Issue 46", date: "April 2026", headline: "Early-grade literacy", image: photos.teachingTools },
  { issue: "Issue 45", date: "January 2026", headline: "The digital classroom", image: photos.edtech },
  { issue: "Issue 44", date: "October 2025", headline: "Inclusive education", image: photos.news },
  { issue: "Issue 43", date: "July 2025", headline: "Leading a school", image: photos.teacherDevelopment },
];

export const journalVolumes = [
  { volume: "Volume 6", year: "2026", theme: "Learning, equity and the competency-based curriculum", papers: 12 },
  { volume: "Volume 5", year: "2025", theme: "Teacher professional development in practice", papers: 10 },
  { volume: "Volume 4", year: "2024", theme: "Assessment, examinations and accountability", papers: 11 },
  { volume: "Volume 3", year: "2023", theme: "Financing access from early childhood to tertiary", papers: 9 },
];

export const examLevels = [
  {
    level: "Grade 7",
    name: "Composite Examination",
    description: "Primary results by province and district, with progression to secondary.",
  },
  {
    level: "Grade 9",
    name: "Junior Secondary School Leaving Examination",
    description: "Pass rates, subject performance and Grade 10 transition.",
  },
  {
    level: "Grade 12",
    name: "School Certificate & GCE",
    description: "School certificate outcomes, subject uptake and tertiary eligibility.",
  },
];
