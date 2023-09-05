import img from '../../assets/img/about.png'
const About = () => {
    return (
        <div className='grid grid-cols-2 px-28 py-16 mt-28'>
            <div className='ml-20'>
            <img src={img} alt="" className='w-[700] absolute top-20'/>
           </div>
           <div className="mr-20">
           <h2 className="text-6xl text-[#FFD700] font-bold font-helvetica">About me</h2>
            <div className="text-white space-y-6 mt-20">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus est earum, id animi similique, deserunt laudantium quasi amet vitae atque asperiores nemo nihil architecto totam, rem quas? Alias, quibusdam a?</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum nesciunt suscipit sed dolores officia quo?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sequi excepturi placeat doloribus rem nulla quas perferendis dolor possimus sed?</p>
            </div>
           </div>
        </div>
    );
};

export default About;