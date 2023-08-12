import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='py-6 mx-auto w-full bg-slate-900'>
            <div className='grid grid-cols-3 gap-4  mx-auto w-32'>
            <FaFacebook className='w-11 h-11'></FaFacebook>
            <FaInstagram className='w-11 h-11'></FaInstagram>
            <FaTwitter className='w-11 h-11'></FaTwitter>
            </div>
            <h2 className='text-white pt-4'>All right reserved 2023</h2>
        </div>
    );
};

export default Footer;