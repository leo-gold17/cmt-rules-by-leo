import { ExternalLink, AlertTriangle, ShieldCheck, Ban, Clock, MessageSquare, Users, Gavel, Heart } from "lucide-react";

const DISCORD_INVITE = "https://discord.gg/YOUR_DISCORD_INVITE";

const rules = [
  {
    id: 1,
    category: "General Conduct",
    icon: <Users className="w-5 h-5" />,
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/30",
    accent: "text-blue-400",
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
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/30",
    accent: "text-purple-400",
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
    color: "from-yellow-500/20 to-yellow-600/10 border-yellow-500/30",
    accent: "text-yellow-400",
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
    color: "from-green-500/20 to-green-600/10 border-green-500/30",
    accent: "text-green-400",
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
    color: "from-red-500/20 to-red-600/10 border-red-500/30",
    accent: "text-red-400",
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
    color: "from-pink-500/20 to-pink-600/10 border-pink-500/30",
    accent: "text-pink-400",
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
    color: "border-yellow-500/50 bg-yellow-500/10 text-yellow-300",
    iconColor: "text-yellow-400",
    description:
      "First-time or minor violations. A formal warning will be issued. Repeated warnings lead to escalation.",
  },
  {
    level: "Temporary Mute",
    icon: <Clock className="w-4 h-4" />,
    color: "border-orange-500/50 bg-orange-500/10 text-orange-300",
    iconColor: "text-orange-400",
    description:
      "Ability to comment is restricted for a set period (hours to days) based on severity and history.",
  },
  {
    level: "Temporary Ban",
    icon: <Ban className="w-4 h-4" />,
    color: "border-red-500/50 bg-red-500/10 text-red-300",
    iconColor: "text-red-400",
    description:
      "Account is suspended from the site for a defined period. Applied for more serious or repeated violations.",
  },
  {
    level: "Permanent Ban",
    icon: <Ban className="w-4 h-4" />,
    color: "border-red-700/50 bg-red-900/20 text-red-200",
    iconColor: "text-red-500",
    description:
      "Permanent removal from the community. Reserved for severe violations, hate speech, piracy, or users who continuously break rules after multiple warnings.",
  },
];

export default function RulesPage() {
  return (
    <div className="min-h-screen bg-[#0d0d12] text-gray-100 font-sans">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.15) 0%, transparent 60%)",
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 py-12">

        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            <ShieldCheck className="w-3 h-3" />
            Community Guidelines
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-3 bg-gradient-to-r from-white via-indigo-200 to-indigo-400 bg-clip-text text-transparent">
            Comment Section Rules
          </h1>
          <p className="text-gray-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            To keep AniKage a welcoming and enjoyable place for all anime fans, we ask that every member follow these community guidelines when participating in comment sections.
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Last updated: March 2026 &nbsp;·&nbsp; Applies to all comment sections site-wide
          </p>
        </header>

        <div className="space-y-6">
          {rules.map((section) => (
            <section
              key={section.id}
              className={`rounded-xl border bg-gradient-to-br ${section.color} p-5 sm:p-6`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className={`${section.accent}`}>{section.icon}</span>
                <h2 className={`text-lg font-bold ${section.accent}`}>
                  {section.id}. {section.category}
                </h2>
              </div>
              <div className="space-y-4">
                {section.items.map((rule, idx) => (
                  <div key={idx} className="flex gap-3">
                    <span className={`mt-0.5 text-xs font-bold ${section.accent} bg-white/5 rounded px-1.5 py-0.5 h-fit shrink-0`}>
                      {section.id}.{idx + 1}
                    </span>
                    <div>
                      <p className="font-semibold text-white text-sm mb-0.5">{rule.title}</p>
                      <p className="text-gray-400 text-sm leading-relaxed">{rule.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-10">
          <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <Gavel className="w-5 h-5 text-red-400" />
            Enforcement & Penalties
          </h2>
          <p className="text-gray-400 text-sm mb-5">
            Violations are handled at staff discretion. The severity of the penalty depends on the nature of the violation, its impact, and the user's history.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {penalties.map((penalty, i) => (
              <div
                key={i}
                className={`rounded-xl border p-4 flex gap-3 items-start ${penalty.color}`}
              >
                <span className={`mt-0.5 ${penalty.iconColor} shrink-0`}>{penalty.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1">{penalty.level}</p>
                  <p className="text-xs leading-relaxed opacity-80">{penalty.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-xl border border-indigo-500/40 bg-gradient-to-br from-indigo-600/15 to-indigo-900/10 p-6 text-center">
          <div className="flex justify-center mb-3">
            <div className="bg-indigo-500/20 rounded-full p-3">
              <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-bold text-white mb-2">Timeout or Ban Appeal</h3>
          <p className="text-gray-400 text-sm max-w-lg mx-auto mb-5 leading-relaxed">
            If you believe a moderation action was applied in error or you'd like to appeal a timeout or ban, please join our Discord server and open an appeal ticket in the designated channel. Provide your username and details of the situation.
          </p>
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 transition-colors text-white font-semibold text-sm px-5 py-2.5 rounded-lg"
          >
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z" />
            </svg>
            Join Discord to Appeal
            <ExternalLink className="w-3 h-3 opacity-70" />
          </a>
          <p className="mt-3 text-xs text-gray-500">
            Appeals are reviewed by senior moderators within 24–72 hours.
          </p>
        </section>

        <footer className="mt-10 text-center text-xs text-gray-600 border-t border-white/5 pt-6">
          <p>
            These rules may be updated at any time. Continued use of AniKage constitutes acceptance of the current rules.
          </p>
          <p className="mt-1">
            Questions? Contact us via{" "}
            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-500 hover:text-indigo-400 underline"
            >
              Discord
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
