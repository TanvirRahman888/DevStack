import type { iTechnologyType } from "../../types/technologiesType";

interface TechnologyCardProps {
  technology: iTechnologyType;

  handleAddStack: (technology: iTechnologyType) => void;

  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  handleAddStack,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div
      className="
h-full
border
rounded-2xl
p-3
shadow-md
flex
flex-col
gap-3
"
    >
      {/* Header */}

      <div
        className="
flex
justify-between
"
      >
        <img
          src={technology.icon}
          alt={technology.name}
          className="
h-8
w-8
"
        />

        <span
          className="
px-4
py-1
rounded-full
bg-blue-100
border
border-blue-500
text-xs
"
        >
          {technology.badge}
        </span>
      </div>

      {/* Body */}

      <div
        className="
flex-1
flex
flex-col
"
      >
        <div className="grow">
          <h2
            className="
text-xl
font-bold
"
          >
            {technology.name}
          </h2>

          <p
            className="
text-sm
leading-6
mt-2
"
          >
            {technology.description}
          </p>
        </div>

        <div
          className="
flex
justify-between
items-center
mt-4
"
        >
          <span
            className="
text-xs
bg-blue-100
px-3
py-1
rounded-full
"
          >
            {technology.category}
          </span>

          <span className="text-xs">{technology.difficulty}</span>

          <span className="text-xs">⭐ {technology.rating}</span>
        </div>
      </div>

      <button
        disabled={isAdded}
        onClick={() => handleAddStack(technology)}
        className={`
w-full
py-2
rounded

text-white

${
  isAdded
    ? "bg-green-600 cursor-not-allowed"
    : "bg-slate-700 hover:bg-slate-900"
}

`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
