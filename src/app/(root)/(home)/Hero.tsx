"use client";
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { SiGmail } from 'react-icons/si';

import { BiSolidDownvote } from "react-icons/bi";
import clsx from 'clsx';
import Ping from '@/components/elements/Ping';
import BreakLine from '@/components/elements/BreakLine'; 


export default function Hero() {
  const [displayText, setDisplayText] = useState('Front-End Web Developer');

  useEffect(() => {
    const intervalId = setTimeout(() => {
      setDisplayText(prevText =>
        prevText === 'Front-End Web Developer'
          ? 'I build website'
          : 'Front-End Web Developer'
      );
    }, 2000);

    return () => clearTimeout(intervalId);
  }, [displayText]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}>
      <h1
        className={clsx(
          'primary',
          'mb-4',
          'text-xl font-bold',
          'min-[347px]:text-2xl md:text-3xl'
        )}>
        Call me <span className="gradient__text">Yusuf</span>
        <div className="ml-1 inline-block animate-waving-hand">👋</div>
      </h1>

      <ul className="secondary mb-4 list-disc space-y-1 pl-4 text-sm md:text-lg">
        <li>{displayText}</li>
      </ul>

      <p className="secondary mb-4 text-sm leading-relaxed md:text-lg">
        Learning Javascript
      </p>

      <div className="mb-4 flex items-center gap-2">
        <Ping />
        <p className="primary text-sm md:text-lg">Available for hire</p>
      </div>

      <Link
        href={"./cv.pdf"}
        target="_blank"
        rel="noopener noreferrer"
        className={clsx(
          "secondary cursor-pointer",
          "mb-8 pl-0.5",
          "flex items-center gap-3",
          "text-sm font-bold md:text-lg",
          "transition-all duration-300",
        )}
      >
        <div
          className={clsx(
            "overflow-hidden",
            "border-b-2 border-solid",
            "border-secondary-light dark:border-secondary-dark",
          )}
        >
          <BiSolidDownvote className="animate-rain-arrow" />
        </div>
        Download CV
      </Link>
      <motion.section />

      <Link
        href="/contact"
        aria-label="Contact Me"
        className={clsx(
          'primary border__gradient',
          'flex items-center gap-3',
          'w-fit rounded-md p-3',
          'text-sm font-bold md:text-lg',
          'lg:mb-[39px]'
        )}>
        <SiGmail />
        Contact Me
      </Link>
      <BreakLine />
    </motion.section>
  );
}
