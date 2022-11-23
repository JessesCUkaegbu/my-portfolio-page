import React from "react";

export default function HobbiesCard() {
  return (
    <>
      {/* <!-- Hobbies --> */}
      <div id="hobbies" class="bg-[#EFF5F5] h-auto my-6 py-8 rounded-lg border-4">
            <div class="flex justify-center">
              <h3 class="border-4 w-21  border-dashed px-4 py-4">Hobbies</h3>
            </div>

            <details class="px-6 py-4">
              <summary class="font-bold text-2xl text-gray-800">Reading</summary>
              <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                pavilions, award-winning fireworks and seasonal special events.</p>
            </details>

            <details class="px-6 py-4">
              <summary class="font-bold text-2xl text-gray-800">Gaming</summary>
              <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                pavilions, award-winning fireworks and seasonal special events.</p>
            </details>

            <details class="px-6 py-4">
              <summary class="font-bold text-2xl text-gray-800">Buliding Projects</summary>
              <p>Epcot is a theme park at Walt Disney World Resort featuring exciting attractions, international
                pavilions, award-winning fireworks and seasonal special events.</p>
            </details>
          </div>
    </>
  );
}
