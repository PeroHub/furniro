'use client';

import React, { useState } from 'react';
import { useStore } from '@/context/StoreContext';
import { Send, CheckCircle2 } from 'lucide-react';

export default function ContactForm() {
  const { showToast } = useStore();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      showToast('Please fill in your name, email, and message.');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      showToast('Thank you! Your message has been sent to our customer service team.');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    }, 900);
  };

  return (
    <div className="w-full font-['Poppins',sans-serif]">
      {isSubmitted ? (
        <div className="bg-[#FAF3EA] border border-[#B88E2F]/20 rounded-xl p-8 sm:p-10 text-center animate-in fade-in zoom-in-95 duration-200">
          <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold text-black font-['Montserrat',sans-serif] mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-sm text-[#898989] max-w-md mx-auto mb-6 leading-relaxed">
            Thank you for reaching out to Furniro. One of our interior design consultants will get back to you within 24 business hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="px-8 py-3 bg-[#B88E2F] hover:bg-[#9e7a27] text-white rounded-md text-sm font-medium transition-colors cursor-pointer shadow-xs"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-8 sm:space-y-9">
          {/* Your name */}
          <div>
            <label
              htmlFor="contactName"
              className="block text-base font-medium text-black mb-4"
            >
              Your name
            </label>
            <input
              id="contactName"
              type="text"
              required
              placeholder="Abc"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full h-[65px] sm:h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 text-base text-black bg-white placeholder:text-[#9F9F9F] focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
            />
          </div>

          {/* Email address */}
          <div>
            <label
              htmlFor="contactEmail"
              className="block text-base font-medium text-black mb-4"
            >
              Email address
            </label>
            <input
              id="contactEmail"
              type="email"
              required
              placeholder="Abc@def.com"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full h-[65px] sm:h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 text-base text-black bg-white placeholder:text-[#9F9F9F] focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
            />
          </div>

          {/* Subject */}
          <div>
            <label
              htmlFor="contactSubject"
              className="block text-base font-medium text-black mb-4"
            >
              Subject
            </label>
            <input
              id="contactSubject"
              type="text"
              placeholder="This is an optional"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
              className="w-full h-[65px] sm:h-[75px] rounded-[10px] border border-[#9F9F9F] px-6 text-base text-black bg-white placeholder:text-[#9F9F9F] focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all"
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor="contactMessage"
              className="block text-base font-medium text-black mb-4"
            >
              Message
            </label>
            <textarea
              id="contactMessage"
              rows={4}
              required
              placeholder="Hi! i'd like to ask about"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full min-h-[120px] rounded-[10px] border border-[#9F9F9F] p-6 text-base text-black bg-white placeholder:text-[#9F9F9F] focus:outline-hidden focus:border-[#B88E2F] focus:ring-1 focus:ring-[#B88E2F] transition-all resize-y"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-[237px] h-[55px] bg-[#B88E2F] hover:bg-[#9e7a27] text-white font-normal text-base rounded-[5px] transition-colors cursor-pointer shadow-xs active:scale-98 flex items-center justify-center gap-2 disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Submit</span>
                  <Send className="w-4 h-4 ml-1" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
