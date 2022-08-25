import React from "react"

const Footer: React.FC = () => (
  <div className="py-4 flex flex-col justify-center items-center">
    <p className="text-sm font-bold text-theme-white py-2">
      Made with &nbsp;❤️&nbsp;&nbsp; by&nbsp;
      <a
        className="text-theme-yellow hover:underline"
        href="https://abclinks.vercel.app"
      >
        uvacoder
      </a>
    </p>
    <p className="text-sm font-bold text-theme-white py-2">
      View the{" "}
      <a
        className="text-theme-yellow hover:underline"
        href="https://github.com/uvacoder/awesome-devtools"
      >
        Source on Github
      </a>
    </p>
    <p className="text-sm font-bold text-theme-white py-2">
      Copyright © 2022&nbsp;
      <a
        className="text-theme-yellow hover:underline"
        href="https://awesome-devtools.vercel.app"
      >
        awesome-devtools.vercel.app
      </a>
    </p>
  </div>
)

export default Footer
