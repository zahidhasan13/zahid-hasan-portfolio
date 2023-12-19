import pj1 from "../../assets/img/project-1.png";
const Projects = () => {
  return (
    <div className="md:px-28 md:py-10 py-16 px-10 h-auto">
      <h2 className="text-4xl text-center md:text-6xl text-[#FFD700] font-bold font-helvetica">
        My Project
      </h2>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10 md:gap-20 mt-10">
        {/* <a
        href="https://the-dragon-news-client-d2bff.web.app/categories/0"
        target="_blank"
        rel="noreferrer"
      >
        Dragon Newspaper
      </a> */}

        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src={pj1}
              alt="Dragon Newspaper"
              className="h-[220px] w-full"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Dragon Newspaper</h2>
            <p>Online English Newspaper</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-xl">
          <figure>
            <img
              src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Visit Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
