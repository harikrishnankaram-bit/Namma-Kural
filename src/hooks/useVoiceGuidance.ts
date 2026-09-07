import { useState, useEffect, useCallback, useRef } from "react";

// Tamil number transliteration for smooth TTS reading if numbers are in speech string
const TAMIL_DIGITS: Record<string, string> = {
  "0": "பூஜ்யம்",
  "1": "ஒன்று",
  "2": "இரண்டு",
  "3": "மூன்று",
  "4": "நான்கு",
  "5": "ஐந்து",
  "6": "ஆறு",
  "7": "ஏழு",
  "8": "எட்டு",
  "9": "ஒன்பது",
};

export interface GuidanceTextMap {
  en: string;
  ta: string;
}

export function useVoiceGuidance() {
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [speakingField, setSpeakingField] = useState<string | null>(null);
  const currentUtteranceRef = useRef<SpeechSynthesisUtterance | null>(null);
  const lastFocusedFieldRef = useRef<string | null>(null);

  // Load voices from browser
  const loadVoices = useCallback(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return [];
    const available = window.speechSynthesis.getVoices();
    if (available && available.length > 0) {
      setVoices(available);
    }
    return available;
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return;

    loadVoices();
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = () => {
        loadVoices();
      };
    }

    return () => {
      if (typeof window !== "undefined" && "speechSynthesis" in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [loadVoices]);

  // Find the best voice matching language
  const getVoice = useCallback((langCode: string): SpeechSynthesisVoice | null => {
    if (typeof window === "undefined" || !("speechSynthesis" in window)) return null;
    const voiceList = window.speechSynthesis.getVoices().length > 0
      ? window.speechSynthesis.getVoices()
      : voices;

    if (!voiceList || voiceList.length === 0) return null;

    const isTamil = langCode.toLowerCase().startsWith("ta");

    if (isTamil) {
      // 1. Explicit Tamil (India) or Tamil tag
      const taIn = voiceList.find(
        (v) => v.lang.toLowerCase() === "ta-in" || v.lang.toLowerCase() === "ta_in"
      );
      if (taIn) return taIn;

      // 2. Any Tamil voice by code or name
      const anyTa = voiceList.find(
        (v) => v.lang.toLowerCase().startsWith("ta") || v.name.toLowerCase().includes("tamil")
      );
      if (anyTa) return anyTa;

      // 3. Any Indian localized voice fallback
      const inFallback = voiceList.find(
        (v) => v.lang.toLowerCase() === "en-in" || v.lang.toLowerCase() === "hi-in"
      );
      if (inFallback) return inFallback;

      return voiceList[0] || null;
    }

    // English: Prefer Indian English, then US/UK English
    const enIn = voiceList.find(
      (v) => v.lang.toLowerCase() === "en-in" || v.lang.toLowerCase() === "en_in"
    );
    if (enIn) return enIn;

    const enUs = voiceList.find(
      (v) => v.lang.toLowerCase() === "en-us" || v.lang.toLowerCase() === "en_us"
    );
    if (enUs) return enUs;

    const anyEn = voiceList.find((v) => v.lang.toLowerCase().startsWith("en"));
    return anyEn || voiceList[0] || null;
  }, [voices]);

  const stopGuidance = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setSpeakingField(null);
    currentUtteranceRef.current = null;
  }, []);

  /**
   * Speak instruction automatically when a field receives focus
   */
  const handleFocusGuidance = useCallback(
    (fieldKey: string, textOrMap: string | GuidanceTextMap, lang: string = "en") => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        return;
      }

      // If user is already on this field and it's active, don't restart repeatedly
      if (lastFocusedFieldRef.current === fieldKey && speakingField === fieldKey) {
        return;
      }
      lastFocusedFieldRef.current = fieldKey;

      // Cancel any ongoing speech from previous field immediately
      window.speechSynthesis.cancel();

      const isTamil = lang.toLowerCase().startsWith("ta");
      let textToSpeak = typeof textOrMap === "string" 
        ? textOrMap 
        : (isTamil ? textOrMap.ta : textOrMap.en);

      if (!textToSpeak || !textToSpeak.trim()) return;

      const targetLangTag = isTamil ? "ta-IN" : "en-IN";
      const selectedVoice = getVoice(targetLangTag);

      // Transliterate digits in Tamil if present
      if (isTamil) {
        textToSpeak = textToSpeak.replace(/\d+/g, (match) =>
          match.split("").map((d) => TAMIL_DIGITS[d] ?? d).join(" ")
        );
      }

      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      utterance.lang = targetLangTag;
      if (selectedVoice) {
        utterance.voice = selectedVoice;
      }

      utterance.rate = isTamil ? 0.92 : 0.98;
      utterance.pitch = 1.0;

      utterance.onstart = () => {
        setSpeakingField(fieldKey);
      };

      utterance.onend = () => {
        setSpeakingField((curr) => (curr === fieldKey ? null : curr));
        currentUtteranceRef.current = null;
      };

      utterance.onerror = (e) => {
        if (e.error !== "canceled" && e.error !== "interrupted") {
          console.warn("Voice guidance notice:", e.error);
        }
        setSpeakingField((curr) => (curr === fieldKey ? null : curr));
        currentUtteranceRef.current = null;
      };

      currentUtteranceRef.current = utterance;
      window.speechSynthesis.speak(utterance);
    },
    [getVoice, speakingField]
  );

  return {
    speakingField,
    isSpeaking: speakingField !== null,
    handleFocusGuidance,
    stopGuidance,
  };
}

