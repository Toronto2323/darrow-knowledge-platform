import { Container } from "@/components/ui/Container";

type TechnicalMetric = {
  value: string;
  label: string;
};

type TechnicalBandProps = {
  eyebrow?: string;
  title: string;
  description: string;
  metrics?: TechnicalMetric[];
};

export function TechnicalBand({
  eyebrow = "DARROW Knowledge Platform",
  title,
  description,
  metrics = [],
}: TechnicalBandProps) {
  return (
    <section className="bg-[#085924]/34 py-16 sm:py-20 lg:py-24 backdrop-blur-sm">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.8fr] lg:items-center">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#F2F2F2]/75">
              {eyebrow}
            </p>

            <h2 className="mt-3 max-w-4xl text-3xl font-black text-[#F2F2F2] sm:text-5xl">
              {title}
            </h2>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-[#F2F2F2]/82">
              {description}
            </p>
          </div>

          {metrics.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {metrics.map((metric) => (
                <div
                  key={`${metric.value}-${metric.label}`}
                  className="rounded-2xl border border-[#F2F2F2]/18 bg-[#262626]/35 p-5"
                >
                  <p className="text-2xl font-black text-[#F2F2F2]">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-sm font-semibold text-[#F2F2F2]/72">
                    {metric.label}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
