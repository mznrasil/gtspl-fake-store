import { Navbar } from "@/components/common/Navbar";
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer } from "@/components/common/Footer";

function App() {
  return (
    <div className="font-poppins text-base font-normal container px-2 sm:px-4 md:px-6 lg:px-8 grid grid-rows-[auto_1fr_auto] min-h-screen">
      <Navbar />
      <main className="mb-20 lg:mb-0 max-w-[100dvw] overflow-hidden">
        <Outlet />
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
}

export default App;
