import Image from "next/image";
import Logo from "../../public/assets/Logo.svg";
import Profile from "../../public/assets/User.svg";
import Menu from "../../public/assets/Menu.svg";

const navLinks = [
  { name: "Features" },
  { name: "Pricing" },
  { name: "Enterprise" },
  { name: "Features" },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
      <div className="flex items-center">
        <Image src={Logo} alt="Logo" />

        <div className="hidden pl-[74px] gap-x-[56px] lg:flex">
          {navLinks.map((item, index) => (
            <p className="font-medium text-[#36485C]" key={index}>
              {item.name}
            </p>
          ))}
        </div>
      </div>

      <div className="flex gap-x-5">
        <p className="hidden lg:block font-medium text-[#36485C] pr-[56px]">
          Open an Account
        </p>

        <div className="flex items-center gap-x-2">
        <Image src={Profile} alt="Profile" />
        <span className="font-medium text-[#36485C] hidden lg:block">
          Sign In
        </span>
        </div>

        <Image src={Menu} alt="Menu" className="lg:hidden" />
      </div>
    </nav>
  );
};

export default Navbar;
