import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const dynamic = "force-static";
export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "radial-gradient(circle at 80% 0%, #1c2c5c 0%, #0e1015 45%, #08090c 100%)",
          color: "#f2f3f5",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, color: "#a1a6b2" }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: "#3dd68c" }} />
          {profile.availability.label}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 34, color: "#a1a6b2" }}>{`${profile.name} — ${profile.headline}`}</div>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -3, lineHeight: 1.05, marginTop: 20, maxWidth: 1000 }}>{profile.heroHeadline}</div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 26, color: "#6b7080" }}>
          <span>React</span>
          <span>Next.js</span>
          <span>React Native</span>
          <span>TypeScript</span>
          <span>Node.js</span>
        </div>
      </div>
    ),
    size,
  );
}
