export const dynamic = 'force-static';

export async function GET() {
  return new Response('google-site-verification: google46d288d7e8f0014d.html', {
    status: 200,
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
    },
  });
}
