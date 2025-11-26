"use client";
import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Container from "../global/container";

const testimonials = [
  {
    text: "Nicolas frameworks helped me reposition my consulting services and start attracting premium clients within weeks.",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Our entire team now operates with more focus and clarity—growth action plans made our results visible and sustainable.",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "My business revenue doubled after implementing Nicolas strategies for outreach and brand positioning.",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Integrating Nicolas tools into my workflow was seamless—the support was incredible and results came fast.",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Client discovery worksheets and live workshops transformed how I build relationships and close deals.",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "The brand positioning playbook gave my consulting business a distinct edge and clarity in a crowded market.",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Joining the mastermind group brought accountability and new insights—the shared success stories are inspiring.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "The performance dashboard provides real-time feedback on my growth, helping me stay ahead and keep scaling.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Nicolas tools are intuitive and actionable—exactly what consultants need to thrive without burnout.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];


const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);

const TestimonialsColumn = (props: {
  className?: string;
  testimonials: typeof testimonials;
  duration?: number;
}) => {
  const duplicatedTestimonials = [...props.testimonials, ...props.testimonials];
  
  return (
    <div className={`overflow-hidden ${props.className || ""}`}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6"
      >
        {duplicatedTestimonials.map(({ text, imageSrc, name, username }, index) => (
          <div 
            key={`${username}-${index}`}
            className="rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-all shadow-lg shadow-black/20 hover:shadow-xl hover:shadow-black/30 p-4 md:p-6 flex-shrink-0"
          >
            <div className="text-sm md:text-base text-foreground">{text}</div>
            <div className="flex items-center gap-3 mt-5">
              <Image
                width={40}
                height={40}
                src={imageSrc}
                alt={name}
                className="h-10 w-10 rounded-full border border-border/50"
              />
              <div className="flex flex-col">
                <div className="font-medium tracking-tight leading-5 text-foreground">{name}</div>
                <div className="leading-5 tracking-tight text-muted-foreground text-sm">{username}</div>
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export const Testimonials = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full py-20">
      <Container>
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <div className="flex justify-center mb-5">
            <div className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
              <span className="text-xs font-medium text-blue-400">Testimonials</span>
            </div>
          </div>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
            What Our Clients  <span className="font-subheading italic">Say</span>
          </h2>
          <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
           From breakthrough strategies to real-world results, our tools have helped consultants and entrepreneurs transform their brands and attract premium clients worldwide.
          </p>
        </div>
      </Container>

      <div className="flex justify-center gap-6 mt-10 w-full [mask-image:linear-gradient(to_bottom,transparent,black_15%,black_85%,transparent)]">
        <div className="max-h-[600px] md:max-h-[740px] overflow-hidden w-full max-w-[320px]">
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
        </div>
        <div className="hidden md:block max-h-[600px] md:max-h-[740px] overflow-hidden w-full max-w-[320px]">
          <TestimonialsColumn testimonials={secondColumn} duration={19} />
        </div>
        <div className="hidden lg:block max-h-[600px] md:max-h-[740px] overflow-hidden w-full max-w-[320px]">
          <TestimonialsColumn testimonials={thirdColumn} duration={17} />
        </div>
      </div>
    </section>
  );
};
