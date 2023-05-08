import { roboto400 } from "@/fonts/fonts";
import ProjectItem from "@/components/project_item/project_item.component";

export default function Projects() {
  return (
    <main
      className={`flex flex-col items-center justify-center gap-2 text-center ${roboto400.className}`}
    >
      <div className="flex flex-col gap-2 text-[#faffff] text-2xl">
        <h1 className="mt-2 text-6xl md:text-7xl  font-bold">
          <span className="text-[#f08c00]">P</span>rojects
        </h1>
        <div className="mx-auto w-[20rem] md:w-[50rem] xl:w-[70rem] h-[40rem] py-4 flex flex-col gap-2 items-center text-center overflow-y-auto">
          <h2 className="w-full mt-2 text-center md:text-left text-slate-400 text-sm border-b">
            PERSONAL
          </h2>
          <div className="flex flex-col gap-4 text-base">
            <ProjectItem
              img_url="https://i.imgur.com/2gnRO82.png"
              title="Coffee Shop"
              tech="LARAVEL + REACTJS + SQLITE"
              description="Our coffee shop offers an easy-to-use online platform for
                  customers to reserve tables, order coffee and food, and track
                  the status of their order in real-time. We provide a
                  hassle-free experience that ensures the best service possible
                  for our customers."
              git_link="https://github.com/wesleywil/coffee-shop"
            />
            <ProjectItem
              img_url="https://i.imgur.com/bUqL4Z1.gif"
              title="BUG Tracker"
              tech="TAURI + REACTJS + SQLITE"
              description="This is a bug tracker desktop application, that created to track bugs and issues in my future and current projects."
              git_link="https://github.com/wesleywil/bug-tracker"
            />
            <ProjectItem
              img_url="https://i.imgur.com/nNGuD73.gif"
              title="GOTO Project"
              tech="TAURI + REACTJS + SQLITE"
              description="This project is for my anime management, I'm replacing a notepad txt with a lot of animes that I watched, still “watching” or dropped for the last 8 years to this new project that I intend to use daily when it's finished."
              git_link="https://github.com/wesleywil/Goto-Project"
            />
            <ProjectItem
              img_url="https://i.imgur.com/7wHnUrC.png"
              title="ZEN - Meditation App"
              tech="EXPRESS + REACTJS + PRISMA + SQLITE"
              description="A meditation app for calming the soul in this busy world."
              git_link="https://github.com/wesleywil/zen_app"
            />
            <ProjectItem
              img_url="https://i.imgur.com/QXLsQ45.png"
              title="X-music"
              tech="SPOTIFY API + SVELTE"
              description="A project for music something using the spotify api."
              git_link="https://github.com/wesleywil/X-music"
            />
          </div>
          <h2 className="w-full mt-2 text-center md:text-left text-slate-400 text-sm border-b">
            OTHERS
          </h2>
          <div className="flex flex-col gap-2 text-base">
            <ProjectItem
              img_url="https://i.imgur.com/I1PHS3I.png"
              title="Clothing-Shop"
              tech="FIREBASE + REACTJS"
              description="Clothing shop a project using reactjs and firebase"
              git_link="https://github.com/wesleywil/clothing-shop"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
