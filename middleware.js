// Only allow read-only methods on paths proxied to pangea.trade,
// and rewrite the X handle on proxied token pages.
export const config = {
  matcher: ['/api/:path*', '/opengraph-image', '/app/t/:path*', '/_next/static/:path*'],
};
export default async function middleware(request) {
  const m = request.method;
  if (m !== 'GET' && m !== 'HEAD') {
    return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'GET, HEAD' } });
  }
  const url = new URL(request.url);
  if (url.pathname.startsWith('/app/t/')) {
    const up = await fetch('https://www.pangea.trade' + url.pathname + url.search, {
      headers: { 'user-agent': request.headers.get('user-agent') || 'Mozilla/5.0', accept: request.headers.get('accept') || 'text/html', ...(request.headers.get('rsc') ? { rsc: request.headers.get('rsc') } : {}) },
    });
    const h = new Headers(up.headers);
    ['content-length', 'content-encoding', 'transfer-encoding'].forEach((k) => h.delete(k));
    const body = (await up.text()).replaceAll('LaunchOnPangea', 'PangeaLaunchPad');
    return new Response(m === 'HEAD' ? null : body, { status: up.status, headers: h });
  }
}
