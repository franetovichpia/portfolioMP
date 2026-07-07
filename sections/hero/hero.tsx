import { BackgroundWaves } from "@/components/common/background-waves";
import { Container } from "@/components/common/container";
import { HeroContent } from "@/components/hero/hero-content";
import { HeroMedia } from "@/components/hero/hero-media";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-28">
      <BackgroundWaves />

      <Container>
        <div className="grid min-h-[calc(100vh-7rem)] items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <HeroContent />
          <HeroMedia />
        </div>
      </Container>
    </section>
  );
}