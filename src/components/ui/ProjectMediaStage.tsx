import Image from "next/image";

import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { ProjectVisual } from "@/components/ui/ProjectVisual";
import type { ProjectMedia } from "@/content/home";

/**
 * The single media slot of a featured project (ADR-021).
 * - diagram: the editorial ProjectVisual fallback (no real media yet).
 * - image / video: a bounded 16:10 preview stage. Home is a preview, not the
 *   full asset — the image is cropped with object-fit: cover at `focus`,
 *   never distorted or upscaled past what the column needs. No browser
 *   frame, no shadow: border + radius only, so the product is the image.
 */
const STAGE =
  "group/media relative aspect-[16/10] overflow-hidden rounded-[var(--radius-lg)] border border-[var(--border)] bg-[var(--background-secondary)]";

// lg+: the media column is 8/12 of a container capped at 1360px.
const SIZES = "(min-width: 1024px) min(60vw, 900px), 100vw";

export function ProjectMediaStage({ media }: { media: ProjectMedia }) {
  if (media.kind === "diagram") {
    return <ProjectVisual kind={media.diagram} />;
  }

  if (media.kind === "video") {
    return (
      <div className={STAGE}>
        <ProjectVideo sources={media.sources} poster={media.poster} focus={media.focus} />
      </div>
    );
  }

  return (
    <div className={STAGE}>
      <Image
        src={media.image.src}
        alt={media.image.alt}
        fill
        sizes={SIZES}
        className="object-cover motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[var(--ease)] motion-safe:group-hover/media:scale-[1.01]"
        style={{ objectPosition: media.focus ?? "50% 0%" }}
      />
    </div>
  );
}
