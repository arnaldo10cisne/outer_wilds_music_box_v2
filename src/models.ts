export interface TravelerInfo {
  photo: string;
  name: string;
  instrument: string;
  hobbies: string[];
  location: string;
}

export const mockTravelerList: TravelerInfo[] = [
  {
    photo: "https://via.placeholder.com/80",
    name: "Solanum",
    instrument: "Piano",
    hobbies: [
      "Studying quantum mechanics",
      "Exploring ancient technology",
      "Philosophical contemplation",
    ],
    location: "Quantum Moon",
  },
  {
    photo: "https://via.placeholder.com/80",
    name: "Chert",
    instrument: "Drums",
    hobbies: ["Stargazing", "Writing star charts", "Astronomy"],
    location: "Ember Twin",
  },
  {
    photo: "https://via.placeholder.com/80",
    name: "Gabbro",
    instrument: "Flute",
    hobbies: ["Relaxing", "Time loops", "Exploring islands"],
    location: "Giant's Deep",
  },
  {
    photo: "https://via.placeholder.com/80",
    name: "Riebeck",
    instrument: "Banjo",
    hobbies: ["Archeology", "Exploring ruins", "Documenting discoveries"],
    location: "Brittle Hollow",
  },
  {
    photo: "https://via.placeholder.com/80",
    name: "Feldspar",
    instrument: "Harmonica",
    hobbies: ["Adventure", "Navigating Dark Bramble", "Telling stories"],
    location: "Dark Bramble",
  },
  {
    photo: "https://via.placeholder.com/80",
    name: "Esker",
    instrument: "Whistling",
    hobbies: [
      "Guarding the launch tower",
      "Whistling",
      "Observing space travelers",
    ],
    location: "Attlerock",
  },
  {
    photo: "https://via.placeholder.com/80",
    name: "The Prisoner",
    instrument: "Ancient String Instrument",
    hobbies: [
      "Meditation",
      "Reflecting on the Eye of the Universe",
      "Solitude",
    ],
    location: "The Sealed Vault, The Stranger",
  },
];
