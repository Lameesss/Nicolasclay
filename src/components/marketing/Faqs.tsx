"use client";

import Tag from "@/components/ui/Tag";
import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const faqs = [
  {
    question: "How is this program different from other consulting or business growth resources?",
    answer:
      "Unlike generic programs, Nicolas Clay frameworks blend psychology with actionable strategies—proven to help consultants reposition their expertise, attract high-value clients, and avoid burnout.",
  },
  {
    question: "Do I need prior consulting or business experience?",
    answer:
      "No. Whether youre starting out or scaling, the resources and guidance are designed to meet you where you are, with clear steps for every stage of your growth journey.",
  },
  {
    question: "What kind of support is provided?",
    answer:
      "You,ll have access to live workshops, implementation guides, and responsive support. Mastermind members receive direct strategy sessions and priority assistance.",
  },
  {
    question: "Are the strategies one-size-fits-all?",
    answer:
      "Not at all. The playbooks and worksheets can be tailored to your specific niche, goals, and client profile for maximum relevance and results.",
  },
  {
    question: "How quickly can I expect results?",
    answer:
      "With focused action, many clients see progress—like better client engagement and increased fees—in just a few weeks. Deeper transformations build over time with consistent implementation.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

  return (
    <section className="py-12">
      <div className="container">
        <div className="flex justify-center">
          <Tag>Faqs</Tag>
        </div>
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Questions? We&apos;ve got{" "}
          <span className="text-blue-400">answers</span>
        </h2>

        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqIndex) => (
            <div
              key={faq.question}
              onClick={() => setSelectedIndex(selectedIndex === faqIndex ? null : faqIndex)}
              className="bg-neutral-900 rounded-2xl border border-white/10 p-6 cursor-pointer hover:border-white/20 transition-all"
            >
              <div className="flex justify-between items-start">
                <h3 className="font-medium m-0">{faq.question}</h3>
                <Plus
                  size={30}
                  className={twMerge(
                    "feather feather-plus text-blue-400 flex-shrink-0 transition duration-300",
                    selectedIndex === faqIndex && "rotate-45"
                  )}
                />
              </div>

              <AnimatePresence>
                {selectedIndex === faqIndex && (
                  <motion.div
                    initial={{
                      height: 0,
                      marginTop: 0,
                    }}
                    animate={{
                      height: "auto",
                      marginTop: 24,
                    }}
                    exit={{
                      height: 0,
                      marginTop: 0,
                    }}
                    className="overflow-hidden"
                  >
                    <p className="text-white/50">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
