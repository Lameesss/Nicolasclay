import Wrapper from "@/components/global/wrapper";
import Analysis from "@/components/marketing/analysis";
// import Companies from "@/components/marketing/companies";
import CTA from "@/components/marketing/cta";
import CTAA from "@/components/marketing/ctaa";

import Faqs from "@/components/marketing/Faqs";
import Features from "@/components/marketing/features";
import Hero from "@/components/marketing/hero";
import Integration from "@/components/marketing/integration";
import Introduction from "@/components/marketing/Introduction";
import LanguageSupport from "@/components/marketing/lang-support";
import Light from "@/components/marketing/light";
import LogoTicker from "@/components/marketing/LogoTicker";
import Pricing from "@/components/marketing/pricing";
import { Testimonials } from "@/components/marketing/Testimonials";


const HomePage = () => {
    return (
        <Wrapper className="py-20 relative">
            <Hero />
            {/* <Companies /> */}
            <LogoTicker/>
            <Introduction/>
            <Features />
              <Light/>
            <Analysis />
            <Integration />
            <Pricing />
            <Testimonials/>
            <CTA />
            <LanguageSupport />
             <Faqs/>
            <CTAA/>
          
            
        </Wrapper>
    )
};

export default HomePage
