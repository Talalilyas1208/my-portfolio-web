'use client';

import React, { useState, useEffect } from 'react';
import { submitContactInquiry } from '@/lib/supabase';
import ContactDirectInfo from '@/components/ContactDirectInfo';
import ContactInputFields from '@/components/ContactInputFields';
import ContactStatusBanner from '@/components/ContactStatusBanner';
import ContactSubmitButton from '@/components/ContactSubmitButton';

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    company_hp: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [cooldownRemaining, setCooldownRemaining] = useState<number>(0);

  useEffect(() => {
    if (cooldownRemaining <= 0) return;
    const timer = setInterval(() => {
      setCooldownRemaining((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldownRemaining]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (formState.company_hp) {
      setStatus('success');
      setFeedbackMessage('Your message was received.');
      return;
    }
    if (cooldownRemaining > 0) {
      setStatus('error');
      setFeedbackMessage(`Rate limit reached. Please wait ${cooldownRemaining}s before submitting again.`);
      return;
    }

    setStatus('submitting');
    const result = await submitContactInquiry({
      name: formState.name.trim(),
      email: formState.email.trim(),
      subject: formState.subject.trim(),
      message: formState.message.trim(),
    });

    setStatus(result.success ? 'success' : 'error');
    setFeedbackMessage(result.message);
    if (result.success) {
      setFormState({ name: '', email: '', subject: '', message: '', company_hp: '' });
      setCooldownRemaining(60);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
      <ContactDirectInfo />

      <div className="lg:col-span-7">
        <form
          onSubmit={handleSubmit}
          className="p-6 sm:p-8 rounded-3xl liquid-glass shadow-liquid-glass-lg space-y-5 border border-slate-200/80"
        >
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="company_hp"
              tabIndex={-1}
              value={formState.company_hp}
              onChange={(e) => setFormState({ ...formState, company_hp: e.target.value })}
            />
          </div>

          <ContactInputFields
            formState={formState}
            onChange={(field, val) => setFormState((prev) => ({ ...prev, [field]: val }))}
          />

          <ContactStatusBanner status={status} feedbackMessage={feedbackMessage} />

          <ContactSubmitButton
            isSubmitting={status === 'submitting'}
            cooldownRemaining={cooldownRemaining}
          />
        </form>
      </div>
    </div>
  );
}
