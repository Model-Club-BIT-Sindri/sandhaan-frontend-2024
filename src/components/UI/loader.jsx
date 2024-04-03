import { HashLoader } from "react-spinners";

const Loader = ({ isLoading }) => {
  const override = {
    position: "absolute !important",
    display: "block",
    margin: "0 auto",
    borderColor: "red",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
  };

  return (
    <div
      className="grid place-items-center fixed top-0 left-0 w-screen h-screen"
      style={{ backgroundColor: "rgba(0,0,0,0.4)", zIndex: "990" }}
    >
      <HashLoader color="#36d7b7" loading={isLoading} cssOverride={override} />
    </div>
  );
};

export default Loader;
