// import React, { useState, useEffect } from "react";
// import { Sparkles, Github } from "lucide-react";

import React from "react";
import { Sparkles } from "lucide-react";

export default function Header() {
  // const [stars, setStars] = useState(null);

  // useEffect(() => {
  //   fetch("https://api.github.com/repos/bhavya-dang/Solace")
  //     .then((res) => res.json())
  //     .then((data) => setStars(data.stargazers_count))
  //     .catch(() => setStars(null));
  // }, []);

  // const formatStars = (count) => {
  //   if (count >= 1000) {
  //     return (count / 1000).toFixed(1).replace(/\.0$/, "") + "k";
  //   }
  //   return count.toString();
  // };

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-6 sm:px-8 lg:px-10">
      <a
        href="#"
        className="group flex items-center gap-3"
        aria-label="Solace home"
      >
        <span className="grid size-10 place-items-center rounded-xl border border-solace-border bg-solace-raised text-solace-violet shadow-soft-violet">
          <Sparkles className="size-4" strokeWidth={1.8} />
        </span>
        <span className="text-[15px] font-medium tracking-[0.18em] text-solace-text">
          SOLACE
        </span>
      </a>

      {/* <a
        href="https://github.com/bhavya-dang/Solace"
        target="_blank"
        rel="noreferrer"
        className="inline-flex h-10 items-center gap-2 rounded-xl border border-solace-border bg-solace-raised px-4 text-sm font-medium text-solace-text transition hover:border-solace-violet/70 hover:text-white active:scale-[0.96]"
      >
        <Github className="size-4" strokeWidth={1.8} />
        {stars !== null && (
          <span className="text-xs text-solace-muted">
            {formatStars(stars)}
          </span>
        )}
      </a>*/}
    </header>
  );
}
