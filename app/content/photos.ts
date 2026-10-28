export type Photo = { src: string; alt: string };

// Must match the `search` allowed in next.config.ts
function unsplash(id: string) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=2400&q=80`;
}

// Placeholder photography from Unsplash, to be replaced with the client's own images.
export const photos = {
  hero: {
    src: unsplash("1473649085228-583485e6e4d7"),
    alt: "Secondary school learners in uniform working at their desks",
  },
  about: {
    src: unsplash("1698827623362-f10eadf55a18"),
    alt: "A teacher at the chalkboard as pupils raise their hands",
  },
  news: {
    src: unsplash("1627423896085-e3e694d88e40"),
    alt: "A full classroom of learners raising their hands to answer",
  },
  teachingTools: {
    src: unsplash("1632215861513-130b66fe97f4"),
    alt: "A teacher reading with a group of young learners",
  },
  edtech: {
    src: unsplash("1531482615713-2afd69097998"),
    alt: "Two colleagues working together at a computer",
  },
  curriculum: {
    src: unsplash("1610116306796-6fea9f4fae38"),
    alt: "A spread of open textbooks",
  },
  webinars: {
    src: unsplash("1604933762021-54a5858c9832"),
    alt: "An educator joining an online session on a laptop",
  },
  awards: {
    src: unsplash("1627556704243-5f0771d90783"),
    alt: "Graduates in academic gowns throwing their caps in celebration",
  },
  research: {
    src: unsplash("1507537297725-24a1c029d3ca"),
    alt: "A researcher taking notes at a desk",
  },
  exams: {
    src: unsplash("1744809495173-217ca4faa8bc"),
    alt: "A learner working carefully with a ruler on an exercise",
  },
  infrastructure: {
    src: unsplash("1785190095920-302ea67de2e0"),
    alt: "A newly built multi-storey brick school campus",
  },
  teacherDevelopment: {
    src: unsplash("1744809482817-9a9d4fc280af"),
    alt: "A teacher leading a lesson in a classroom",
  },
  magazine: {
    src: unsplash("1567057419565-4349c49d8a04"),
    alt: "A busy primary classroom",
  },
  journal: {
    src: unsplash("1524995997946-a1c2e315a42f"),
    alt: "Shelves of books curving around a library",
  },
} satisfies Record<string, Photo>;
