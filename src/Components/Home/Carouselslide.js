import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './carouselslide.css'
import Card1 from './Cards/Card1'
import Card2 from './Cards/Card2'
import Card3 from './Cards/Card3'
import Card4 from './Cards/Card4'
import Card5 from './Cards/Card5'
import Card6 from './Cards/Card6'

const cards = [Card1, Card6, Card3, Card2, Card5, Card4]

function Carouselslide() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false, align: 'start' })
    const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
    const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])

    return (
        <section className="carousel-section">
            <div className="container">
                <h2 className="carousel-section-heading">Centres of Excellence</h2>
                <div className="carousel-track">
                    <button onClick={scrollPrev} className="carousel-btn" aria-label="Previous">&#8249;</button>
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">
                            {cards.map((Card, i) => (
                                <div className="embla__slide" key={i}>
                                    <Card />
                                </div>
                            ))}
                        </div>
                    </div>
                    <button onClick={scrollNext} className="carousel-btn" aria-label="Next">&#8250;</button>
                </div>
            </div>
        </section>
    )
}

export default Carouselslide
