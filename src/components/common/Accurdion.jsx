import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { motion } from "framer-motion";

const Accurdion = ({ title, children, isInPage, icon = false, styleTitle }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <button
        onClick={(e) => setIsOpen(!isOpen)}
        className={`${styleTitle && styleTitle} ${
          isInPage && "text-primary border-primary"
        } p-3 w-full border-b-2 flex items-center justify-between lg:text-xl lg:p-4`}
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
