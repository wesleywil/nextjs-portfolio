import Footer from "../footer/footer.component";
import Header from "../header/header.component";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col justify-between overflow-hidden dot_pattern">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
