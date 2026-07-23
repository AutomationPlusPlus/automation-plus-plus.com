// 301 www.automation-plus-plus.com -> automation-plus-plus.com
// (Pages `_redirects` files cannot match on hostname, so this runs as middleware.)
export async function onRequest({ request, next }) {
  const url = new URL(request.url);
  if (url.hostname.startsWith("www.")) {
    url.hostname = url.hostname.slice(4);
    return Response.redirect(url.toString(), 301);
  }
  return next();
}
