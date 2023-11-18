import { cn } from "@/lib/utils";
import Author from "@/components/Author";
import { Memory, Reaction, Verbal, Visual } from "@/assets/icons/icons";

interface Result {
  id: number;
  category: string;
  color: string;
  score: number;
  icon: React.ReactComponentElement<"svg">;
  background: string;
}

const resultList: Result[] = [
  {
    id: 0,
    category: "Reaction",
    color: "text-red",
    score: 80,
    icon: <Reaction className="h-5 w-5 fill-none" />,
    background: "bg-reaction",
  },
  {
    id: 1,
    category: "Memory",
    color: "text-yellow",
    score: 92,
    icon: <Memory className="h-5 w-5 fill-none" />,
    background: "bg-memory",
  },
  {
    id: 2,
    category: "Verbal",
    color: "text-green",
    score: 61,
    icon: <Verbal className="h-5 w-5 fill-none" />,
    background: "bg-verbal",
  },
  {
    id: 3,
    category: "Visual",
    color: "text-blue",
    score: 72,
    icon: <Visual className="h-5 w-5 fill-none" />,
    background: "bg-visual",
  },
];

export default function Home() {
  return (
    <div>
      <main className="min-h-screen bg-very-light-blue/30 font-hanken md:flex md:items-center md:justify-center">
        <div className="mx-auto w-full min-w-min max-w-lg bg-white md:flex md:max-w-[46rem] md:rounded-[2rem] md:shadow-container">
          <div className="bg-score-container mb-6 rounded-b-[2rem] pb-10 shadow-score md:mb-0 md:min-w-[23rem] md:rounded-[2rem] md:pt-9 md:shadow-none">
            <h1 className="py-6 text-center text-lg font-bold text-light-blue md:mb-[2.188rem] md:py-0 md:text-2xl">
              Your Result
            </h1>
            <div className="mb-6 grid place-content-center md:mb-7">
              <div className="bg-score grid h-[8.75rem] w-[8.75rem] place-content-center rounded-full md:h-[12.5rem] md:w-[12.5rem]">
                <p className="flex flex-col items-center text-[3.5rem] font-extrabold leading-[4.5rem] text-white md:text-7xl">
                  76
                  <span className="text-base font-bold leading-normal text-light-blue/[0.5168] md:text-lg">
                    of 100
                  </span>
                </p>
              </div>
            </div>
            <p className="mb-2 text-center text-2xl font-bold text-white md:mb-[0.875rem] md:text-[2rem]">
              Great
            </p>

            <p className="mx-auto max-w-[16.25rem] text-center text-base font-medium leading-[1.35rem] -tracking-[0.02em] text-light-blue md:text-lg md:leading-[1.45rem] md:tracking-[0.01em]">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
          <div className="w-full px-[1.875rem] pb-[1.875rem] md:px-10 md:pb-[2.875rem]">
            <h2 className="mb-6 text-lg font-bold text-dark-navy md:mb-7 md:mt-[2.375rem] md:text-2xl">
              Summary
            </h2>
            <ul className="mb-6 space-y-4 md:mb-10">
              {resultList.map((item) => (
                <li
                  key={item.id}
                  className={cn(
                    "bg-reaction flex h-14 flex-wrap items-center justify-between rounded-xl border border-transparent",
                    item.background,
                  )}
                >
                  <div className="flex w-full flex-wrap items-center justify-between px-[0.875rem]">
                    <div className="flex items-center gap-x-3">
                      {item.icon}
                      <p className={cn("text-base font-medium", item.color)}>
                        {item.category}
                      </p>
                    </div>
                    <p className="text-base font-bold text-dark-navy md:text-lg">
                      {item.score}&nbsp;
                      <span className="text-dark-navy/50">/ 100</span>
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <button className="button relative grid h-14 w-full place-content-center rounded-[8rem] bg-dark-navy text-lg font-bold text-white after:absolute after:inset-0 after:rounded-[8rem] after:opacity-0 after:transition-opacity after:duration-200 hover:after:opacity-100">
              <span className="relative z-10">Continue</span>
            </button>
          </div>
        </div>
      </main>
      <Author />
    </div>
  );
}
