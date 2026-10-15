import React from 'react';
import { CheckCircle2 } from 'lucide-react';

interface Props {
  status: 'idle' | 'submitting' | 'success' | 'error';
  feedbackMessage: string;
}

export default function ContactStatusBanner({ status, feedbackMessage }: Props) {
  if (status === 'success') {
    return (
      <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/50 text-emerald-300 text-xs sm:text-sm flex items-start gap-2.5 animate-fade-in">
        <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
        <div>
          <strong className="font-semibold block text-emerald-200">Message Sent Successfully!</strong>
          <span>{feedbackMessage || 'Thank you for reaching out.'}</span>
        </div>
      </div>
    );
  }
  if (status === 'error') {
    return (
      <div className="p-4 rounded-2xl bg-rose-950/60 border border-rose-500/50 text-rose-300 text-xs sm:text-sm animate-fade-in">
        {feedbackMessage || 'Unable to submit right now.'}
      </div>
    );
  }
  return null;
}
