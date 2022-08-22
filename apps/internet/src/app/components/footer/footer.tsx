import { Footer } from "flowbite-react";
import React from "react";

export const InternetFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Footer container={true}>
      <Footer.Copyright
        href="#"
        by="Internet Speed"
        year={currentYear}
      />
      <Footer.LinkGroup>
        <Footer.Link href="https://github.com/fstani/internet-speed" target={'_blank'}>
          About
        </Footer.Link>
        <Footer.Link href="#">
          Privacy Policy
        </Footer.Link>
        <Footer.Link href="https://github.com/fstani/internet-speed/blob/main/LICENSE" target={'_blank'}>
          Licensing
        </Footer.Link>
      </Footer.LinkGroup>
    </Footer>
  )
}

export default InternetFooter
