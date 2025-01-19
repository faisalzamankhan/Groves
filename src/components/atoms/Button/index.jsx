const Button = ({ buttonLabel, buttonicon, className }) => {
  return (
    <button
      className={`bg-[linear-gradient(180deg,#AD8749,#DCBB75)] min-w-36 px-4  py-3 rounded-2xl text-white flex items-center justify-center ${className}`}
    >
      {buttonLabel}
      {buttonicon}
    </button>
  );
};

export default Button;
