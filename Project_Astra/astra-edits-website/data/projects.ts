export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  videoUrl?: string;
  thumbnailUrl?: string;
  client?: string;
  date: string;
  tags: string[];
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "tech-review-1",
    title: "Tech Review Series",
    category: "Tech",
    description: "Professional editing with dynamic transitions and cinematic color grading. This project showcases our ability to create engaging tech content with smooth transitions and professional pacing.",
    videoUrl: "/hero-video.mp4",
    thumbnailUrl: "",
    client: "Tech YouTuber",
    date: "2024-01-15",
    tags: ["Color Grading", "Transitions", "Tech"],
    featured: true,
  },
  {
    id: "lifestyle-vlog-1",
    title: "Lifestyle Vlog",
    category: "Lifestyle",
    description: "Color grading and seamless storytelling with professional transitions. Captured the essence of daily life with cinematic flair.",
    videoUrl: "/hero-video.mp4",
    thumbnailUrl: "",
    client: "Lifestyle Creator",
    date: "2024-02-20",
    tags: ["Color Grading", "Storytelling", "Lifestyle"],
    featured: true,
  },
  {
    id: "brand-commercial-1",
    title: "Brand Commercial",
    category: "Brand",
    description: "High-end production with motion graphics and cinematic effects. Created a compelling brand narrative that resonates with audiences.",
    videoUrl: "/hero-video.mp4",
    thumbnailUrl: "",
    client: "Brand Client",
    date: "2024-03-10",
    tags: ["Motion Graphics", "Brand", "Cinematic"],
    featured: true,
  },
  {
    id: "product-launch",
    title: "Product Launch Video",
    category: "Commercial",
    description: "Dynamic product showcase with professional editing and engaging visuals.",
    videoUrl: "/hero-video.mp4",
    thumbnailUrl: "",
    client: "Product Company",
    date: "2024-04-05",
    tags: ["Product", "Commercial", "Editing"],
    featured: false,
  },
  {
    id: "music-video",
    title: "Music Video Production",
    category: "Music",
    description: "Creative music video editing with rhythm-based cuts and visual storytelling.",
    videoUrl: "/hero-video.mp4",
    thumbnailUrl: "",
    client: "Independent Artist",
    date: "2024-05-12",
    tags: ["Music", "Creative", "Rhythm"],
    featured: false,
  },
  {
    id: "corporate-video",
    title: "Corporate Presentation",
    category: "Corporate",
    description: "Professional corporate video with clean editing and clear messaging.",
    videoUrl: "/hero-video.mp4",
    thumbnailUrl: "",
    client: "Corporate Client",
    date: "2024-06-18",
    tags: ["Corporate", "Professional", "Clean"],
    featured: false,
  },
];

