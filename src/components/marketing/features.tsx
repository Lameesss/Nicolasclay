import { FEATURES } from "@/constants";
import { cn } from "@/lib";
import Image from "next/image";
import Link from "next/link";
import Container from "../global/container";
import { MagicCard } from "../ui/magic-card";

const Features = () => {
    return (
        <div id="features" className="relative flex flex-col items-center justify-center w-full py-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug mt-6">
                        Behind the Brand<br /> Nicolas <span className="font-subheading italic">Clay</span>
                    </h2>
                    <p className="text-base md:text-lg text-center text-accent-foreground/80 mt-6">
                        Transform your expertise into a premium brand.
                        Attract high-ticket clients, scale your impact, and accelerate growth—with proven psychology-driven frameworks.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 relative overflow-visible">

                {FEATURES.map((feature, index) => (
                    <Container key={feature.title} delay={0.1 + index * 0.1} className={cn(
                        "relative flex flex-col rounded-2xl lg:rounded-3xl bg-card border border-border/50 hover:border-border/100 transition-colors",
                        index === 3 && "lg:col-span-2 order-5 md:order-none",
                        index === 4 && "order-4 md:order-none",
                        index === 2 && "md:col-span-2 lg:col-span-1",
                    )}>
                        <MagicCard
                            gradientFrom="#38bdf8"
                            gradientTo="#3b82f6"
                            className="p-4 lg:p-6 lg:rounded-3xl"
                            gradientColor="rgba(59,130,246,0.1)"
                        >
                            {index === 0 ? (
                                // Testimonial Card for first feature
                                <div className="flex flex-col h-full min-h-[400px] justify-between">
                                    {/* Header */}
                                    <div className="flex items-start justify-between mb-6">
                                        <Link href="https://www.instagram.com/thenicolasclay/" target="_blank" rel="noopener noreferrer">
                                            <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors cursor-pointer">
                                                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                                </svg>
                                            </div>
                                        </Link>
                                        <div className="px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                                            <span className="text-sm text-white/90">Founder</span>
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 mb-6">
                                        <h3 className="text-2xl font-semibold text-white mb-4">Nicolas Clay</h3>
                                        <p className="text-base text-white/70 leading-relaxed">
                                            I empower coaches, consultants, and entrepreneurs to turn expertise into premium, productized brands.
                                            With psychology and proven strategies, I help you attract high-value clients, scale rapidly, and build a thriving business without burnout.
                                            Let&apos;s transform the way you work and unlock your next level of success.
                                        </p>
                                    </div>

                                    {/* Metric Badge */}
                                    <div className="inline-flex px-4 py-2.5 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 self-start">
                                        <span className="text-base font-semibold text-white">Coached over 200+ Setters</span>
                                    </div>
                                </div>
                            ) : index === 1 ? (
                                // Background Image Card for second feature
                                <div className="relative w-full min-h-[300px] md:min-h-[400px]">
                                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl">
                                        <Image
                                            src="/images/clay.jpg"
                                            alt="Comprehensive Insights"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                            priority
                                        />
                                    </div>
                                </div>
                            ) : index === 2 ? (
                                // Background Video Card for third feature
                                <div className="relative w-full min-h-[300px] md:min-h-[400px]">
                                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        >
                                            <source src="/images/intro2.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            ) : index === 3 ? (
                                // Background Video Card for fourth feature
                                <div className="relative w-full min-h-[300px] md:min-h-[400px]">
                                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl">
                                        <video
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover"
                                        >
                                            <source src="/images/intro.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                </div>
                            ) : index === 4 ? (
                                // Background Image Card for fifth feature
                                <div className="relative w-full min-h-[300px] md:min-h-[400px]">
                                    <div className="absolute inset-0 w-full h-full overflow-hidden rounded-2xl lg:rounded-3xl">
                                        <Image
                                            src="/images/clay1.jpg"
                                            alt="Dynamic Optimization"
                                            fill
                                            className="object-cover"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </MagicCard>
                    </Container>
                ))}
            </div>
        </div>
    )
};

export default Features
