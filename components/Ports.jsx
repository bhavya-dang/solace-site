import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check, CircleDot, Clock3 } from "lucide-react";
import ScrollReveal from "./ScrollReveal";
import { ports, statusStyles } from "../util/helpers";

const portsHeading = (
  <div>
    <p className="mb-4 font-mono text-xs uppercase tracking-[0.18em] text-solace-violet">
      Ports
    </p>
    <h2 className="max-w-full text-balance text-4xl font-semibold leading-tight text-solace-text sm:text-5xl">
      Available for all your favourite tools.
    </h2>
  </div>
);

const cardVariants = {
  hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.2, 0, 0.05, 1] },
  }),
};

export default function Ports() {
  return (
    <ScrollReveal>
      <section
        id="ports"
        className="mx-auto max-w-7xl px-5 pt-10 pb-20 sm:px-8 lg:px-10 lg:py-28"
      >
        <motion.div
          className="mb-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.2, 0, 0.05, 1] }}
        >
          {portsHeading}
        </motion.div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {ports.map((port, idx) => (
            <motion.a
              key={port.name}
              href={port.href}
              custom={idx}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              variants={cardVariants}
              whileHover={{ y: -4 }}
              className="group rounded-2xl bg-solace-raised border border-transparent p-4 transition-[border-color,box-shadow] duration-200 hover:shadow-[0_0_0_1px_rgba(138,99,210,0.6)] sm:p-5"
            >
              <div className="mb-5 flex items-start justify-between sm:mb-9">
                <img src={port.icon} alt={port.name} className="size-10" />

                <ArrowUpRight className="size-4 transition duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>

              <h3 className="text-xl font-medium">{port.name}</h3>

              <div
                className={`mt-4 inline-flex items-center gap-2 whitespace-nowrap rounded-full border px-3 py-1 text-xs ${statusStyles[port.tone]}`}
              >
                {port.tone === "green" ? (
                  <Check className="size-3" />
                ) : port.tone === "gold" ? (
                  <Clock3 className="size-3" />
                ) : (
                  <CircleDot className="size-3" />
                )}
                {port.status}
              </div>
            </motion.a>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}
