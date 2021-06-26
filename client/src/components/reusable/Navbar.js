import React from 'react';
import '../../styles/navbar/navbar.css';
import DumbGramIncon from '../../assets/svg/DumbGramIconNavbar.svg';
import BellIcon from '../../assets/svg/bell-icon.svg';
import MessageIcon from '../../assets/svg/message-icon.svg';
import PP from '../../assets/img/ppchat.png';
import { Link } from 'react-router-dom';

import Dropdown from 'react-bootstrap/Dropdown';
function Navbar() {
   return (
      <div className="navbar-container container__2">
         <div className="navbar-contents">
            <div className="navbar-content-left-side">
               <div className="icon-container-couter clicked">
                  <Link to={'/feed'}>
                     <div className="icon-container">
                        <img
                           className="image-size-100"
                           src={DumbGramIncon}
                           alt="DumbGramIcon"
                           srcset=""
                        />
                     </div>
                  </Link>
               </div>
            </div>
            <div className="navbar-content-right-side">
               <div className="navbar-content-right-side-on-left">
                  <div className="input-search-container">
                     <input
                        className="form-size-100 form-design"
                        style={{ fontSize: '1.5rem', border: 'none' }}
                        type="text"
                        placeholder="Search"
                        name="search-input"
                        id=""
                     />
                  </div>
               </div>
               <div className="navbar-content-right-side-on-right">
                  <Dropdown style={{ backgroundColor: '#0b0b0b' }}>
                     <Dropdown.Toggle
                        className="outline btn-dropdown remove-focus"
                        style={{
                           backgroundColor: '#0b0b0b',
                           border: 'none',
                           outline: 'none !important',
                        }}
                        id="dropdown-basic"
                     >
                        <div className="icon-container-right clicked button-a">
                           {' '}
                           <img
                              className="image-size-100"
                              src={BellIcon}
                              alt=""
                              srcset=""
                           />{' '}
                           <span
                              style={{
                                 width: '1rem',
                                 height: '1rem',
                                 backgroundColor: 'red',
                                 borderRadius: '30%',
                                 padding: '0.2rem',
                              }}
                           >
                              *
                           </span>
                        </div>
                     </Dropdown.Toggle>
                     <Dropdown.Menu
                        style={{
                           backgroundColor: '#0b0b0b',
                           width: '30rem',
                           height: '30rem',
                           overflowY: 'auto',
                        }}
                     >
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.5rem',
                           }}
                        >
                           <div className="dropdown-item">
                              <div className="dropdown-item-photo-name">
                                 <div
                                    className="dropdown-item-photo-container bg-image-pp-colorfull"
                                    style={{
                                       width: '4rem',
                                       height: '4rem',
                                    }}
                                 >
                                    <img
                                       src={PP}
                                       className="image-size-100"
                                       alt=""
                                       srcset=""
                                    />
                                 </div>

                                 <div
                                    className="dropdown-name-container"
                                    style={{
                                       width: '3rem',
                                       height: '3rem',
                                       color: 'white',
                                    }}
                                 >
                                    <p>abdul_h</p>
                                 </div>
                              </div>
                              <div
                                 style={{ paddingLeft: '5rem' }}
                                 className="dropdown-item-text"
                              >
                                 <p style={{ color: 'white' }}>
                                    Komentar:{' '}
                                    <span style={{ color: '#5c5c5c' }}>
                                       Nice Place
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.5rem',
                           }}
                        >
                           <div className="dropdown-item">
                              <div className="dropdown-item-photo-name">
                                 <div
                                    className="dropdown-item-photo-container bg-image-pp-colorfull"
                                    style={{
                                       width: '4rem',
                                       height: '4rem',
                                    }}
                                 >
                                    <img
                                       src={PP}
                                       className="image-size-100"
                                       alt=""
                                       srcset=""
                                    />
                                 </div>

                                 <div
                                    className="dropdown-name-container"
                                    style={{
                                       width: '3rem',
                                       height: '3rem',
                                       color: 'white',
                                    }}
                                 >
                                    <p>abdul_h</p>
                                 </div>
                              </div>
                              <div
                                 style={{ paddingLeft: '5rem' }}
                                 className="dropdown-item-text"
                              >
                                 <p style={{ color: 'white' }}>
                                    Komentar:{' '}
                                    <span style={{ color: '#5c5c5c' }}>
                                       Nice Place
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.5rem',
                           }}
                        >
                           <div className="dropdown-item">
                              <div className="dropdown-item-photo-name">
                                 <div
                                    className="dropdown-item-photo-container bg-image-pp-colorfull"
                                    style={{
                                       width: '4rem',
                                       height: '4rem',
                                    }}
                                 >
                                    <img
                                       src={PP}
                                       className="image-size-100"
                                       alt=""
                                       srcset=""
                                    />
                                 </div>

                                 <div
                                    className="dropdown-name-container"
                                    style={{
                                       width: '3rem',
                                       height: '3rem',
                                       color: 'white',
                                    }}
                                 >
                                    <p>abdul_h</p>
                                 </div>
                              </div>
                              <div
                                 style={{ paddingLeft: '5rem' }}
                                 className="dropdown-item-text"
                              >
                                 <p style={{ color: 'white' }}>
                                    Komentar:{' '}
                                    <span style={{ color: '#5c5c5c' }}>
                                       Nice Place
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.5rem',
                           }}
                        >
                           <div className="dropdown-item">
                              <div className="dropdown-item-photo-name">
                                 <div
                                    className="dropdown-item-photo-container bg-image-pp-colorfull"
                                    style={{
                                       width: '4rem',
                                       height: '4rem',
                                    }}
                                 >
                                    <img
                                       src={PP}
                                       className="image-size-100"
                                       alt=""
                                       srcset=""
                                    />
                                 </div>

                                 <div
                                    className="dropdown-name-container"
                                    style={{
                                       width: '3rem',
                                       height: '3rem',
                                       color: 'white',
                                    }}
                                 >
                                    <p>abdul_h</p>
                                 </div>
                              </div>
                              <div
                                 style={{ paddingLeft: '5rem' }}
                                 className="dropdown-item-text"
                              >
                                 <p style={{ color: 'white' }}>
                                    Komentar:{' '}
                                    <span style={{ color: '#5c5c5c' }}>
                                       Nice Place
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.5rem',
                           }}
                        >
                           <div className="dropdown-item">
                              <div className="dropdown-item-photo-name">
                                 <div
                                    className="dropdown-item-photo-container bg-image-pp-colorfull"
                                    style={{
                                       width: '4rem',
                                       height: '4rem',
                                    }}
                                 >
                                    <img
                                       src={PP}
                                       className="image-size-100"
                                       alt=""
                                       srcset=""
                                    />
                                 </div>

                                 <div
                                    className="dropdown-name-container"
                                    style={{
                                       width: '3rem',
                                       height: '3rem',
                                       color: 'white',
                                    }}
                                 >
                                    <p>abdul_h</p>
                                 </div>
                              </div>
                              <div
                                 style={{ paddingLeft: '5rem' }}
                                 className="dropdown-item-text"
                              >
                                 <p style={{ color: 'white' }}>
                                    Komentar:{' '}
                                    <span style={{ color: '#5c5c5c' }}>
                                       Nice Place
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.5rem',
                           }}
                        >
                           <div className="dropdown-item">
                              <div className="dropdown-item-photo-name">
                                 <div
                                    className="dropdown-item-photo-container bg-image-pp-colorfull"
                                    style={{
                                       width: '4rem',
                                       height: '4rem',
                                    }}
                                 >
                                    <img
                                       src={PP}
                                       className="image-size-100"
                                       alt=""
                                       srcset=""
                                    />
                                 </div>

                                 <div
                                    className="dropdown-name-container"
                                    style={{
                                       width: '3rem',
                                       height: '3rem',
                                       color: 'white',
                                    }}
                                 >
                                    <p>abdul_h</p>
                                 </div>
                              </div>
                              <div
                                 style={{ paddingLeft: '5rem' }}
                                 className="dropdown-item-text"
                              >
                                 <p style={{ color: 'white' }}>
                                    Komentar:{' '}
                                    <span style={{ color: '#5c5c5c' }}>
                                       Nice Place
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </Dropdown.Item>
                        <Dropdown.Item
                           href="#/action-1"
                           style={{
                              color: 'white',
                              fontSize: '1.5rem',
                           }}
                        >
                           <div className="dropdown-item">
                              <div className="dropdown-item-photo-name">
                                 <div
                                    className="dropdown-item-photo-container bg-image-pp-colorfull"
                                    style={{
                                       width: '4rem',
                                       height: '4rem',
                                    }}
                                 >
                                    <img
                                       src={PP}
                                       className="image-size-100"
                                       alt=""
                                       srcset=""
                                    />
                                 </div>

                                 <div
                                    className="dropdown-name-container"
                                    style={{
                                       width: '3rem',
                                       height: '3rem',
                                       color: 'white',
                                    }}
                                 >
                                    <p>abdul_h</p>
                                 </div>
                              </div>
                              <div
                                 style={{ paddingLeft: '5rem' }}
                                 className="dropdown-item-text"
                              >
                                 <p style={{ color: 'white' }}>
                                    Komentar:{' '}
                                    <span style={{ color: '#5c5c5c' }}>
                                       Nice Place
                                    </span>
                                 </p>
                              </div>
                           </div>
                        </Dropdown.Item>
                     </Dropdown.Menu>
                  </Dropdown>

                  <div className="icon-container-right clicked button-a">
                     <Link to={'/message'}>
                        <img
                           className="image-size-100"
                           src={MessageIcon}
                           alt=""
                           srcset=""
                        />
                     </Link>
                  </div>
                  <Link to={'/create-post'}>
                     <div className="create-post-container-right clicked button-a">
                        <div className="create-post-container-right-plus-icon">
                           <p>+</p>
                        </div>

                        <div className="create-post-container-right-text">
                           Create Post
                        </div>
                     </div>
                  </Link>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Navbar;
