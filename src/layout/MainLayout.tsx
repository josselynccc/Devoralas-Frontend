import Footer from "../components/Footer";
import Header from "../components/Header";
import TopBar from "../components/TopBar";
import { Outlet } from "react-router";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
