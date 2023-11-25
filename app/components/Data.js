import Image from "next/image";
const Data = () => {
  return (
    <div className="bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded shadow-md">
        <Image
          src="/images/gunung.jpg"
          width={200}
          height={50}
          alt="Picture of the author"
          className="w-full mb-4 rounded"
        />
        <h1 className="text-2xl font-semibold mb-4">About Me</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Data;
