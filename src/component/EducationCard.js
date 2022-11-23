import React from "react";

export default function EducattionCard() {
  return (
    <>
      {/* <!-- Education --> */}

      <div id="education" class="bg-[#EFF5F5] h-auto my-6 py-8 rounded-lg border-4">
        <div class="flex justify-center">
          <h3 class="border-4 w-21  border-dashed px-4 py-4">Education</h3>
        </div>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
            Bluecrest University
          </summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">Firestion Senior High School</summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>

        <details class="px-6 py-4">
          <summary class="font-bold text-2xl text-gray-800">
            W3school Online Learning
          </summary>
          <p>
            Epcot is a theme park at Walt Disney World Resort featuring exciting
            attractions, international pavilions, award-winning fireworks and
            seasonal special events.
          </p>
        </details>
      </div>
    </>
  );
}
