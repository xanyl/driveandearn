import { useState } from "react"; // Replace with your actual MusicComponent
import MediaCard from "./MediaCard";
import MusicPage from "@components/mediapages/MusicPage";
import PodcastPage from "@components/mediapages/PodcastPage";
import StoryPage from "@components/mediapages/StoryPage";
import MovieCard from "@components/mediapages/MovieCard";
interface MediaData {
  src: string;
  alt: string;
  title: string;
}

const mediaData: MediaData[] = [
  {
    src: "/music-image.png",
    alt: "Music",
    title: "Music",
  },
  {
    src: "/podcast-image.png",
    alt: "podcast",
    title: "Podcast",
  },
  {
    src: "/storie-image.jpg",
    alt: "stories",
    title: "Stories",
  },
  {
    src: "/movies-image.png",
    alt: "movies",
    title: "Movies",
  },
];

const MediaGallery: React.FC = () => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);

  const handleImageClick = (title: string) => {
    setSelectedMedia(title);
  };

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {mediaData.map((media, index) => (
          <MediaCard
            key={index}
            src={media.src}
            alt={media.alt}
            title={media.title}
            onClick={() => handleImageClick(media.title)}
          />
        ))}
      </div>
      <div className="mt-8 flex flex-col justify-center items-center">
        {selectedMedia === "Music" && <MusicPage />}{" "}
        {selectedMedia === "Podcast" && <PodcastPage />}{" "}
        {selectedMedia === "Stories" && <StoryPage />}{" "}
        {selectedMedia === "Movies" && <MovieCard />}{" "}
      </div>
    </div>
  );
};

export default MediaGallery;
