"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="w-full h-screen bg-gray-200">
      <div className="w-full h-full flex justify-center items-center">
        <div className="flex flex-col justify-center">
          <h1 className="2xl:text-8xl text-4xl font-black">
            Welcome to Recipe City
          </h1>
          <div className="flex justify-center items-center 2xl:mt-10 mt-5">
            <span
              className="2xl:text-5xl text-2xl border-2 rounded-2xl 2xl:py-5 2xl:px-10 py-3 px-6 hover:bg-gray-100 hover:border-gray-600 hover:text-gray-600 font-bold cursor-pointer"
              onClick={() => router.push("/recipes")}
            >
              Checkout recipes
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}
