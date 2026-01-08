import { imagesStories } from "../data/images";

export default function StoryImage({ index, alt = "", style }) {
    const src = imagesStories[index];

    // if (!src) return null;

    return <img className="story-name" src={src} alt={alt} style={style} />;
};