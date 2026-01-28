import { salon } from "../content";

export function IntroImageSection() {
  return (
    <section className="mx-auto max-w-[1400px] px-4 py-12 md:py-24">
      <div className="relative overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] shadow-2xl">
        {salon.heroAvif || salon.heroWebp ? (
          <picture>
            {salon.heroAvif && (
              <source type="image/avif" srcSet={`${salon.heroAvif} 1600w`} sizes="(max-width: 768px) 100vw, 1200px" />
            )}
            {salon.heroWebp && (
              <source type="image/webp" srcSet={`${salon.heroWebp} 1600w`} sizes="(max-width: 768px) 100vw, 1200px" />
            )}
            <img
              src={salon.heroJpeg ?? ""}
              alt={`Salone ${salon.name}`}
              loading="lazy"
              decoding="async"
              width={1600}
              height={600}
              className="w-full h-[320px] md:h-[520px] object-cover object-[50%_45%]"
            />
          </picture>
        ) : (
          <img
            src={salon.heroJpeg ?? ""}
            alt={`Salone ${salon.name}`}
            loading="lazy"
            decoding="async"
            width={1600}
            height={600}
            className="w-full h-[320px] md:h-[520px] object-cover object-[50%_45%]"
          />
        )}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[var(--paper)] to-transparent opacity-70"></div>
      </div>
    </section>
  );
}
