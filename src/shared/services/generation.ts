import {
  CoverFormGenerationValues,
  PostFormGenerationValues,
  VideoFormGenerationValues,
} from "../../types/generation";
import { Configuration, OpenAIApi } from "openai";
const configuration = new Configuration({
  apiKey: "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",
});
const openai = new OpenAIApi(configuration);

export const generatePost = async ({
  songName,
  dateOfRelease,
  genre,
  description,
  tone,
}: PostFormGenerationValues) => {
  try {
    let prompt = `Write as I am a ${genre} music artist. Write a Facebook post for my new single ${songName} and make the post ${tone}
       at least 40-70 words.`;

    const completion = await openai.createCompletion({
      model: "text-davinci-003",
      prompt,
      temperature: 0.7,
      max_tokens: 300,
    });

    const text = completion.data.choices[0].text;
    return {
      text,
    };
  } catch (error) {
    console.error(error);
  }
};

export const generateCover = async ({
  songName,
  dateOfRelease,
  genre,
  description,
}: CoverFormGenerationValues) => {
  try {
    let prompt = `Create a ${genre} music album cover for ${songName}. The style must be ${description}
    `;

    const response = await openai.createImage({
      // model: "text-davinci-003",
      // prompt,
      // temperature: 0.7,
      // max_tokens: 300,
      prompt,
      n: 1,
      size: "1024x1024",
    });

    const url = response.data.data[0].url;
    return {
      url,
    };
  } catch (error) {
    console.error(error);
  }
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
