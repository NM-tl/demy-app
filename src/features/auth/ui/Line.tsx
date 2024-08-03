import { FC } from "react";

interface LinesProps {
  counter: number;
  status: 'approve' | 'decline';
}

const Lines: FC<LinesProps> = ({ counter, status }) => {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: counter }).map((_, index) => (
        <span key={index} className="h-1 w-16 rounded-full bg-[#d1d7dc]"></span>
      ))}
    </div>
  )
}

export default Lines;