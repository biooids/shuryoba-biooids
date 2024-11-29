import Image from "next/image";
import NavLink from "./NavLink";
import shuryoba_logo from "@/assets/logos/shuryoba-logo.png";
import biooid_logo from "@/assets/logos/biooid.jpg";

function MainHeader() {
  return (
    <header className="main_header flex p-3 items-center justify-between backdrop-blur-xl sticky top-0">
      <div>
        <Image
          src={shuryoba_logo}
          width={50}
          height={50}
          alt="shuryoba logo"
          className="rounded-xl"
        />
      </div>

      <nav>
        <ul className="flex gap-3 bg-white bg-opacity-5 p-3 rounded-xl ">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/lobby">Lobby</NavLink>
          <NavLink href="/scholar">Scholar</NavLink>
        </ul>
      </nav>

      <div>
        <Image
          src={biooid_logo}
          width={35}
          height={35}
          alt="biooid logo"
          className="rounded-full"
        />
      </div>
    </header>
  );
}
export default MainHeader;
