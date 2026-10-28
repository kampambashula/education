import {
  Info,
  Newspaper,
  PencilRuler,
  Cpu,
  Library,
  MonitorPlay,
  Trophy,
  Microscope,
  ClipboardCheck,
  HardHat,
  GraduationCap,
  BookOpenText,
  ScrollText,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { photos, type Photo } from "./photos";

export type SectionGroup = "Newsroom" | "Classroom" | "Programmes" | "Publications" | "Company";

export type SectionModule = "webinars" | "awards" | "editions" | "journal" | "exams";

export type Story = { tag: string; title: string; readTime: string };

export type Section = {
  slug: string;
  title: string;
  group: SectionGroup;
  icon: LucideIcon;
  /** One line for cards and menus */
  summary: string;
  /** The bold opening sentence from the client brief */
  lead: string;
  body?: string;
  image: Photo;
  highlights?: { title: string; description: string }[];
  /** Sample headlines for this concept edition */
  stories?: Story[];
  module?: SectionModule;
};

// Section copy (lead, body, highlights) is taken word for word from the client brief.
// Listed in the brief's navigation order.
export const sections: Section[] = [
  {
    slug: "about",
    title: "About",
    group: "Company",
    icon: Info,
    summary: "A wholly Zambian-owned print and digital publication based in Lusaka.",
    lead: "Education Today Zambia is a prominent, wholly Zambian-owned media company based in Lusaka.",
    body: "We operate a premier print and digital newspaper dedicated entirely to the nation's learning ecosystem. Our platform bridges the gap between policymakers, school proprietors, and classroom educators by offering deep-dive features on curriculum changes, educational financing, infrastructure upgrades, special educational needs (SEN), and emerging classroom methodologies.",
    image: photos.about,
  },
  {
    slug: "news-trends",
    title: "News & Trends",
    group: "Newsroom",
    icon: Newspaper,
    summary: "Latest updates, investigations and policy analysis on the Zambian education sector.",
    lead: "We deliver timely, verified news, investigative reporting, and policy analysis tracking the latest shifts in Zambian education.",
    body: "From Ministry of Education directives to grass-roots institutional developments, we keep you informed on the structural, financial, and political trends defining our schools today.",
    image: photos.news,
    stories: [
      { tag: "Analysis", title: "Free education at five: what the enrolment numbers say about access and quality", readTime: "9 min read" },
      { tag: "Policy", title: "Ministry directive tightens registration standards for private schools", readTime: "5 min read" },
      { tag: "Administration", title: "Provincial education offices move to digital reporting from January", readTime: "4 min read" },
    ],
  },
  {
    slug: "teaching-tools",
    title: "Teaching Tools",
    group: "Classroom",
    icon: PencilRuler,
    summary: "Digital platforms, AI assistants and interactive apps for lesson planning and engagement.",
    lead: "Discover curated digital platforms, AI assistants, and interactive teacher resources designed to optimize everyday classroom management.",
    body: "This section provides practical reviews and access to applications that help teachers streamline lesson planning, elevate learner engagement, and easily track student progress against national standards.",
    image: photos.teachingTools,
    highlights: [
      { title: "Lesson planning", description: "Tools that turn the syllabus into structured, ready-to-teach lessons in less time." },
      { title: "Learner engagement", description: "Interactive apps and activities that keep every learner involved, even in large classes." },
      { title: "Progress tracking", description: "Simple ways to record and report learner progress against national standards." },
    ],
    stories: [
      { tag: "Review", title: "Five AI lesson-planning assistants, tested against the Zambian syllabus", readTime: "8 min read" },
      { tag: "Guide", title: "Offline-first classroom apps that work where the signal doesn't", readTime: "6 min read" },
      { tag: "How-to", title: "Tracking learner progress against national standards without the paperwork", readTime: "5 min read" },
    ],
  },
  {
    slug: "edtech-it",
    title: "EdTech & IT",
    group: "Classroom",
    icon: Cpu,
    summary: "Learning theory, LMS and AI tutoring, and the networks and hardware that power them.",
    lead: "Where educational psychology meets the digital infrastructure that powers modern schools.",
    image: photos.edtech,
    highlights: [
      {
        title: "EdTech",
        description:
          "Explores how educational psychology intersects with technology. We cover tools rooted in learning theories like constructivism and cognitivism to drive measurable classroom outcomes. Featured platforms include Learning Management Systems (LMS) like Canvas and Google Classroom, gamified testing apps like Kahoot!, and personalized AI-driven tutoring systems.",
      },
      {
        title: "Information Technology (IT)",
        description:
          "Focuses on the foundational digital infrastructure required to power modern schools. This includes technical insights into campus Wi-Fi architecture, cloud database security, server maintenance, user identity management, and large-scale hardware deployments for students and staff.",
      },
    ],
    stories: [
      { tag: "EdTech", title: "Constructivism on a screen: designing LMS courses that make learners think", readTime: "7 min read" },
      { tag: "IT", title: "Campus Wi-Fi on a school budget: an architecture guide for secondary schools", readTime: "10 min read" },
      { tag: "Security", title: "Protecting learner data in the cloud: a checklist for administrators", readTime: "6 min read" },
    ],
  },
  {
    slug: "curriculum-resources",
    title: "Curriculum Resources",
    group: "Classroom",
    icon: Library,
    summary: "Textbooks, teacher guides, educational software and professional development assets.",
    lead: "We provide the essential physical, digital, and professional assets needed to transform written syllabi into active learning.",
    body: "Our curated resources are divided into four core areas:",
    image: photos.curriculum,
    highlights: [
      { title: "Student Learning Materials", description: "Comprehensive textbooks, workbooks, instructional literature, and hands-on activity kits." },
      { title: "Teaching & Instructional Aids", description: "Ready-made lesson plans, detailed teacher guides, visual wall charts, and physical math or science manipulatives." },
      { title: "Digital & Technological Tools", description: "Verified academic databases, educational software, instructional apps, and interactive multimedia." },
      { title: "Professional Support", description: "Dedicated training frameworks, instructional coaching manuals, and school-wide staff development resources." },
    ],
    stories: [
      { tag: "Learning Materials", title: "New Grade 8 science kits: what's in the box and how to use it", readTime: "5 min read" },
      { tag: "Teaching Aids", title: "Ready-made lesson plans for the competency-based curriculum, term by term", readTime: "4 min read" },
      { tag: "Professional Support", title: "A coaching manual for heads of department, free to download", readTime: "3 min read" },
    ],
  },
  {
    slug: "digital-hub-webinars",
    title: "Digital Hub & Webinars",
    group: "Programmes",
    icon: MonitorPlay,
    summary: "Live webinars and masterclasses on AI, inclusive STEM and AR/VR in education.",
    lead: "Our interactive network hosts structured training sessions and masterclasses aimed at eliminating fragmentation in digital literacy.",
    body: "Here, educators can access live events and an extensive archive of webinar recordings focusing on artificial intelligence in the classroom, inclusive STEM education, and augmented or virtual reality (AR/VR) educational frameworks.",
    image: photos.webinars,
    module: "webinars",
    stories: [
      { tag: "Recording", title: "AI in the classroom: promise, policy and practice", readTime: "58 min" },
      { tag: "Recording", title: "Inclusive STEM for learners with special educational needs", readTime: "64 min" },
      { tag: "Masterclass", title: "AR/VR field trips on low-cost devices", readTime: "45 min" },
    ],
  },
  {
    slug: "education-awards",
    title: "Education Awards",
    group: "Programmes",
    icon: Trophy,
    summary: "Our annual recognition of outstanding teachers, leaders, schools and programmes.",
    lead: "Celebrating excellence in teaching and leadership across the nation.",
    body: "Our annual awards program shines a spotlight on the extraordinary achievements of Zambia's finest educators, transformative school administrators, visionary leaders, and pioneering educational programs that are setting new benchmarks for academic success.",
    image: photos.awards,
    module: "awards",
    stories: [
      { tag: "Awards", title: "Meet the finalists: Teacher of the Year shortlist announced", readTime: "6 min read" },
      { tag: "Profile", title: "How a rural head teacher doubled Grade 9 pass rates in three years", readTime: "8 min read" },
      { tag: "Announcement", title: "Judging panel named for this year's Education Awards", readTime: "3 min read" },
    ],
  },
  {
    slug: "education-research",
    title: "Education Research",
    group: "Newsroom",
    icon: Microscope,
    summary: "Peer-reviewed data and studies on learning, teaching methods and institutional design.",
    lead: "Explore peer-reviewed data and rigorous studies on the learning process, teaching methodologies, and institutional designs.",
    body: "This section provides critical analyses of the social, economic, and systemic structures that directly impact educational access and learner performance across Zambia.",
    image: photos.research,
    stories: [
      { tag: "Study", title: "Mother-tongue instruction and early-grade reading: new evidence from Eastern Province", readTime: "12 min read" },
      { tag: "Analysis", title: "The hidden costs of 'free' schooling for low-income households", readTime: "9 min read" },
      { tag: "Review", title: "School design and learner outcomes: what classroom layout really changes", readTime: "7 min read" },
    ],
  },
  {
    slug: "examinations-results",
    title: "Examination & Results",
    group: "Newsroom",
    icon: ClipboardCheck,
    summary: "Examination results at every ECZ level, with analysis and forecasts.",
    lead: "Get verified, comprehensive data and deep-dive analytics on national examination outcomes.",
    body: "We break down regional and institutional performance data across ECZ (Examinations Council of Zambia) levels, delivering expert forecasts, comparative score analyses, and actionable insights for school administrators.",
    image: photos.exams,
    module: "exams",
    stories: [
      { tag: "Results", title: "Grade 12 results: rural pass rates climb, but science uptake still lags", readTime: "7 min read" },
      { tag: "Data", title: "Grade 7 composite scores: a five-year trend by province", readTime: "6 min read" },
      { tag: "Forecast", title: "What to expect from this year's Grade 9 examinations", readTime: "5 min read" },
    ],
  },
  {
    slug: "infrastructure-projects",
    title: "Infrastructure Projects",
    group: "Newsroom",
    icon: HardHat,
    summary: "New ECE centres, classrooms, libraries and boarding facilities that widen access.",
    lead: "Track the physical growth and modernization of Zambia's academic environments.",
    body: "We cover ongoing infrastructure developments, including classroom expansions, early childhood education (ECE) centers, secure boarding facilities, and new libraries aimed at reducing school congestion and ensuring equitable access to education.",
    image: photos.infrastructure,
    highlights: [
      { title: "Classroom expansions", description: "New blocks and extensions that bring class sizes down." },
      { title: "Early childhood centres", description: "ECE facilities that give young learners a strong start." },
      { title: "Secure boarding", description: "Safe hostels that keep learners from remote areas in school." },
      { title: "New libraries", description: "Reading spaces and resource centres for schools and communities." },
    ],
    stories: [
      { tag: "Projects", title: "Phase two of the rural classroom programme: where the new schools will go", readTime: "6 min read" },
      { tag: "ECE", title: "Early childhood centres: tracking construction across ten provinces", readTime: "5 min read" },
      { tag: "Boarding", title: "Secure boarding for girls: three new hostels open in Northern Province", readTime: "4 min read" },
    ],
  },
  {
    slug: "teacher-development",
    title: "Teacher Development",
    group: "Classroom",
    icon: GraduationCap,
    summary: "Lifelong professional growth for educators, from induction to retirement.",
    lead: "Dedicated to the lifelong professional growth of educators from induction to retirement.",
    body: "We offer resources, frameworks, and expert guidance focused on refining pedagogical skills, expanding subject-matter expertise, and maximizing classroom management capabilities to cultivate a culture of continuous school improvement.",
    image: photos.teacherDevelopment,
    highlights: [
      { title: "Pedagogical skills", description: "Practical methods that make teaching more effective." },
      { title: "Subject expertise", description: "Deeper knowledge in the subjects teachers teach every day." },
      { title: "Classroom management", description: "Strategies for orderly, focused and inclusive classrooms." },
    ],
    stories: [
      { tag: "Induction", title: "Mentorship pilot cuts first-year teacher attrition in Eastern Province", readTime: "6 min read" },
      { tag: "CPD", title: "Continuous professional development points: how the new framework works", readTime: "5 min read" },
      { tag: "Practice", title: "Classroom management for large classes: strategies from veteran teachers", readTime: "7 min read" },
    ],
  },
  {
    slug: "zambian-teacher-magazine",
    title: "The Zambian Teacher Magazine",
    group: "Publications",
    icon: BookOpenText,
    summary: "The full archive of classroom strategy, advice and interviews with Zambian educators.",
    lead: "Browse a complete digital repository of archived The Zambian Teacher Magazine editions.",
    body: "This publication serves as an invaluable resource library, preserving years of timeless pedagogical advice, practical classroom strategies, and interviews with veteran Zambian educators.",
    image: photos.magazine,
    module: "editions",
  },
  {
    slug: "zambian-journal-of-education",
    title: "Zambian Journal of Education",
    group: "Publications",
    icon: ScrollText,
    summary: "Our annual peer-reviewed journal of research on Zambian education.",
    lead: "Access our premier, annual scientific publication showcasing groundbreaking educational research.",
    body: "This peer-reviewed journal features academic papers, institutional case studies, and evidence-based findings written by leading scholars and researchers working within the Zambian education landscape.",
    image: photos.journal,
    module: "journal",
  },
  {
    slug: "contacts",
    title: "Contacts",
    group: "Company",
    icon: Mail,
    summary: "Editorial, advertising and accounts desks in Lusaka.",
    lead: "Connect with our editorial room, corporate partnership teams, or advertising department in Lusaka.",
    body: "Whether you want to submit a press release, subscribe to our print editions, or inquire about sponsorship packages, our team is ready to assist you.",
    image: photos.about,
  },
];

export const groupOrder: SectionGroup[] = ["Newsroom", "Classroom", "Programmes", "Publications", "Company"];

/** Sections with their own route folder rather than the shared [section] page */
const standalone = new Set(["about", "contacts"]);

export const contentSections = sections.filter((s) => !standalone.has(s.slug));

export function sectionHref(slug: string) {
  return `/${slug}`;
}

export function getSection(slug: string) {
  return sections.find((s) => s.slug === slug);
}

export type NavItem = { href: string; label: string; group: SectionGroup };

export const navItems: NavItem[] = sections.map((s) => ({
  href: sectionHref(s.slug),
  label: s.title,
  group: s.group,
}));
