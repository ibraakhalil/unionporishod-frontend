const page = () => {
  const cards = [1, 2, 3, 4, 5];

  return (
    <div>
      <div className="flex flex-wrap items-center gap-5 p-4">
        {cards.map((card) => (
          <div className="h-[140px] w-[200px] rounded-lg bg-secondary-bg"></div>
        ))}
      </div>
    </div>
  );
};

export default page;
