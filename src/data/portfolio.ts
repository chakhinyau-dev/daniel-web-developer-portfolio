export interface AppItem {
  name: string;
  category: string;
  playStoreId: string;
  tech?: string;
  /** Short technical summary for work history cards */
  technicalNote?: string;
  skills: string[];
  screenshots?: string[];
}

export interface Studio {
  id: string;
  name: string;
  years: string;
  duration: string;
  description: string;
  apps: AppItem[];
}

export const studios: Studio[] = [
  {
    id: "unicorn",
    name: "Amazic Fun Hub",
    years: "2021–2025",
    duration: "4 years",
    description: "The foundation. Dating apps that launched a 12-year mobile engineering career.",
    apps: [
      { name: "Unicorns Match", category: "Dating", playStoreId: "com.dating.unicornsmatch", tech: "Android · Java", technicalNote: "Java client with chat/match flows, push (FCM), and in-app billing on the Play stack.", skills: ["Real-time Chat", "Match Algorithm", "Profile Verification", "Push Notifications", "In-app Purchases"], screenshots: ["unicornsmatch-1", "unicornsmatch-2", "unicornsmatch-3"] },
      { name: "EMF Scanner - Metal Detector", category: "Utility", playStoreId: "com.amazicfunhub.emfscanner", tech: "Android · Java", technicalNote: "Magnetometer-based EMF and metal detection with real-time gauge, multi-mode switching (metal/gold/silver/EMF/camera), and μT/mG/G unit toggling.", skills: ["EMF Detection", "Metal & Gold Detector", "Silver Detector", "Camera Detector", "Real-time Gauge & Alerts"], screenshots: ["emfscanner-1", "emfscanner-2", "emfscanner-3"] },
      { name: "AR Sketch Paint – Drawing App", category: "Art & Creativity", playStoreId: "com.amazicfunhub.ardrawing", tech: "Android · Java", technicalNote: "AR camera overlay for real-time trace-to-sketch; photo-to-sketch conversion pipeline; adjustable opacity control and multiple drawing mode switching.", skills: ["AR Camera Tracing", "Trace to Sketch", "Photo to Sketch", "Sketch Opacity Control", "Drawing Mode Switching"], screenshots: ["ardrawing-1", "ardrawing-2", "ardrawing-3"] },
      { name: "Santa Claus Call - Prank Call", category: "Entertainment", playStoreId: "com.amazicfunhub.santacall", tech: "Android · Java", technicalNote: "Holiday prank-call app with simulated video calls, AI-driven chat responses, and letter-to-Santa composition with festive themed UI.", skills: ["Fake Video Call", "AI Chat & Responses", "Letter to Santa", "Holiday Themes", "Push Notifications"], screenshots: ["santacall-1", "santacall-2", "santacall-3"] },
      { name: "AZ Lock: Voice Lock Screen", category: "Security", playStoreId: "com.amazicfunhub.azlock", tech: "Android · Java", technicalNote: "Custom lock screen replacement with voice recognition unlock, pattern lock, and a downloadable wallpaper/theme gallery spanning anime, nature, and movie categories.", skills: ["Voice Password Lock", "Pattern Lock Screen", "Lock Screen Themes", "Wallpaper Gallery", "Security Settings"], screenshots: ["azlock-1", "azlock-2", "azlock-3"] },
      { name: "Call Screen Theme Color Dialer", category: "Personalization", playStoreId: "com.amazicfunhub.callscreen", tech: "Android · Java", technicalNote: "Incoming/outgoing call screen theming with downloadable wallpapers, dynamic animations, and custom/favorite theme management.", skills: ["Call Screen Themes", "Custom Wallpapers", "Dynamic Animations", "Theme Gallery", "Color Dialer UI"], screenshots: ["callscreen-1", "callscreen-2", "callscreen-3"] },
      { name: "GPS Tracker: GPS Phone Locator", category: "Navigation", playStoreId: "com.amazicfunhub.gpstracker", tech: "Android · Java", technicalNote: "Family safety and friend-tracking app with real-time map positions, arrival notifications, location history playback, and friend-invite flows.", skills: ["Real-time GPS Tracking", "Family Locator", "Friend Location Sharing", "Location History", "Geofence Alerts"], screenshots: ["gpstracker-1", "gpstracker-2", "gpstracker-3"] },
    ],
  },
  {
    id: "hktdc-council",
    name: "HypGames",
    years: "2019–2021",
    duration: "2 years",
    description: "Competitive mobile gaming studio. Sniper shooters, billiards, and fishing games built for real-time 1v1 battles, leaderboards, and deep progression systems.",
    apps: [
      { name: "Sniper Strike: Special Ops", category: "Action", playStoreId: "com.hypgames.sniperstrike", tech: "Unity · C#", technicalNote: "Real-time 1v1 sniper duels with weapon upgrade trees, stat-based loadouts (velocity, precision, zoom, magazine), and power-up strategy layer.", skills: ["Epic 1v1 Battles", "Weapon Upgrade Arsenal", "Power-up Strategy", "Sniper Scope Controls", "Streak & Combo System"], screenshots: ["g1", "g2", "g3"] },
      { name: "War Sniper: FPS Shooting Game", category: "Action", playStoreId: "com.hypgames.warsniper", tech: "Unity · C#", technicalNote: "Multi-environment 1v1 sniper battles across snow, desert, and urban maps; battle pass progression, leaderboard rankings, and tournament scheduling.", skills: ["Epic 1v1 Battles", "Dominate Leaderboards", "Battle Pass & Rewards", "Diverse Map Locations", "Tournament Brackets"], screenshots: ["g4", "g5", "g6"] },
      { name: "8 Ball Smash: Pool & Billiards", category: "Sports", playStoreId: "com.hypgames.8ballsmash", tech: "Unity · C#", technicalNote: "Full 3D billiards physics engine with unlockable table skins (Blackhawk, Golden Dragon, Belmont), bonus reward system, and realistic shot mechanics.", skills: ["Full 3D Shot Physics", "Collect Awesome Tables", "Bonus & Rewards System", "Multiplayer Matches", "Cue & Table Customization"], screenshots: ["g7", "g8", "g9"] },
      { name: "Fishing Clash: Catching Fish", category: "Sports", playStoreId: "com.hypgames.fishingclash", tech: "Unity · C#", technicalNote: "Competitive 1v1 fishing with real-world location data, live tension mechanics, legendary lure card collection, and combo multiplier scoring.", skills: ["Compete in 1v1 Matches", "Discover Real Fishing Spots", "Gain Legendary Lures", "Live Tension Mechanics", "Combo & Streak Scoring"], screenshots: ["g10", "g11", "g12"] },
    ],
  },
  {
    id: "joynow",
    name: "Manchester United Limited",
    years: "2017–2018",
    duration: "1 year",
    description: "Official Manchester United digital products. Club app with MUTV live streaming, news, and the United Store, plus a dedicated MUTV platform for Premier League collections, films, and originals.",
    apps: [
      { name: "Manchester United Official App", category: "Sports", playStoreId: "com.manutd.android", tech: "Android · Kotlin", technicalNote: "Official club app with MUTV 24/7 live streaming, personalised news feed, match build-up content, exclusive series, and integrated United Store for kits and merchandise.", skills: ["MUTV 24/7 Streaming", "Live Match Coverage", "Personalised News Feed", "United Store & Merch", "Exclusive Series & Shows"], screenshots: ["m1", "m2", "m3"] },
      { name: "MUTV – Man Utd TV", category: "Sports", playStoreId: "com.manutd.mutv", tech: "Android · Kotlin", technicalNote: "Dedicated streaming platform for Manchester United content: live channel, Premier League era collections (90s–20s), films & originals, UTD podcasts, and multi-device support.", skills: ["Live Channel Streaming", "Premier League Collection", "Films & Originals", "UTD Podcasts", "Multi-device Support"], screenshots: ["m4", "m5", "m6"] },
    ],
  },
  {
    id: "hkej-company",
    name: "Myarx apps",
    years: "2016–2017",
    duration: "1 year",
    description: "Travel apps for explorers. Track visited countries and cities on a personal flag map, challenge geography knowledge with a satellite aerial quiz, and manage a world highlights bucket list.",
    apps: [
      { name: "Places Been – Travel Tracker", category: "Travel", playStoreId: "com.myarx.placesbeen", tech: "Android · Java", technicalNote: "Interactive personal travel map tracking visited countries, cities, UNESCO sites, national parks, airports, and sights with flag map overlay and add-on packs.", skills: ["Travel Map Tracker", "Countries & Cities Log", "UNESCO & National Parks", "Flag Map Overlay", "Upgrades & Add-ons"], screenshots: ["n1", "n2", "n3"] },
      { name: "GuessWhere – World Map Quiz", category: "Education", playStoreId: "com.myarx.guesswhere", tech: "Android · Java", technicalNote: "Satellite aerial-view quiz game challenging players to identify world locations across progressive difficulty levels with hint and help systems.", skills: ["Aerial View Quiz", "World Location Guessing", "Progressive Levels", "Hint & Help System", "Landmark Recognition"], screenshots: ["n4", "n5", "n6"] },
      { name: "Been There Done That", category: "Travel", playStoreId: "com.myarx.beentheredonethat", tech: "Android · Java", technicalNote: "Bucket list travel app with curated world highlights and natural wonders categories, visited/unvisited gallery tracking, and personal statistics dashboard.", skills: ["Been There Done That", "World Highlights & Wonders", "Bucket List Management", "Visited Gallery", "My Statistics Dashboard"], screenshots: ["n7", "n8", "n9"] },
    ],
  },
  {
    id: "hkt",
    name: "MonetizeGo",
    years: "2014–2015",
    duration: "1 year",
    description: "Ad-supported utility and media apps. Breaking US news, investment community tools, and a multi-source video downloader with built-in HD player.",
    apps: [
      { name: "USA News Updates", category: "News", playStoreId: "com.monetizego.usanews", tech: "Android · Kotlin", technicalNote: "Ad-monetized news app with categorised feeds covering crime, lifestyle, and politics; real-time article updates and push notifications.", skills: ["Crime Coverage Feed", "Lifestyle Headlines", "US Politics Updates", "Push Notifications", "Category Navigation"], screenshots: ["c1", "c2", "c3"] },
      { name: "Investment Guru", category: "Finance", playStoreId: "com.monetizego.investmentguru", tech: "Android · Java", technicalNote: "Investment community platform with a discussion wall, userbook, suggestion board, support tools, notifications, and account management.", skills: ["Community Wall", "Userbook & Suggestions", "Investment Tools", "Notifications", "Support & Feedback"], screenshots: ["c4", "c5", "c6"] },
      { name: "All Video Downloader HD Player", category: "Utility", playStoreId: "com.monetizego.videodownloader", tech: "Android · Java", technicalNote: "Multi-resolution video downloader (1080p/720p/480p) with 4x download speed, Instagram status saver, and built-in HD video player.", skills: ["Fast 4x Download Speed", "1080p / 720p / 480p Quality", "Save IG Status", "Built-in HD Video Player", "Multi-source Downloads"], screenshots: ["c7", "c8", "c9"] },
    ],
  },
];

// ─── Project Catalog ─────────────────────────────────────────────────────────

export type ProjectCategory = 'mobile' | 'unity' | 'web-saas' | 'ecommerce' | 'ai' | 'desktop';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: ProjectCategory;
  tech: string[];
  highlights: string[];
  playStoreId?: string;
  screenshots?: string[];
  year: string;
  status: 'live' | 'shipped' | 'freelance' | 'contract';
  featured?: boolean;
}

export interface CategoryMeta {
  label: string;
  colorVar: string;    // CSS custom property value for inline styles
  gradient: string;   // Tailwind gradient classes
  textColor: string;  // Tailwind text color for badge text
  bgColor: string;    // Tailwind bg for badge bg
}

export const categoryMeta: Record<ProjectCategory, CategoryMeta> = {
  mobile:    { label: 'Mobile Apps',    colorVar: 'hsl(263 85% 68%)',  gradient: 'from-violet-500 to-purple-700',   textColor: 'text-violet-300',  bgColor: 'bg-violet-500/10' },
  unity:     { label: 'Unity / Games',  colorVar: 'hsl(25 95% 60%)',   gradient: 'from-orange-500 to-red-600',     textColor: 'text-orange-300',  bgColor: 'bg-orange-500/10' },
  'web-saas':{ label: 'Web SaaS',       colorVar: 'hsl(185 100% 45%)', gradient: 'from-cyan-400 to-blue-600',      textColor: 'text-cyan-300',    bgColor: 'bg-cyan-500/10'  },
  ecommerce: { label: 'E-commerce',     colorVar: 'hsl(340 80% 65%)',  gradient: 'from-pink-500 to-rose-600',      textColor: 'text-pink-300',    bgColor: 'bg-pink-500/10'  },
  ai:        { label: 'AI Automation',  colorVar: 'hsl(145 70% 50%)',  gradient: 'from-emerald-400 to-green-600',  textColor: 'text-emerald-300', bgColor: 'bg-emerald-500/10'},
  desktop:   { label: 'Desktop',        colorVar: 'hsl(50 90% 55%)',   gradient: 'from-amber-400 to-yellow-600',   textColor: 'text-amber-300',   bgColor: 'bg-amber-500/10' },
};

export const projects: ProjectItem[] = [
  // ── Mobile Apps ──────────────────────────────────────────────────────────
  {
    id: 'unicorns-match',
    title: 'Unicorns Match',
    subtitle: 'Dating · Android',
    description: 'Real-time dating app with swipe-based match flows, encrypted chat, FCM push, and in-app purchase subscriptions on Google Play.',
    category: 'mobile',
    tech: ['Android', 'Java', 'FCM', 'REST API', 'In-app Billing'],
    highlights: ['Real-time Chat', 'Match Algorithm', 'Profile Verification', 'Push Notifications', 'In-app Purchases'],
    playStoreId: 'com.dating.unicornsmatch',
    screenshots: ['unicornsmatch-1', 'unicornsmatch-2', 'unicornsmatch-3'],
    year: '2021–2025',
    status: 'live',
    featured: true,
  },
  {
    id: 'emf-scanner',
    title: 'EMF Scanner',
    subtitle: 'Utility · Android',
    description: 'Magnetometer-based EMF and metal detection with real-time gauge, multi-mode switching (metal/gold/silver/EMF/camera), and μT/mG/G unit toggling.',
    category: 'mobile',
    tech: ['Android', 'Java', 'Sensor APIs', 'ARCore'],
    highlights: ['EMF Detection', 'Metal & Gold Detector', 'Camera Detector', 'Real-time Gauge'],
    playStoreId: 'com.amazicfunhub.emfscanner',
    screenshots: ['emfscanner-1', 'emfscanner-2', 'emfscanner-3'],
    year: '2021',
    status: 'live',
  },
  {
    id: 'ar-sketch-paint',
    title: 'AR Sketch Paint',
    subtitle: 'Art & Creativity · Android',
    description: 'AR camera overlay for real-time trace-to-sketch; photo-to-sketch conversion pipeline; adjustable opacity and multiple drawing mode switching.',
    category: 'mobile',
    tech: ['Android', 'Java', 'ARCore', 'Canvas API', 'OpenGL'],
    highlights: ['AR Camera Tracing', 'Trace to Sketch', 'Photo to Sketch', 'Sketch Opacity Control'],
    playStoreId: 'com.amazicfunhub.ardrawing',
    screenshots: ['ardrawing-1', 'ardrawing-2', 'ardrawing-3'],
    year: '2022',
    status: 'live',
  },
  {
    id: 'az-lock',
    title: 'AZ Lock: Voice Lock Screen',
    subtitle: 'Security · Android',
    description: 'Custom lock-screen replacement with voice-recognition unlock, pattern lock, and a downloadable wallpaper/theme gallery spanning anime, nature, and movies.',
    category: 'mobile',
    tech: ['Android', 'Java', 'Speech Recognition', 'Device Admin API'],
    highlights: ['Voice Password Lock', 'Pattern Lock Screen', 'Wallpaper Gallery', 'Security Settings'],
    playStoreId: 'com.amazicfunhub.azlock',
    screenshots: ['azlock-1', 'azlock-2', 'azlock-3'],
    year: '2023',
    status: 'live',
  },
  {
    id: 'gps-tracker',
    title: 'GPS Tracker: Family Locator',
    subtitle: 'Navigation · Android',
    description: 'Family safety and friend-tracking with real-time map positions, arrival alerts, location history playback, and friend-invite flows.',
    category: 'mobile',
    tech: ['Android', 'Java', 'Google Maps SDK', 'Firebase', 'FCM'],
    highlights: ['Real-time GPS Tracking', 'Family Locator', 'Geofence Alerts', 'Location History'],
    playStoreId: 'com.amazicfunhub.gpstracker',
    screenshots: ['gpstracker-1', 'gpstracker-2', 'gpstracker-3'],
    year: '2024',
    status: 'live',
    featured: true,
  },
  {
    id: 'manutd-app',
    title: 'Manchester United Official App',
    subtitle: 'Sports · Kotlin · Android',
    description: 'Official club app with MUTV 24/7 live streaming, personalised news feed, match build-up content, exclusive series, and integrated United Store.',
    category: 'mobile',
    tech: ['Android', 'Kotlin', 'ExoPlayer', 'Retrofit', 'Coroutines'],
    highlights: ['MUTV 24/7 Streaming', 'Live Match Coverage', 'Personalised News Feed', 'United Store'],
    playStoreId: 'com.manutd.android',
    screenshots: ['m1', 'm2', 'm3'],
    year: '2017–2018',
    status: 'contract',
    featured: true,
  },
  {
    id: 'mutv',
    title: 'MUTV — Man Utd TV',
    subtitle: 'Streaming · Kotlin · Android',
    description: 'Dedicated streaming platform: live channel, Premier League era collections (90s–20s), films & originals, UTD podcasts, and multi-device support.',
    category: 'mobile',
    tech: ['Android', 'Kotlin', 'ExoPlayer', 'DRM', 'REST API'],
    highlights: ['Live Channel Streaming', 'Premier League Collection', 'Films & Originals', 'Multi-device'],
    playStoreId: 'com.manutd.mutv',
    screenshots: ['m4', 'm5', 'm6'],
    year: '2017–2018',
    status: 'contract',
  },
  {
    id: 'places-been',
    title: 'Places Been — Travel Tracker',
    subtitle: 'Travel · Android',
    description: 'Interactive personal travel map tracking visited countries, cities, UNESCO sites, national parks, airports with flag map overlay and add-on packs.',
    category: 'mobile',
    tech: ['Android', 'Java', 'Google Maps SDK', 'SQLite', 'IAP'],
    highlights: ['Travel Map Tracker', 'Countries & Cities Log', 'UNESCO & National Parks', 'Flag Map Overlay'],
    playStoreId: 'com.myarx.placesbeen',
    screenshots: ['n1', 'n2', 'n3'],
    year: '2016–2017',
    status: 'shipped',
  },

  // ── Unity / Games ─────────────────────────────────────────────────────────
  {
    id: 'sniper-strike',
    title: 'Sniper Strike: Special Ops',
    subtitle: 'Action · Unity · C#',
    description: 'Real-time 1v1 sniper duels with weapon upgrade trees, stat-based loadouts (velocity, precision, zoom, magazine), and a power-up strategy layer.',
    category: 'unity',
    tech: ['Unity', 'C#', 'Photon', 'Firebase', 'In-app Billing'],
    highlights: ['1v1 Real-time Battles', 'Weapon Upgrade Arsenal', 'Power-up Strategy', 'Streak & Combo System'],
    playStoreId: 'com.hypgames.sniperstrike',
    screenshots: ['g1', 'g2', 'g3'],
    year: '2019–2021',
    status: 'live',
    featured: true,
  },
  {
    id: 'war-sniper',
    title: 'War Sniper: FPS Shooting Game',
    subtitle: 'Action · Unity · C#',
    description: 'Multi-environment 1v1 sniper battles across snow, desert, and urban maps; battle pass progression, leaderboard rankings, and tournament scheduling.',
    category: 'unity',
    tech: ['Unity', 'C#', 'Photon', 'Battle Pass', 'Leaderboard API'],
    highlights: ['Diverse Map Locations', 'Battle Pass & Rewards', 'Tournament Brackets', 'Leaderboards'],
    playStoreId: 'com.hypgames.warsniper',
    screenshots: ['g4', 'g5', 'g6'],
    year: '2019–2021',
    status: 'live',
  },
  {
    id: '8ball-smash',
    title: '8 Ball Smash: Pool & Billiards',
    subtitle: 'Sports · Unity · C#',
    description: 'Full 3D billiards physics engine with unlockable table skins, bonus reward system, and realistic shot mechanics.',
    category: 'unity',
    tech: ['Unity', 'C#', 'Physics Engine', 'Multiplayer', 'IAP'],
    highlights: ['Full 3D Shot Physics', 'Unlockable Tables', 'Bonus & Rewards', 'Cue Customization'],
    playStoreId: 'com.hypgames.8ballsmash',
    screenshots: ['g7', 'g8', 'g9'],
    year: '2020–2021',
    status: 'live',
    featured: true,
  },
  {
    id: 'fishing-clash',
    title: 'Fishing Clash: Catching Fish',
    subtitle: 'Sports · Unity · C#',
    description: 'Competitive 1v1 fishing with real-world location data, live tension mechanics, legendary lure card collection, and combo multiplier scoring.',
    category: 'unity',
    tech: ['Unity', 'C#', 'Location API', 'Card System', 'Photon'],
    highlights: ['1v1 Matches', 'Real Fishing Spots', 'Legendary Lures', 'Combo Scoring'],
    playStoreId: 'com.hypgames.fishingclash',
    screenshots: ['g10', 'g11', 'g12'],
    year: '2019–2020',
    status: 'live',
  },

  // ── Web SaaS ──────────────────────────────────────────────────────────────
  {
    id: 'flowboard',
    title: 'FlowBoard',
    subtitle: 'Team Productivity SaaS',
    description: 'Multi-tenant team productivity platform with real-time Kanban boards, sprint planning, Stripe subscription billing, and role-based access control.',
    category: 'web-saas',
    tech: ['React 18', 'TypeScript', 'Supabase', 'Stripe', 'Tailwind CSS'],
    highlights: ['Real-time Collaboration', 'Kanban & Sprint Boards', 'Stripe Billing', 'RBAC', 'Team Workspaces'],
    year: '2024',
    status: 'freelance',
    featured: true,
  },
  {
    id: 'metricspulse',
    title: 'MetricsPulse',
    subtitle: 'Analytics Dashboard SaaS',
    description: 'Full-stack analytics SaaS with live data ingestion, customisable chart dashboards, CSV/PDF export, webhook integrations, and a multi-tenant architecture.',
    category: 'web-saas',
    tech: ['Next.js 14', 'tRPC', 'Prisma', 'PostgreSQL', 'Chart.js'],
    highlights: ['Live Data Ingestion', 'Custom Dashboards', 'CSV / PDF Export', 'Webhook Integrations', 'Multi-tenant'],
    year: '2024',
    status: 'freelance',
  },
  {
    id: 'talentflow',
    title: 'TalentFlow',
    subtitle: 'HR & Recruitment SaaS',
    description: 'End-to-end recruitment SaaS covering job posting, multi-stage applicant pipelines, automated interview scheduling, offer management, and team-level hiring analytics — all on a multi-tenant architecture with Stripe-billed seat plans.',
    category: 'web-saas',
    tech: ['Next.js 14', 'TypeScript', 'Prisma', 'PostgreSQL', 'Stripe', 'Resend'],
    highlights: [
      'Multi-stage Kanban applicant pipeline',
      'Automated interview scheduling & reminders',
      'Offer letter generation with e-signature',
      'Team hiring analytics & conversion funnel',
      'Stripe seat-based subscription billing',
    ],
    year: '2023',
    status: 'freelance',
    featured: true,
  },
  {
    id: 'invoicebox',
    title: 'InvoiceBox',
    subtitle: 'Invoicing & Billing SaaS',
    description: 'Full-stack invoicing SaaS for freelancers and small businesses. Generates branded PDF invoices, handles recurring billing via Stripe subscriptions, sends automated payment reminders, tracks client payment history, and provides a revenue dashboard with overdue alerts.',
    category: 'web-saas',
    tech: ['React 18', 'Node.js', 'Stripe', 'PDFKit', 'PostgreSQL', 'TypeScript'],
    highlights: [
      'Branded PDF invoice generation (PDFKit)',
      'Stripe recurring billing & subscription management',
      'Automated payment reminders via email',
      'Client payment history & ageing report',
      'Revenue dashboard with overdue alerts',
    ],
    year: '2023',
    status: 'freelance',
  },
  {
    id: 'formcraft',
    title: 'FormCraft',
    subtitle: 'Form Builder & Response SaaS',
    description: 'Drag-and-drop form builder SaaS with conditional logic, multi-page flows, file uploads to S3, real-time response analytics, CSV export, and embeddable widgets. Teams collaborate on form design with version history and role-based publish controls.',
    category: 'web-saas',
    tech: ['React 18', 'TypeScript', 'Node.js', 'AWS S3', 'PostgreSQL', 'Chart.js'],
    highlights: [
      'Drag-and-drop builder with conditional logic',
      'Multi-page forms with progress tracking',
      'File uploads to AWS S3',
      'Real-time response analytics & CSV export',
      'Embeddable widget with one-line script',
    ],
    year: '2024',
    status: 'freelance',
  },
  {
    id: 'supportdesk',
    title: 'SupportDesk',
    subtitle: 'Customer Support SaaS',
    description: 'Omni-channel customer support platform with a shared ticket inbox, live chat widget, agent queue management, SLA tracking, canned responses, and a self-serve knowledge base — backed by a Next.js dashboard and real-time WebSocket notifications.',
    category: 'web-saas',
    tech: ['Next.js 14', 'TypeScript', 'WebSocket', 'PostgreSQL', 'Redis', 'Tailwind CSS'],
    highlights: [
      'Shared ticket inbox with priority queues',
      'Live chat widget (WebSocket, embeddable)',
      'SLA tracking with breach alerts',
      'Self-serve knowledge base with search',
      'Agent performance & resolution analytics',
    ],
    year: '2024',
    status: 'freelance',
    featured: true,
  },
  {
    id: 'docusync',
    title: 'DocuSync',
    subtitle: 'Document Collaboration SaaS',
    description: 'Real-time document collaboration SaaS with rich-text editing via Tiptap, operational-transform-based conflict resolution, full version history, comment threads, permission-gated team workspaces, and PDF export — built on a multi-tenant Next.js + Supabase stack.',
    category: 'web-saas',
    tech: ['Next.js 14', 'Tiptap', 'Supabase', 'TypeScript', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Real-time co-editing with conflict resolution',
      'Full version history & one-click restore',
      'Comment threads with @mention notifications',
      'Permission-gated team workspaces',
      'PDF export & public share links',
    ],
    year: '2023',
    status: 'shipped',
  },

  {
    id: 'linktrack',
    title: 'LinkTrack',
    subtitle: 'Link & Campaign Analytics SaaS',
    description: 'UTM-aware link tracking SaaS that wraps any URL in a branded short link, captures click-level events (referrer, device, geo), aggregates them into real-time campaign dashboards, and exports conversion funnel reports — with webhook delivery of events to any downstream data warehouse or CRM.',
    category: 'web-saas',
    tech: ['Next.js 14', 'TypeScript', 'Redis', 'ClickHouse', 'PostgreSQL', 'Tailwind CSS'],
    highlights: [
      'Branded short link generation with custom domains',
      'Click-level event capture (referrer, device, geo)',
      'Real-time UTM campaign dashboards',
      'Conversion funnel reports with CSV export',
      'Webhook delivery to external data warehouses',
    ],
    year: '2023',
    status: 'freelance',
  },

  // ── E-commerce ────────────────────────────────────────────────────────────
  {
    id: 'shopforge',
    title: 'ShopForge',
    subtitle: 'Full-stack E-commerce Platform',
    description: 'Full-stack storefront with a complete commerce engine: variant-aware product catalogue, persistent cart, Stripe Payment Intents with webhook reconciliation, automated order fulfilment emails, Cloudinary image pipeline, and a Next.js admin dashboard with real-time inventory tracking and sales reporting.',
    category: 'ecommerce',
    tech: ['Next.js 14', 'Stripe', 'Supabase', 'Cloudinary', 'TypeScript', 'Resend'],
    highlights: [
      'Variant-aware product catalogue & search',
      'Stripe Payment Intents + webhook reconciliation',
      'Automated order emails via Resend',
      'Real-time inventory & sales dashboard',
      'Cloudinary image optimisation pipeline',
    ],
    year: '2024',
    status: 'freelance',
    featured: true,
  },
  {
    id: 'nexcart',
    title: 'NexCart',
    subtitle: 'Mobile Commerce App · iOS & Android',
    description: 'React Native commerce app shipping on iOS and Android. Features persistent cart with offline support, Stripe mobile SDK for Apple Pay and Google Pay, push notifications for order status updates, product search with filters, and a loyalty points system with tier-based discounts.',
    category: 'ecommerce',
    tech: ['React Native', 'Redux Toolkit', 'Stripe Mobile SDK', 'Firebase', 'TypeScript'],
    highlights: [
      'Apple Pay & Google Pay via Stripe Mobile SDK',
      'Offline-capable persistent cart',
      'Push notifications for order lifecycle',
      'Product search with category filters',
      'Loyalty points & tier discount system',
    ],
    year: '2023',
    status: 'shipped',
  },
  {
    id: 'vendorhub',
    title: 'VendorHub',
    subtitle: 'Multi-vendor Marketplace',
    description: 'Multi-vendor marketplace with Stripe Connect for split payments, seller onboarding with KYC verification flow, commission engine, escrow-based payout scheduling, buyer dispute resolution, and a seller analytics dashboard showing GMV, conversion rates, and refund ratios.',
    category: 'ecommerce',
    tech: ['Next.js 14', 'Stripe Connect', 'Prisma', 'PostgreSQL', 'TypeScript', 'Resend'],
    highlights: [
      'Stripe Connect: split payments & payouts',
      'Seller onboarding with KYC verification',
      'Commission engine with configurable rates',
      'Escrow payout scheduling & dispute resolution',
      'Seller GMV & conversion analytics dashboard',
    ],
    year: '2024',
    status: 'freelance',
    featured: true,
  },

  {
    id: 'subscribebox',
    title: 'SubscribeBox',
    subtitle: 'Subscription Box Commerce Platform',
    description: 'Full-stack subscription box platform with curated product box builder, Stripe billing cycles, subscriber preference profiles, dynamic box customisation per cycle, churn-prevention flows (skip / pause / swap), and a warehouse fulfilment dashboard with packing list generation.',
    category: 'ecommerce',
    tech: ['Next.js 14', 'Stripe Billing', 'Supabase', 'TypeScript', 'Resend', 'Tailwind CSS'],
    highlights: [
      'Stripe subscription cycles with prorated upgrades',
      'Per-cycle box customisation by subscriber',
      'Skip / pause / swap churn-prevention flows',
      'Warehouse fulfilment dashboard & packing lists',
      'Referral programme with discount code engine',
    ],
    year: '2024',
    status: 'freelance',
    featured: true,
  },
  {
    id: 'digitalvault',
    title: 'DigitalVault',
    subtitle: 'Digital Products Marketplace',
    description: 'Digital product marketplace for selling ebooks, design templates, and software licences. Features secure time-limited download links (S3 presigned URLs), licence key generation, Stripe Checkout with instant delivery webhooks, seller storefronts, and a review and rating system.',
    category: 'ecommerce',
    tech: ['Next.js 14', 'Stripe', 'AWS S3', 'PostgreSQL', 'TypeScript', 'Resend'],
    highlights: [
      'Secure presigned S3 download URLs (time-limited)',
      'Automated licence key generation & delivery',
      'Stripe Checkout with instant fulfilment webhook',
      'Seller storefronts with revenue analytics',
      'Review & rating system with verified purchases',
    ],
    year: '2023',
    status: 'freelance',
  },
  {
    id: 'freshcart',
    title: 'FreshCart',
    subtitle: 'Grocery Delivery Commerce App',
    description: 'React Native grocery delivery app with slot-based delivery scheduling, real-time order tracking on a map, smart substitution prompts for out-of-stock items, Stripe payment with saved cards, loyalty stamp card, and a store-side picker app for order assembly.',
    category: 'ecommerce',
    tech: ['React Native', 'TypeScript', 'Stripe Mobile SDK', 'Firebase', 'Google Maps SDK'],
    highlights: [
      'Slot-based delivery scheduling with capacity limits',
      'Real-time order tracking (Google Maps SDK)',
      'Smart out-of-stock substitution prompts',
      'Stripe saved-card checkout with Apple / Google Pay',
      'Store-side picker app for order assembly',
    ],
    year: '2024',
    status: 'contract',
  },

  // ── AI Automation ─────────────────────────────────────────────────────────
  {
    id: 'autoflow-ai',
    title: 'AutoFlow AI',
    subtitle: 'Workflow Automation Platform',
    description: 'Production automation platform built on a decade of API orchestration experience. Drag-and-drop workflow builder with LangChain-powered processing steps, event-driven webhook triggers, parallel execution, retry logic, and full audit logs — architected for reliability at scale.',
    category: 'ai',
    tech: ['Python', 'FastAPI', 'LangChain', 'OpenAI API', 'React', 'PostgreSQL', 'Redis'],
    highlights: [
      'Drag-and-drop workflow builder',
      'LangChain agentic pipelines with tool use',
      'Webhook triggers & scheduled runs',
      'Retry logic, error handling & execution logs',
      'Multi-tenant with role-based access',
    ],
    year: '2024',
    status: 'freelance',
    featured: true,
  },
  {
    id: 'smartbot-studio',
    title: 'SmartBot Studio',
    subtitle: 'AI Chatbot Builder Platform',
    description: 'SaaS platform leveraging 8+ years of event-driven system design to deliver reliable, embeddable AI chatbots. Clients train bots on their own knowledge bases via document ingestion, then deploy a branded widget to any site — backed by real-time WebSocket conversations and a conversation analytics dashboard.',
    category: 'ai',
    tech: ['React', 'Node.js', 'Claude API', 'MongoDB', 'WebSocket', 'TypeScript', 'Vector DB'],
    highlights: [
      'Document ingestion & vector knowledge base',
      'Claude-powered conversational AI',
      'Embeddable widget (one-line script)',
      'Real-time WebSocket messaging',
      'Conversation analytics & handoff flows',
    ],
    year: '2025',
    status: 'freelance',
  },

  {
    id: 'leadnurture-ai',
    title: 'LeadNurture AI',
    subtitle: 'CRM Automation & Lead Scoring',
    description: 'GoHighLevel-based lead nurturing system built on 10 years of API orchestration experience. Automated multi-step follow-up sequences triggered by form fills and inbound calls, AI-powered lead scoring via GPT classification, and real-time CRM sync across GoHighLevel, HubSpot, and Kommo via webhooks.',
    category: 'ai',
    tech: ['GoHighLevel', 'HubSpot API', 'Kommo API', 'OpenAI GPT', 'Zapier', 'Node.js'],
    highlights: [
      'AI lead scoring via GPT intent classification',
      'Multi-step nurture sequences (SMS, email, voicemail)',
      'Real-time webhook sync across GoHighLevel & HubSpot',
      'Inbound call trigger → CRM deal creation',
      'Conversion rate dashboard with A/B sequence testing',
    ],
    year: '2024',
    status: 'freelance',
  },
  {
    id: 'n8n-integrations',
    title: 'n8n Integration Suite',
    subtitle: 'Multi-platform Workflow Automation',
    description: 'Custom n8n workflow suite connecting CRMs, payment systems, communication tools, and internal databases. Built on 8 years of webhook and event-driven system design — 40+ production workflows handling lead routing, invoice automation, Slack alerts, and nightly data sync jobs for three client organisations.',
    category: 'ai',
    tech: ['n8n', 'Zapier', 'Make (Integromat)', 'Stripe API', 'Slack API', 'PostgreSQL'],
    highlights: [
      '40+ production workflows across 3 client orgs',
      'Lead routing from 6 ad channels → CRM pipelines',
      'Automated invoice generation triggered by Stripe events',
      'Nightly data sync between SaaS tools and internal DB',
      'Slack alert system for business-critical event thresholds',
    ],
    year: '2023–2025',
    status: 'contract',
    featured: true,
  },
  {
    id: 'contentbot-ai',
    title: 'ContentBot AI',
    subtitle: 'AI Content Generation Pipeline',
    description: 'End-to-end content pipeline that takes a brand voice profile and brief, generates SEO-optimised blog posts and social captions via Claude API, routes drafts through an approval workflow in Slack, publishes approved content to WordPress and LinkedIn via their APIs, and tracks engagement metrics back into a central dashboard.',
    category: 'ai',
    tech: ['Claude API', 'LangChain', 'WordPress REST API', 'LinkedIn API', 'Slack API', 'FastAPI'],
    highlights: [
      'Brand voice profiling for consistent tone',
      'Claude-powered SEO blog & caption generation',
      'Slack approval workflow before publishing',
      'Auto-publish to WordPress & LinkedIn',
      'Engagement metrics dashboard with feedback loop',
    ],
    year: '2024',
    status: 'freelance',
  },
  {
    id: 'supportpilot',
    title: 'SupportPilot',
    subtitle: 'AI Support Ticket Routing System',
    description: 'Intelligent support routing layer sitting in front of a Zendesk / Freshdesk inbox. Uses GPT-4 to classify incoming tickets by intent, urgency, and product area, then routes them to the right agent queue, drafts a suggested reply, and syncs status changes back to the CRM — cutting first-response time by 60% in production.',
    category: 'ai',
    tech: ['OpenAI GPT-4', 'Python', 'FastAPI', 'Zendesk API', 'Zoho CRM', 'Make (Integromat)'],
    highlights: [
      'GPT-4 ticket classification by intent & urgency',
      'Automated routing to correct agent queue',
      'AI-drafted suggested reply for agent review',
      'CRM status sync on ticket close / escalate',
      '60% reduction in first-response time (production)',
    ],
    year: '2024',
    status: 'freelance',
  },

  // ── Desktop ───────────────────────────────────────────────────────────────
  {
    id: 'devsync-desktop',
    title: 'DevSync Desktop',
    subtitle: 'Cross-platform Developer Toolkit · Electron',
    description: 'Cross-platform Electron + React desktop app with a full IPC architecture between the renderer and main processes. Features a tag-and-search snippet manager (SQLite), a built-in HTTP client with request history, AES-256 encrypted local notes, a Git diff viewer, and a Squirrel-based auto-updater — packaged for Windows, macOS, and Linux.',
    category: 'desktop',
    tech: ['Electron', 'React', 'TypeScript', 'SQLite', 'Node.js', 'Squirrel'],
    highlights: [
      'Full Electron IPC architecture (main ↔ renderer)',
      'AES-256 encrypted local SQLite storage',
      'Tag-indexed snippet manager with full-text search',
      'Built-in HTTP client with request history',
      'Squirrel auto-updater — Windows / macOS / Linux',
    ],
    year: '2023',
    status: 'shipped',
    featured: true,
  },
  {
    id: 'dataform-pro',
    title: 'DataForm Pro',
    subtitle: 'Windows Enterprise Data Tool · C# / WPF',
    description: 'Enterprise WPF desktop application following strict MVVM architecture. Forms are generated at runtime from JSON schema definitions — no redeployment needed when field layouts change. Integrates with SQL Server via Entity Framework, generates multi-section PDF reports via PDFsharp, and ships with an NSIS installer and silent-update mechanism for enterprise IT deployment.',
    category: 'desktop',
    tech: ['C#', 'WPF', '.NET 8', 'Entity Framework', 'SQL Server', 'PDFsharp', 'NSIS'],
    highlights: [
      'Runtime form generation from JSON schemas',
      'Entity Framework + SQL Server data layer',
      'Multi-section PDF report generation (PDFsharp)',
      'MVVM with dependency injection (Microsoft.Extensions.DI)',
      'NSIS installer with silent enterprise update',
    ],
    year: '2022',
    status: 'contract',
  },
  {
    id: 'stockpulse-pos',
    title: 'StockPulse POS',
    subtitle: 'Windows Point-of-Sale System · C# / WinUI',
    description: 'Retail point-of-sale system built with WinUI 3 and .NET 8. Handles barcode scanner integration via HID API, real-time stock deduction, multi-till session management, receipt printing to thermal printers via ESC/POS commands, and end-of-day cash-up reports exported to Excel. Runs fully offline with SQLite and syncs to a central SQL Server when connectivity is restored.',
    category: 'desktop',
    tech: ['C#', 'WinUI 3', '.NET 8', 'SQLite', 'SQL Server', 'HID API', 'ESC/POS'],
    highlights: [
      'Barcode scanner integration via HID API',
      'Real-time stock deduction & multi-till sessions',
      'Thermal receipt printing (ESC/POS protocol)',
      'Offline-first SQLite with SQL Server sync',
      'End-of-day Excel cash-up report export',
    ],
    year: '2023',
    status: 'contract',
    featured: true,
  },
  {
    id: 'timeflow-desktop',
    title: 'TimeFlow Desktop',
    subtitle: 'Time Tracking & Invoicing App · Electron',
    description: 'Cross-platform Electron + React time tracking and invoicing tool for freelancers and small agencies. Features a system-tray timer with idle detection, project and client tagging, automatic timesheet aggregation, branded PDF invoice generation, and Stripe payment link creation — packaged with Squirrel auto-updater for Windows and macOS.',
    category: 'desktop',
    tech: ['Electron', 'React', 'TypeScript', 'SQLite', 'Stripe API', 'PDFKit', 'Squirrel'],
    highlights: [
      'System-tray timer with automatic idle detection',
      'Project & client tagging with weekly timesheet view',
      'Branded PDF invoice generation (PDFKit)',
      'Stripe payment link creation from invoice',
      'Squirrel auto-updater — Windows & macOS',
    ],
    year: '2022',
    status: 'shipped',
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export const profile = {
  name: "Daniel Ray",
  title: "Senior Full-Stack Developer",
  location: "Lafayette, Tennessee, 37083",
  university: "Volunteer State Community College",
  languages: ["English","Spanish","Portuguese","German", "Japanese"],
  headline: "12 Years. 6 Disciplines. 50+ Products.",
  subheadline: "Senior Full-Stack Developer based in Lafayette, Tennessee. Vol State Alumnus. Specialising in mobile apps, Unity games, web SaaS, AI automation, e-commerce, and desktop software.",
  bio: "Full-stack engineer with 12 years of delivering robust, scalable products across mobile, web, gaming, AI, and desktop platforms. From Android and Unity to Next.js, LangChain, and Electron — I build software that ships.",
  certifications: [
    "Google Associate Android Developer",
    "Google Certified App Developer",
    "CodinGame Coding Speed Certification (Silver)",
    "CodinGame Dart Certification (Top 1%)",
    "CodinGame Dart Certification (With Honors)",
    "CodinGame TypeScript Certification",
    "CodinGame C++ Certification",
    "CodinGame Python 3 Certification",
  ],
  totalYears: 12,
  /** Total mobile apps / products shipped over career (portfolio marketing figure) */
  totalApps: 50,
  /** Apps with full cards & screenshots in Work History */
  workHistoryAppsCount: 19,
  /** Figma design portfolio (UI/UX work) */
  figmaPortfolioUrl:
    "https://www.figma.com/design/9bKBKiSGkSPFXqP5p3xN0f/Daniel--s-Portfolio?node-id=0-1&t=rGbs8K3IithOBKql-1",
  /** Workana freelancer profile */
  workanaUrl: "https://www.workana.com/freelancer/926e74bdcff8813080de57673d4d5950",
};
