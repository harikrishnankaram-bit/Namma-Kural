import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { useI18n } from "@/lib/i18n";
import { useWorkflow, type AnnouncementItem, type SchemeItem, type DevelopmentWorkItem } from "@/lib/workflow";
import {
  Plus,
  Edit2,
  Trash2,
  Megaphone,
  FileText,
  Briefcase,
  Eye,
  CheckCircle2,
  MapPin,
  Calendar,
  Layers,
  Sparkles,
  RefreshCw,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

export const Route = createFileRoute("/_layout/console/content")({
  component: ContentAdminConsole,
});

function ContentAdminConsole() {
  const { t, bi, lang } = useI18n();
  const {
    fetchAnnouncements,
    createAnnouncement,
    updateAnnouncement,
    deleteAnnouncement,
    fetchSchemes,
    createScheme,
    fetchDevelopmentWorks,
    createDevelopmentWork,
    updateDevelopmentWork,
    deleteDevelopmentWork,
  } = useWorkflow();

  const [announcements, setAnnouncements] = useState<AnnouncementItem[]>([]);
  const [schemes, setSchemes] = useState<SchemeItem[]>([]);
  const [works, setWorks] = useState<DevelopmentWorkItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [toastMsg, setToastMsg] = useState("");

  // Create Announcement Modal
  const [showAnnModal, setShowAnnModal] = useState(false);
  const [annTitleEn, setAnnTitleEn] = useState("");
  const [annTitleTa, setAnnTitleTa] = useState("");
  const [annDescEn, setAnnDescEn] = useState("");
  const [annDescTa, setAnnDescTa] = useState("");
  const [annDate, setAnnDate] = useState(new Date().toISOString().split("T")[0]!);
  const [annTime, setAnnTime] = useState("10:00 AM");
  const [annLocation, setAnnLocation] = useState("Community Center, Ward 110");
  const [annCategory, setAnnCategory] = useState("health");

  // Create Scheme Modal
  const [showSchemeModal, setShowSchemeModal] = useState(false);
  const [schNameEn, setSchNameEn] = useState("");
  const [schNameTa, setSchNameTa] = useState("");
  const [schDept, setSchDept] = useState("works");
  const [schDescEn, setSchDescEn] = useState("");
  const [schDescTa, setSchDescTa] = useState("");
  const [schBenefits, setSchBenefits] = useState("");
  const [schEligibility, setSchEligibility] = useState("");
  const [schDocs, setSchDocs] = useState("");

  // Create Dev Work Modal
  const [showWorkModal, setShowWorkModal] = useState(false);
  const [workNameEn, setWorkNameEn] = useState("");
  const [workNameTa, setWorkNameTa] = useState("");
  const [workLocation, setWorkLocation] = useState("");
  const [workDept, setWorkDept] = useState("highways");
  const [workDescEn, setWorkDescEn] = useState("");
  const [workProgress, setWorkProgress] = useState(10);
  const [workExpected, setWorkExpected] = useState("2026-11-30");

  const loadAll = async () => {
    setLoading(true);
    try {
      const [aList, sList, wList] = await Promise.all([
        fetchAnnouncements(false),
        fetchSchemes(),
        fetchDevelopmentWorks(),
      ]);
      setAnnouncements(aList);
      setSchemes(sList);
      setWorks(wList);
    } catch (err) {
      console.error("Content load error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAll();
  }, []);

  const handleCreateAnnouncement = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!annTitleEn || !annDescEn) return;
    const res = await createAnnouncement({
      title: { en: annTitleEn, ta: annTitleTa || annTitleEn },
      description: { en: annDescEn, ta: annDescTa || annDescEn },
      date: annDate,
      time: annTime,
      location: annLocation,
      category: annCategory,
      published: true,
    });
    if (res.ok) {
      setToastMsg("Announcement published live!");
      setShowAnnModal(false);
      setAnnTitleEn("");
      setAnnTitleTa("");
      setAnnDescEn("");
      setAnnDescTa("");
      loadAll();
      setTimeout(() => setToastMsg(""), 2000);
    }
  };

  const handleCreateScheme = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!schNameEn || !schDescEn) return;
    const res = await createScheme({
      name: { en: schNameEn, ta: schNameTa || schNameEn },
      department: schDept,
      description: { en: schDescEn, ta: schDescTa || schDescEn },
      benefits: schBenefits.split("\n").filter((b) => b.trim()),
      eligibility: schEligibility.split("\n").filter((b) => b.trim()),
      documents: schDocs.split("\n").filter((b) => b.trim()),
      active: true,
    });
    if (res.ok) {
      setToastMsg("Scheme registered successfully!");
      setShowSchemeModal(false);
      setSchNameEn("");
      setSchDescEn("");
      loadAll();
      setTimeout(() => setToastMsg(""), 2000);
    }
  };

  const handleCreateWork = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!workNameEn || !workLocation) return;
    const res = await createDevelopmentWork({
      name: { en: workNameEn, ta: workNameTa || workNameEn },
      location: workLocation,
      department: workDept,
      description: { en: workDescEn, ta: workDescEn },
      startDate: new Date().toISOString().split("T")[0]!,
      expectedCompletion: workExpected,
      status: "in_progress",
      progressPercent: Number(workProgress),
      published: true,
    });
    if (res.ok) {
      setToastMsg("Development work published!");
      setShowWorkModal(false);
      setWorkNameEn("");
      setWorkLocation("");
      loadAll();
      setTimeout(() => setToastMsg(""), 2000);
    }
  };

  return (
    <div className="mx-auto max-w-6xl px-4 py-8 sm:py-10 space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-2xl">📢</span>
            <h1 className="text-2xl font-black text-foreground font-display">
              Constituency Content & Citizen Services
            </h1>
          </div>
          <p className="text-xs sm:text-sm text-muted-foreground">
            Manage live Announcements, Welfare Schemes, and Infrastructure Development Works for NAMMA KURAL Constituency.
          </p>
        </div>

        <Button variant="outline" size="sm" onClick={loadAll} className="rounded-xl text-xs font-bold gap-1 self-start sm:self-auto">
          <RefreshCw className={`h-3.5 w-3.5 ${loading ? "animate-spin" : ""}`} />
          <span>Sync Content</span>
        </Button>
      </div>

      {toastMsg && (
        <div className="p-3.5 rounded-2xl bg-emerald-100 text-emerald-800 text-xs font-bold flex items-center gap-2">
          <CheckCircle2 className="h-4 w-4 shrink-0" />
          <span>{toastMsg}</span>
        </div>
      )}

      <Tabs defaultValue="announcements" className="space-y-6">
        <TabsList className="bg-muted/70 p-1.5 rounded-2xl h-auto flex flex-wrap gap-1">
          <TabsTrigger value="announcements" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Megaphone className="h-3.5 w-3.5 mr-1.5" />
            Announcements ({announcements.length})
          </TabsTrigger>
          <TabsTrigger value="schemes" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <FileText className="h-3.5 w-3.5 mr-1.5" />
            Government Schemes ({schemes.length})
          </TabsTrigger>
          <TabsTrigger value="works" className="rounded-xl text-xs font-bold py-2.5 px-4 data-[state=active]:bg-white data-[state=active]:shadow-sm">
            <Briefcase className="h-3.5 w-3.5 mr-1.5" />
            Development Works ({works.length})
          </TabsTrigger>
        </TabsList>

        {/* ── TAB 1: ANNOUNCEMENTS ── */}
        <TabsContent value="announcements" className="space-y-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-border">
            <div>
              <h2 className="text-base font-bold text-foreground">Published Announcements</h2>
              <p className="text-xs text-muted-foreground">Appears immediately on the citizen homepage</p>
            </div>
            <Button onClick={() => setShowAnnModal(true)} size="sm" className="bg-primary text-white font-bold rounded-xl text-xs gap-1.5">
              <Plus className="h-4 w-4" /> Create Announcement
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {announcements.map((item) => (
              <Card key={item.announcementId} className="rounded-2xl border border-border bg-white shadow-sm overflow-hidden flex flex-col justify-between">
                <CardContent className="p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <Badge variant="secondary" className="text-[10px] font-bold uppercase">
                      {item.category}
                    </Badge>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {item.date} {item.time && `· ${item.time}`}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-foreground">{bi(item.title)}</h3>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-3">{bi(item.description)}</p>
                    {item.location && (
                      <p className="text-[11px] text-primary flex items-center gap-1 mt-2">
                        <MapPin className="h-3 w-3 shrink-0" />
                        <span>{item.location}</span>
                      </p>
                    )}
                  </div>
                  <div className="pt-2 border-t border-border/60 flex items-center justify-between text-xs">
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 border-emerald-200 text-[10px]">
                      Published
                    </Badge>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        if (confirm("Are you sure you want to delete this announcement?")) {
                          await deleteAnnouncement(item.announcementId);
                          loadAll();
                        }
                      }}
                      className="h-7 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-2 rounded-lg gap-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Delete</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── TAB 2: GOVERNMENT SCHEMES ── */}
        <TabsContent value="schemes" className="space-y-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-border">
            <div>
              <h2 className="text-base font-bold text-foreground">Welfare & Government Schemes</h2>
              <p className="text-xs text-muted-foreground">Detailed benefits, eligibility, and application guides</p>
            </div>
            <Button onClick={() => setShowSchemeModal(true)} size="sm" className="bg-primary text-white font-bold rounded-xl text-xs gap-1.5">
              <Plus className="h-4 w-4" /> Add Scheme
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {schemes.map((scheme) => (
              <Card key={scheme.schemeId} className="rounded-2xl border border-border bg-white shadow-sm p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="outline" className="text-[10px] font-bold uppercase">{scheme.department}</Badge>
                  <Badge className="bg-emerald-100 text-emerald-800 border-0 text-[10px]">Active</Badge>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground">{bi(scheme.name)}</h4>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{bi(scheme.description)}</p>
                </div>
                {scheme.benefits && scheme.benefits.length > 0 && (
                  <div className="p-3 rounded-xl bg-muted/30 text-xs space-y-1">
                    <p className="font-bold text-[10px] text-muted-foreground uppercase">Key Benefits:</p>
                    <ul className="list-disc pl-4 space-y-0.5 text-muted-foreground">
                      {scheme.benefits.slice(0, 2).map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* ── TAB 3: DEVELOPMENT WORKS ── */}
        <TabsContent value="works" className="space-y-4">
          <div className="flex justify-between items-center bg-white p-4 rounded-2xl border border-border">
            <div>
              <h2 className="text-base font-bold text-foreground">Constituency Development Projects</h2>
              <p className="text-xs text-muted-foreground">Track public works, road repairs, and infrastructure progress</p>
            </div>
            <Button onClick={() => setShowWorkModal(true)} size="sm" className="bg-primary text-white font-bold rounded-xl text-xs gap-1.5">
              <Plus className="h-4 w-4" /> Add Project
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {works.map((work) => (
              <Card key={work.workId} className="rounded-2xl border border-border bg-white shadow-sm p-5 space-y-3">
                <div className="flex items-center justify-between">
                  <Badge variant="secondary" className="text-[10px] font-bold uppercase">{work.department}</Badge>
                  <Badge className="bg-blue-100 text-blue-800 border-0 text-[10px] uppercase font-bold">{work.status.replace("_", " ")}</Badge>
                </div>
                <div>
                  <h4 className="font-bold text-base text-foreground">{bi(work.name)}</h4>
                  <p className="text-xs text-muted-foreground flex items-center gap-1 mt-1">
                    <MapPin className="h-3 w-3 text-primary shrink-0" />
                    <span>{work.location}</span>
                  </p>
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{bi(work.description)}</p>
                </div>
                <div className="space-y-1.5 pt-2 border-t border-border/60">
                  <div className="flex justify-between text-xs font-bold">
                    <span>Progress</span>
                    <span className="text-primary">{work.progressPercent}%</span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${work.progressPercent}%` }} />
                  </div>
                  <div className="pt-2 flex justify-end">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={async () => {
                        if (confirm("Are you sure you want to delete this development project?")) {
                          await deleteDevelopmentWork(work.workId);
                          loadAll();
                        }
                      }}
                      className="h-7 text-xs text-rose-600 hover:text-rose-700 hover:bg-rose-50 px-2 rounded-lg gap-1"
                    >
                      <Trash2 className="h-3.5 w-3.5" />
                      <span>Delete</span>
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* ── CREATE ANNOUNCEMENT MODAL ── */}
      <Dialog open={showAnnModal} onOpenChange={setShowAnnModal}>
        <DialogContent className="max-w-lg rounded-3xl p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold font-display">Create Announcement</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateAnnouncement} className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Title (English) *</Label>
                <Input value={annTitleEn} onChange={(e) => setAnnTitleEn(e.target.value)} placeholder="e.g. Free Eye Checkup Camp" className="h-10 rounded-xl text-xs" required />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Title (Tamil)</Label>
                <Input value={annTitleTa} onChange={(e) => setAnnTitleTa(e.target.value)} placeholder="இலவச கண் மருத்துவ முகாம்" className="h-10 rounded-xl text-xs" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Description *</Label>
              <Textarea value={annDescEn} onChange={(e) => setAnnDescEn(e.target.value)} rows={3} placeholder="Full event information..." className="text-xs rounded-xl" required />
            </div>
            <div className="grid grid-cols-3 gap-2">
              <div className="space-y-1">
                <Label className="text-xs font-bold">Date</Label>
                <Input type="date" value={annDate} onChange={(e) => setAnnDate(e.target.value)} className="h-10 rounded-xl text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold">Time</Label>
                <Input value={annTime} onChange={(e) => setAnnTime(e.target.value)} className="h-10 rounded-xl text-xs" />
              </div>
              <div className="space-y-1">
                <Label className="text-xs font-bold">Category</Label>
                <select value={annCategory} onChange={(e) => setAnnCategory(e.target.value)} className="h-10 w-full rounded-xl border bg-white text-xs px-2">
                  <option value="health">Health</option>
                  <option value="education">Education</option>
                  <option value="governance">Governance</option>
                  <option value="community">Community</option>
                </select>
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Location</Label>
              <Input value={annLocation} onChange={(e) => setAnnLocation(e.target.value)} className="h-10 rounded-xl text-xs" />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setShowAnnModal(false)} className="h-10 rounded-xl text-xs font-bold">
                Cancel
              </Button>
              <Button type="submit" className="h-10 rounded-xl text-xs font-bold bg-primary text-white">
                Publish Live
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* ── CREATE SCHEME MODAL ── */}
      <Dialog open={showSchemeModal} onOpenChange={setShowSchemeModal}>
        <DialogContent className="max-w-lg rounded-3xl p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold font-display">Add Government Scheme</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateScheme} className="space-y-4 pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Scheme Name (English) *</Label>
                <Input value={schNameEn} onChange={(e) => setSchNameEn(e.target.value)} placeholder="e.g. Free House Scheme" className="h-10 rounded-xl text-xs" required />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Department</Label>
                <Input value={schDept} onChange={(e) => setSchDept(e.target.value)} placeholder="works" className="h-10 rounded-xl text-xs" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Description *</Label>
              <Textarea value={schDescEn} onChange={(e) => setSchDescEn(e.target.value)} rows={2} className="text-xs rounded-xl" required />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Key Benefits (one per line)</Label>
              <Textarea value={schBenefits} onChange={(e) => setSchBenefits(e.target.value)} placeholder="Free house&#10;Subsidized power" rows={2} className="text-xs rounded-xl" />
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Eligibility (one per line)</Label>
              <Textarea value={schEligibility} onChange={(e) => setSchEligibility(e.target.value)} placeholder="Income below 2L&#10;Resident of TN" rows={2} className="text-xs rounded-xl" />
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setShowSchemeModal(false)} className="h-10 rounded-xl text-xs font-bold">
                Cancel
              </Button>
              <Button type="submit" className="h-10 rounded-xl text-xs font-bold bg-primary text-white">
                Save Scheme
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      {/* ── CREATE DEV WORK MODAL ── */}
      <Dialog open={showWorkModal} onOpenChange={setShowWorkModal}>
        <DialogContent className="max-w-lg rounded-3xl p-6 sm:p-8">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold font-display">Add Development Project</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleCreateWork} className="space-y-4 pt-2">
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Project Name *</Label>
              <Input value={workNameEn} onChange={(e) => setWorkNameEn(e.target.value)} placeholder="e.g. Road Relaying Work" className="h-10 rounded-xl text-xs" required />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Location *</Label>
                <Input value={workLocation} onChange={(e) => setWorkLocation(e.target.value)} placeholder="Ward 110" className="h-10 rounded-xl text-xs" required />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Department</Label>
                <Input value={workDept} onChange={(e) => setWorkDept(e.target.value)} placeholder="highways" className="h-10 rounded-xl text-xs" />
              </div>
            </div>
            <div className="space-y-1.5">
              <Label className="text-xs font-bold">Description</Label>
              <Textarea value={workDescEn} onChange={(e) => setWorkDescEn(e.target.value)} rows={2} className="text-xs rounded-xl" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Progress Percentage</Label>
                <Input type="number" min={0} max={100} value={workProgress} onChange={(e) => setWorkProgress(Number(e.target.value))} className="h-10 rounded-xl text-xs" />
              </div>
              <div className="space-y-1.5">
                <Label className="text-xs font-bold">Expected Completion</Label>
                <Input type="date" value={workExpected} onChange={(e) => setWorkExpected(e.target.value)} className="h-10 rounded-xl text-xs" />
              </div>
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button type="button" variant="outline" onClick={() => setShowWorkModal(false)} className="h-10 rounded-xl text-xs font-bold">
                Cancel
              </Button>
              <Button type="submit" className="h-10 rounded-xl text-xs font-bold bg-primary text-white">
                Publish Project
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
}
