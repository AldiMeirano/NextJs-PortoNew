import Image from "next/image";

const Hero = () => {
  return (
    <div class="container max-w-2xl mt-40 text-center p-3 ">
      <h1 class="text-gray-500 text-3xl mb-3">Nice to meet you!</h1>

      <div class="flex items-center justify-center max-w-2xl mx-auto ">
        <h1 class="text-white text-3xl">I am</h1>
        <Image
          src="/images/porto-2.png"
          alt="Picture of the author"
          width={50}
          height={50}
          class="rounded-full"
        />
        <h1 class="text-white text-3xl">Aldi Meirano</h1>
      </div>
      <h1 class="text-white text-2xl">A Fullstack web development</h1>
      <hr className="justify-end mt-6"></hr>
    </div>
  );
};

export default Hero;
