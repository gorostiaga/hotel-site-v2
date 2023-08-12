import Footer from "./Footer";
import MainNav from "./MainNav";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout: React.FC<Props> = (props) => {
  return (
    <div>
      <MainNav />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
