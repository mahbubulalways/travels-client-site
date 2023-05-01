import React from 'react';

const ImgShow = ({place}) => {
    return (
        <div>
<div className=' flex'>
          <div className='w[100%]'>
            <h1 className='text-6xl'>Cox Bazar</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos ex laudantium officiis autem eveniet nostrum quisquam incidunt iure deleniti cupiditate architecto exercitationem quaerat, soluta consectetur quam commodi voluptatem nisi aliquid esse qui dolore! Sunt temporibus, ad voluptatum laborum tenetur obcaecati?</p>
          </div>
          <div className='w-[100%] '>
           <Swiper
        slidesPerView={3}
        spaceBetween={30}
        centeredSlides={true}
        
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper "
      >
        {places.map(place=><div className='w-screen'>
          <SwiperSlide>
         <Link> <img src={place.imgUrl} alt="" /></Link>
         <h1 className='text-center relative bottom-10 text-3xl font-bold text-red'>{place.destination}</h1>
        </SwiperSlide>
        </div>
              
            )}
        

      </Swiper>
           </div>
        </div>
         <div className='b-black absolute inset-0 opacity-60 duration-500'> </div>
        </div>
    );
};

export default ImgShow;