import { motion } from "framer-motion";

const PopUp = ({ handleClose, title, isShow, children }) => {
  return (
    <motion.aside
      initial={{ opacity: 0, maxHeight: 0 }}
      animate={
        isShow
          ? { maxHeight: "100vh", opacity: 1 }
          : { maxHeight: 0, opacity: 0 }
      }
      transition={{ duration: 0.2 }}
      className={`fixed top-0 right-0 flex items-center justify-center bg-zinc-900/50 w-full h-full z-50 px-4`}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        animate={isShow ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ duration: 0.2, delay: 0.3 }}
        className="bg-white max-w-[800px] overflow-hidden rounded-lg"
      >
        <div className="py-6 relative bg-[#EDEDED] px-32">
          <h3 className="w-full text-center text-xl font-semibold">{title}</h3>
          <button onClick={handleClose} className="absolute top-1/4 left-4">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="3.72611"
                height="29.8089"
                rx="1.86305"
                transform="matrix(0.698447 -0.715662 0.698447 0.715662 8.45508 11.667)"
                fill="#717171"
              />
              <rect
                width="3.72611"
                height="29.8089"
                rx="1.86305"
                transform="matrix(0.698447 0.715662 -0.698447 0.715662 28.6973 9.00049)"
                fill="#717171"
              />
            </svg>
          </button>
        </div>
        {children}
      </motion.div>
    </motion.aside>
  );
};

export default PopUp;
