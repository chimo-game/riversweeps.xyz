"use client"

import { CheckCircle2, Shield, Zap, BarChart3, Settings, Lock, Sparkles } from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function RiversweepsContentSection() {
  const benefits = [
    {
      icon: Settings,
      title: "Easy Setup and Management",
      description:
        "Craft a professional sweepstakes website and tailor it to your preferences with just a few clicks. Efficiently oversee entries and regulations to ensure a seamless and effective operation.",
    },
    {
      icon: Sparkles,
      title: "Enhanced Participant Engagement",
      description:
        "Elevate participant interaction by collecting additional data such as contact details and survey responses. Use this information to craft personalized communications that enhance the likelihood of converting entrants into loyal customers.",
    },
    {
      icon: Zap,
      title: "Automated Efficiency",
      description:
        "Automate repetitive tasks like tracking entries and selecting winners with ease. Allow the software to handle administrative aspects, freeing you to concentrate on strategic promotion.",
    },
    {
      icon: Lock,
      title: "Security and Compliance",
      description:
        "Maintain compliance with regulations and safeguard both entrants and your brand with web-based sweepstakes software's built-in security features.",
    },
  ]

  const features = [
    "Customizable Templates: Design a website that resonates with your brand through personalized templates.",
    "Entry and Winner Tracking: Effortlessly manage entries, rules, and winners with intuitive tracking tools.",
    "Automated Notifications: Keep participants informed about their entry status and notify winners automatically.",
    "Digital Marketing Integration: Amplify awareness of your sweepstakes via various digital channels, including email and social media.",
    "Analytics Insights: Gain valuable insights into sweepstakes performance, including entry count, return visitor rate, and more.",
    "Security and Compliance Measures: Ensure the legality and validity of entries by adhering to industry regulations and standards.",
  ]

  const selectionCriteria = [
    "Prioritize Security and Compliance: Opt for solutions that prioritize security and comply with legal standards.",
    "Suitable Features: Select software equipped with features tailored to your needs, from customizable templates to automated notifications.",
    "Value Proposition: Compare solutions to find the best balance of features and pricing.",
    "User-Friendly Interface: Opt for intuitive software to ensure hassle-free operation.",
  ]

  const faqs = [
    {
      question: "Does web-based sweepstakes software cost money?",
      answer:
        "Most web-based sweepstakes software solutions have a fee, though limited-feature free versions may be available.",
    },
    {
      question: "Is web-based sweepstakes software secure?",
      answer:
        "Yes, most solutions prioritize security and compliance. Look for features such as data encryption and secure payment processing.",
    },
    {
      question: "What are the benefits of web-based sweepstakes software?",
      answer:
        "Web-based software simplifies setup, management, and tracking of promotions, offers engagement tools, automation, and compliance features.",
    },
    {
      question: "How do I choose the right web-based sweepstakes software?",
      answer: "Prioritize security, features aligned with your needs, value, and user-friendliness.",
    },
    {
      question: "What insights can I gain from web-based sweepstakes software?",
      answer:
        "Insights include entry count, return visitor rate, and more, aiding decision-making for future promotions.",
    },
    {
      question: "Are there other advantages to using web-based sweepstakes software?",
      answer:
        "Yes, software ensures compliance and validity while simplifying entry and winner tracking, safeguarding your brand and participants.",
    },
  ]

  return (
    <section className="relative z-10 bg-gradient-to-b from-background via-background to-card/50 py-16 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">RIVERSWEEPS™ SERVICES AND PRODUCTS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            <span className="rainbow-text">Top and Unique Benefits</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Unlock the power of web-based sweepstakes software with Riversweeps™: Seamlessly run and manage your
            sweepstakes online for maximum success
          </p>
        </div>

        {/* Benefits Section */}
        <div className="space-y-8">
          <div className="text-center space-y-3">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <BarChart3 className="w-8 h-8 text-primary" />
              The Benefits of Web-Based Sweepstakes Software
            </h3>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto leading-relaxed">
              Harness the potential of online promotions with Riversweeps™ web-based sweepstakes software. This
              innovative solution empowers you to effortlessly establish and oversee a wide array of sweepstakes. From
              customizable templates that infuse your unique brand identity to an array of features designed to amplify
              engagement with participants, web-based sweepstakes software sets the stage for harnessing the full power
              of online promotions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div
                  key={index}
                  className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border hover:border-primary/40 transition-all hover:scale-[1.02] group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <h4 className="text-xl font-bold text-white">{benefit.title}</h4>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Key Features Section */}
        <div className="bg-card/30 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-border space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-primary" />
              Key Features and Functionalities
            </h3>
            <p className="text-muted-foreground text-lg">
              Embrace a suite of capabilities that streamline the journey of executing a successful online promotion:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors">
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <p className="text-white leading-relaxed">{feature}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Running Sweepstakes Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white text-center">
            Seamlessly Running Your Sweepstakes Online
          </h3>
          <div className="bg-gradient-to-r from-primary/10 to-pink-600/10 rounded-2xl p-8 border border-primary/20">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Web-based sweepstakes software revolutionizes the process of conducting and overseeing online promotions.
              By automating laborious tasks, you can concentrate on crafting engaging content and boosting visibility for
              your sweepstakes. With simplified entry and winner tracking, you can ensure that all actions align with
              legal requirements, minimizing potential legal complications.
            </p>
          </div>
        </div>

        {/* Analytics Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white text-center flex items-center justify-center gap-3">
            <BarChart3 className="w-8 h-8 text-primary" />
            Managing and Analyzing Sweepstakes Performance
          </h3>
          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 border border-border">
            <p className="text-muted-foreground text-lg leading-relaxed">
              Beyond its setup and management capabilities, web-based sweepstakes software serves as an invaluable
              analytics tool. Key metrics, such as entry count, returning participants, and engagement duration, can be
              swiftly tracked. Leverage these insights to fine-tune your campaigns, guaranteeing the success of every
              sweepstakes. Integration with digital marketing tools further enables multi-channel promotion.
            </p>
          </div>
        </div>

        {/* Choosing Software Section */}
        <div className="space-y-6">
          <h3 className="text-3xl font-bold text-white text-center">
            Choosing the Right Web-Based Sweepstakes Software
          </h3>
          <p className="text-muted-foreground text-lg text-center max-w-3xl mx-auto">
            Selecting the ideal web-based sweepstakes software demands careful consideration:
          </p>

          <div className="grid md:grid-cols-2 gap-4 mt-8">
            {selectionCriteria.map((criterion, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-5 rounded-xl bg-secondary/30 border border-border hover:border-primary/40 transition-all"
              >
                <div className="w-6 h-6 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary text-sm font-bold">{index + 1}</span>
                </div>
                <p className="text-white leading-relaxed">{criterion}</p>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary/20 to-blue-600/20 rounded-2xl p-8 border border-primary/30 text-center mt-8">
            <p className="text-white text-lg leading-relaxed">
              <span className="font-bold text-primary">Riversweeps™</span> web-based sweepstakes software empowers you
              to optimize online promotions, unlock conversions, and cultivate customer growth. Make an informed choice
              and watch your business flourish.
            </p>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <h3 className="text-3xl font-bold text-white flex items-center justify-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Frequently Asked Questions
            </h3>
            <p className="text-muted-foreground">Get answers to common questions about Riversweeps™ software</p>
          </div>

          <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border/50 px-4">
                  <AccordionTrigger className="text-left text-white hover:text-primary transition-colors py-4">
                    <span className="font-semibold text-lg">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

