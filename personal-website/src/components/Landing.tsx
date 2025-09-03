import Image from "next/image";

export default function Landing() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(60%_40%_at_50%_0%,hsl(var(--primary)/0.15),transparent_60%)]" />

      <div className="container mx-auto max-w-4xl px-6 py-24 text-center">
        <Image
          src="/HEADSHOT.JPG"          
          alt="Chris Pickreign headshot"
          width={120}
          height={120}
          priority
          sizes="120px"
          className="mx-auto mb-6 rounded-full ring-2 ring-primary/20 shadow-lg"
        />

        <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground">
          Chris Pickreign<span className="text-primary"></span>
        </h1>

        <h2 className="mt-3 text-lg md:text-xl text-muted-foreground">
          Software Engineer&nbsp;|&nbsp;Consultant&nbsp;|&nbsp;Founder
        </h2>

        <p className="mx-auto mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
            Passionate about solving problems at the intersection of technology and business
        </p>
      </div>
    </section>
  );
}
