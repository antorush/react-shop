interface SectionTitleProps {
  subtitle: string;
  title: string;
  flexMode?: "justify-between" | "justify-start";
  isAddComponent?: boolean;
  gap?: string;
  className?: string;
  children?: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  subtitle,
  title,
  className = "",
  isAddComponent = false,
  flexMode = "justify-between",
  children,
  gap = "",
}) => {
  const isChildren =
    children == undefined || children == null
      ? `block`
      : children && flexMode
      ? `w-full flex ${flexMode} items-end gap-[${gap}]`
      : "block";
  return (
    <div className="flex justify-center items-start flex-col mb-10">
      <div className="flex justify-start items-center gap-4 text-Header-16px leading-5 font-bold mb-6">
        <span className="w-5 h-10 rounded-sm bg-lightRed" />
        <span className="text-lightRed">{subtitle}</span>
      </div>
      <div className={`${isChildren}`}>
        <h2
          className={`font-Inter text-h2Size font-semibold leading-12 ${className}`}
        >
          {title}
        </h2>
        {isAddComponent ? children : null}
      </div>
    </div>
  );
};

export default SectionTitle;
