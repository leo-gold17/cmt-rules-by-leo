import { ExternalLink, AlertTriangle, ShieldCheck, Ban, Clock, MessageSquare, Users, Gavel, Heart, Crown, Shield, Hash } from "lucide-react";

const DISCORD_INVITE = "https://discord.gg/qmrbA5WDdV";

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
  </svg>
);

const rules = [
  {
    id: 1,
    category: "General Conduct",
    icon: <Users className="w-5 h-5" />,
    borderColor: "border-blue-400/25",
    glowColor: "rgba(96,165,250,0.08)",
    accent: "text-blue-400",
    tagBg: "bg-blue-500/15 text-blue-300",
    items: [
      {
        title: "Be Respectful",
        description:
          "Treat all community members with respect. Personal attacks, harassment, hate speech, or discriminatory language based on race, gender, sexuality, religion, nationality, or any other identity is strictly prohibited.",
      },
      {
        title: "No Bullying or Harassment",
        description:
          "Do not target, bully, intimidate, or repeatedly follow users with the intent to make them feel unwelcome. This includes DMing users with harassment after being told to stop.",
      },
      {
        title: "Keep it Civil",
        description:
          "Healthy debate about anime, characters, or story arcs is encouraged. However, keep discussions civil. Arguing aggressively or turning debates into personal attacks will not be tolerated.",
      },
      {
        title: "No Hate Speech",
        description:
          "Content that promotes violence, dehumanizes, or demeans any individual or group based on protected characteristics (race, ethnicity, religion, gender, sexual orientation, disability, etc.) is banned.",
      },
    ],
  },
  {
    id: 2,
    category: "Comment Content",
    icon: <MessageSquare className="w-5 h-5" />,
    borderColor: "border-purple-400/25",
    glowColor: "rgba(168,85,247,0.08)",
    accent: "text-purple-400",
    tagBg: "bg-purple-500/15 text-purple-300",
    items: [
      {
        title: "No Spam or Flooding",
        description:
          "Do not post the same comment multiple times, post irrelevant content, or flood comment sections with low-effort posts. This includes excessive use of emojis or repeated characters.",
      },
      {
        title: "No Spoilers Without Warning",
        description:
          "Always use a spoiler tag or clearly label your comment with [SPOILER] when discussing plot points, endings, or any content that could ruin the experience for others who haven't watched yet.",
      },
      {
        title: "Stay On Topic",
        description:
          "Keep comments relevant to the anime episode, movie, or content being discussed. Off-topic conversations should be taken to the appropriate community channels.",
      },
      {
        title: "No Advertising or Self-Promotion",
        description:
          "Unsolicited promotion of other websites, YouTube channels, Discord servers, social media, or any external services is not allowed unless explicitly permitted by site staff.",
      },
      {
        title: "No NSFW Content",
        description:
          "Sexually explicit content, graphic violence descriptions, or any adult-only material is strictly forbidden in comments, regardless of context. Keep the community safe for all ages.",
      },
    ],
  },
  {
    id: 3,
    category: "Misinformation & Piracy",
    icon: <AlertTriangle className="w-5 h-5" />,
    borderColor: "border-yellow-400/25",
    glowColor: "rgba(234,179,8,0.08)",
    accent: "text-yellow-400",
    tagBg: "bg-yellow-500/15 text-yellow-300",
    items: [
      {
        title: "No Misinformation",
        description:
          "Do not deliberately spread false information about anime releases, studios, voice actors, or any other topics. If unsure, verify before posting.",
      },
      {
        title: "No Piracy Links",
        description:
          "Sharing, requesting, or promoting illegal download links, torrents, or piracy sites for anime content is strictly prohibited and will result in an immediate ban.",
      },
      {
        title: "No Fake Accounts or Impersonation",
        description:
          "Creating accounts to impersonate other users, staff members, or public figures is forbidden and will result in immediate removal.",
      },
    ],
  },
  {
    id: 4,
    category: "Username & Profile",
    icon: <ShieldCheck className="w-5 h-5" />,
    borderColor: "border-emerald-400/25",
    glowColor: "rgba(52,211,153,0.08)",
    accent: "text-emerald-400",
    tagBg: "bg-emerald-500/15 text-emerald-300",
    items: [
      {
        title: "Appropriate Usernames",
        description:
          "Usernames must not contain offensive language, slurs, or impersonation of other users. Staff reserve the right to request a username change or take action if a name violates guidelines.",
      },
      {
        title: "No Offensive Avatars or Profiles",
        description:
          "Profile pictures and banners must not contain nudity, graphic violence, hate symbols, or any other content that violates these rules.",
      },
    ],
  },
  {
    id: 5,
    category: "Staff Interactions",
    icon: <Gavel className="w-5 h-5" />,
    borderColor: "border-red-400/25",
    glowColor: "rgba(248,113,113,0.08)",
    accent: "text-red-400",
    tagBg: "bg-red-500/15 text-red-300",
    items: [
      {
        title: "Respect Staff Decisions",
        description:
          "Moderator and admin decisions are final in comment sections. Do not argue publicly with staff. If you believe a decision was unfair, use the Discord appeal process.",
      },
      {
        title: "No Mod Impersonation",
        description:
          "Do not claim to be a moderator or staff member if you are not. Do not threaten users with moderator actions.",
      },
      {
        title: "Report Don't Retaliate",
        description:
          "If you witness rule-breaking, report it using the report feature. Do not engage in retaliatory behavior or try to resolve the situation yourself.",
      },
    ],
  },
  {
    id: 6,
    category: "Positive Community",
    icon: <Heart className="w-5 h-5" />,
    borderColor: "border-pink-400/25",
    glowColor: "rgba(244,114,182,0.08)",
    accent: "text-pink-400",
    tagBg: "bg-pink-500/15 text-pink-300",
    items: [
      {
        title: "Welcome New Members",
        description:
          "Be welcoming to new community members. Everyone started as a newcomer. Help create an inclusive environment where people feel comfortable sharing their love of anime.",
      },
      {
        title: "Constructive Criticism Only",
        description:
          "You can dislike an anime or a recommendation. Express it constructively. Insulting users for their taste or preferences is not acceptable.",
      },
      {
        title: "Support Mental Health",
        description:
          "If a discussion touches on mental health topics, be sensitive. Do not mock, minimize, or exploit anyone's personal struggles.",
      },
    ],
  },
];

const penalties = [
  {
    level: "Warning",
    icon: <AlertTriangle className="w-4 h-4" />,
    borderColor: "border-yellow-400/30",
    bg: "bg-yellow-400/8",
    textColor: "text-yellow-300",
    iconColor: "text-yellow-400",
    description: "First-time or minor violations. A formal warning will be issued. Repeated warnings lead to escalation.",
  },
  {
    level: "Temporary Mute",
    icon: <Clock className="w-4 h-4" />,
    borderColor: "border-orange-400/30",
    bg: "bg-orange-400/8",
    textColor: "text-orange-300",
    iconColor: "text-orange-400",
    description: "Ability to comment is restricted for a set period (hours to days) based on severity and history.",
  },
  {
    level: "Temporary Ban",
    icon: <Ban className="w-4 h-4" />,
    borderColor: "border-red-400/30",
    bg: "bg-red-400/8",
    textColor: "text-red-300",
    iconColor: "text-red-400",
    description: "Account is suspended from the site for a defined period. Applied for more serious or repeated violations.",
  },
  {
    level: "Permanent Ban",
    icon: <Ban className="w-4 h-4" />,
    borderColor: "border-red-600/40",
    bg: "bg-red-900/15",
    textColor: "text-red-200",
    iconColor: "text-red-500",
    description: "Permanent removal from the community. Reserved for severe violations, hate speech, piracy, or users who continuously break rules after multiple warnings.",
  },
];

const admins = [
  { name: "Leo", role: "Owner & Head Admin" },
  { name: "Admin Name 2", role: "Administrator" },
  { name: "Admin Name 3", role: "Administrator" },
];

const mods = [
  { name: "Mod Name 1", role: "Comment Moderator" },
  { name: "Mod Name 2", role: "Comment Moderator" },
  { name: "Mod Name 3", role: "Comment Moderator" },
  { name: "Mod Name 4", role: "Comment Moderator" },
];

export default function RulesPage() {
  return (
    <div className="min-h-screen text-gray-100 font-sans relative overflow-x-hidden" style={{ background: "#07070f" }}>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-30" style={{ background: "radial-gradient(circle, rgba(99,102,241,0.35) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute top-[30%] right-[-15%] w-[500px] h-[500px] rounded-full opacity-20" style={{ background: "radial-gradient(circle, rgba(168,85,247,0.3) 0%, transparent 70%)", filter: "blur(60px)" }} />
        <div className="absolute bottom-[10%] left-[20%] w-[400px] h-[400px] rounded-full opacity-15" style={{ background: "radial-gradient(circle, rgba(59,130,246,0.25) 0%, transparent 70%)", filter: "blur(60px)" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">

        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-indigo-300 text-xs font-semibold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest" style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", backdropFilter: "blur(12px)" }}>
            <ShieldCheck className="w-3 h-3" />
            Community Guidelines
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Comment Section Rules
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            To keep AniKage a welcoming and enjoyable place for all anime fans, please follow these community guidelines when participating in comment sections.
          </p>
          <p className="mt-2 text-xs text-gray-600">
            Last updated: March 2026 &nbsp;·&nbsp; Applies to all comment sections site-wide
          </p>
        </header>

        <div className="space-y-5">
          {rules.map((section) => (
            <section
              key={section.id}
              className={`rounded-2xl border ${section.borderColor} p-5 sm:p-6`}
              style={{
                background: `linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)`,
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06), 0 4px 24px ${section.glowColor}`,
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-1.5 rounded-lg ${section.tagBg.split(" ")[0].replace("text-", "bg-").replace("300", "500/15")}`} style={{ background: section.glowColor }}>
                  <span className={section.accent}>{section.icon}</span>
                </div>
                <h2 className={`text-base font-bold ${section.accent}`}>
                  {section.id}. {section.category}
                </h2>
              </div>
              <div className="space-y-3.5">
                {section.items.map((rule, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className={`mt-0.5 text-xs font-bold ${section.tagBg} rounded-md px-1.5 py-0.5 h-fit shrink-0`} style={{ backdropFilter: "blur(8px)" }}>
                      {section.id}.{idx + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white/90 text-sm mb-0.5">{rule.title}</p>
                      <p className="text-gray-500 text-sm leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-white/90 mb-4 flex items-center gap-2">
            <div className="p-1.5 rounded-lg" style={{ background: "rgba(248,113,113,0.12)" }}>
              <Gavel className="w-4 h-4 text-red-400" />
            </div>
            Enforcement & Penalties
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            Violations are handled at staff discretion. Severity depends on the nature, impact, and the user's history.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {penalties.map((penalty, i) => (
              <div
                key={i}
                className={`rounded-xl border ${penalty.borderColor} p-4 flex gap-3 items-start`}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(16px)",
                  WebkitBackdropFilter: "blur(16px)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                <span className={`mt-0.5 ${penalty.iconColor} shrink-0`}>{penalty.icon}</span>
                <div>
                  <p className={`font-bold text-sm mb-1 ${penalty.textColor}`}>{penalty.level}</p>
                  <p className="text-gray-500 text-xs leading-relaxed">{penalty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section
          className="mt-10 rounded-2xl border border-indigo-400/20 p-6 text-center"
          style={{
            background: "linear-gradient(135deg, rgba(99,102,241,0.1) 0%, rgba(79,70,229,0.05) 100%)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07), 0 8px 32px rgba(99,102,241,0.12)",
          }}
        >
          <div className="flex justify-center mb-4">
            <div className="rounded-full p-3" style={{ background: "rgba(99,102,241,0.18)", backdropFilter: "blur(12px)", border: "1px solid rgba(99,102,241,0.2)" }}>
              <DiscordIcon className="w-6 h-6 text-indigo-400" />
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Timeout or Ban Appeal</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-4 leading-relaxed">
            If you believe a moderation action was applied in error, or you'd like to appeal a timeout or ban, join our Discord server and head to the dedicated appeal channel.
          </p>

          <div
            className="inline-flex items-center gap-2 rounded-xl px-4 py-3 mb-5 mx-auto"
            style={{ background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.25)", backdropFilter: "blur(12px)" }}
          >
            <Hash className="w-4 h-4 text-indigo-400 shrink-0" />
            <div className="text-left">
              <p className="text-indigo-300 font-bold text-sm">🚫│request-appeal</p>
              <p className="text-gray-500 text-xs">Use this channel specifically for ban & timeout appeals. Include your username and a brief explanation of the situation.</p>
            </div>
          </div>

          <div className="block">
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all hover:opacity-90 active:scale-95"
              style={{ background: "rgba(99,102,241,0.7)", backdropFilter: "blur(12px)", border: "1px solid rgba(99,102,241,0.4)", boxShadow: "0 4px 16px rgba(99,102,241,0.25)" }}
            >
              <DiscordIcon className="w-4 h-4" />
              Join Discord to Appeal
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
          <p className="mt-3 text-xs text-gray-600">
            Appeals are reviewed by senior moderators within 24–72 hours.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-lg font-bold text-white/90 mb-5 flex items-center gap-2">
            <div className="p-1.5 rounded-lg" style={{ background: "rgba(250,204,21,0.1)" }}>
              <Crown className="w-4 h-4 text-yellow-400" />
            </div>
            Staff & Moderation Team
          </h2>

          <div className="mb-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-yellow-400/70 mb-3 flex items-center gap-1.5">
              <Crown className="w-3 h-3" /> Admins
            </p>
            <div className="grid sm:grid-cols-3 gap-3">
              {admins.map((member, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-yellow-400/15 p-3 flex items-center gap-3"
                  style={{
                    background: "linear-gradient(135deg, rgba(250,204,21,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(250,204,21,0.15)", border: "1px solid rgba(250,204,21,0.2)" }}>
                    <Crown className="w-3.5 h-3.5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white/90 text-sm leading-tight">{member.name}</p>
                    <p className="text-yellow-400/60 text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-400/70 mb-3 flex items-center gap-1.5">
              <Shield className="w-3 h-3" /> Comment Moderators
            </p>
            <div className="grid sm:grid-cols-4 gap-3">
              {mods.map((member, i) => (
                <div
                  key={i}
                  className="rounded-xl border border-indigo-400/15 p-3 flex items-center gap-2.5"
                  style={{
                    background: "linear-gradient(135deg, rgba(99,102,241,0.07) 0%, rgba(255,255,255,0.02) 100%)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                  }}
                >
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.2)" }}>
                    <Shield className="w-3 h-3 text-indigo-400" />
                  </div>
                  <div>
                    <p className="font-semibold text-white/85 text-xs leading-tight">{member.name}</p>
                    <p className="text-indigo-400/55 text-xs">{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="mt-12 border-t pt-6" style={{ borderColor: "rgba(255,255,255,0.06)" }}>
          <div
            className="rounded-2xl p-5 text-center mb-6"
            style={{
              background: "rgba(255,255,255,0.025)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p className="text-gray-500 text-xs leading-relaxed">
              These rules may be updated at any time. Continued use of AniKage constitutes acceptance of the current guidelines.
              Questions? Contact us via{" "}
              <a href={DISCORD_INVITE} target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors underline">
                Discord
              </a>
            </p>
          </div>
          <p className="text-center text-xs text-gray-700">
            Made with ♥ by <span className="text-indigo-400/80 font-semibold">Leo</span>
          </p>
        </footer>

      </div>
    </div>
  );
}
