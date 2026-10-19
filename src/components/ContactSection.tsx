import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SendIcon, MailIcon, CheckCircle2Icon } from 'lucide-react';

const CONTACT_EMAIL = 'redyuurei@gmail.com';

const commissionTypes = [
  'Headshot',
  'Half body',
  'Full body',
  'Lineart',
  'General Inquiry'
];

type FormState = {
  name: string;
  email: string;
  type: string;
  message: string;
};

type Errors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: '',
  email: '',
  type: commissionTypes[0],
  message: ''
};

const fieldClass =
  'w-full bg-fantasy-navy/60 border border-fantasy-purple/40 text-fantasy-white font-raleway text-sm px-4 py-3 placeholder:text-fantasy-white/30 focus:outline-none focus:border-fantasy-teal focus:shadow-glow-teal transition-all duration-300';

const labelClass =
  'block font-cinzel text-[11px] uppercase tracking-widest text-fantasy-white/70 mb-2';

function validate(values: FormState): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = 'Please tell me your name.';
  if (!values.email.trim()) {
    errors.email = 'An email is required so I can reply.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Please enter a valid email address.';
  }
  if (values.message.trim().length < 10) {
    errors.message = 'Please describe your idea (at least 10 characters).';
  }
  return errors;
}

export function ContactSection() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    // No backend: hand the message off to the visitor's mail client.
    const subject = `[${values.type}] Inquiry from ${values.name.trim()}`;
    const body = `Name: ${values.name.trim()}\nEmail: ${values.email.trim()}\nType: ${values.type}\n\n${values.message.trim()}`;
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const reset = () => {
    setValues(initialState);
    setErrors({});
    setSent(false);
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6 bg-fantasy-navy relative overflow-hidden scroll-mt-16 md:scroll-mt-20">
      {/* Background Effects */}
      <div className="absolute top-1/3 left-1/4 w-[30vw] h-[30vw] bg-fantasy-crimson/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-[30vw] h-[30vw] bg-fantasy-purple/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-cinzel font-bold text-fantasy-white tracking-wider mb-4 drop-shadow-lg">
            Send a Message
          </h2>
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="w-2 h-2 rotate-45 bg-fantasy-teal shadow-glow-teal"></div>
            <div className="h-[1px] w-24 bg-gradient-to-r from-fantasy-teal to-fantasy-purple"></div>
            <div className="w-2 h-2 rotate-45 bg-fantasy-purple shadow-glow-purple"></div>
          </div>
          <p className="font-raleway text-fantasy-white/60 text-sm max-w-md mx-auto leading-relaxed">
            Have an idea in mind? Share the details and I will reply with a
            quote and timeline.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="arcane-panel border border-fantasy-teal/40 bg-fantasy-cardBg/60 backdrop-blur-sm shadow-glow-teal p-6 sm:p-10">
          <AnimatePresence mode="wait">
            {sent ?
            <motion.div
              key="sent"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-8 flex flex-col items-center gap-4">
                <CheckCircle2Icon size={48} className="text-fantasy-teal" />
                <h3 className="font-cinzel text-2xl text-fantasy-white tracking-wide">
                  Message Ready
                </h3>
                <p className="font-raleway text-fantasy-white/70 text-sm max-w-sm leading-relaxed">
                  Your email app should have opened with your message. If it
                  did not, write to{' '}
                  <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-fantasy-teal hover:underline">
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <button
                onClick={reset}
                className="mt-2 px-6 py-3 border border-fantasy-teal/60 text-fantasy-teal font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-fantasy-teal hover:text-fantasy-navy transition-all duration-300 arcane-panel">
                  Send Another
                </button>
              </motion.div> :

            <motion.form
              key="form"
              onSubmit={handleSubmit}
              noValidate
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col gap-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className={labelClass}>
                      Name
                    </label>
                    <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={!!errors.name}
                    placeholder="Your name"
                    className={fieldClass} />
                    {errors.name &&
                  <p className="mt-2 text-xs font-raleway text-fantasy-crimson">{errors.name}</p>
                  }
                  </div>
                  <div>
                    <label htmlFor="contact-email" className={labelClass}>
                      Email
                    </label>
                    <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={!!errors.email}
                    placeholder="you@example.com"
                    className={fieldClass} />
                    {errors.email &&
                  <p className="mt-2 text-xs font-raleway text-fantasy-crimson">{errors.email}</p>
                  }
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-type" className={labelClass}>
                    Commission Type
                  </label>
                  <select
                  id="contact-type"
                  name="type"
                  value={values.type}
                  onChange={handleChange}
                  className={fieldClass}>
                    {commissionTypes.map((t) =>
                  <option key={t} value={t} className="bg-fantasy-navy">
                        {t}
                      </option>
                  )}
                  </select>
                </div>

                <div>
                  <label htmlFor="contact-message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                  id="contact-message"
                  name="message"
                  rows={6}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                  placeholder="Describe your idea, references, size, and deadline..."
                  className={`${fieldClass} resize-y`} />
                  {errors.message &&
                <p className="mt-2 text-xs font-raleway text-fantasy-crimson">{errors.message}</p>
                }
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="flex items-center gap-2 font-raleway text-sm text-fantasy-white/60 hover:text-fantasy-teal transition-colors">
                    <MailIcon size={16} />
                    {CONTACT_EMAIL}
                  </a>
                  <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3 bg-fantasy-crimson text-fantasy-white font-cinzel font-bold tracking-widest uppercase text-xs hover:bg-red-600 transition-all duration-300 shadow-glow-crimson hover:shadow-glow-crimson-strong arcane-panel border-b-2 border-fantasy-teal flex items-center justify-center gap-2">
                    Send Message
                    <SendIcon size={14} />
                  </button>
                </div>
              </motion.form>
            }
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
