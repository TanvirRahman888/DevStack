import { use } from "react";
import { useState } from "react";
import { toast } from "react-toastify";

import YourStack from "./YourStack";

import TechnologyCard from "./TechnologyCard";

import type { iTechnologyType } from "../../types/technologiesType";

interface TechnologyProps {
  technologyPromise: Promise<iTechnologyType[]>;
}

const Technologies = ({ technologyPromise }: TechnologyProps) => {
  const technologies = use(technologyPromise);

  const [stack, setStack] = useState<iTechnologyType[]>([]);

  // ADD
  const handleAddStack = (technology: iTechnologyType) => {
    const alreadyAdded = stack.find((item) => item.id === technology.id);

    if (alreadyAdded) {
      toast.warning(`${technology.name} already exists`);

      return;
    }

    setStack([...stack, technology]);

    toast.success(`${technology.name} added`);
  };

  // REMOVE ONE
  const handleRemove = (id: string) => {
    const removed = stack.find((item) => item.id === id);

    setStack(stack.filter((item) => item.id !== id));

    toast.info(`${removed?.name} removed`);
  };

  // REMOVE ALL
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      toast.warning("Stack is already empty");

      return;
    }

    setStack([]);

    toast.info("All technologies removed");
  };

  return (
    <section className="container mx-auto py-10">
      <div>
        <h2 className=" text-4xl font-bold ">
          Explore the
          <span className=" bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent ">
            {" "}
            Technologies
          </span>
        </h2>

        <p>Pick one technology per category to build your ideal stack.</p>
      </div>

      <div className=" mt-6 grid grid-cols-1 md:grid-cols-4 gap-5 ">
        <div className=" md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {technologies.map((technology) => (
            <TechnologyCard
              key={technology.id}
              technology={technology}
              handleAddStack={handleAddStack}
              isAdded={stack.some((item) => item.id === technology.id)}
            />
          ))}
        </div>

        <YourStack
          stack={stack}
          handleRemove={handleRemove}
          handleRemoveAll={handleRemoveAll}
        />
      </div>
    </section>
  );
};

export default Technologies;
