import {
  PostFormGenerationValues,
  VideoFormGenerationValues,
} from "../../types/generation";

export const generatePost = async ({
  songName,
  dateOfRelease,
  genre,
  description,
  tone,
}: PostFormGenerationValues) => {
  let text = `"Are you ready to rock like never before?! Introducing my latest creation, 'Tribute'! This song is the epitome of all things rock and roll, a true masterpiece that will have you headbanging from start to finish.
As a huge fan of Tenacious D, I channeled their energy and spirit into this epic track. The riffs will shred your face off, the solos will send shivers down your spine, and the lyrics will make you feel like a rock god.
Don't miss out on this electrifying experience! Give 'Tribute' a listen and join me in paying homage to the legends of rock. This one's for all the rockers out there, and it's a promise to keep the fire burning. Let's get loud and let the world know that rock will never die!"`;
  text = text.replace(/Tribute/g, songName);
  return {
    text,
  };
};

export const generateVideo = async ({
  songName,
  lyrics,
}: VideoFormGenerationValues) => {
  let url = "https://www.youtube.com/embed/y0e6DlfPrYE";
  return {
    url,
  };
};
