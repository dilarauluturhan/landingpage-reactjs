function Content() {
  return (
    <div>
      <div className="flex flex-col items-start justify-center mt-32">
        <h1 className="font-unbounded text-6xl font-semibold tracking-wider mb-6">
          the fun world <br />
          of cats
        </h1>
        <p className="text-lg w-[700px] font-light text-black">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis
          distinctio suscipit expedita voluptates, minima officiis voluptatem
          cumque dolorem eos quidem asperiores, necessitatibus itaque, eligendi
          voluptas aliquid ut error accusantium consequuntur.
          <br /> Reiciendis harum, saepe eos hic reprehenderit, vero voluptatum
          architecto eum nisi repudiandae temporibus labore quam dolore
          accusantium laudantium eaque nobis nam enim necessitatibus odio ullam
          consectetur voluptatibus?
        </p>
        <button className="px-11 py-4 mt-10 border-none rounded-lg tracking-widest bg-buttonColor text-white text-lg font-base hover:bg-sideColor">
          Explore
        </button>
      </div>
    </div>
  );
}

export default Content;
