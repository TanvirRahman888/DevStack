const Loader = () => {
  return (
    <div className="min-h-100 flex flex-col items-center justify-center gap-6">
      <div className="text-center">
        <h2 className="text-xl font-bold text-slate-900" >
          Loading Technologies
        </h2>
        <p className="mt-2 text-sm text-slate-400 " >
          Preparing your developer stack...
        </p>
      </div>

      <div className="flex gap-2">
        <span className="h-2 w-2 rounded-full bg-pink-500 animate-bounce"/>
        <span className="h-2 w-2 rounded-full bg-purple-500 animate-bounce [animation-delay:150ms]"/>
        <span className="h-2 w-2 rounded-full bg-blue-500 animate-bounce [animation-delay:300ms]"/>
      </div>
    </div>
  );
};

export default Loader;