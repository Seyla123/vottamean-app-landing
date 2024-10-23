import { useTransform, motion, useScroll, MotionValue } from "framer-motion";
import { useRef } from "react";
import { features } from "@/lib/data";
import SectionHeader from "./SectionHeader";
import { Typography } from "./Typography";
import { Button } from "../ui/button";

export default function StackingCard() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });
  return (
    <>
      <main className="bg-background" ref={container}>
        <>
          <section className=" w-full grid place-content-center ">
            <SectionHeader
              subtitle={"Features"}
              title={
                "Discover Powerful Features That Simplify Attendance Management"
              }
              underline={"Powerful"}
            />
          </section>
        </>

        <section className=" w-full ">
          {features.map((feature, i) => {
            const targetScale = 1 - (features.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={feature?.link}
                src={feature?.src}
                title={feature?.title}
                color={feature?.color}
                description={feature?.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
              />
            );
          })}
        </section>
      </main>
    </>
  );
}

export const Card = ({
  i,
  title,
  description,
  src,
  url,
  color,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen w-full flex items-center justify-center sticky top-10"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
        }}
        className={`flex flex-col relative ${color} -top-[25%] h-[auto] w-[100%] rounded-xl md:p-16 p-8 origin-top`}
      >
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 items-center h-full  gap-8`}
        >
          <div className={`relative  z-10 space-y-8`}>
            <Typography variant={"h2"}>{title}</Typography>
            <Typography variant={"p"}>{description}</Typography>
            {/* button cta */}
            <Button>Get Started</Button>
          </div>

          <div className={`relative w-full h-full rounded-lg overflow-hidden `}>
            <motion.div
              className={`w-full h-full`}
              style={{ scale: imageScale }}
            >
              <img
                src={url}
                alt="image"
                className="object-contain h-full w-full"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
