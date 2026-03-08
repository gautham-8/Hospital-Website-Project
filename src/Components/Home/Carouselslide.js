import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import './CarouselSlide.css'
import Card from './Cards/Card'

const cards = [
    {
        src: '/images/liver-transplantation.png',
        alt: 'Liver Transplantation',
        heading: 'Liver Transplantation & Hepatobiliary Pancreatic Surgery',
        description: 'Liver transplant is the substitution of a harmful liver with a healthy liver.',
    },
    {
        src: '/images/pediatrics.png',
        alt: 'Pediatrics',
        heading: 'Pediatrics',
        description: 'Expert health and medical care for babies, children and adolescents from birth to the age of sixteen.',
    },
    {
        src: '/images/cardiology.png',
        alt: 'Cardiology',
        heading: 'Cardiology',
        description: 'Latest technology and top specialists with best practices in emergency cardiac services and minimally invasive interventions.',
    },
    {
        src: '/images/plastic-surgery.png',
        alt: 'Plastic Surgery',
        heading: 'Plastic Surgery',
        description: "Focuses on the reconstruction or alteration of the facial or body tissues to improve a person's appearance.",
    },
    {
        src: '/images/urology.png',
        alt: 'Urology',
        heading: 'Urology',
        description: 'Focused care for conditions of the male and female urinary tract including kidneys, bladder, ureters and urethra.',
    },
    {
        src: '/images/general-surgery.png',
        alt: 'General Surgery',
        heading: 'General Surgery',
        description: 'Our experts in general and minimally invasive surgery deliver world-class surgical care.',
    },
]

function CarouselSlide() {
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
                            {cards.map((card, i) => (
                                <div className="embla__slide" key={i}>
                                    <Card {...card} />
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

export default CarouselSlide
