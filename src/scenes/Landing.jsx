import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
const Landing = ({ setSelectedPage }) => {
    const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
      >
    {/* IMAGE SECTION */}
    <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
    {isAboveLarge ? (
      <div
        className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
        before:w-full before:max-w-[400px] md:before:max-w-[600px] before:h-full before:border-2 before:border-blue before:z-[-1]"
      >
        <img
          alt="profile"
          className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[360px] md:max-w-[480px] rounded-full"
          src="assets/profile-photo.png"
        />
      </div>
    ) : (
      <img
        alt="profile"
        className="z-10 w-full max-w-[400px] md:max-w-[600px] rounded-full"
        src="assets/profile-photo.png"
      />
      
    )}
  </div>
                  
  <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Hello, {""}
            <br />
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1]"
            >
              I'm Chandan Basak
            </span>
          </p>

          <p className="mt-10 mb-7 text-center md:text-start">
            Graphics design & SEO expert.
          </p>
        </motion.div>
        </div>
  </section>
  )
}

export default Landing;