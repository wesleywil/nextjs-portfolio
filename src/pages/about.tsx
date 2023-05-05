import { roboto400, lora } from "@/fonts/fonts";

export default function About() {
  return (
    <main
      className={`flex flex-col items-center justify-center gap-2 text-center ${roboto400.className}`}
    >
      <div className="flex flex-col gap-2 text-[#faffff] text-2xl">
        <h1 className="text-7xl  font-bold">
          {" "}
          <span className="text-[#f08c00]">A</span>bout{" "}
          <span className="text-[#f08c00]">M</span>e
        </h1>
        <div className="mx-auto xl:w-1/2 flex flex-col gap-2 items-center text-center ">
          <p className="p-2">
            I'm a Full-Stack Developer located in Brazil, I love technology and
            art, especially when we can combine both, like beautiful sites,
            digital paintings and 3d modeling.
          </p>
          <p className="p-2">
            I'm always trying to improve myself by everyday becoming a little
            better, I love to learn new tech and challenge myself with
            frameworks and programming languages.I really Love music, I'm Fan of
            Football(Soccer), E-sports, animes, comics, and mangas.
          </p>
          <p className="p-2">
            Interested in front-end and backend, working right now in personal
            projects, but always ready for a new challenge in my starting
            career.
          </p>
        </div>

        <div className="flex justify-center">
          <button
            className={`px-2 py-1 bg-[#062730] border border-[#f08c00] hover:border-[#faffff] text-[#f08c00] hover:text-[#faffff] text-2xl font-bold rounded-xl transition duration-700 ${lora.className}`}
          >
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}
