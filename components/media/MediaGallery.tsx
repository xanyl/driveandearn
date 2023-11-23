/* The code is defining a React functional component called `MediaGallery`. It is a gallery component
that displays a grid of media cards (images) and allows the user to select a media card. When a
media card is selected, a modal is displayed with the corresponding media component (e.g.,
MusicPage, PodcastPage, etc.). The component keeps track of the time spent on each media selection
and updates the `totalSeconds` state passed as a prop. The component also includes event handlers
for closing the modal and submitting the form within the media component. */
import React, { useEffect, useState } from "react"; // Replace with your actual MusicComponent
import MediaCard from "./MediaCard";
import MusicPage from "@components/mediapages/MusicPage";
import PodcastPage from "@components/mediapages/PodcastPage";
import MovieCard from "@components/mediapages/MovieCard";
import StoryPage from "@components/mediapages/StoryPage";
import { useDispatch } from "react-redux";
import { updateTotalSecond } from "@redux/earnedAmountSlice";

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

interface MediaGalleryProps {
  reset: boolean;
}

const MediaGallery: React.FC<MediaGalleryProps> = ({ reset }) => {
  const [selectedMedia, setSelectedMedia] = useState<string | null>(null);
  const [timeStart, setTimeStart] = useState<number | null>(null);
  const [timeSpent, setTimeSpent] = useState<number>(0);
  // const totalSeconds = useSelector((state: any) => state.earnedAmount.totalSeconds);

  const dispatch = useDispatch();

  const handleImageClick = (title: string) => {
    setTimeStart(Date.now());
    setSelectedMedia(title);
  };

  const closeModal = () => {
    if (timeStart !== null) {
      const currentTime = Date.now();
      const timeDifference = currentTime - timeStart;
      setTimeSpent(timeSpent + timeDifference); // Accumulate time spent on each media selection
      setTimeStart(null);
      const totalSeconds = Math.floor((timeSpent + timeDifference) / 1000);
      dispatch(updateTotalSecond(totalSeconds));

      // setTotalSeconds(totalSeconds);
    }
    if(reset){
      setTimeSpent(0);
      
    }
    setSelectedMedia(null);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (selectedMedia) {
      timer = setInterval(() => {
        if (timeStart !== null) {
          const currentTime = Date.now();
          const timeDifference = currentTime - timeStart;
          setTimeSpent(timeSpent + timeDifference);
          setTimeStart(currentTime);
        }
      }, 1000);
    }

    return () => {
      clearInterval(timer)
      
    }; // Clean up the interval when the component unmounts
  }, [selectedMedia, timeStart, timeSpent]);
 
    
 
  const handleSubmit = () => {
    // Perform actions on submitting the form within MusicPage
    closeModal();
  };
  const getMediaComponent = () => {
    switch (selectedMedia) {
      case "Music":
        return <MusicPage />;
      case "Podcast":
        return <PodcastPage />;
      case "Stories":
        return <StoryPage />;
      case "Movies":
        return <MovieCard />;
      default:
        return null;
    }
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
        {selectedMedia && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white rounded-lg shadow-lg md:w-3/4 lg:w-2/3 w-full flex flex-col">
              <div className="p-4">
                <button
                  onClick={closeModal}
                  className="text-gray-600 text-sm block p-2 hover:bg-gray-100 rounded"
                >
                  &larr; Back
                </button>
              </div>
              <div className="flex-1 flex justify-center">
                {getMediaComponent()}
              </div>
              <div className="text-center pb-4">
                <button
                  onClick={handleSubmit}
                  className="bg-blue-500 text-white mt-4 py-2 px-4 rounded hover:bg-blue-700"
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MediaGallery;
