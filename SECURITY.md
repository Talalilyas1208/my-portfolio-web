# Security & Environment Variables

## Required Environment Variables

| Variable | Description |
|---|---|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anonymous/publishable key |
| `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` | Alternative to `NEXT_PUBLIC_SUPABASE_ANON_KEY` |

## Local Setup

1. Copy `.env.example` to `.env.local`:
   ```bash
   cp .env.example .env.local
   ```
2. Fill in your Supabase credentials in `.env.local`.

## Where to Find Supabase Credentials

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Open your project → **Project Settings** → **API**
3. Copy the **Project URL** and **anon/public** key

## Important

- **Never commit `.env`, `.env.local`, `.env.development`, `.env.production`, or any file containing real credentials to git.**
- `.env`, `.env*.local`, `.env.development`, and `.env.production` are listed in `.gitignore` and will not be tracked.
- If credentials are accidentally exposed, rotate them immediately in the Supabase dashboard.
