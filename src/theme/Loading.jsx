export const Loading = () => {
  return (
    <div className="flex space-x-4 justify-center items-center h-screen ">
      <span className="sr-only">Loading...</span>
      <div className="h-10 w-10 bg-orange-500 rounded-full animate-spin scale-75"></div>
      <div className="h-10 w-10 bg-white rounded-full animate-ping"></div>
      <div className="h-10 w-10 bg-green-500 rounded-full animate-pulse scale-75"></div>
    </div>
  );
};
