import banjoSound from "../assets/instrument_audio/outer-wilds-banjo.mp3";
import pianoSound from "../assets/instrument_audio/outer-wilds-piano.mp3";
import whistleSound from "../assets/instrument_audio/outer-wilds-whistle.mp3";
import stringsSound from "../assets/instrument_audio/outer-wilds-string.mp3";
import drumsSound from "../assets/instrument_audio/outer-wilds-drums.mp3";
import harmonicaSound from "../assets/instrument_audio/outer-wilds-harmonica.mp3";
import fluteSound from "../assets/instrument_audio/outer-wilds-flute.mp3";

import solanum_photo from "../assets/images/solanum.png";
import chert_photo from "../assets/images/chert.png";
import feldspar_photo from "../assets/images/feldspar.png";
import esker_photo from "../assets/images/esker.png";
import riebeck_photo from "../assets/images/riebeck.png";
import prisoner_photo from "../assets/images/prisoner.png";
import gabbro_photo from "../assets/images/gabbro.png";

export interface TravelerInfo {
  photo: string;
  name: string;
  instrument: string;
  instrument_label: string;
  hobbies: string[];
  location: string;
  sound_file: any;
}

export const mockTravelerList: TravelerInfo[] = [
  {
    photo: solanum_photo,
    name: "Solanum",
    instrument: "Piano",
    instrument_label: "piano",
    hobbies: [
      "Studying quantum mechanics",
      "Exploring ancient technology",
      "Philosophical contemplation",
    ],
    location: "Quantum Moon",
    sound_file: pianoSound,
  },
  {
    photo: chert_photo,
    name: "Chert",
    instrument: "Drums",
    instrument_label: "drums",
    hobbies: ["Stargazing", "Writing star charts", "Astronomy"],
    location: "Ember Twin",
    sound_file: drumsSound,
  },
  {
    photo: gabbro_photo,
    name: "Gabbro",
    instrument: "Flute",
    instrument_label: "flute",
    hobbies: ["Relaxing", "Time loops", "Exploring islands"],
    location: "Giant's Deep",
    sound_file: fluteSound,
  },
  {
    photo: riebeck_photo,
    name: "Riebeck",
    instrument: "Banjo",
    instrument_label: "banjo",
    hobbies: ["Archeology", "Exploring ruins", "Documenting discoveries"],
    location: "Brittle Hollow",
    sound_file: banjoSound,
  },
  {
    photo: feldspar_photo,
    name: "Feldspar",
    instrument: "Harmonica",
    instrument_label: "harmonica",
    hobbies: ["Adventure", "Navigating Dark Bramble", "Telling stories"],
    location: "Dark Bramble",
    sound_file: harmonicaSound,
  },
  {
    photo: esker_photo,
    name: "Esker",
    instrument: "Whistling",
    instrument_label: "whistle",
    hobbies: [
      "Guarding the launch tower",
      "Whistling",
      "Observing space travelers",
    ],
    location: "Attlerock",
    sound_file: whistleSound,
  },
  {
    photo: prisoner_photo,
    name: "The Prisoner",
    instrument: "Ancient String Instrument",
    instrument_label: "string",
    hobbies: [
      "Meditation",
      "Reflecting on the Eye of the Universe",
      "Solitude",
    ],
    location: "The Sealed Vault, The Stranger",
    sound_file: stringsSound,
  },
];
