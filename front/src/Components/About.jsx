import { HistoryIcon  , MissionIcon , VisionIcon} from "../public/Svgs";

const About = () => {
  const about = [
    {
      title: "Mission",
      icon: <MissionIcon/>,
      desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      title: "Vision",
      icon: <VisionIcon/>,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
    {
      title: "History",
      icon: <HistoryIcon/>,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptates.",
    },
  ];
  return (
    <div className="mx-4 mt-4 p-4  flex flex-col justify-start items-center lil:items-start">
      <div className="flex flex-col lil:flex-row justify-between lil:gap-20 gap-10 items-center">
        <h1 className="text-2xl text-center font-bold w-full ">
          Costum Forniture Built Only for You
        </h1>
        <p className="text-sm ">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius atque
          amet dignissimos sint odit voluptate molestias quo in fugiat.
          Obcaecati libero soluta dolores asperiores veniam at accusantium neque
          sequi mollitia minus. Beatae eius excepturi molestiae voluptas fuga
        </p>
      </div>
      <div className="flex flex-col sm:flex-row justify-evenly w-full gap-5 mt-10 items-center">
        {about.map((item) => (
          <div className="flex flex-col rounded-sm p-4 h-72 w-78 bg-[#474747] justify-evenly items-center">
            <div className="flex flex-col items-center">
              <div className=" w-12 h-12 flex flex-row justify-center items-center rounded-full ">
                {item.icon}
              </div>
              <h1 className="text-xl font-bold mt-1 text-white">{item.title}</h1>
            </div>
            <p className="text-sm text-white">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;