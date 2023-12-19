import img from "../../assets/img/about.png";
const About = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:px-28 md:py-10 px-12 py-14 md:h-screen h-auto">
      <div className="">
        <img src={img} alt="" className="w-[700] bg-[rgba(40,93,122,0.6)]" />
      </div>
      <div className="md:mr-20">
        <h2 className="text-4xl text-center md:text-left md:text-6xl text-[#FFD700] font-bold font-helvetica mt-10 md:mt-0">
          About me
        </h2>
        <div className="text-white space-y-6 mt-20">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus est earum, id animi similique, deserunt laudantium
            quasi amet vitae atque asperiores nemo nihil architecto totam, rem
            quas? Alias, quibusdam a?
          </p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            nesciunt suscipit sed dolores officia quo?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
            sequi excepturi placeat doloribus rem nulla quas perferendis dolor
            possimus sed?
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
