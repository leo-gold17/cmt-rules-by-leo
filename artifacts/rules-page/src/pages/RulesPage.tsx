import {
  ExternalLink,
  ShieldCheck,
  Users,
  Scale,
  Fingerprint,
  Handshake,
  ShieldAlert,
  MessageSquareText,
  Crown,
  ShieldHalf,
  Hash,
  AlertCircle,
  Timer,
  UserX,
  UserMinus,
  Eye,
} from "lucide-react";
import { useEffect, useState } from "react";

const DISCORD_INVITE = "https://discord.gg/qmrbA5WDdV";
const COUNTER_NAMESPACE = "anikage-rules-page";
const COUNTER_KEY = "total-views";

function formatCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toLocaleString();
}

function SiteStats() {
  const [totalViews, setTotalViews] = useState<number | null>(null);

  useEffect(() => {
    fetch(`https://api.counterapi.dev/v1/${COUNTER_NAMESPACE}/${COUNTER_KEY}/up`)
      .then((r) => r.json())
      .then((data) => {
        if (typeof data?.count === "number") setTotalViews(data.count);
      })
      .catch(() => {});
  }, []);

  return (
    <div
      className="rounded-2xl px-6 py-5 flex items-center justify-center gap-3 mt-8"
      style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(139,92,246,0.05) 100%)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(99,102,241,0.18)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(99,102,241,0.06)",
      }}
    >
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
        style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.28)" }}
      >
        <Eye className="w-4 h-4 text-indigo-400" />
      </div>
      <div className="text-left">
        <p className="text-white/80 font-bold text-xl leading-none tabular-nums">
          {totalViews === null ? (
            <span className="inline-block w-12 h-5 rounded bg-white/10 animate-pulse align-middle" />
          ) : (
            formatCount(totalViews)
          )}
        </p>
        <p className="text-indigo-400/60 text-xs mt-0.5 font-medium">Total Page Views</p>
      </div>
    </div>
  );
}

const glass = (colorRgb = "255,255,255", opacity = 0.05, blur = 20) => ({
  background: `rgba(${colorRgb}, ${opacity})`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: "1px solid rgba(255,255,255,0.09)",
  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 8px 32px rgba(0,0,0,0.25)",
});

const glassColored = (colorRgb: string, blur = 20) => ({
  background: `linear-gradient(135deg, rgba(${colorRgb}, 0.09) 0%, rgba(255,255,255,0.03) 100%)`,
  backdropFilter: `blur(${blur}px)`,
  WebkitBackdropFilter: `blur(${blur}px)`,
  border: `1px solid rgba(${colorRgb}, 0.2)`,
  boxShadow: `inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(${colorRgb}, 0.06)`,
});

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const rules = [
  {
    id: 1,
    category: "General Conduct",
    icon: <Users className="w-4 h-4" />,
    rgb: "96,165,250",
    accent: "text-blue-400",
    tagStyle: { background: "rgba(96,165,250,0.12)", border: "1px solid rgba(96,165,250,0.2)", color: "#93c5fd" },
    items: [
      { title: "Be Respectful", description: "Treat all community members with respect. Personal attacks, harassment, hate speech, or discriminatory language based on race, gender, sexuality, religion, nationality, or any other identity is strictly prohibited." },
      { title: "No Bullying or Harassment", description: "Do not target, bully, intimidate, or repeatedly follow users with the intent to make them feel unwelcome. This includes DMing users with harassment after being told to stop." },
      { title: "Keep it Civil", description: "Healthy debate about anime, characters, or story arcs is encouraged. Keep discussions civil. Arguing aggressively or turning debates into personal attacks will not be tolerated." },
      { title: "No Hate Speech", description: "Content that promotes violence, dehumanizes, or demeans any individual or group based on protected characteristics — race, ethnicity, religion, gender, sexual orientation, disability, etc. — is banned." },
    ],
  },
  {
    id: 2,
    category: "Comment Content",
    icon: <MessageSquareText className="w-4 h-4" />,
    rgb: "168,85,247",
    accent: "text-purple-400",
    tagStyle: { background: "rgba(168,85,247,0.12)", border: "1px solid rgba(168,85,247,0.2)", color: "#c4b5fd" },
    items: [
      { title: "No Spam or Flooding", description: "Do not post the same comment multiple times, post irrelevant content, or flood sections with low-effort posts. This includes excessive use of emojis or repeated characters." },
      { title: "No Spoilers Without Warning", description: "Always clearly label comments with [SPOILER] when discussing plot points, endings, or any content that could ruin the experience for others who haven't watched yet." },
      { title: "Stay On Topic", description: "Keep comments relevant to the anime episode, movie, or content being discussed. Off-topic conversations should be taken to the appropriate community channels." },
      { title: "No Advertising or Self-Promotion", description: "Unsolicited promotion of other websites, channels, Discord servers, social media, or external services is not allowed unless explicitly permitted by site staff." },
      { title: "No NSFW Content", description: "Sexually explicit content, graphic violence descriptions, or any adult-only material is strictly forbidden in comments, regardless of context. Keep the community safe for all ages." },
    ],
  },
  {
    id: 3,
    category: "Misinformation & Piracy",
    icon: <ShieldAlert className="w-4 h-4" />,
    rgb: "234,179,8",
    accent: "text-yellow-400",
    tagStyle: { background: "rgba(234,179,8,0.12)", border: "1px solid rgba(234,179,8,0.2)", color: "#fde047" },
    items: [
      { title: "No Misinformation", description: "Do not deliberately spread false information about anime releases, studios, voice actors, or any other topics. If unsure, verify before posting." },
      { title: "No Piracy Links", description: "Sharing, requesting, or promoting illegal download links, torrents, or piracy sites for anime content is strictly prohibited and will result in an immediate ban." },
      { title: "No Fake Accounts or Impersonation", description: "Creating accounts to impersonate other users, staff members, or public figures is forbidden and will result in immediate account removal." },
    ],
  },
  {
    id: 4,
    category: "Username & Profile",
    icon: <Fingerprint className="w-4 h-4" />,
    rgb: "52,211,153",
    accent: "text-emerald-400",
    tagStyle: { background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.2)", color: "#6ee7b7" },
    items: [
      { title: "Appropriate Usernames", description: "Usernames must not contain offensive language, slurs, or impersonation of other users. Staff reserve the right to request a change or take action if a name violates guidelines." },
      { title: "No Offensive Avatars or Profiles", description: "Profile pictures and banners must not contain nudity, graphic violence, hate symbols, or any other content that violates these rules." },
    ],
  },
  {
    id: 5,
    category: "Staff Interactions",
    icon: <Scale className="w-4 h-4" />,
    rgb: "248,113,113",
    accent: "text-red-400",
    tagStyle: { background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.2)", color: "#fca5a5" },
    items: [
      { title: "Respect Staff Decisions", description: "Moderator and admin decisions are final in comment sections. Do not argue publicly with staff. If you believe a decision was unfair, use the Discord appeal process." },
      { title: "No Mod Impersonation", description: "Do not claim to be a moderator or staff member if you are not. Do not threaten users with moderator actions you cannot take." },
      { title: "Report, Don't Retaliate", description: "If you witness rule-breaking, report it using the report feature. Do not engage in retaliatory behavior or try to resolve the situation yourself." },
    ],
  },
  {
    id: 6,
    category: "Positive Community",
    icon: <Handshake className="w-4 h-4" />,
    rgb: "244,114,182",
    accent: "text-pink-400",
    tagStyle: { background: "rgba(244,114,182,0.12)", border: "1px solid rgba(244,114,182,0.2)", color: "#f9a8d4" },
    items: [
      { title: "Welcome New Members", description: "Be welcoming to new community members. Everyone started as a newcomer. Help create an inclusive environment where people feel comfortable sharing their love of anime." },
      { title: "Constructive Criticism Only", description: "You can dislike an anime or a recommendation. Express it constructively. Insulting users for their taste or preferences is not acceptable." },
      { title: "Support Mental Health", description: "If a discussion touches on mental health topics, be sensitive. Do not mock, minimize, or exploit anyone's personal struggles." },
    ],
  },
];

const penalties = [
  {
    level: "Warning",
    icon: <AlertCircle className="w-4 h-4" />,
    rgb: "234,179,8",
    accent: "text-yellow-400",
    labelColor: "#fde047",
    description: "First-time or minor violations. A formal warning will be issued. Repeated warnings lead to escalation.",
  },
  {
    level: "Temporary Mute",
    icon: <Timer className="w-4 h-4" />,
    rgb: "251,146,60",
    accent: "text-orange-400",
    labelColor: "#fdba74",
    description: "Ability to comment is restricted for a set period (hours to days) based on severity and history.",
  },
  {
    level: "Temporary Ban",
    icon: <UserX className="w-4 h-4" />,
    rgb: "248,113,113",
    accent: "text-red-400",
    labelColor: "#fca5a5",
    description: "Account is suspended from the site for a defined period. Applied for more serious or repeated violations.",
  },
  {
    level: "Permanent Ban",
    icon: <UserMinus className="w-4 h-4" />,
    rgb: "185,28,28",
    accent: "text-red-600",
    labelColor: "#f87171",
    description: "Permanent removal from the community. Reserved for severe violations, hate speech, piracy, or users who continuously break rules after multiple warnings.",
  },
];

const admins = [
  { name: "Leo (The Goat)", role: "Head Staff • Comments Section & Community Admin" },
  { name: "Lucky", role: "Head Staff • Site Contributor" },
  { name: "Verxix", role: "Head Staff • Content & Site" },
  { name: "Spike", role: "Head Staff • Designer" },
];

const mods = [
  { name: "Zero", role: "Senior Admin" },
  { name: "Shadow Jp", role: "Comment Moderator" },
  ];

function GlassCard({ children, style, className = "" }: { children: React.ReactNode; style?: React.CSSProperties; className?: string }) {
  return (
    <div
      className={`rounded-2xl ${className}`}
      style={{ ...glass(), ...style }}
    >
      {children}
    </div>
  );
}

export default function RulesPage() {
  return (
    <div className="min-h-screen text-gray-100 font-sans relative overflow-x-hidden" style={{ background: "#070711" }}>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-15%] left-[-8%] w-[700px] h-[700px] rounded-full" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.22) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute top-[25%] right-[-12%] w-[600px] h-[600px] rounded-full" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.18) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-[5%] left-[15%] w-[500px] h-[500px] rounded-full" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 65%)", filter: "blur(70px)" }} />
        <div className="absolute bottom-[30%] right-[5%] w-[350px] h-[350px] rounded-full" style={{ background: "radial-gradient(circle, rgba(236,72,153,0.1) 0%, transparent 65%)", filter: "blur(60px)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">

        <header className="text-center mb-14">
          <div
            className="inline-flex items-center gap-2 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest"
            style={glass("99,102,241", 0.1, 16)}
          >
            <ShieldCheck className="w-3 h-3" />
            Community Guidelines
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent leading-tight pb-1">
            Comment Section Rules
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            To keep AniKage a welcoming and enjoyable place for all anime fans, please follow these community guidelines when participating in comment sections.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Last updated: March 2026 &nbsp;·&nbsp; Applies to all comment sections site-wide
          </p>
        </header>

        <div className="space-y-4">
          {rules.map((section) => (
            <div
              key={section.id}
              className="rounded-2xl p-5 sm:p-6"
              style={glassColored(section.rgb, 22)}
            >
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: `rgba(${section.rgb}, 0.15)`, border: `1px solid rgba(${section.rgb}, 0.25)`, backdropFilter: "blur(12px)" }}
                >
                  <span className={section.accent}>{section.icon}</span>
                </div>
                <h2 className={`text-base font-bold tracking-tight ${section.accent}`}>
                  {section.id}. {section.category}
                </h2>
              </div>
              <div className="space-y-4">
                {section.items.map((rule, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span
                      className="mt-0.5 text-xs font-bold rounded-lg px-1.5 py-0.5 h-fit shrink-0 tabular-nums"
                      style={{ ...section.tagStyle, backdropFilter: "blur(8px)" }}
                    >
                      {section.id}.{idx + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white/90 text-sm mb-0.5">{rule.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <section className="mt-10">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(248,113,113,0.12)", border: "1px solid rgba(248,113,113,0.22)", backdropFilter: "blur(12px)" }}>
              <Scale className="w-4 h-4 text-red-400" />
            </div>
            <h2 className="text-base font-bold tracking-tight text-white/90">Enforcement & Penalties</h2>
          </div>
          <p className="text-gray-500 text-sm mb-4 pl-11">
            Violations are handled at staff discretion. Severity depends on the nature, impact, and the user's history.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {penalties.map((penalty, i) => (
              <div
                key={i}
                className="rounded-xl p-4 flex gap-3 items-start"
                style={glassColored(penalty.rgb, 18)}
              >
                <div
                  className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: `rgba(${penalty.rgb}, 0.15)`, border: `1px solid rgba(${penalty.rgb}, 0.25)`, backdropFilter: "blur(8px)" }}
                >
                  <span className={penalty.accent}>{penalty.icon}</span>
                </div>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: penalty.labelColor }}>{penalty.level}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{penalty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10">
          <div
            className="rounded-2xl p-6 text-center"
            style={glassColored("99,102,241", 24)}
          >
            <div className="flex justify-center mb-4">
              <div
                className="rounded-2xl p-3"
                style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.25)", backdropFilter: "blur(16px)" }}
              >
                <DiscordIcon className="w-6 h-6 text-indigo-400" />
              </div>
            </div>
            <h3 className="text-lg font-bold text-white mb-2 tracking-tight">Timeout or Ban Appeal</h3>
            <p className="text-gray-400 text-sm max-w-lg mx-auto mb-5 leading-relaxed">
              If you believe a moderation action was applied in error, join our Discord server and head to the dedicated appeal channel to submit your case.
            </p>

            <div
              className="inline-flex items-start gap-3 rounded-xl px-4 py-3 mb-5 text-left mx-auto"
              style={{ background: "rgba(99,102,241,0.1)", border: "1px solid rgba(99,102,241,0.22)", backdropFilter: "blur(16px)" }}
            >
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                style={{ background: "rgba(99,102,241,0.2)", border: "1px solid rgba(99,102,241,0.3)", backdropFilter: "blur(8px)" }}
              >
                <Hash className="w-3.5 h-3.5 text-indigo-400" />
              </div>
              <div>
                <p className="text-indigo-300 font-bold text-sm">🚫│request-appeal</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed max-w-sm">Use this channel specifically for ban & timeout appeals. Include your username and a brief explanation of the situation.</p>
              </div>
            </div>

            <div>
              <a
                href={DISCORD_INVITE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-95"
                style={{ background: "rgba(99,102,241,0.55)", border: "1px solid rgba(99,102,241,0.4)", backdropFilter: "blur(16px)", boxShadow: "0 4px 20px rgba(99,102,241,0.25)" }}
              >
                <DiscordIcon className="w-4 h-4" />
                Join Discord to Appeal
                <ExternalLink className="w-3 h-3 opacity-60" />
              </a>
            </div>
            <p className="mt-3 text-xs text-gray-600">
              Appeals are reviewed by senior moderators within 24–72 hours.
            </p>
          </div>
        </section>

        <section className="mt-10">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ background: "rgba(250,204,21,0.12)", border: "1px solid rgba(250,204,21,0.22)", backdropFilter: "blur(12px)" }}>
              <Crown className="w-4 h-4 text-yellow-400" />
            </div>
            <h2 className="text-base font-bold tracking-tight text-white/90">Head Staff & Moderation Team</h2>
          </div>

          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3 pl-1">
              <Crown className="w-3 h-3 text-yellow-400/60" />
              <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400/60">Admins</p>
            </div>
            <div className="grid sm:grid-cols-3 gap-3">
              {admins.map((member, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3.5 flex items-center gap-3"
                  style={glassColored("250,204,21", 18)}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(250,204,21,0.12)", border: "1px solid rgba(250,204,21,0.22)", backdropFilter: "blur(8px)" }}
                  >
                    <Crown className="w-4 h-4 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-bold text-white/90 text-sm leading-tight">{member.name}</p>
                    <p className="text-yellow-400/55 text-xs mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3 pl-1">
              <ShieldHalf className="w-3 h-3 text-indigo-400/60" />
              <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400/60">Senior Admin & Comment Moderators Team</p>
            </div>
            <div className="grid sm:grid-cols-4 gap-3">
              {mods.map((member, i) => (
                <div
                  key={i}
                  className="rounded-xl p-3 flex items-center gap-2.5"
                  style={glassColored("99,102,241", 18)}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
                    style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.22)", backdropFilter: "blur(8px)" }}
                  >
                    <ShieldHalf className="w-3.5 h-3.5 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white/85 text-xs leading-tight">{member.name}</p>
                    <p className="text-indigo-400/50 text-xs mt-0.5">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-12">
          <SiteStats />

          <div
            className="rounded-2xl px-5 py-4 text-center mt-5 mb-5"
            style={glass("255,255,255", 0.03, 20)}
          >
            <p className="text-gray-500 text-xs leading-relaxed">
              These rules may be updated at any time. Continued use of AniKage constitutes acceptance of the current guidelines.
              Questions? Contact us via{" "}
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors underline underline-offset-2">
                Discord
              </a>.
            </p>
          </div>
          <p className="text-center text-xs text-gray-700">
            Made with <span className="text-pink-500/70">♥</span> by{" "}
            <span className="text-indigo-400/70 font-semibold">Leo</span>
          </p>
        </footer>

      </div>
    </div>
  );
}
