import Container from "../Container";
import type {
  TFooter,
  TFooterName,
  Tsocials,
  TPlatform,
} from "../../data/data";
import { Link } from "react-router";

interface FooterProps {
  footerContent: TFooter<TFooterName, Tsocials, TPlatform>[];
}

const Footer: React.FC<FooterProps> = ({ footerContent }) => {
  return (
    <footer className="realtive bottom-0 right-0 left-0 block bg-black text-primaryCol">
      <Container className="relative">
        <div className="">
          <ul className="flex justify-center items-start gap-24 py-20">
            {footerContent.map((item, index) => (
              <ul className="flex flex-col justify-center items-start">
                <h2
                  className={`text-[20px] font-bold ${
                    index == 0
                      ? "pb-5"
                      : index == footerContent.length - 1
                      ? "pb-5"
                      : ""
                  }`}
                >
                  {item.title}
                </h2>
                <h3 className="text-[20px] font-medium leading-7">
                  {item.subtitle}
                </h3>
                <p className="text-white/70 leading-3 font-medium text-xs">
                  {item.downloadText}
                </p>
                {item.text && (
                  <ul className="flex mt-6 justify-center items-start flex-col max-w-[180px] gap-4 text-Header-16px font-regular leading-6">
                    {Array.isArray(item.text.name) ? (
                      item.text.name.map((text) => <Link to="/">{text}</Link>)
                    ) : (
                      <li className="w-[200px] block">{item.text.name}</li>
                    )}
                  </ul>
                )}

                {item.icon && (
                  <div className="flex mt-4 justify-center group... items-center gap-8 border-[1px] py-3 px-4 border-white rounded-sm focus-visible:border-lightRed">
                    <input
                      type="text"
                      className="w-full placeholder:text-white/50 focus-visible:border-b-[1px] focus-visible:border-lightRed focus-visible:outline-0"
                      placeholder="Enter your email"
                    />
                    <img src={item.icon} alt="" />
                  </div>
                )}
                {item.Quar && item.PlatformDownload && (
                  <div className="flex justify-center items-center mt-3 mb-[26px]">
                    <img src={item.Quar} alt="" />
                    <div className="flex pl-3 justify-center items-center flex-col gap-2">
                      {item.PlatformDownload.map((platform) => (
                        <Link to={platform.path}>
                          <img src={platform.icon} alt="" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
                <ul className="flex justify-center items-center gap-[26px]">
                  {item.socials &&
                    item.socials.map((social) => (
                      <li key={social.id}>
                        <Link to={social.path}>
                          <img src={social.icon} alt="" />
                        </Link>
                      </li>
                    ))}
                </ul>
              </ul>
            ))}
          </ul>
        </div>
      </Container>
      <p className="text-center text-Header-16px leading-6 text-white/20 pt-4 pb-6 border-t-[0.5px] border-white/20">
        &copy; Copyright Rimel 2022. All right reserved
      </p>
    </footer>
  );
};

export default Footer;
