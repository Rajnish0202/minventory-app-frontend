import React from 'react';
import './Sidebar.scss';
import logo from '../../assets/logow.png';
import { HiMenuAlt3 } from 'react-icons/hi';
import menu from '../../data/sidebar';
import SidebarItem from './SidebarItem';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MetaData from '../MetaData';

const Sidebar = ({ children, title }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  const navigate = useNavigate();

  const goHome = () => {
    navigate('/');
  };

  return (
    <>
      <MetaData title={title} />
      <div className='layout'>
        <div className='sidebar' style={{ width: isOpen ? '230px' : '60px' }}>
          <div className='top_section'>
            <div
              className='logo'
              style={{ display: isOpen ? 'block' : 'none' }}
            >
              <img
                src={logo}
                alt='Logo'
                style={{
                  height: '45px',
                  objectFit: 'contain',
                  cursor: 'pointer',
                }}
                onClick={goHome}
              />
            </div>
            <div
              className='bars'
              style={{ marginLeft: isOpen ? '100px' : '0px' }}
            >
              <HiMenuAlt3 style={{ cursor: 'pointer' }} onClick={toggle} />
            </div>
          </div>
          {menu &&
            menu.map((item, index) => {
              return <SidebarItem key={index} item={item} isOpen={isOpen} />;
            })}
        </div>

        <main
          style={{
            paddingLeft: isOpen ? '230px' : '60px',
            transition: 'all 0.5s',
          }}
        >
          {children}
        </main>
      </div>
    </>
  );
};

export default Sidebar;
