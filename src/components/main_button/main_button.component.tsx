type MainButtonProp = {
  title: string;
  onclick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

const MainButton = ({ title, onclick }: MainButtonProp) => {
  return (
    <button
      onClick={onclick}
      className="px-2 py-1 bg-[#062730] border border-[#f08c00] hover:border-[#faffff] text-[#f08c00] hover:text-[#faffff] text-xl font-bold rounded-xl transition duration-700 __className_c1579a"
    >
      {title}
    </button>
  );
};

export default MainButton;
