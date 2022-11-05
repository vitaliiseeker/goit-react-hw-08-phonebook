import React, { useState, Suspense } from "react";
import { Outlet } from 'react-router-dom';
import { useMedia } from 'react-use';
import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Button } from "components/Button/Button";
import { Footer } from "components/Footer/Footer";
import { Loader } from "components/Loader/Loader";
import { MobileMenu } from "components/MobileMenu/MobileMenu";

export const Layout = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMedia('(max-width: 767px)');

  const openMobileMenu = () => {
    setIsModalOpen(true);
  };
  const closeMobileMenu = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ flexGrow: 1 }}>
        
        {isMobile ? (
          <Button
            type="button"
            children="MENU"
            onClick={openMobileMenu}
          />
        ) : (
          <Header />
        )}

        {isModalOpen && isMobile &&
          <MobileMenu
            closeMenu={closeMobileMenu}
          />}

        <main>
          <Container>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </Container>
        </main>
        
      </div>

      <Footer />
    </>
  );
};
