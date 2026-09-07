import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Mic, ChevronDown } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  role: "user" | "assistant";
  text: string;
}

// Mock AI service — replace body with real API call
function getMockResponse(question: string, lang: "en" | "ta"): string {
  const q = question.toLowerCase();
  if (q.includes("road") || q.includes("சாலை")) {
    return lang === "ta"
      ? "சாலை பிரச்சினையை பதிவு செய்ய 'பிரச்சினையை பதிவு செய்' பட்டனை கிளிக் செய்து 'சாலை' வகையை தேர்வு செய்யுங்கள். புகைப்படம் மற்றும் இடத்தை சேர்க்கலாம்."
      : "To report a road issue, click 'Report an Issue', select the 'Road' category, describe the problem, add a photo and your location. You'll receive a complaint ID.";
  }
  if (q.includes("track") || q.includes("complaint") || q.includes("புகார்") || q.includes("கண்காணி")) {
    return lang === "ta"
      ? "உங்கள் புகார் எண்ணை 'எனது புகாரை கண்காணி' பக்கத்தில் உள்ளிடுங்கள். உதாரணம்: NK-2026-000245"
      : "Go to 'Track My Issue' and enter your complaint ID (e.g. NK-2026-000245) to see live status and timeline.";
  }
  if (q.includes("scheme") || q.includes("திட்ட") || q.includes("document") || q.includes("ஆவண")) {
    return lang === "ta"
      ? "அரசு திட்டங்கள் பக்கத்தில் 'எனக்கான திட்டங்களை கண்டறி' பொத்தானை கிளிக் செய்து வயது, வருமானம் போன்றவற்றை உள்ளிடுங்கள். பொருந்தக்கூடிய திட்டங்களை காண்பிப்போம்."
      : "Visit 'Government Schemes', click 'Find Schemes for Me', and answer a few simple questions. We'll show potentially relevant schemes with required documents.";
  }
  if (q.includes("appointment") || q.includes("mla") || q.includes("சந்திப்பு") || q.includes("எம்.எல்.ஏ")) {
    return lang === "ta"
      ? "'எம்.எல்.ஏ.வை சந்திக்க' பக்கத்திற்கு சென்று சந்திப்பு கோரிக்கை படிவத்தை நிரப்புங்கள். உங்கள் நோக்கம், விரும்பிய தேதி மற்றும் விவரங்களை குறிப்பிடுங்கள்."
      : "Go to 'Meet Your MLA', fill the appointment request form with your purpose, preferred date, and details. You'll receive an appointment ID to track status.";
  }
  if (q.includes("department") || q.includes("துறை") || q.includes("water") || q.includes("குடிநீர்")) {
    return lang === "ta"
      ? "நீர் பிரச்சினைகள் — குடிநீர் வாரியம் | சாலை — நெடுஞ்சாலை துறை | மின்சாரம் — மின்சார வாரியம் | கழிவு — திடக்கழிவு மேலாண்மை | வடிகால் — மழைநீர் துறை"
      : "Water issues → Water Supply Board | Road → Highways & Roads | Electricity → Electricity Board | Waste → Solid Waste Management | Drainage → Storm Water & Drainage";
  }
  return lang === "ta"
    ? "நன்றி! புகார் பதிவு, கண்காணிப்பு, அரசு திட்டங்கள், அல்லது சந்திப்பு பதிவு பற்றி கேளுங்கள். நான் உதவுவேன்."
    : "Thank you for asking! I can help with complaint registration, tracking, government schemes, appointment booking, or department information. What do you need?";
}

export function AiAssistant() {
  const { t, lang } = useI18n();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  const PROMPTS = [t("ai.p1"), t("ai.p2"), t("ai.p3"), t("ai.p4")];

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: Message = { id: Date.now().toString(), role: "user", text };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setLoading(true);
    // Simulate async AI call
    await new Promise((r) => setTimeout(r, 800));
    const reply: Message = {
      id: (Date.now() + 1).toString(),
      role: "assistant",
      text: getMockResponse(text, lang),
    };
    setMessages((m) => [...m, reply]);
    setLoading(false);
  };

  return (
    <>
      {/* Floating button */}
      <button
        id="ai-assistant-toggle"
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 h-12 px-4 rounded-full bg-primary text-primary-foreground shadow-lift hover:scale-105 active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label="Ask NAMMA KURAL AI Assistant"
      >
        <MessageCircle className="h-5 w-5 shrink-0" />
        <span className="text-xs font-bold tracking-wide hidden sm:inline">
          {lang === "ta" ? "நம்ம குரல்-யிடம் கேளுங்கள்" : "Ask NAMMA KURAL"}
        </span>
        {open && <ChevronDown className="h-4 w-4 shrink-0" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-20 right-4 sm:right-6 z-50 flex w-[340px] max-w-[calc(100vw-2rem)] flex-col rounded-3xl border border-border bg-white shadow-lift overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between bg-primary px-4 py-3.5">
            <div className="flex items-center gap-2">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/20 text-white text-xs font-bold">
                NK
              </div>
              <div>
                <p className="text-sm font-bold text-primary-foreground">
                  {lang === "ta" ? "நம்ம குரல் AI உதவியாளர்" : "Ask NAMMA KURAL Assistant"}
                </p>
                <p className="text-[10px] text-primary-foreground/80">
                  {lang === "ta" ? "24/7 தொகுதி வழிகாட்டி" : "24/7 Constituency Civic Guide"}
                </p>
              </div>
            </div>
            <button onClick={() => setOpen(false)} className="text-primary-foreground/80 hover:text-primary-foreground p-1 rounded-lg hover:bg-white/10 transition-colors">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Messages */}
          <ScrollArea className="h-72 px-3 py-3">
            {messages.length === 0 && (
              <div className="space-y-2 pb-2">
                <p className="text-xs text-muted-foreground px-1">{t("ai.sub")}</p>
                <div className="space-y-1.5">
                  {PROMPTS.map((p) => (
                    <button
                      key={p}
                      onClick={() => sendMessage(p)}
                      className="w-full text-left rounded-xl border border-border bg-muted/50 px-3 py-2 text-xs hover:bg-muted transition-colors"
                    >
                      {p}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {messages.map((m) => (
              <div
                key={m.id}
                className={`mb-2 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3 py-2 text-xs leading-relaxed ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start mb-2">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-3 py-2">
                  <div className="flex gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:0ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:150ms]" />
                    <span className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-bounce [animation-delay:300ms]" />
                  </div>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </ScrollArea>

          {/* Input */}
          <div className="flex items-center gap-2 border-t px-3 py-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t("ai.placeholder")}
              className="flex-1 h-8 text-xs"
              onKeyDown={(e) => e.key === "Enter" && sendMessage(input)}
            />
            <Button size="icon" className="h-8 w-8 shrink-0" onClick={() => sendMessage(input)}>
              <Send className="h-3.5 w-3.5" />
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
