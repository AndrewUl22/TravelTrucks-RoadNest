export function CamperIcon() {
  return (
    <svg
      width="20"
      height="14"
      viewBox="0 0 20 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Корпус */}
      <rect
        x="1"
        y="3"
        width="12"
        height="6"
        rx="1.5"
        stroke="black"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Кабина */}
      <rect
        x="13"
        y="4"
        width="6"
        height="5"
        rx="1.5"
        stroke="black"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Окно */}
      <rect
        x="14.5"
        y="5"
        width="3"
        height="2"
        rx="0.75"
        stroke="black"
        strokeWidth="0.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Колёса */}
      <circle
        cx="6"
        cy="10.5"
        r="1.5"
        stroke="black"
        strokeWidth="0.75"
      />
      <circle
        cx="14"
        cy="10.5"
        r="1.5"
        stroke="black"
        strokeWidth="0.75"
      />

      {/* Дорога */}
      <line
        x1="1"
        y1="12.5"
        x2="19"
        y2="12.5"
        stroke="black"
        strokeWidth="0.75"
        strokeLinecap="round"
      />
    </svg>
  );
}
