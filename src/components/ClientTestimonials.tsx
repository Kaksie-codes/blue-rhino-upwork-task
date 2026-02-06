import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const ClientTestimonials = () => {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      text: "From start to finish, working with Blue Rhino was a breeze. Their attention to detail and commitment to delivering a top-notch product set them apart in the field of the industry.",
      name: "Raymond Bobbins",
      title: "General Manager"
    },
    {
      id: 2,
      rating: 5,
      text: "I can't say enough positive things about the seamless and exceptional process they used. Our new website has been a life-changer in driving more bookings and enhancing our brand.",
      name: "Raymond Bobbins",
      title: "General Manager"
    },
    {
      id: 3,
      rating: 5,
      text: "From concept to execution, everything was wonderful and exceptional almost dirty. Our new website has been a life-changer in driving more bookings and enhancing our brand image.",
      name: "Raymond Bobbins",
      title: "General Manager"
    },
    {
      id: 4,
      rating: 5,
      text: "The team at Blue Rhino exceeded all expectations. Their expertise and dedication transformed our online presence completely.",
      name: "Sarah Mitchell",
      title: "CEO"
    }
  ];

  const renderStars = (rating: number) => {
    return (
      <div className="mb-4 flex justify-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`h-5 w-5 ${
              index < rating ? 'text-yellow-400' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Large Background Text */}
        <div className="mb-16 text-center">
          <h2 className="text-5xl font-bold leading-tight text-blue-100 sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
            CLIENT TESTIMONIALS
          </h2>
        </div>

        {/* Testimonials Slider */}
        <div className="relative mx-auto max-w-6xl">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="h-full rounded-2xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl">
                  {/* Star Rating */}
                  {renderStars(testimonial.rating)}

                  {/* Testimonial Text */}
                  <p className="mb-6 text-center text-sm leading-relaxed text-gray-600 md:text-base">
                    "{testimonial.text}"
                  </p>

                  {/* Author Info */}
                  <div className="text-center">
                    <p className="font-bold text-gray-900">
                      —{testimonial.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonial.title}
                    </p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-blue-600 hover:text-white disabled:opacity-50">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button className="swiper-button-next-custom absolute right-0 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg transition-all hover:bg-blue-600 hover:text-white disabled:opacity-50">
            <svg
              className="h-6 w-6"
              fill="none"
              strokeWidth="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ClientTestimonials;