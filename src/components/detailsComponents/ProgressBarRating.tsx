import { ProgressBarRatingProps } from "../../types";


const ProgressBarRating: React.FC<ProgressBarRatingProps> = ({ rating }) => {
  const fillAmountPercentage = (rating / 5) * 100;
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="140"
        height="7"
        viewBox="0 0 140 7"
        fill="none"
      >
        <g clip-path="url(#clip0_104_3400)">
          <rect y="0.32959" width="140" height="6" rx="3" fill="#F4F5F7" />
          <rect
            y="0.32959"
            width={fillAmountPercentage}
            height="6"
            fill="#00BA74"
          />
        </g>
        <defs>
          <clipPath id="clip0_104_3400">
            <rect y="0.32959" width="140" height="6" rx="3" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default ProgressBarRating;
