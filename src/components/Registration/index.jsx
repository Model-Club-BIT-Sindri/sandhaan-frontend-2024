import { useEffect, useState } from "react";
import Navbar from "../Navbar/index";
import Input from "./Input";
import { useParams } from "react-router-dom";
import "./register.scss";
import axios from "axios";
import { useSelector } from "react-redux";
const Registration = () => {
  const apiUrl = import.meta.env.VITE_API_URL;
  const params = useParams();
  const { user } = useSelector((state) => state.user);
  const [success, setSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [participant, setParticipipant] = useState({
    teamName: "",
    leadersPhone: "",
    leadersEmail: "",
    leadersBranch: "",
    leadersBatch: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setParticipipant((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const config = {
      headers: { "Content-Type": "application/json", " _id": user._id },
    };
    axios
      .post(`${apiUrl}/api/v1/register/${params.id}`, participant, config)
      .then((response) => {
        if (response.data.success) {
          setSuccess(true);
          setIsLoading(false);
        }
      });
  };
  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }, [success]);
  return (
    <>
      <Navbar />
      <div className="register_section container">
        <div className="box">
          <span></span>
          <form onSubmit={handleSubmit} className="content">
            <Input
              label="Team Name"
              onChange={handleChange}
              name="teamName"
              value={participant.name}
              placeholder="Team Name.."
            />
            <Input
              label="Leader's Phone Number"
              onChange={handleChange}
              name="leadersPhone"
              value={participant.phone}
              placeholder="Leader's phone.."
            />
            <Input
              label="Leader's Email"
              onChange={handleChange}
              name="leadersEmail"
              value={participant.email}
              placeholder="Leader's Email.."
            />
            <div>
              <label htmlFor="Leader's Batch">Batch</label>
              <select
                onChange={(e) =>
                  setParticipipant((prevParticipantData) => ({
                    ...prevParticipantData,
                    leadersBatch: e.target.value,
                  }))
                }
              >
                <option value="">Select Batch</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div>
              <label htmlFor="Branch">Leader's Branch</label>
              <select
                onChange={(e) =>
                  setParticipipant((prevParticipantData) => ({
                    ...prevParticipantData,
                    leadersBranch: e.target.value,
                  }))
                }
              >
                <option value="">Select Branch</option>
                <option value="Computer Science & Engineering">
                  Computer Science & Engineering
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electronics & Communication Engineering">
                  Electronics & Communication Engineering
                </option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Metallurgical Engineering">
                  Metallurgical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Production Engineering">
                  Production Engineering
                </option>
                <option value="Mining Engineering">Mining Engineering</option>
              </select>
            </div>
            <button type="submit">
              {isLoading
                ? "Loading..."
                : success
                ? "Register successfully"
                : "Submit"}
            </button>
          </form>
          {/* <form onSubmit={handleSubmit} className="content">
            <Input
              label="Participant 1 Name"
              onChange={handleChange}
              name="name"
              value={participant.name}
              placeholder="Your Name.."
            />
            <Input
              label="Participant 1 Phone Number"
              onChange={handleChange}
              name="phone"
              value={participant.phone}
              placeholder="Your phone.."
            />
            <Input
              label="Participant 1 Email"
              onChange={handleChange}
              name="email"
              value={participant.email}
              placeholder="Your Email.."
            />
            <div>
              <label htmlFor="Participant 1 Batch">Batch</label>
              <select
                onChange={(e) =>
                  setParticipipant((prevParticipantData) => ({
                    ...prevParticipantData,
                    batch: e.target.value,
                  }))
                }
              >
                <option value="">Select Batch</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
              </select>
            </div>
            <div>
              <label htmlFor="Branch">Participant 1 Branch</label>
              <select
                onChange={(e) =>
                  setParticipipant((prevParticipantData) => ({
                    ...prevParticipantData,
                    branch: e.target.value,
                  }))
                }
              >
                <option value="">Select Branch</option>
                <option value="Computer Science & Engineering">
                  Computer Science & Engineering
                </option>
                <option value="Information Technology">
                  Information Technology
                </option>
                <option value="Electronics & Communication Engineering">
                  Electronics & Communication Engineering
                </option>
                <option value="Electrical Engineering">
                  Electrical Engineering
                </option>
                <option value="Mechanical Engineering">
                  Mechanical Engineering
                </option>
                <option value="Metallurgical Engineering">
                  Metallurgical Engineering
                </option>
                <option value="Civil Engineering">Civil Engineering</option>
                <option value="Chemical Engineering">
                  Chemical Engineering
                </option>
                <option value="Production Engineering">
                  Production Engineering
                </option>
                <option value="Mining Engineering">Mining Engineering</option>
              </select>
            </div>
            <button type="submit">
              {isLoading
                ? "Loading..."
                : success
                ? "Register successfully"
                : "Submit"}
            </button>
          </form> */}
        </div>
      </div>
    </>
  );
};

export default Registration;
