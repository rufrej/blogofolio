import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { Container } from "./Container";
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div>
      <Header />
      <Container>
        <Main>
          <Outlet />
        </Main>
      </Container>
      <Toaster position="top-center" reverseOrder={false} />
      <Footer />
    </div>
  );
}
