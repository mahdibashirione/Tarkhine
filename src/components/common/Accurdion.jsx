import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const Accurdion = ({ title, children, isInPage, icon = false }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={(e) => setIsOpen(!isOpen)}
        className={`${
          isInPage && "text-primary border-primary"
        } pb-3 w-full border-b-2 flex items-center justify-between`}
      >
        <span className="flex items-center gap-2">
          {icon && icon}
          {title}
        </span>
        <FiChevronDown
          className={`text-xl ${isOpen && "rotate-180"} duration-300`}
        />
      </button>
      <motion.div
        initial={{ maxHeight: 0, marginTop: 0 }}
        animate={
          isOpen
            ? { maxHeight: 400, marginTop: 12 }
            : { maxHeight: 0, marginTop: 0 }
        }
        className="flex flex-col gap-3 pr-8 overflow-hidden"
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Accurdion;
