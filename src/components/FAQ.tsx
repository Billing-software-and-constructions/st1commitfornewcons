import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of construction projects do you handle?",
      answer: "We handle residential, commercial, and industrial construction projects of all sizes, from small renovations to large-scale building constructions."
    },
    {
      question: "How long does a typical construction project take?",
      answer: "Project duration varies based on scope and complexity. A typical residential project takes 3-6 months, while larger commercial projects may take 12-18 months."
    },
    {
      question: "Do you provide free estimates and consultations?",
      answer: "Yes, we offer free initial consultations and detailed project estimates. Our team will assess your requirements and provide a comprehensive quote."
    },
    {
      question: "Are you licensed and insured?",
      answer: "Absolutely. We are fully licensed and insured, ensuring your project is protected and complies with all local building codes and regulations."
    },
    {
      question: "What is your payment structure?",
      answer: "We typically work with milestone-based payments, with an initial deposit followed by payments at key project stages. Terms are flexible and discussed during consultation."
    },
    {
      question: "Do you offer warranty on your work?",
      answer: "Yes, we provide comprehensive warranties on all our construction work. The warranty period varies depending on the type of work performed."
    },
  ];

  return (
    <section id="faq" className="py-20 bg-muted">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-secondary mb-4">You May Ask</h2>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg px-6 border-none shadow-card">
              <AccordionTrigger className="text-left font-semibold text-secondary hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
