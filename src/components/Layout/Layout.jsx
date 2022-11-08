import {React} from "react";
import { Outlet } from 'react-router-dom';
import { useSelector } from "react-redux";
// import { useMedia } from 'react-use';
import { selectAuthError } from 'redux/auth/authSelectors';
// import { selectIsLoggedIn, selectAuthError } from 'redux/auth/authSelectors';
import { Container } from "components/Container/Container";
import { Header } from "components/Header/Header";
import { Footer } from "components/Footer/Footer";
// import { MobileMenu } from "components/MobileMenu/MobileMenu";
// import { IconButton } from "components/IconButton/IconButton";
// import { ReactComponent as IconMenu } from "images/icon-menu.svg";
// import { Modal } from "components/Modal/Modal";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
Notify.init({ position: 'right-top', width: '300px', fontSize: '20px' });

export const Layout = () => {

  // const [isModalOpen, setIsModalOpen] = useState(false);
  // const isMobile = useMedia('(max-width: 767px)');
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const authError = useSelector(selectAuthError);

  if(authError) {
    // Notify.failure(`Authentication failed, please try authenticating again.`);
  }
  // const openMobileMenu = () => {
  //   setIsModalOpen(true);
  // };

  // const closeMobileMenu = () => {
  //   setIsModalOpen(false);
  // };

  return (
    <>
      <div style={{ flexGrow: 1 }}>

        <Container>
          {/*{isMobile ? (
            <IconButton
              type="button"
              onClick={openMobileMenu}>
              <IconMenu width="32" height="32" />
            </IconButton>
          ) : (
            <Header />
          )} */}

            <Header />
          {/* {isModalOpen && isMobile &&
            <Modal>
              <MobileMenu
                closeMenu={closeMobileMenu} />
            </Modal>} */}

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
