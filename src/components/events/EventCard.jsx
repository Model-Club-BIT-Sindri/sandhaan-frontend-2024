import { useNavigate } from "react-router-dom";

export const EventCard = ({
  id,
  name,
  imageLinks,
  description,
  rullBookLink,
  startDate,
  endDate,
}) => {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div className="container">
        <div className="row">
          <div className="card">
            <div className="info">
              <div className="sub">{name}</div>
              <div className="title">{description}</div>
              <div className="btngroup">
                <button
                  className="btn"
                  onClick={() => navigate(`/event/${id}`)}
                >
                  Register
                </button>
                <a className="btn" href={rullBookLink}>
                  Rule Book
                </a>
              </div>
            </div>
            <div className="image">
              <img src={imageLinks} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
