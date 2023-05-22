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
    label: "Explore",
    links: [
      {
        icon: "fa-solid fa-music",
        title: "Music Vidoes",
        to: "/music-vidoes",
      },
      {
        icon: "fa-solid fa-futbol",
        title: "Sports Videos",
        to: "/sport-vidoes",
      },
      {
        icon: "fa-solid fa-laugh",
        title: "Skit Videos",
        to: "/skit-vidoes",
      },
      {
        icon: "fa-solid fa-film",
        title: "Short Reels",
        to: "/reels",
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

export const profile = [
  {
    wallpaper:
      "https://i.pinimg.com/564x/5e/27/b0/5e27b0ba42ca13ce1bb8a5ce2d4e84ad.jpg",
    icons: {
      closeIcon: "fa fa-times",
      userIcon: "fa fa-user-circle",
      phoneIcon: "fa fa-phone",
      emailIcon: "fa fa-envelope",
      editIcon: "fa fa-pencil",
      saveIcon: "fa fa-save",
      logoutIcon: "fa fa-sign-out",
    },
    logOut: {
      text: "Log out",
    },
    editProfile: {
      text: "Edit Profile",
    },
    name: "Adewole Ridwanullahi A.",
    otherInfo: {
      Email: {
        title: "Email",
        email: "devridwan1@gmail.com",
      },
      Number: {
        title: "Phone No.",
        countryCode: "+234",
        phoneNumber: "704 7344 365",
      },
    },
    storage_info: {
      total__storage: "5GB (5000mb)",
      storage__used__percent: 40,
      storage__used: "1.3GB (1300mb)",
    },
  },
]
