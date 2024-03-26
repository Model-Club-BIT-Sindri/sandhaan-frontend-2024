import { useNavigate } from "react-router-dom";

export const EventCard = ({ id, name, imageLinks, description }) => {
  const navigate = useNavigate();
  return (
    <div className="card" role="button">
      <img src={imageLinks} className="" />
      <div className="flex flex-col justify-center items-center">
        <p className="text-2xl my-2 py-2 text-center w-full">{name}</p>
        <p className="">{description}</p>
        <div className="w-full grid place-items-center">
          <button
            className="bg-white text-black w-[98%] py-2 px-2 rounded-md text-xl font-bold my-2"
            onClick={() => navigate(`/event/${id}`)}
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
};
