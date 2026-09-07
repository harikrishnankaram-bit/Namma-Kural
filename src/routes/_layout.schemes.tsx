import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Search, ExternalLink, ChevronDown, ChevronUp, AlertCircle, CheckCircle2, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { MOCK_SCHEMES } from "@/data/mock";
import type { Scheme } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export const Route = createFileRoute("/_layout/schemes")({
  component: SchemesPage,
});

function SchemeCard({ scheme, expanded, onToggle }: { scheme: Scheme; expanded: boolean; onToggle: () => void }) {
  const { t, bi } = useI18n();
  return (
    <div className="rounded-2xl border border-slate-200 bg-white shadow-soft overflow-hidden">
      <button
        className="w-full flex items-start justify-between gap-4 p-5 text-left hover:bg-slate-50 transition-colors cursor-pointer"
        onClick={onToggle}
      >
        <div className="flex-1">
          <Badge variant="secondary" className="mb-2 text-xs font-bold bg-amber-100 text-amber-900 border-0">{bi(scheme.tag)}</Badge>
          <h3 className="font-black text-slate-950 text-base sm:text-lg">{bi(scheme.name)}</h3>
          <p className="text-sm text-slate-700 font-medium mt-1 line-clamp-2">{bi(scheme.overview)}</p>
        </div>
        {expanded ? <ChevronUp className="h-5 w-5 text-slate-600 shrink-0 mt-1" /> : <ChevronDown className="h-5 w-5 text-slate-600 shrink-0 mt-1" />}
      </button>

      {expanded && (
        <div className="border-t border-slate-200 px-5 pb-5 bg-white">
          <Tabs defaultValue="overview" className="mt-4">
            <TabsList className="w-full justify-start overflow-x-auto bg-slate-100 p-1 rounded-xl">
              <TabsTrigger value="overview" className="text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary">{t("schemes.overview")}</TabsTrigger>
              <TabsTrigger value="benefits" className="text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary">{t("schemes.benefits")}</TabsTrigger>
              <TabsTrigger value="eligibility" className="text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary">{t("schemes.eligibility")}</TabsTrigger>
              <TabsTrigger value="documents" className="text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary">{t("schemes.documents")}</TabsTrigger>
              <TabsTrigger value="process" className="text-xs font-bold text-slate-800 data-[state=active]:bg-white data-[state=active]:text-primary">{t("schemes.process")}</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="mt-4 text-sm text-slate-800 font-medium leading-relaxed">{bi(scheme.overview)}</TabsContent>
            <TabsContent value="benefits" className="mt-4">
              <ul className="space-y-2">{scheme.benefits.map((b, i) => <li key={i} className="flex gap-2 text-sm text-slate-800 font-medium"><CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-0.5" />{bi(b)}</li>)}</ul>
            </TabsContent>
            <TabsContent value="eligibility" className="mt-4">
              <ul className="space-y-2">{scheme.eligibility.map((e, i) => <li key={i} className="flex gap-2 text-sm text-slate-800 font-medium"><CheckCircle2 className="h-4 w-4 text-primary shrink-0 mt-0.5" />{bi(e)}</li>)}</ul>
            </TabsContent>
            <TabsContent value="documents" className="mt-4">
              <ul className="space-y-2">{scheme.documents.map((d, i) => <li key={i} className="flex gap-2 text-sm text-slate-800 font-medium"><span className="h-4 w-4 shrink-0 mt-0.5 flex items-center justify-center rounded-full bg-slate-200 text-slate-900 text-[10px] font-bold">{i+1}</span>{bi(d)}</li>)}</ul>
            </TabsContent>
            <TabsContent value="process" className="mt-4">
              <ol className="space-y-3">{scheme.process.map((p, i) => <li key={i} className="flex gap-3 text-sm text-slate-800 font-medium"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary text-[10px] font-bold shrink-0">{i+1}</span>{bi(p)}</li>)}</ol>
            </TabsContent>
          </Tabs>
          <div className="flex gap-3 mt-5 border-t border-slate-200 pt-4">
            <a href={scheme.source} target="_blank" rel="noopener noreferrer">
              <Button variant="outline" size="sm" className="gap-1.5 text-xs font-bold text-slate-900 border-slate-300">
                <ExternalLink className="h-3.5 w-3.5" /> {t("schemes.source")}
              </Button>
            </a>
            <a href={scheme.source} target="_blank" rel="noopener noreferrer">
              <Button size="sm" className="gap-1.5 text-xs font-bold bg-primary hover:bg-primary/90 text-white">
                {t("schemes.apply")} <ArrowRight className="h-3.5 w-3.5" />
              </Button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

function SchemeFinderWizard({ onResults }: { onResults: (ids: string[]) => void; onClose: () => void }) {
  const { t, bi } = useI18n();
  const [age, setAge] = useState("");
  const [gender, setGender] = useState<"male" | "female" | "">("");
  const [income, setIncome] = useState("");
  const [occupation, setOccupation] = useState("");

  const find = () => {
    const ageNum = parseInt(age, 10);
    const incNum = parseInt(income.replace(/,/g, ""), 10);
    const results = MOCK_SCHEMES.filter((s) => {
      const c = s.criteria;
      if (!c) return false;
      if (c.minAge && ageNum < c.minAge) return false;
      if (c.maxAge && ageNum > c.maxAge) return false;
      if (c.gender && c.gender !== "any" && gender && c.gender !== gender) return false;
      if (c.maxIncome && incNum > 0 && incNum > c.maxIncome) return false;
      return true;
    }).map((s) => s.id);
    onResults(results);
  };

  return (
    <div className="rounded-2xl border-2 border-primary/40 bg-white p-6 space-y-5 mb-6 shadow-sm">
      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary text-white text-sm font-bold">?</div>
        <h2 className="font-black text-slate-950">{t("schemes.finder")}</h2>
      </div>
      <div className="flex items-start gap-2 text-xs text-amber-900 bg-amber-50 border border-amber-200 rounded-xl p-3 font-semibold">
        <AlertCircle className="h-4 w-4 shrink-0 mt-0.5 text-amber-600" />
        {t("schemes.disclaimer")}
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-900">{t("schemes.q.age")}</Label>
          <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="e.g. 28" className="text-slate-950 font-bold bg-white border-slate-300" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-900">{t("schemes.q.gender")}</Label>
          <RadioGroup value={gender} onValueChange={(v) => setGender(v as "male" | "female")} className="flex gap-4">
            <div className="flex items-center gap-1.5"><RadioGroupItem value="male" id="g-m" /><Label htmlFor="g-m" className="text-sm font-bold text-slate-900">{bi({ en: "Male", ta: "ஆண்" })}</Label></div>
            <div className="flex items-center gap-1.5"><RadioGroupItem value="female" id="g-f" /><Label htmlFor="g-f" className="text-sm font-bold text-slate-900">{bi({ en: "Female", ta: "பெண்" })}</Label></div>
          </RadioGroup>
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-900">{t("schemes.q.income")}</Label>
          <Input type="number" value={income} onChange={(e) => setIncome(e.target.value)} placeholder="e.g. 150000" className="text-slate-950 font-bold bg-white border-slate-300" />
        </div>
        <div className="space-y-1.5">
          <Label className="text-xs font-bold text-slate-900">{t("schemes.q.occupation")}</Label>
          <Select onValueChange={setOccupation}>
            <SelectTrigger className="text-slate-950 font-bold bg-white border-slate-300"><SelectValue placeholder={bi({ en: "Select…", ta: "தேர்ந்தெடு…" })} /></SelectTrigger>
            <SelectContent>
              <SelectItem value="salaried">{bi({ en: "Salaried", ta: "சம்பளதாரர்" })}</SelectItem>
              <SelectItem value="self_employed">{bi({ en: "Self Employed", ta: "சுயதொழில்" })}</SelectItem>
              <SelectItem value="daily_wage">{bi({ en: "Daily Wage", ta: "தினக்கூலி" })}</SelectItem>
              <SelectItem value="student">{bi({ en: "Student", ta: "மாணவர்" })}</SelectItem>
              <SelectItem value="retired">{bi({ en: "Retired / Senior", ta: "ஓய்வு / மூத்தோர்" })}</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <Button onClick={find} className="gap-2 font-bold bg-primary hover:bg-primary/90 text-white">{t("schemes.finder")} <ArrowRight className="h-4 w-4" /></Button>
    </div>
  );
}

function SchemesPage() {
  const { t, bi, lang } = useI18n();
  const [expanded, setExpanded] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [finderResults, setFinderResults] = useState<string[] | null>(null);
  const [showFinder, setShowFinder] = useState(false);

  const schemes = finderResults
    ? MOCK_SCHEMES.filter((s) => finderResults.includes(s.id))
    : MOCK_SCHEMES.filter((s) =>
        bi(s.name).toLowerCase().includes(search.toLowerCase()) ||
        bi(s.tag).toLowerCase().includes(search.toLowerCase()),
      );

  return (
    <div className="mx-auto max-w-4xl px-6 py-10 my-6 bg-white/95 backdrop-blur-md rounded-3xl shadow-2xl border border-slate-200 text-slate-950">
      <h1 className="text-2xl sm:text-3xl font-black text-slate-950 mb-1 font-display">{t("schemes.title")}</h1>
      <p className="text-sm text-slate-800 font-semibold mb-6">
        {lang === "ta"
          ? "திருச்செங்கோடு தொகுதி மக்களுக்கான அரசு நலத்திட்டங்கள்"
          : "Official Government Welfare Schemes & Citizen Initiatives"}
      </p>

      <div className="flex gap-3 mb-6 flex-wrap">
        <div className="relative flex-1 min-w-40">
          <Input
            value={search}
            onChange={(e) => { setSearch(e.target.value); setFinderResults(null); }}
            placeholder={t("common.search")}
            className="pl-9 text-slate-950 font-semibold bg-white border-slate-300 placeholder:text-slate-400"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
        </div>
        <Button
          variant={showFinder ? "default" : "outline"}
          onClick={() => { setShowFinder((s) => !s); setFinderResults(null); }}
          className="gap-2 font-bold text-slate-900 border-slate-300 bg-white hover:bg-slate-100"
        >
          {t("schemes.finder")}
        </Button>
      </div>

      {showFinder && (
        <SchemeFinderWizard
          onResults={(ids) => { setFinderResults(ids); setShowFinder(false); }}
          onClose={() => setShowFinder(false)}
        />
      )}

      {finderResults !== null && (
        <div className="mb-4 flex items-center gap-2">
          <Badge className="bg-green-100 text-green-700 border-0">{t("schemes.relevant")}</Badge>
          <span className="text-sm text-muted-foreground">{schemes.length} results</span>
          <Button variant="ghost" size="sm" onClick={() => setFinderResults(null)}>{t("common.close")}</Button>
        </div>
      )}

      <div className="space-y-4">
        {schemes.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <p className="font-medium">{t("common.notFound")}</p>
          </div>
        ) : (
          schemes.map((s) => (
            <SchemeCard
              key={s.id}
              scheme={s}
              expanded={expanded === s.id}
              onToggle={() => setExpanded(expanded === s.id ? null : s.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}
