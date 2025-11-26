import Container from "../global/container";
import { YouTubeThumbnail } from "../ui/youtube-thumbnail";

const Analysis = () => {
    return (
        <div id="blog" className="relative flex flex-col items-center justify-center w-full -mt-32 pb-20">
            <Container>
                <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-medium !leading-snug">
                        Watch Proven Strategies  <br /><span className="font-subheading italic">in Action</span>
                    </h2>
                    <p className="text-base md:text-lg text-accent-foreground/80 mt-4">
                        See how real experts transform their consulting businesses and accelerate growth using Nicolas Clay&apos;s methods.
                    </p>
                </div>
            </Container>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative w-full">

                {/* Video 1 */}
                <Container delay={0.2} className="relative">
                    <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg">
                        <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
                        <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

                        <YouTubeThumbnail
                            videoId="XB7xt5NTyZc"
                            title="Campaign Insights"
                            customThumbnail="/images/thumb1.png"
                        />
                    </div>
                    <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-1/2 pointer-events-none"></div>
                </Container>

                {/* Video 2 */}
                <Container delay={0.3} className="relative">
                    <div className="relative rounded-xl lg:rounded-[32px] border border-border p-2 backdrop-blur-lg">
                        <div className="absolute top-1/8 left-1/2 -z-10 bg-gradient-to-r from-sky-500 to-blue-600 w-1/2 lg:w-3/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[4rem] lg:blur-[10rem] animate-image-glow"></div>
                        <div className="hidden lg:block absolute -top-1/8 left-1/2 -z-20 bg-blue-600 w-1/4 -translate-x-1/2 h-1/4 -translate-y-1/2 inset-0 blur-[10rem] animate-image-glow"></div>

                        <YouTubeThumbnail
                            videoId="7iyUd1yS8sg"
                            title="Audience Metrics"
                            customThumbnail="/images/thumb2.png"
                        />
                    </div>
                    <div className="bg-gradient-to-t from-background to-transparent absolute bottom-0 inset-x-0 w-full h-1/2 pointer-events-none"></div>
                </Container>
            </div>
        </div>
    )
};

export default Analysis;
