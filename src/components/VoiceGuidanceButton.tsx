import React from "react";
import { Volume2, VolumeX, Sparkles } from "lucide-react";
import { useVoiceGuidance } from "@/hooks/useVoiceGuidance";

export interface VoiceGuidanceButtonProps {
  fieldId: string;
  spokenText: { en: string; ta: string } | string;
  lang?: string;
  speakingField?: string | null;
  onSpeak?: (text: string, lang: string, fieldId: string) => void;
  className?: string;
  size?: "xs" | "sm" | "md";
  showLabel?: boolean;
  label?: { en: string; ta: string } | string;
  title?: string;
}

export const VoiceGuidanceButton: React.FC<VoiceGuidanceButtonProps> = ({
  fieldId,
  spokenText,
  lang = "ta",
  speakingField: controlledSpeakingField,
  onSpeak: controlledSpeak,
  className = "",
  size = "sm",
  showLabel = false,
  label,
  title,
}) => {
  const internalVoice = useVoiceGuidance();

  const isControlled = controlledSpeakingField !== undefined && controlledSpeak !== undefined;
  const isSpeaking = isControlled
    ? controlledSpeakingField === fieldId
    : internalVoice.speakingField === fieldId;

  const currentLang = lang.toLowerCase().startsWith("ta") ? "ta" : "en";
  const instructionText =
    typeof spokenText === "string"
      ? spokenText
      : spokenText[currentLang] || spokenText.en || spokenText.ta;

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (isControlled && controlledSpeak) {
      controlledSpeak(instructionText, currentLang, fieldId);
    } else {
      if (internalVoice.speakingField === fieldId) {
        internalVoice.stopGuidance();
      } else {
        internalVoice.handleFocusGuidance(fieldId, instructionText, currentLang);
      }
    }
  };

  const defaultTitle =
    currentLang === "ta"
      ? isSpeaking
        ? "குரல் வழிகாட்டலை நிறுத்த கிளிக் செய்க"
        : "குரல் வழிகாட்டலை கேட்க கிளிக் செய்க"
      : isSpeaking
      ? "Click to stop voice guidance"
      : "Click to hear voice guidance";

  const sizeClasses = {
    xs: "h-5 w-5 p-0.5 text-[10px]",
    sm: "h-6 w-6 p-1 text-xs",
    md: "h-7 w-7 p-1.5 text-sm",
  }[size];

  const iconSizes = {
    xs: "h-3 w-3",
    sm: "h-3.5 w-3.5",
    md: "h-4 w-4",
  }[size];

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label={title || defaultTitle}
      title={title || defaultTitle}
      className={`inline-flex items-center justify-center gap-1 rounded-full transition-all focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/50 cursor-pointer ${
        isSpeaking
          ? "bg-emerald-500 text-white shadow-sm ring-3 ring-emerald-300 animate-pulse scale-105"
          : "bg-primary/10 text-primary hover:bg-primary/20 hover:scale-105 active:scale-95"
      } ${sizeClasses} ${className}`}
    >
      {isSpeaking ? (
        <Volume2 className={`${iconSizes} animate-bounce`} />
      ) : (
        <Volume2 className={iconSizes} />
      )}

      {showLabel && (
        <span className="text-[10px] font-semibold pr-1">
          {label
            ? typeof label === "string"
              ? label
              : label[currentLang]
            : currentLang === "ta"
            ? isSpeaking
              ? "நிறுத்து"
              : "கேட்க"
            : isSpeaking
            ? "Stop"
            : "Listen"}
        </span>
      )}
    </button>
  );
};
