import { Footer } from "flowbite-react";
import logo_url from "./../../../public/logo3.png";

const FooterComponent = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Footer container className="bg-light_bg shadow-none">
        <div className="w-full text-center">
          <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
            <Footer.Brand href="/" src={logo_url} alt="Logo" />
            <Footer.LinkGroup>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Contact</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <Footer.Divider />
          <Footer.Copyright href="#" by="CareCoord™" year={2023} />
        </div>
      </Footer>
    </div>
  );
};

export default FooterComponent;
