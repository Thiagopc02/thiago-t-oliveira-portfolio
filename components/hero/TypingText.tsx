"use client";

import { useEffect, useState } from "react";

type TypingTextProps = {
  texts?: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
};

const defaultTexts = [
  "Full Stack Developer",
  "React Developer",
  "Next.js Developer",
  "TypeScript Developer",
  "Building digital experiences",
];

export default function TypingText({
  texts = defaultTexts,
  typingSpeed = 70,
  deletingSpeed = 35,
  pauseTime = 1600,
  className = "",
}: TypingTextProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayedText === currentText) {
      timeout = setTimeout(() => {
        setIsDeleting(true);
      }, pauseTime);
    } else if (isDeleting && displayedText === "") {
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTextIndex((currentIndex) => (currentIndex + 1) % texts.length);
      }, 300);
    } else {
      timeout = setTimeout(
        () => {
          const nextLength = isDeleting
            ? displayedText.length - 1
            : displayedText.length + 1;

          setDisplayedText(currentText.slice(0, nextLength));
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [
    displayedText,
    isDeleting,
    textIndex,
    texts,
    typingSpeed,
    deletingSpeed,
    pauseTime,
  ]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayedText}</span>

      <span
        aria-hidden="true"
        className="
          ml-1
          inline-block
          h-[1em]
          w-[2px]
          animate-pulse
          bg-current
        "
      />
    </span>
  );
}