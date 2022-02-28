import React, { ReactElement } from "react";
import { motion } from "framer-motion";
import Description from "../../components/description";

interface Props {}

export default function FramerMotion({}: Props): ReactElement {
  return (
    <>
      <Description
        title="Framer Motion"
        subtitle="A production-ready motion library for React."
        body="Utilize the power behind Framer, the best prototyping tool for teams. Proudly open source."
      />
      <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-100">
        <div className="grid grid-cols-2 ">
          <Primeiro />
          <Segundo />
          <Quarto />
          <Terceiro />
        </div>
      </div>
    </>
  );
}

export const Primeiro = () => (
  <motion.div
    className="w-20 h-20 bg-white m-20 rounded-2xl justify-center flex items-center text-center"
    animate={{ scale: 1.5 }}
    transition={{ duration: 1 }}
  >
    Simple anitmation
  </motion.div>
);

export const Segundo = () => (
  <motion.div
    className="flex justify-center items-center text-center w-20 h-20 bg-white m-20 "
    transition={{ duration: 3 }}
    animate={{
      scale: [1, 2, 2, 1, 1],
      rotate: [0, 0, 270, 270, 0],
      borderRadius: ["20%", "20%", "50%", "50%", "20%"],
    }}
  >
    Complex animation
  </motion.div>
);

export const Terceiro = () => (
  <motion.button
    className="w-20 h-20 bg-white m-20 rounded-2xl"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
  >
    Hover and tap
  </motion.button>
);

export const Quarto = () => (
  <motion.div
    className="w-20 h-20 flex justify-center items-center bg-white m-20 rounded-2xl"
    drag
    dragConstraints={{
      top: -50,
      left: -50,
      right: 50,
      bottom: 50,
    }}
  >
    Drag me
  </motion.div>
);
