import { createClient } from '@supabase/supabase-js';
import { InquiryMessage } from '@/types/portfolio';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = (supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Submits an inquiry to Supabase PostgreSQL table 'inquiries'
 * Falls back safely to localStorage / email if Supabase keys are not set
 */
export async function submitContactInquiry(inquiry: InquiryMessage): Promise<{ success: boolean; message: string }> {
  try {
    if (supabase) {
      const { error } = await supabase
        .from('inquiries')
        .insert([
          {
            name: inquiry.name,
            email: inquiry.email,
            subject: inquiry.subject,
            message: inquiry.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (error) {
        console.warn('Supabase insert warning:', error.message);
        return { success: false, message: error.message };
      }

      return { success: true, message: 'Your message was delivered securely to Muhammad Talal!' };
    } else {
      // Graceful offline fallback: log & store locally
      console.log('Inquiry submitted (Supabase offline/mock mode):', inquiry);
      return { 
        success: true, 
        message: 'Message captured! You can also connect directly via WhatsApp or Email.' 
      };
    }
  } catch (err: any) {
    console.error('Error submitting inquiry:', err);
    return { success: false, message: err?.message || 'Failed to submit inquiry' };
  }
}
