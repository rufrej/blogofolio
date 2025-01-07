import { Button } from "./UI/Button";
import { useNavigate } from "react-router-dom";
import goback from "../assets/goback.svg";

export function ButtonGoBack() {
  const navigate = useNavigate();
  const goBack = () => navigate(-1);
  return (
    <Button onClick={goBack} color="transparent">
      <img src={goback} alt="back" />
    </Button>
  );
}
