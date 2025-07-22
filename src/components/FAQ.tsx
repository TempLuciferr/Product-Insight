import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: 'What types of products can ProductInsight analyze?',
      answer: 'ProductInsight can analyze a wide variety of consumer products including skincare items, cosmetics, food products, supplements, household items, and more. Our AI is trained on millions of product images and continues to learn and improve.'
    },
    {
      question: 'How accurate is the AI analysis?',
      answer: 'Our AI achieves over 95% accuracy in product identification and ingredient detection. The system is continuously updated with new data and feedback to improve accuracy. For critical applications, we recommend using our confidence scores to assess result reliability.'
    },
    {
      question: 'What image formats are supported?',
      answer: 'We support JPG, PNG, and WebP formats. For best results, use high-resolution images (at least 800x600 pixels) with good lighting and clear product visibility. The maximum file size is 10MB per image.'
    },
    {
      question: 'Is my data secure and private?',
      answer: 'Yes, we take data privacy seriously. All uploaded images are processed securely and are not stored permanently on our servers. We use enterprise-grade encryption and comply with GDPR, CCPA, and other privacy regulations.'
    },
    {
      question: 'Can I integrate ProductInsight into my existing workflow?',
      answer: 'Absolutely! We offer a comprehensive API that allows you to integrate ProductInsight into your existing applications and workflows. We also provide webhooks, batch processing capabilities, and custom integrations for enterprise customers.'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Get answers to common questions about ProductInsight
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 overflow-hidden"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-200"
              >
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                  )}
                </div>
              </button>

              {openItems.includes(index) && (
                <div className="px-8 pb-6 animate-fade-in">
                  <div className="border-t border-gray-100 dark:border-gray-700 pt-6">
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Still have questions?</h3>
            <p className="text-blue-100 mb-6">
              Our team is here to help. Get in touch with us for personalized support.
            </p>
            <button className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold">
              Contact Support
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;