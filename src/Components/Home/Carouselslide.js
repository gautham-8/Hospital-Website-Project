import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './home.css'
import './carouselslide.css'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import Card5 from './Cards/Card5'
import Card6 from './Cards/Card6'

function Carouselslide() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'start', slidesToScroll: 1 })

    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <div className="pt-4 bg-teal">
            <p className="display-6 text-light container">Centres of Excellence</p>
            <div className="embla position-relative">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container d-flex">
                        {[Card1, Card6, Card3, Card2, Card5, Card4].map((Card, i) => (
                            <div className="embla__slide" key={i} style={{ flex: '0 0 auto', width: 'clamp(250px, 25%, 300px)', marginRight: '1rem' }}>
                                <Card />
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={scrollPrev} className="btn btn-light position-absolute top-50 start-0 translate-middle-y ms-2">&#8249;</button>
                <button onClick={scrollNext} className="btn btn-light position-absolute top-50 end-0 translate-middle-y me-2">&#8250;</button>
            </div>
        </div>
    )
}

export default Carouselslide
