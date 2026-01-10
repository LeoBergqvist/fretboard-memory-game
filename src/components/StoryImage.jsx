import { imagesStories } from "../data/images";

export default function StoryImage({ level, alt = "", style }) {
    const src = imagesStories[level];

    // if (!src) return null;

    return <img className="story-name" src={src} alt={alt} style={style} />;
};