import logo from "../../../images/icons/logo.svg";
import { Link, NavLink } from "react-router";
import Container from "../Container";
import search from "../../../images/icons/search.svg";
import { HeaderOptions } from "../../data/data";
import type { THeader } from "../../data/data";

interface IHeader {
  NavBarItems: THeader[];
}

const Header: React.FC<IHeader> = ({ NavBarItems }) => {
  return (
    <header className="block relative pb-4 border-b-[1px] border-alterCol/20">
      <div className="bg-black relative w-full h-auto py-3 mb-10 text-primaryCol ">
        <Container isFlexCenter={true} isRow={true}>
          <div className="flex justify-between items-center grow-2">
            <p className="text-center block pr-1">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <a href="" className="underline font-bold">
                {" "}
                ShopNow
              </a>
            </p>
          </div>
          <div className="flex justify-end items-center">
            <button>English</button>
          </div>
        </Container>
      </div>
      <Container isBlock={false}>
        <div className="flex justify-between items-center py-2 border-2">
          <Link to={"/"}>
            <img src={logo} alt="logo" />
          </Link>
          <ul className="flex justify-center items-center gap-12">
            {NavBarItems.map((item) => (
              <NavLink
                to={item.path}
                key={item.id}
                className={({ isActive }) =>
                  isActive
                    ? `font-bold relative text-header-16px after:absolute after:w-full after:h-[1px] after:bg-alterCol/30 after:bottom-[0px] after:left-0 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100`
                    : `font-regular relative text-header-16px after:absolute after:w-full after:h-[1px] after:bg-alterCol/30 after:bottom-[0px] after:left-0 after:opacity-0 after:transition-all after:duration-300 after:ease-in-out hover:after:opacity-100`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </ul>
          <div className="block rounded-md bg-gray-100 py-2 pl-[20px] pr-3">
            <div className="flex justify-center items-center gap-2">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="What are you looking for?"
              />
              <img src={search} alt="" />
            </div>
          </div>
          <ul className="flex justify-center items-center gap-4">
            {HeaderOptions.map((item) => (
              <button type="button" key={item.id}>
                <img src={item.icon} alt="" />
              </button>
            ))}
          </ul>
        </div>
      </Container>
    </header>
  );
};

export default Header;
