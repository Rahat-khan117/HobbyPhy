import React from 'react';
import Featured from '../components/Featured';
import { useLoaderData } from 'react-router';

const Home = () => {
    const groups = useLoaderData();
    return (
    <div>
        <div>
        <div className="carousel w-full h-[500px]">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/5ghVMbSh/banner-1.jpg"
              className="w-full"
            />
            
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/twC7R7Wh/banner-2.jpg"
              className="w-full"
            />
           <div className='absolute top-[25%]  left-[10%]'>
               <div>
                 <p className='lx:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold '> Book Club Gathering: <br />  Connect Over Stories That Inspire – Join a Local Book Club Today!</p>
                 <p className='text-white mt-2 lg:text-[16px] text-[14px] '>
                    Dive into meaningful conversations and make new <br />
                    friends who share your passion for books. Whether it's fiction,  <br /> nonfiction, or poetry—there's a club for every reader.
                     <br />
                 </p> 
                 <div className='flex mt-4'>
                    <button  className='text-white border-2 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black'>
                    <i class="fa-brands fa-wpexplorer"></i>
                    <span className='ml-1'>Explore</span>
                    </button>
                    <button  className='text-white border-2 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black'>
                    <i class="fa-brands fa-readme"></i>
                     <span className='ml-1'>Read</span>
                    </button>
                 </div>
               </div>
            </div>

            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/WNmh7Pm0/banner-3.jpg"
              className="w-full"
            />

           
            <div className='absolute top-[25%]  left-[10%]'>
               <div>
                 <p className='lx:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold '> Hiking Crew Adventure <br />  Together – Find Your Hiking Tribe!</p>
                 <p className='text-white mt-2 lg:text-[16px] text-[14px] '>
                    Explore the Outdoors, One Trail at a Time.<br />
                    Join a group of adventure-seekers who love fresh air, stunning views, and good company. <br />
                    Whether you’re a casual walker or a trail expert, there's a crew waiting for you. <br />
                 </p> 
                 <div className='flex mt-4'>
                    <button  className='text-white border-1 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black'>
                    <i class="fa-brands fa-wpexplorer"></i>
                    <span className='ml-1'>Explore</span>
                    </button>
                    <button  className='text-white border-1 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black'>
                    <i class="fa-brands fa-readme"></i>
                     <span className='ml-1'>Read</span>
                    </button>
                 </div>
               </div>
            </div>


            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/TMHF0jYh/banner-4.jpg"
              className="w-full"
            />
            <div className='absolute top-[25%]  left-[10%]'>
               <div>
                 <p className='lx:text-6xl lg:text-4xl md:text-2xl sm:text-4xl text-xl text-white font-bold '> Art & Painting Circle <br /> Unleash Your Creativity – Paint, Share, and Belong. </p>
                 <p className='text-white mt-2 lg:text-[16px] text-[14px] '>
                    Join a creative circle where your imagination can run wild.  <br />
                     Whether you're a beginner or a pro, express yourself through<br />
                    art in a welcoming, collaborative space.<br />
                 </p> 
                 <div className='flex mt-4'>
                    <button  className='text-white border-1 border-whit w-[140px] h-[45px] rounded-tl-2xl rounded-bl-2xl text-xl cursor-pointer hover:bg-white hover:text-black'>
                    <i class="fa-brands fa-wpexplorer"></i>
                    <span className='ml-1'>Explore</span>
                    </button>
                    <button  className='text-white border-1 border-white w-[140px] h-[45px] rounded-tr-2xl rounded-br-2xl text-xl cursor-pointer hover:bg-white hover:text-black'>
                    <i class="fa-brands fa-readme"></i>
                     <span className='ml-1'>Read</span>
                    </button>
                 </div>
               </div>
            </div>
            <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
        </div>
        <div className='mt-12 sm:px-14 lg:px-20 px-4'>
           <p className='text-3xl font-bold'>Our Featured Groups</p>
           <div className='flex justify-center mt-4'>
             <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 '>
                {
                    groups.map(group => <Featured group={group}></Featured>)
                }
             </div>
           </div>
        </div>
        <div className='mt-10 px-4 sm:px-7 md:px-12 lg:px-20'>
            <p className='font-bold text-3xl text-center'>Create Your won Group</p>
            <div className='bg-white rounded-2xl px-4 py-4 mt-4'>
               <img className='rounded-2xl w-full ' src="https://i.ibb.co/Hwn1XbP/7.jpg"/>
            </div>
        </div>

    </div>
    );
};

export default Home;