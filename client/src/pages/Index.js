import React, { useState, useContext } from 'react';
import { Modal } from 'react-bootstrap';

import Dumgram from '../assets/svg/DumbGram.svg';
import DG from '../assets/svg/DG.svg';
import '../styles/index/index.css';
import Gambar1 from '../assets/img/gambar1.png';
import Gambar2 from '../assets/img/gambar2.png';
import Gambar3 from '../assets/img/gambar3.png';
import Gambar4 from '../assets/img/gambar4.png';
import Gambar5 from '../assets/img/gambar5.png';
import Gambar6 from '../assets/img/gambar6.png';
import Gambar7 from '../assets/img/gambar7.png';
import Gambar8 from '../assets/img/gambar8.png';
import FormLogin from '../components/index/FormLogin';
import FormRegister from '../components/index/FormRegister';

function Index() {
   // ============== Modal Login Controller====================
   const [show, setShow] = useState(false);

   const handleClose = () => setShow(false);
   const handleShow = () => setShow(true);
   // ==========================================================

   // ============== Modal Register Controller==================
   const [show2, setShow2] = useState(false);

   const handleClose2 = () => setShow2(false);
   const handleShow2 = () => setShow2(true);
   // ==========================================================
   const moveToRegister = () => {
      handleClose();
      handleShow2();
   };

   const moveToLogin = () => {
      handleClose2();
      handleShow();
   };
   return (
      <div className="container__">
         <div className="container-index">
            <div className="container-left">
               <div className="container-left-contents">
                  <div className="logo-container">
                     <img src={DG} alt="dumbGram" srcset="" />
                  </div>
               </div>
               <div className="text-container">
                  <h1>Share your best</h1>
                  <h1> photos or videos</h1>
               </div>
               <div className="text-container-2" style={{ color: '#6A6A6A' }}>
                  <p style={{ color: '#6A6A6A' }}>
                     Join now, share your creations with another
                  </p>
                  <p style={{ color: '#6A6A6A' }}>
                     people and enjoy other creations.
                  </p>
               </div>

               <div className="login-register-container clicked">
                  <div className=" login-button button-a " onClick={handleShow}>
                     <p>Login</p>
                  </div>
                  <div
                     className="register-button button-a "
                     onClick={handleShow2}
                  >
                     <p>Register</p>
                  </div>
               </div>
               {/* </div> */}
            </div>
            <div className="container-right">
               <div className="images-container">
                  <div className="images-container-first-slice">
                     <div className="images-container-first-slice-first-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar1}
                           alt="gambar1"
                        />
                     </div>
                     <div className="images-container-first-slice-second-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar4}
                           alt="gambar4"
                        />
                     </div>
                     <div className="images-container-first-slice-third-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar7}
                           alt="gambar7"
                        />
                     </div>
                  </div>
                  <div className="images-container-second-slice">
                     <div className="images-container-second-slice-first-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar2}
                           alt="gambar2"
                        />
                     </div>
                     <div className="images-container-second-slice-second-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar5}
                           alt="gambar5"
                        />
                     </div>
                  </div>
                  <div className="images-container-third-slice">
                     <div className="images-container-third-slice-first-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar3}
                           alt="gambar3"
                        />
                     </div>
                     <div className="images-container-third-slice-second-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar6}
                           alt="gambar6"
                        />
                     </div>
                     <div className="images-container-third-slice-third-image">
                        <img
                           style={{
                              objectFit: 'cover',
                              width: '100%',
                              height: '100%',
                           }}
                           src={Gambar8}
                           alt="gambar8"
                        />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <Modal
            // dialogClassName="modal-90w"
            show={show}
            onHide={handleClose}
            style={{ borderRadius: '5px' }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <>
               <FormLogin
                  handleClose={handleClose}
                  moveToRegister={moveToRegister}
               />
            </>
         </Modal>

         <Modal
            // size="sm"
            // dialogClassName="modal-90w"
            show={show2}
            onHide={handleClose2}
            style={{ borderRadius: '5px' }}
            aria-labelledby="contained-modal-title-vcenter"
            centered
         >
            <>
               <FormRegister
                  handleClose={handleClose2}
                  moveToLogin={moveToLogin}
               />
            </>
         </Modal>
      </div>
   );
}

export default Index;
