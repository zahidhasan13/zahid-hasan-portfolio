import {
  DiCss3,
  DiFirebase,
  DiHtml5,
  DiJavascript1,
  DiMongodb,
  DiNodejsSmall,
  DiReact,
} from "react-icons/di";
const Skills = () => {
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 md:px-28 md:py-16 md:mt-28 py-16 px-10">
      <div className="md:mr-20">
        <h2 className="text-4xl md:text-6xl text-[#FFD700] font-bold font-helvetica">
          Skills
        </h2>
        <div className="text-white space-y-6 md:mt-20 mt-10">
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
      <div className="grid grid-cols-3 gap-4 md:ml-20 mt-10 md:mt-0">
        <DiHtml5 className="text-blue-700 text-9xl" title="HTML5"></DiHtml5>
        <DiCss3 className="text-blue-600 text-9xl" title="CSS3"></DiCss3>
        <DiJavascript1
          className="text-yellow-400 text-9xl"
          title="JavaScript"
        ></DiJavascript1>
        <DiReact className="text-blue-400 text-9xl" title="React"></DiReact>
        <DiNodejsSmall
          className="text-green-400 text-9xl"
          title="Node js"
        ></DiNodejsSmall>
        <DiFirebase
          className="text-yellow-400 text-9xl"
          title="Firebase"
        ></DiFirebase>
        <DiMongodb
          className="text-green-400 text-9xl"
          title="MongoDB"
        ></DiMongodb>
      </div>
    </div>
  );
};

export default Skills;
