import ButtonContain from "./common/Buttons/ButtonContain";
import { useNavigate } from "react-router-dom";

const GoToRegister = ({ redirect }) => {
  const navigate = useNavigate();

  return (
    <section className="bg-[url('/images/EmptyPage.png')] bg-center bg-no-repeat container flex flex-col gap-6 px-4 py-8 items-center justify-center min-h-[calc(100vh-260px)]">
      <p>لطفا وارد حساب کاربری خود شوید</p>
      <div className="w-full flex gap-x-4 max-w-[300px]">
        <ButtonContain
          onClick={(e) => navigate(`/signin?redirect=${redirect}`)}
          className="flex-1"
          title="ورود"
        />
        <ButtonContain
          onClick={(e) => navigate(`/signup?redirect=${redirect}`)}
          className="flex-1"
          title="ثبت نام"
        />
      </div>
    </section>
  );
};

export default GoToRegister;
