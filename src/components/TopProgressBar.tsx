type ProgressBarProps = {
    progress : number,
}

const ProgressBar = ({ progress } : ProgressBarProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-green-500 z-101" style={{ width: `${progress}%` }}></div>
  );
};

export default ProgressBar;