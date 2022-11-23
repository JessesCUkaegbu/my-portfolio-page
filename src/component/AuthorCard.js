import React, { useState } from "react";

export default function AuthorCard({ setIsActive, isActive }) {
  function handleActive(e) {
    e.preventDefault();

    setIsActive({
      active: true,
      name: e.target.id,
    });
  }

  return (
    <>
      <div
        id="intro"
        class="bg-[#
          3EAEAEA] h-auto my-6 py-8 rounded-lg border-4"
      >
        <div id="avatar" class="flex justify-center py-2">
          <img
            class="w-40"
            src="https://api.multiavatar.com/JB.svg "
            alt="JB image"
          />
        </div>
        <div id="content" class="prose lg:prose-xl px-2">
          <h1 class="text-center text-gray-800 text-4xl capitalize font-medium">
            Jesses C. Ukaegbu
          </h1>
          <small class="text-center block text-md text-gray-800">
            Writer, Teacher &amp; Software Engineer
          </small>
          <p class="text-justify text-lg text-gray-800">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            vero voluptates vitae rerum eos non laboriosam deleniti voluptatibus
            ipsum blanditiis expedita architecto tempore necessitatibus quisquam
            vel ipsam corporis, nemo repudiandae. Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Modi asperiores, amet omnis inventore
            aliquid nam. Autem obcaecati ut ipsa rem temporibus nostrum,
            quibusdam optio, itaque culpa ad impedit aperiam quasi.
          </p>

          <div id="hero-nav" className="p-6 max-w-full max-auto">
            <ul className="flex items-center justify-center mx-4 gap-4">
              <li className="border-2 border-[#B2B2B2] p-2 rounded-lg">
                <a
                  href="#education"
                  id="education"
                  className={`${
                    isActive.active &&
                    isActive.name === "education" &&
                    "font-bold"
                  } font-lato text-xl`}
                  onClick={handleActive}
                >
                  Education
                </a>
              </li>
              <li className="border-2 border-[#B2B2B2] p-2 rounded-lg">
                <a
                  href="#work"
                  id="work"
                  className={`${
                    isActive.active && isActive.name === "work" && "font-bold"
                  } font-lato text-xl`}
                  onClick={handleActive}
                >
                  Work
                </a>
              </li>
              <li className="border-2 border-[#B2B2B2] p-2 rounded-lg">
                <a
                  href="#hobbies"
                  id="hobbies"
                  className={`${
                    isActive.active &&
                    isActive.name === "hobbies" &&
                    "font-bold"
                  } font-lato text-xl`}
                  onClick={handleActive}
                >
                  Hobbies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
