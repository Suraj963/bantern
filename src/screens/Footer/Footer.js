import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import {
  BoltIcon,
  ArrowUpIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/solid";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 15 },
  },
};

const quickLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
];

const serviceLinks = [
  { name: "Web Development", path: "/services/website-development" },
  { name: "Mobile App Development", path: "/services/app-development" },
  { name: "AI & Automation", path: "/services/ai-automation" },
];

const socialLinks = [
  { icon: FaLinkedin, path: "https://linkedin.com" },
  { icon: FaTwitter, path: "https://twitter.com" },
  { icon: FaGithub, path: "https://github.com" },
  { icon: FaInstagram, path: "https://instagram.com" },
  { icon: FaFacebook, path: "https://facebook.com" },
  { icon: FaYoutube, path: "https://youtube.com" },
];

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: "-100px 0px",
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.footer
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="w-full bg-background mt-20"
    >
      <div className="w-full max-w-screen-xl mx-auto p-8 md:p-12">
        <motion.hr variants={itemVariants} className="border-border/50 mb-10" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <motion.div variants={itemVariants} className="flex flex-col">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <span className="bg-primary p-2 rounded-full">
                <BoltIcon className="w-5 h-5 text-primary-foreground" />
              </span>
              <span className="text-foreground text-2xl font-bold">
                NexaWhale
              </span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-xs">
              Innovating the Future, Together. We turn your vision into
              high-performance digital reality.
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold text-primary mb-4">
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:nexawhale@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  nexawhale@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:9513276042"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  9513276042
                </a>
              </li>

              <li className="pt-2">
                <Link
                  to="/contact"
                  className="
                            inline-flex items-center
                            bg-foreground text-background
                            px-4 py-2 rounded-full 
                            text-sm font-bold 
                            transition-colors
                            hover:scale-105 active:scale-95
                          "
                >
                  Get in Touch
                  <ArrowRightIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                </Link>
              </li>

              <div className="flex flex-wrap gap-4 pt-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary hover:scale-110 transition-all"
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </ul>
          </motion.div>
        </div>

        <motion.hr variants={itemVariants} className="border-border/50" />
        <motion.div
          variants={itemVariants}
          className="flex flex-col-reverse md:flex-row justify-between items-center gap-6 mt-8"
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} NexaWhale Solutions. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-muted border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all"
            title="Back to Top"
          >
            <ArrowUpIcon className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
