import React, {useState, useEffect} from "react";
import { useLocation } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import { useMedia } from 'react-use';
import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
import { MobileMenu } from "components/MobileMenu/MobileMenu";
import { IconButton } from "components/IconButton/IconButton";
import { ReactComponent as IconMenu } from "images/icon-menu.svg";
import { Modal } from "components/Modal/Modal";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

export const Layout = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isMobile = useMedia('(max-width: 767px)');
  const location = useLocation();

  useEffect(() => {
    closeMobileMenu();
  }, [location.pathname]);

  const openMobileMenu = () => {
    setIsModalOpen(true);
  };

  const closeMobileMenu = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div style={{ flexGrow: 1 }}>

        <Container>
          {isMobile ? (
            <IconButton
              type="button"
              onClick={openMobileMenu}>
              <IconMenu width="32" height="32" />
            </IconButton>
          ) : (
            <Header />
          )}

          {isModalOpen && isMobile &&
            <Modal closeModal={closeMobileMenu}>
              <MobileMenu
                closeMenu={closeMobileMenu} />
            </Modal>}

        </Container>

        <main>
          <Container>
            <Outlet />
          </Container>
        </main>

      </div>

      <Footer />
    </>
  );
};
