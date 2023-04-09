export const feeds = [
  {
    id: 1,
    title: "Home",
    icon: "ri-home-2-line",
  },
  {
    id: 2,
    title: "Downloads",
    icon: "ri-download-cloud-2-line",
  },
]

export const explore = [
  {
    title: "Hollywood Movies",
    url: "hollywood-movies",
    isOpen: false,
    options: [
      {
        iconRep: "ri-hammer-line",
        movieType: "Action Movies",
        movieLink: "/hollywood/action-movies",
      },
      {
        iconRep: "ri-heart-pulse-line",
        movieType: "Romatic Movies",
        movieLink: "/hollywood/romantic-movies",
      },
      {
        iconRep: "ri-skull-2-line",
        movieType: "Horror Movies",
        movieLink: "/hollywood/horro-movies",
      },
    ],
  },
  {
    title: "Hallyuwood Movies",
    url: "hallyuwood-movies",
    isOpen: false,
    options: [
      {
        iconRep: "ri-hammer-line",
        movieType: "Action Movies",
        movieLink: "/hallyuwood/action-movies",
      },
      {
        iconRep: "ri-heart-pulse-line",
        movieType: "Romantic Movies",
        movieLink: "/hallyuwood/romantic-movies",
      },
    ],
  },
  {
    title: "Nollywood Movies",
    url: "nollywood-movies",
    isOpen: false,
    options: [
      {
        iconRep: "ri-hammer-line",
        movieType: "Action Movies",
        movieLink: "/nollywood/action-movies",
      },
      {
        iconRep: "ri-heart-pulse-line",
        movieType: "Romantic Movies",
        movieLink: "/nollywood/romantic-movies",
      },
      {
        iconRep: "ri-book-line",
        movieType: "Education Movies",
        movieLink: "/nollywood/edu-movies",
      },
    ],
  },
  {
    title: "Bollywood Movies",
    url: "bollywood-movies",
    isOpen: false,
    options: [
      {
        iconRep: "ri-hammer-line",
        movieType: "Action Movies",
        movieLink: "/bollywood/action-movies",
      },
      {
        iconRep: "ri-heart-pulse-line",
        movieType: "Romantic Movies",
        movieLink: "/bollywood/romatic-movies",
      },
    ],
  },
]

export const options = [
  {
    route: "settings",
    title: "Settings",
    icon: "ri-settings-3-line",
  },
  {
    route: "report-history",
    title: "Report History",
    icon: "ri-flag-line",
  },
  {
    route: "help",
    title: "Help",
    icon: "ri-question-line",
  },
  {
    route: "feedback",
    title: "Send Feedback",
    icon: "ri-feedback-line",
  },
]
