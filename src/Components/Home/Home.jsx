import './HomeStyle.css'
import { FaArrowRight } from "react-icons/fa6";
import img1 from '../../Assets/5ab8019309064eadb367c61adf60f551.jpeg'
import { TiSocialFacebook, TiSocialInstagram, TiSocialTwitter } from "react-icons/ti";
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <section className='home flex pl-[10rem]  overflow-hidden  justify-between top'>
            <div className='relative text-white xl:w-3/6 flex flex-col justify-center  items-start w-full  content '>
                <div className='navbar '>
                    <div className='logo font-[500] text-[20px] cursor-pointer duration-300 hover:text-pink-600 '>
                        Fouad
                    </div>
                    <div className='flex     text-[10px] items-center'>
                        <ul className='flex link gap-9 '>
                            <li><Link to={'/'}>Home</Link></li>
                            <li> <Link to={'/collection'}>Collections</Link> </li>
                            <li>Delvery </li>
                            <li>Contact</li>
                        </ul>
                        
                    </div>
                </div>
            
        


                <h1 className=' font-Oswald text-[30px] text-white  '>Non fungible</h1>
                <h1 className=' font-Oswald font-[400] uppercase text-white text-[5rem] '>Culture</h1>
                <p className='text-white text-[12px] font-[200]  max-w-[400px] leading-5'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit neque quas corporis
                    voluptatem atque eos possimus in libero, vero enim! Aut vel illum adipisci recusandae
                    saepe! Amet expedita tempora delectus.
                </p>
                <div className='text-white flex items-center mt-2 border-[1px] rounded-full pl-3 pr-1 py-1 gap-2'>
                    <a href="/" className='text-[12px] font-[100]'>Discover Now</a>
                    <FaArrowRight  className='icon'/>
                </div>
                <div className='container flex p-2  rounded-lg items-center  absolute bottom-[15%] left-[80%] z-10 gap-3'>
                    <div className='  w-full'>
                        <img src={img1} width={70} alt="" />
                    </div>
                    <div className='details flex flex-col '>
                        <div className='titel text-white font-Oswald py-1'>
                            <h3>Ai Promopts</h3>
                        </div>
                        <div className='items flex  flex-col gap-2  text-white'>
                            <div className='flex gap-2 '>
                                <a href="/" className='text-white flex items-center border-[1px] rounded-full px-3 '>Jacket</a> 
                                <a href="/" className='text-white flex items-center  border-[1px] rounded-full px-3 '>Women</a>   
                                <a href="/" className='text-white flex items-center  border-[1px] rounded-full px-3 '>Men</a>
                            </div>
                            <div className='flex gap-4'>
                                <a href="/" className='text-white flex items-center  border-[1px] rounded-full px-3 '>Neon</a>
                                <a href="/" className='text-white flex items-center  border-[1px] rounded-full px-3 '>Style</a>
                                <a href="/" className='text-white flex items-center  border-[1px] rounded-full px-3 '>New</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='text-white flex justify-center  absolute bottom-10  gap-5'>
                <TiSocialFacebook  className='duration-300 hover:text-pink-600'/>
                <TiSocialInstagram className='duration-300 hover:text-pink-600'/>
                <TiSocialTwitter className='duration-300 hover:text-pink-600'/>
                </div>
            </div>

            <div className='xl:w-3/6 flex flex-col justify-end relative  right-side '>
                <div className='text-white flex absolute top-0 right-4 z-20 items-center mt-2 border-[1px] rounded-full  pl-3 pr-1 py-1 now gap-2'>
                    <a href="/" className='text-[12px] font-[100]'>Discover Now</a>
                    <FaArrowRight  className='icon'/>
                </div>
            </div>
           
    </section>
  )
}

export default Home
