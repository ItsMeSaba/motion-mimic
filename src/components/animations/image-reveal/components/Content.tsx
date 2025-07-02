import Arrow from "../assets/arrow.svg";

export function Content() {
  return (
    <div className="flex flex-col gap-4 ml-8 text-center">
      <h2 className="text-lg font-bold text-green-700">This is label</h2>

      <h1 className="text-5xl font-bold text-black leading-tight">
        This text is reserved for title.
      </h1>

      <p className="text-xl text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. At magnam
        explicabo eveniet enim.
      </p>
      <div className="mt-4">
        <a
          href="#wyjazdy"
          className="inline-flex items-center px-6 py-3 text-white bg-green-700 rounded-lg hover:bg-green-800 transition-colors"
        >
          Learn More
          <Arrow className="w-4 h-4 ml-2" />
        </a>
      </div>
    </div>
  );
}
