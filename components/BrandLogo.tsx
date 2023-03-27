type BrandLogoProps = {
  height: string;
  width: string;
};

export default function BrandLogo({ height, width }: BrandLogoProps) {
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 2048.0 2048.0"
    >
      <g id="document" transform="matrix(1,0,0,1,1024.0,1024.0)">
        <path
          d="M-387.764,-3.36483e-06 L-602.654,-321.933 L-282.042,-804.056 L280.837,-804.056 L602.654,-321.933 L389.374,-9.10976e-06 L602.654,321.933 L280.837,804.056 L-282.042,804.056 L-602.654,321.933 L-387.764,-3.36483e-06 Z M-256.72,-160.19 L-224.289,-160.19 L-107.272,-326.754 L-232.624,-518.398 L-362.798,-321.933 L-256.72,-160.19 L-256.72,-160.19 Z M-94.2127,-1.70683e-05 L121.736,326.754 L-56.6495,606.385 L175.975,606.386 L361.592,321.933 L160.306,0.115521 L160.395,1.05949e-05 L160.306,-0.115515 L361.592,-321.933 L175.975,-606.386 L-56.6495,-606.386 L121.736,-326.754 L-94.2127,-1.70683e-05 L-94.2127,-1.70683e-05 Z M-224.289,160.19 L-256.72,160.19 L-362.798,321.933 L-232.624,518.398 L-107.272,326.754 L-224.289,160.19 L-224.289,160.19 Z "
          fill="#38bdf8"
          fillOpacity="1.00"
        />
      </g>
    </svg>
  );
}