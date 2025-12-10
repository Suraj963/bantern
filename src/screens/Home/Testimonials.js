import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const testimonialData = [
  {
    name: "Alex Chen",
    title: "CEO, TechInnovate",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=256&auto=format&fit=crop",
    heading: "Incredible Skill & True Partnership",
    text: "NexaWhale's team is open-minded, curious, and deeply invested. They took our product vision and brought it to life beautifully. They aren't just developers; they're true partners in success.",
  },
  {
    name: "Sarah Jenkins",
    title: "Founder, Metro Group",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop",
    heading: "Excellent Communication & Huge Jump in Performance",
    text: "Excellent communication and professionalism from the start. They maintained an open-minded approach to suggestions and feedback. Our app's performance jumped immediately after deployment.",
  },
  {
    name: "Chris Taylor",
    title: "Chairperson, Core Fitness",
    avatar:
      "https://images.unsplash.com/photo-1506794778202-cad84cf4F1d?q=80&w=256&auto=format&fit=crop",
    heading: "Their React/Node Skills are Through the Roof",
    text: "I've been working with NexaWhale for a couple of months and I can't express how impressed I am. Their programming skills are through the roof. We have a streamlined, efficient workflow.",
  },
  {
    name: "Michael Bronn",
    title: "Founder, SEO Results",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    heading: "An Artist with Code & A Master of SEO",
    text: "An artist who understands SEO. We wanted something beautiful and high-tech, and they delivered. He is constantly finding new ways to improve our site's ranking and performance.",
  },
  {
    name: "Emily White",
    title: "CTO, FutureNet",
    avatar:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=256&auto=format&fit=crop",
    heading: "Scalable Architecture Experts",
    text: "The team at NexaWhale designed a cloud-native architecture that scaled perfectly with our user growth. Their expertise in DevOps and AWS is second to none. Truly exceptional.",
  },
  {
    name: "David Kim",
    title: "Product Manager, StartupX",
    avatar:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=256&auto=format&fit=crop",
    heading: "Fast, Efficient, and Creative",
    text: "From initial wireframes to the final product, the process was seamless. They understood our vision immediately and turned our ideas into a beautiful, functional mobile app.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const TestimonialCard = ({ testimonial }) => (
  <motion.div
    whileHover={{ y: -8, scale: 1.02 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
    className="
      flex flex-col rounded-2xl border border-border/50 
      p-4 sm:p-6 h-full
      bg-[radial-gradient(at_top_left,_hsl(var(--primary)/0.2),_hsl(var(--background))_70%)]
    "
  >
    <h3 className="text-lg sm:text-xl font-semibold mb-3 text-foreground">
      {testimonial.heading}
    </h3>
    <p className="text-xs sm:text-sm text-muted-foreground mb-4 flex-grow">
      {testimonial.text}
    </p>
    <div className="flex items-center gap-3 pt-4 border-t border-border/50">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
      />
      <div>
        <h4 className="text-sm sm:text-base text-foreground font-medium">
          {testimonial.name}
        </h4>
        <p className="text-xs sm:text-sm text-muted-foreground">
          {testimonial.title}
        </p>
      </div>
    </div>
  </motion.div>
);

const Testimonials = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: "start" },
    [
      Autoplay({
        delay: 4000,
        stopOnInteraction: true,
        stopOnMouseEnter: true,
        playOnInit: false,
      }),
    ]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = emblaApi.plugins().autoplay;
    if (!autoplay) return;

    if (inView) {
      autoplay.play();
    }

    const restartAutoplay = () => {
      autoplay.play();
    };

    emblaApi.on("dragEnd", restartAutoplay);
    emblaApi.on("pointerUp", restartAutoplay);
    emblaApi.rootNode().addEventListener("mouseleave", restartAutoplay);

    return () => {
      emblaApi.off("dragEnd", restartAutoplay);
      emblaApi.off("pointerUp", restartAutoplay);
      emblaApi.rootNode().removeEventListener("mouseleave", restartAutoplay);
    };
  }, [inView, emblaApi]);

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full py-4 md:py-8 overflow-hidden pt-12 sm:pt-28 lg:pt-8"
    >
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.div
            variants={itemVariants}
            className="bg-card border border-border/50 rounded-full px-4 py-1 text-sm text-primary mb-4"
          >
            Testimonials
          </motion.div>
          <motion.h2
            variants={itemVariants}
            className="
              text-4xl md:text-6xl font-bold mb-4
              bg-clip-text text-transparent 
              bg-[linear-gradient(110deg,hsl(var(--foreground))_30%,hsl(var(--primary))_50%,hsl(var(--foreground))_70%)]
              bg-[200%_auto] animate-shine
            "
          >
            What clients say <span className="text-primary">about us</span>
          </motion.h2>
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mb-12"
          >
            See what our clients have to say about working with NexaWhale.
          </motion.p>
        </div>
      </div>

      <motion.div
        variants={itemVariants}
        className="w-full embla"
        ref={emblaRef}
      >
        <div className="embla__container pl-4 md:pl-8">
          {testimonialData.map((testimonial, index) => (
            <div
              key={index}
              className="embla__slide pr-4 flex-[0_0_75vw] sm:flex-[0_0_40vw] md:flex-[0_0_35vw] lg:flex-[0_0_25vw]"
            >
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Testimonials;
