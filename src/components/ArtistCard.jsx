import { useNavigate } from "react-router-dom";

const ArtistCard = ({ track }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex flex-col w-[220px] [-4 bg-white/5 bg-opacity-80 animate-slideup rounded-lg cursor-pointer"
      onClick={() => {
        navigate(`/artists/${track?.artists[0].adamid}`);
      }}
    >
      <img
        alt="artist"
        src={track?.images?.coverart}
        className="w-full h-56 rounded-lg"
      />
      <p className=" font-semibold text-lg text-white truncate p-4">
        {track?.subtitle}
      </p>
    </div>
  );
};

export default ArtistCard;
