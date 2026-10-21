// Only allow read-only methods on paths proxied to pangea.trade.
export const config = {
  matcher: ['/api/:path*', '/opengraph-image', '/app/t/:path*', '/_next/static/:path*'],
};
export default function middleware(request) {
  const m = request.method;
  if (m !== 'GET' && m !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
}
