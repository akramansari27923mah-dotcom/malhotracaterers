import Image from "next/image";

const TypingLoader = () => {
  return (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-full flex items-center justify-center text-black">
        <Image 
        src={'/logo.jpg'}
        alt="Loader"
        width={30}
        height={30}
        />
      </div>

      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-md border border-white/10 px-4 py-3 rounded-2xl">
        <span className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"></span>

        <span
          className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.15s" }}
        ></span>

        <span
          className="w-2 h-2 bg-amber-400 rounded-full animate-bounce"
          style={{ animationDelay: "0.3s" }}
        ></span>
      </div>
    </div>
  );
};

export default TypingLoader;