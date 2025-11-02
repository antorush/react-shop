import { useState, useEffect } from "react";

/**
 * Типизация пропсов
 */
interface CountdownTimerProps {
  endDate: string; // Дата окончания распродажи в формате ISO 8601
  className?: string;
  timerVariant?: "primary" | "alternate";
}
const CountdownTimer: React.FC<CountdownTimerProps> = ({
  endDate,
  className = "",
  timerVariant = "primary",
}) => {
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isFinished, setIsFinished] = useState<boolean>(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const end = new Date(endDate).getTime();

      if (now >= end) {
        setIsFinished(true);
        return;
      }

      const difference = end - now;

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    };

    const updateTimer = () => {
      const time = calculateTimeLeft();
      setTimeLeft(time);
      setIsFinished(
        (now) => now || Object.values(time).every((val) => val === 0)
      );
    };

    updateTimer(); // Обновление сразу при монтировании
    const timerId = setInterval(updateTimer, 1000); // Обновление каждую секунду

    return () => clearInterval(timerId); // Очистка при размонтировании
  }, [endDate]);

  /**
   * Форматирование чисел с ведущими нулями
   * @param value - Число для форматирования
   * @returns Отформатированная строка
   */
  const formatValue = (value: number): string =>
    value.toString().padStart(2, "0");

  if (isFinished) {
    return (
      <div className={`text-red-600 font-bold text-xl ${className}`}>
        Распродажа окончена!
      </div>
    );
  }
  const times = [
    { id: 1, timeName: formatValue(timeLeft.days), name: "Days" },
    { id: 2, timeName: formatValue(timeLeft.hours), name: "Hours" },
    { id: 3, timeName: formatValue(timeLeft.minutes), name: "Minutes" },
    { id: 4, timeName: formatValue(timeLeft.seconds), name: "Seconds" },
  ];
  return timerVariant == "primary" ? (
    <div className="flex justify-center items-start flex-col">
      <div
        className={`flex justify-start items-center gap-7 font-medium ${className}`}
      >
        {times.map((time) => (
          <>
            <span className="font-Poppins text-xs leading-4 font-medium tracking-wider">
              {time.name}
            </span>
          </>
        ))}
      </div>
      <div className="flex justify-start items-start gap-3">
        {times.map((time) => (
          <>
            <div className="font-Inter text-[32px] font-bold leading-8 tracking-widest">
              <span>{time.timeName}</span>
            </div>
            <div className="text-red-500/80 font-Inter text-[20px] font-bold">
              <span>{time.id !== 4 && ":"}</span>
            </div>
          </>
        ))}
      </div>
    </div>
  ) : (
    <div className={`flex justify-start items-center gap-6 ${className}`}>
      {times.map((time) => (
        <li
          key={time.id}
          className="flex w-[62px] h-[62px] justify-center items-center p-4 rounded-full bg-primaryCol flex-col"
        >
          <span className="font-semibold leading-5 text-Header-16px">
            {time.timeName}
          </span>
          <span className="font-regular leading-5 text-xs">{time.name}</span>
        </li>
      ))}
    </div>
  );
};

export default CountdownTimer;
