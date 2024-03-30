export default function TitleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <h1
        className={`text-3xl font-bold group-hover:text-green-500 transition-all duration-300`}
      >
        {text}
      </h1>
      <div className="w-40 h-1.5 mt-[1px] rounded-full bg-green-500"></div>
      <div className="w-40 h-1.5 rounded-full bg-indigo-500 translate-x-3"></div>
    </div>
  );
}
