export const slides = [
  {
    imageURL:
      "https://i.pinimg.com/564x/11/a7/9e/11a79e76ff1dea32519ba70286bbf06b.jpg",
    info: {
      title: "Across the spider-verse",
      mainActor: "Spider-Man",
      movie_type: [
        {
          type1: "Marvel",
          type2: "Avengers",
          type3: "Fantasy",
        },
      ],
      location: [
        {
          flag: "USA",
          language: "English",
        },
      ],
    },
  },
  {
    imageURL:
      "https://i.pinimg.com/originals/0f/e4/04/0fe404825135a0154f81d7745ce34835.jpg",
    // "https://i.pinimg.com/originals/92/bd/bd/92bdbd866d515d8c1b11f9e7643f077e.jpg",
    info: {
      title: "Money Heist",
      mainActor: "Clara Galle",
      movie_type: [
        {
          type1: "Romantic",
          type2: "Teen",
          type3: "Drama",
        },
      ],
      location: [
        {
          flag: "USA",
          language: "English",
        },
      ],
    },
  },
  {
    imageURL:
      "https://i.pinimg.com/originals/26/29/2e/26292e2d0e439dbc7d64783a74d01005.jpg",
    info: {
      title: "Fifty Shades of Grey",
      mainActor: "Josephine Langford",
      movie_type: [
        {
          type1: "Romantic",
          type3: "Drama",
        },
      ],
      location: [
        {
          flag: "USA",
          language: "English",
        },
      ],
    },
  },
  // Add more slides as needed
]

export const sideNavLinks = [
  {
    label: "News Feed",
    links: [
      {
        icon: "fa-solid fa-house",
        title: "Home",
        to: "/",
      },
      {
        icon: "fa-solid fa-heart",
        title: "Watchlist",
        to: "watchlist",
      },
      {
        icon: "fa-solid fa-calendar",
        title: "Coming soon",
        to: "coming-soon",
      },
      {
        icon: "fa-solid fa-download",
        title: "Downloads",
        to: "downloads",
      },
    ],
  },
  {
    label: "Options",
    links: [
      {
        icon: "fa-solid fa-cog",
        title: "Settings",
        to: "/settings",
      },
      {
        icon: "fa-solid fa-question-circle",
        title: "Help",
        to: "/help",
      },
      {
        icon: "fa-solid fa-comment",
        title: "Feedbacks",
        to: "/feedbacks",
      },
      {
        icon: "fa-solid fa-flag",
        title: "Report",
        to: "/report",
      },
    ],
  },
]

export const mobileNavLinks = [
  {
    label: "Options",
    links: [
      {
        icon: "fa-solid fa-question-circle",
        title: "Help",
        to: "/help",
      },
      {
        icon: "fa-solid fa-comment",
        title: "Feedbacks",
        to: "/feedbacks",
      },
      {
        icon: "fa-solid fa-flag",
        title: "Report",
        to: "/report",
      },
    ],
  },
]
