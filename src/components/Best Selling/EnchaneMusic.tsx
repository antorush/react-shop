import Button from "../../utility/button";
import CountdownTimer from "../../widgets/timer";

interface EnchanceMusicProps {
  title: string;
  subtitle?: string;
  isTimer?: boolean;
  bg?: string;
  className: string;
  btnName: string;
}

const EnchanceMusic: React.FC<EnchanceMusicProps> = ({
  subtitle,
  title,
  className = "",
  isTimer,
  bg,
}) => {
  const endDate = "2025-12-31T10:00:00Z";
  return (
    <div className="flex justify-center items-center pt-[70px] pr-[60px] pb-[70px] pl-[56px] bg-alterCol">
      <div className="flex justify-center items-center gap-11">
        <div className="block max-w-[443px]">
          <p className="font-semibold text-Header-16px text-BtnColor">
            {subtitle}
          </p>
          <h1 className="block py-8 font-Inter text-h1Size text-primaryCol leading-[60px] tracking-widest">
            {title}
          </h1>
          {isTimer && (
            <CountdownTimer
              endDate={endDate}
              timerVariant="alternate"
              className="pb-10"
            />
          )}
          <button className="bg-BtnColor flex justify-center items-center text-white py-4 px-12 text-center cursor-pointer transition-transform duration-300 ease-in-out hover:scale-110">
            Buy Now!
          </button>
        </div>
        <img
          src={bg}
          className="w-[568px] h-[330px] drop-shadow-2xl drop-shadow-primaryCol/50"
          alt=""
        />
      </div>
    </div>
  );
};

export default EnchanceMusic;
