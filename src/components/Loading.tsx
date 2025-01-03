const Loading = () => {
  return (
    <div className="flex justify-center items-center bg-gray-100 absolute top-0 bottom-0 right-0 left-0">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
    </div>
  );
};

export default Loading;
