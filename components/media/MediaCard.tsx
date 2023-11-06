import Image from 'next/image';

interface MediaCardProps {
  src: string;
  alt: string;
  title: string;
  onClick: () => void; // onClick prop that takes no arguments and returns void
}

const MediaCard: React.FC<MediaCardProps> = ({ src, alt, title, onClick }) => {
  return (
    <div className="flex flex-col justify-end bg-gray-100 p-4 rounded-md text-center cursor-pointer hover:bg-gray-200" onClick={onClick}>
      <Image
        src={src}
        height={300}
        width={200}
        alt={alt}
        className="w-full rounded-lg"
      />
      <h3 className="mt-2 text-xl font-bold bottom-4">{title}</h3>
    </div>
  );
};

export default MediaCard;
