const Loading = () => {
  return (
    <aside className="w-screen bg-zinc-500 h-screen fixed top-0 right-0 flex items-center justify-center">
      <div className="rounded-xl w-44 h-44 bg-white flex flex-col gap-4 items-center justify-center">
        <span className="w-8 h-8 block rounded-full border-4 border-orange-500 border-l-orange-200 border-l-transparent animate-spin"></span>
        <p>صبر کنید</p>
      </div>
    </aside>
  );
};

export default Loading;
