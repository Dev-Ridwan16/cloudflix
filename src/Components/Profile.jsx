import React, { useRef, useState } from 'react';
import { profile } from '../data/slides';
import './Styles/Profile.css';

const Profile = () => {
  const [editHandler, setEditHandler] = useState(null);
  const [showModal, setShowModal] = useState(true);

  const closeModal = () => {
    setShowModal(!showModal);
  };

  const handleEdit = (id) => {
    setEditHandler((prevState) => (prevState === id ? null : id));
  };
  
  const isMobile = window.innerWidth <= 1023;

  return (
    <React.Fragment>
      {showModal && (
        <div className="modal">
            {profile.map((userInfo, index) => (
                <div
                    key={index}
                    className={`${!showModal ? 'opacity-0 w-0' : 'opacity-100 w-screen'
                    } transition-all duration-1000 ease-in-out flex flex-col h-screen fixed
                    bg-center bg-cover bg-no-repeat p-5 
                    lg:w-[300px] lg:mx-auto lg:h-fit lg:shadow-2xl
                    lg:border lg:border-[#575757] rounded-xl lg:py-5 lg:px-2
                    lg:top-10 z-40 lg:left-0 lg:right-0 lg:translate-x-[160%] text-slate-100
                    `}
                    style={{ backgroundImage: `url(${userInfo.wallpaper})` }}
                >
                    <div className="flex items-center justify-between">
                        <h4 className="text-[16px] text-slate-100 font-bold italic mx-auto">Profile</h4>
                        </div>
                        <div className="flex flex-col max-w-[150px] mx-auto text-center my-5">
                            <i className={`${userInfo.icons.userIcon} text-[40px]`}></i>
                            <div className="flex justify-between items-center py-2 w-[170px]">
                                <span className="text-[12px] font-bold">{userInfo.name}</span>
                            </div>
                        </div>
                        <table className="text-left w-[100%] mx-auto">
                            <tbody>
                                <tr>
                                    <th><i className={userInfo.icons.emailIcon}></i></th>
                                    <td>{userInfo.otherInfo.Email.email}</td>
                                </tr>
                                <tr>
                                    <th><i className={userInfo.icons.phoneIcon}></i></th>
                                    <td className="bg-[#333333] py-2">
                                        <ul className='flex'>
                                            <li>{userInfo.otherInfo.Number.countryCode}</li>
                                            <li className="pl-1">{userInfo.otherInfo.Number.phoneNumber}</li>
                                        </ul>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button className='flex items-center justify-center gap-3 h-[30px] text-[12px] text-green-300 border border-green-300 rounded w-[100px] mx-auto my-5'>
                            {userInfo.editProfile.text}
                            <i className={userInfo.icons.editIcon}></i>
                        </button>
                        {
                            isMobile ? (
                                <div className='border rounded px-3'>
                                    <label className='absolute text-[12px] mx-4 top-[32.5%] bg-black bg-opacity-[0.8] w-auto'>Storage</label>
                                    <div className="flex justify-between text-[10px] mt-5">
                                        <i>{userInfo.storage_info.storage__used} used</i>
                                        <i>{userInfo.storage_info.total__storage} total</i>
                                    </div>
                                    <progress
                                        value={userInfo.storage_info.storage__used__percent}
                                        max={100} className="progress__bar w-full my-1 h-2 rounded-xl"
                                    ></progress>
                                </div>
                            ) : <button className='bg-blue-300 text-blue-800 w-fit mx-auto p-2 rounded text-[12px]'> Show storage usage</button>
                        }
              
                        <button className='flex items-center justify-center gap-3 text-[12px] m-5 py-1 w-[120px] rounded border border-[#dc2626] text-[#dc2626] mx-auto'>
                            {userInfo.logOut.text}
                            <i className={userInfo.icons.logoutIcon}></i>
                        </button>
                     </div>
                    ))}
                </div>
            )}
        </React.Fragment>
    );
};

export default Profile;