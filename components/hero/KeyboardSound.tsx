"use client";

import { useCallback, useEffect, useRef } from "react";

type KeyboardSoundProps = {
  enabled?: boolean;
  volume?: number;
};

export default function KeyboardSound({
  enabled = true,
  volume = 0.12,
}: KeyboardSoundProps) {
  const audioContextRef = useRef<AudioContext | null>(null);

  const createKeyboardSound = useCallback(() => {
    if (!enabled || typeof window === "undefined") return;

    try {
      if (!audioContextRef.current) {
        audioContextRef.current = new AudioContext();
      }

      const audioContext = audioContextRef.current;

      if (audioContext.state === "suspended") {
        void audioContext.resume();
      }

      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.type = "square";

      // Pequena variação deixa o som menos artificial.
      oscillator.frequency.setValueAtTime(
        110 + Math.random() * 35,
        audioContext.currentTime
      );

      gainNode.gain.setValueAtTime(volume, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.001,
        audioContext.currentTime + 0.025
      );

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.start();
      oscillator.stop(audioContext.currentTime + 0.025);
    } catch {
      // O navegador pode bloquear áudio antes da primeira interação.
    }
  }, [enabled, volume]);

  useEffect(() => {
    if (!enabled) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === "Shift" ||
        event.key === "Control" ||
        event.key === "Alt" ||
        event.key === "Meta" ||
        event.key === "CapsLock" ||
        event.repeat
      ) {
        return;
      }

      createKeyboardSound();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [createKeyboardSound, enabled]);

  useEffect(() => {
    return () => {
      if (audioContextRef.current) {
        void audioContextRef.current.close();
        audioContextRef.current = null;
      }
    };
  }, []);

  return null;
}