export const site = {
  name: "Guestbook",
  description:
    "Beautiful and user-friendly guestbook app. Open source. Performant. Accessible.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://guestbook.sameerjadav.me",
  repo: "https://github.com/SameerJadav/guestbook",
  author: {
    name: "Sameer Jadav",
    web: "https://sameerjadav.me",
    github: "https://github.com/SameerJadav",
    twitter: "https://twitter.com/SameerJadav_",
    twitterId: "@SameerJadav_",
    linkedin: "https://www.linkedin.com/in/sameerjadav",
    mail: "mailto:sameerjdav001@gmail.com",
  },
};
