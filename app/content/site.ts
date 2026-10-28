// Mission, vision, value and impact are taken word for word from the client brief.
export const pillars = [
  {
    key: "mission",
    label: "Our Mission",
    copy: "To serve as a premier business-to-business (B2B) multimedia platform and news outlet that delivers comprehensive coverage of the Zambian education sector—spanning early childhood, primary, secondary, tertiary, and adult education.",
  },
  {
    key: "vision",
    label: "Our Vision",
    copy: "To be the most trusted reference point and journalistic authority across the Zambian learning landscape.",
  },
  {
    key: "value",
    label: "Our Value",
    copy: "We empower learning institutions to build safer, more modern, and highly efficient environments by equipping administrators, educators, and policy makers with real-time industry intelligence.",
  },
  {
    key: "impact",
    label: "Our Impact",
    copy: "We champion academic and institutional innovation through our expert editorial content, digital products, tailored services, and milestone industry recognitions like the annual Education Awards.",
  },
] as const;

export const leadStory = {
  tag: "Curriculum",
  title: "Five years into the competency-based curriculum, what has actually changed in the classroom?",
  standfirst:
    "Teachers in Lusaka, Kabwe and Mongu describe a shift from rote recall toward project work — but say assessment guidance and learning materials still lag behind the ambition of the reform.",
  byline: "By the Education Today Zambia desk",
  readTime: "8 min read",
};

export const briefs = [
  {
    tag: "Infrastructure",
    section: "infrastructure-projects",
    headline: "Ministry unveils phase two of the 400-school rural classroom programme",
    time: "3 hours ago",
  },
  {
    tag: "Examinations",
    section: "examinations-results",
    headline: "ECZ Grade 12 results: rural pass rates climb, but science uptake still lags",
    time: "6 hours ago",
  },
  {
    tag: "Financing",
    section: "news-trends",
    headline: "New K450 million bursary facility opens applications for STEM undergraduates",
    time: "Yesterday",
  },
  {
    tag: "Teacher Development",
    section: "teacher-development",
    headline: "Teacher training colleges add compulsory digital-pedagogy module for 2027 intake",
    time: "Yesterday",
  },
  {
    tag: "Curriculum",
    section: "curriculum-resources",
    headline: "Subject panels begin review of the competency-based curriculum's science strand",
    time: "2 days ago",
  },
];

export const stats = [
  {
    value: "92%",
    label: "Primary completion rate",
    detail: "Up from 84% a decade ago",
  },
  {
    value: "1:46",
    label: "Pupil–teacher ratio",
    detail: "Primary schools, against a Sub-Saharan average near 1:38",
  },
  {
    value: "13.2%",
    label: "Of national budget",
    detail: "Allocated to education in the current fiscal year",
  },
  {
    value: "68%",
    label: "Grade 9 to 10 transition",
    detail: "Learners progressing to senior secondary",
  },
];

// The brief names Malama Katulwende for editorial but leaves every number blank.
// Emails are placeholders: confirm all desk details with the client before launch.
export const desks: {
  desk: string;
  purpose: string;
  person?: string;
  phone?: string;
  email: string;
}[] = [
  {
    desk: "Editorial",
    purpose: "Press releases, story tips and contributor enquiries",
    person: "Malama Katulwende",
    email: "editorial@educationtoday.co.zm",
  },
  {
    desk: "Advertising",
    purpose: "Sponsorship packages, print and digital advertising",
    email: "advertising@educationtoday.co.zm",
  },
  {
    desk: "Accounts",
    purpose: "Print subscriptions, invoices and payments",
    email: "accounts@educationtoday.co.zm",
  },
];

export const location = "Lusaka, Zambia";

// Placeholder profile links until the client supplies theirs
export const socials = [
  { name: "Facebook", href: "#" },
  { name: "X", href: "#" },
  { name: "LinkedIn", href: "#" },
  { name: "YouTube", href: "#" },
] as const;
