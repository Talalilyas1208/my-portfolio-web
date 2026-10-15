import React from 'react';
import { Send, Clock } from 'lucide-react';

interface Props {
  isSubmitting: boolean;
  cooldownRemaining: number;
}

export default function ContactSubmitButton({ isSubmitting, cooldownRemaining }: Props) {
  return (
    <button
      type="submit"
      disabled={isSubmitting || cooldownRemaining > 0}
      className="w-full py-4 px-6 rounded-2xl liquid-btn-primary text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
    >
      {isSubmitting ? (
        <span>Sending Inquiry...</span>
      ) : cooldownRemaining > 0 ? (
        <span className="flex items-center gap-2 font-mono text-slate-200">
          <Clock className="w-4 h-4 text-cyan-300 animate-spin" /> Cooldown Active ({cooldownRemaining}s)
        </span>
      ) : (
        <span className="flex items-center gap-2">
          <Send className="w-4 h-4" /> Send Direct Inquiry
        </span>
      )}
    </button>
  );
}
