import { useNavigate } from "react-router-dom";

export const EventCard = ({ id, name, imageLinks, description }) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[30%] bg-[#fff] shadow-md shadow-[#eee] border-2 border-[#ddd] rounded-[20px] overflow-hidden"
      role="button"
    >
      <img src={imageLinks} className="w-full h-auto" />
      <div className="flex flex-col justify-start items-start p-4">
        <span className="text-slate-950 font-bold">{name}</span>
        <p className="text-gray-600 font-semibold text-start">{description}</p>-
        <button
          className="bg-slate-900 text-white rounded-md px-4 py-[4px] w-full my-2"
          onClick={() => navigate(`/event/${id}`)}
        >
          Register
        </button>
      </div>
    </div>
  );
};
