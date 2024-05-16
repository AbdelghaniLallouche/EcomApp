import { LogoIcon , EmailIcon , PhoneIcon , FacebookIcon , LinkedinIcon , TwitterIcon } from "../public/Svgs";
const Footer = () => {
  return (
    <div className="bg-[#474747] p-4 grid md:grid-cols-4 lil:grid-cols-2 grid-cols-1 gap-8 justify-evenly sm:justify-items-center  items-start">
      <LogoIcon />
      <div className="flex flex-col justify-start items-start gap-3">
        <h1 className="text-xl text-white font-semibold">Information</h1>
        <a href="#"><p className="text-sm text-white">notre group</p></a>
        <a href="#"><p className="text-sm text-white">a propos de nous</p></a>
      </div>
      <div className="flex flex-col justify-start items-start gap-3">
        <h1 className="text-xl text-white font-semibold">Contact Us</h1>

        <a href="#">
          <div className="flex flex-row justify-start items-center gap-1 ">
            <EmailIcon />
        <p className="text-sm text-white">ecommerce@gmail.com</p>
        </div>
        </a>
        <a href="#"><div className="flex flex-row justify-start items-center gap-1 ">
        <PhoneIcon />
        <p className="text-sm text-white">+213778460397</p>
      </div></a>
      </div>
        <div className="flex flex-col justify-start items-start gap-3">
            <h1 className="text-xl text-white font-semibold">Follow Us</h1>
            <a href=""><div className="flex flex-row justify-start items-center gap-1 ">
            <FacebookIcon />
            <p className="text-sm text-white">Facebook</p>
            </div>
            </a>
            <a href=""><div className="flex flex-row justify-start items-center gap-1 ">
            <LinkedinIcon />
            <p className="text-sm text-white">Linkedin</p>
            </div>
            </a>
            <a href=""><div className="flex flex-row justify-start items-center gap-1 ">
            <TwitterIcon />
            <p className="text-sm text-white">X</p>
            </div>
            </a>
            </div>

    </div>
  );
};

export default Footer;
