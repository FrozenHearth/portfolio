export function ResumeButton() {
  return (
    <a
      className="font-bold text-white dark:text-black bg-black dark:bg-white mt-4 md:mt-10 px-11 md:w-max w-full py-3 rounded-md 
flex items-center justify-center gap-3"
      href="https://drive.google.com/file/d/14JtqlU2Jy4WHBZ79RCWNfR-IzFtHhNEs/view?usp=sharing"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="w-5 h-5"
      >
        <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z" />
        <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z" />
      </svg>
      Resume
    </a>
  );
}

export function GithubButton() {
  return (
    <a
      className="font-bold text-black dark:text-white border-gray-600 
        border dark:hover:border-zinc-900 hover:border-white hover:bg-gradient-to-r from-sky-500 to-indigo-400 hover:text-white mt-4 md:mt-10 px-11 md:w-max w-full py-3 
        rounded-md flex items-center justify-center bg-transparent gap-3"
      href="https://github.com/FrozenHearth"
      rel="noopener noreferrer"
      target="_blank"
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_9914_10)">
          <path
            d="M12 0C5.374 0 0 5.373 0 12C0 17.302 3.438 21.8 8.207 23.387C8.806 23.498 9 23.126 9 22.81V20.576C5.662 21.302 4.967 19.16 4.967 19.16C4.421 17.773 3.634 17.404 3.634 17.404C2.545 16.659 3.717 16.675 3.717 16.675C4.922 16.759 5.556 17.912 5.556 17.912C6.626 19.746 8.363 19.216 9.048 18.909C9.155 18.134 9.466 17.604 9.81 17.305C7.145 17 4.343 15.971 4.343 11.374C4.343 10.063 4.812 8.993 5.579 8.153C5.455 7.85 5.044 6.629 5.696 4.977C5.696 4.977 6.704 4.655 8.997 6.207C9.954 5.941 10.98 5.808 12 5.803C13.02 5.808 14.047 5.941 15.006 6.207C17.297 4.655 18.303 4.977 18.303 4.977C18.956 6.63 18.545 7.851 18.421 8.153C19.191 8.993 19.656 10.064 19.656 11.374C19.656 15.983 16.849 16.998 14.177 17.295C14.607 17.667 15 18.397 15 19.517V22.81C15 23.129 15.192 23.504 15.801 23.386C20.566 21.797 24 17.3 24 12C24 5.373 18.627 0 12 0Z"
            fill="currentColor"
          ></path>
        </g>
        <defs>
          <clipPath id="clip0_9914_10">
            <rect width="24" height="24" fill="white"></rect>
          </clipPath>
        </defs>
      </svg>
      GitHub
    </a>
  );
}
