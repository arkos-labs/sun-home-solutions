import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import StickyCTA from "./StickyCTA";
import ChatWidget from "./ChatWidget";
import CookieBanner from "./CookieBanner";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 pb-16 lg:pb-0">{children}</main>
      <Footer />
      <StickyCTA />
      <ChatWidget />
      <CookieBanner />
    </div>
  );
};

export default Layout;
