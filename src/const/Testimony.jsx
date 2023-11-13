const TestimonyCards = ({ content, imageSrc, name, company }) => {
  return (
    <div className="items-start self-stretch border bg-white flex w-[286px] flex-col px-5 border-solid border-slate-200">
      <div className="items-start self-stretch flex flex-col w-full mx-1 my-6">
        <div className="self-stretch text-zinc-700 text-sm leading-5 w-full">
          {content.substring(0, 150)}..
        </div>
        <div className="items-start self-stretch bg-stone-50 flex w-full justify-between gap-2 mt-14 px-4 py-6">
          <img
            loading="lazy"
            src={imageSrc}
            className="aspect-square object-cover object-center w-[60px] justify-center items-center overflow-hidden shrink-0"
          />
          <div className="items-start self-center flex flex-col w-[138px] my-auto">
            <div className="self-stretch text-zinc-900 text-xl font-bold leading-8">
              {name}
            </div>
            <div className="self-stretch text-zinc-700 text-sm leading-4 w-full mt-1">
              {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonyCards;
