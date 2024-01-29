export const site = {
  name: "Guestbook",
  description:
    "Beautiful and user-friendly guestbook app. Open source. Performant. Accessible.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://guestbook.sameerjadav.me",
  author: {
    name: "Sameer Jadav",
    web: "https://sameerjadav.me",
    github: "https://github.com/SameerJadav",
    twitter: "https://twitter.com/SameerJadav_",
    twitterId: "@SameerJadav_",
  },
};
