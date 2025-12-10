const LoadingSpinner = () => {
  return (
    <div className="text-center py-8">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
      <p className="text-blue-600 text-lg">កំពុងទាញយកទិន្នន័យ...</p>
    </div>
  );
};

export default LoadingSpinner;