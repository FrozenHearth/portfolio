export default function ActionButtons() {
  return (
    <>
      <a
        className="text-white font-semibold h-12 px-6 rounded-lg w-full 
flex items-center justify-center 
sm:w-auto bg-green-600 hover:bg-green-500 gap-3"
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

      <a
        className="text-white font-semibold h-12 px-6 rounded-lg w-full 
flex items-center justify-center 
sm:w-auto bg-blue-800 hover:bg-blue-700 gap-3"
        href="https://linkedin.com/in/vishwanath-bhetanabhotla"
        rel="noopener noreferrer"
        target="_blank"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <g clipPath="url(#clip0_9914_10)">
            <path
              fill="currentColor"
              d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
            />
          </g>
          <defs>
            <clipPath id="clip0_9914_10">
              <rect width="24" height="24" fill="white"></rect>
            </clipPath>
          </defs>
        </svg>
        LinkedIn
      </a>
    </>
  );
}
