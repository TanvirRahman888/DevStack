import { FaRegTrashCan } from "react-icons/fa6";
import type { iTechnologyType } from "../../types/technologiesType";
import { MdOutlineClear } from "react-icons/md";

interface YourStackProps {
  stack: iTechnologyType[];

  handleRemove: (id: string) => void;

  handleRemoveAll: () => void;
}

const YourStack = ({
  stack,
  handleRemove,
  handleRemoveAll,
}: YourStackProps) => {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm h-fit">
      <div className="flex justify-between items-center mb-6 ">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">Your Stack</h2>

          <p className="text-sm text-slate-400 mt-1">
            {stack.length > 0
              ? `${stack.length} Technology Selected`
              : "No technologies selected yet."}
          </p>
        </div>
      </div>


      {stack.length === 0 ? (
        <div className=" h-28 border-2 border-dashed border-slate-200 rounded-2xl flex items-center justify-center text-slate-400 text-sm ">
          Your stack is empty.
        </div>
      ) : (
        <div className=" flex flex-col gap-3 ">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between border border-slate-200 rounded-xl p-3 hover:shadow-sm transition "
            >

              <div className=" flex items-center gap-3 ">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className=" w-10 h-10 object-contain "
                />

                <div>
                  <h3 className=" font-semibold text-slate-900 ">
                    {technology.name}
                  </h3>

                  <p className=" text-xs text-slate-400 ">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove */}

              <button
                onClick={() => handleRemove(technology.id)}
                className=" text-2xl text-slate-400 hover:text-red-500 transition "
              >
                <FaRegTrashCan />
              </button>
            </div>
          ))}
        </div>
      )}

        {stack.length > 0 && (
          <div className="mt-3">
            <button
            onClick={handleRemoveAll}
            className="text-sm font-bold w-full text-red-500 border border-red-300 px-4 py-2 rounded-full hover:bg-red-50 transition flex items-center justify-center gap-2"
          >
            Remove All <MdOutlineClear />
          </button>
          </div>
        )}
    </div>
  );
};

export default YourStack;
