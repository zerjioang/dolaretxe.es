function getRoutesList(routes, pre) {
    return routes.reduce((array, route) => {
        const path = `${pre}${route.path}`;

        if (route.path !== '*') {
            array.push(path);
        }

        if (route.children) {
            array.push(...getRoutesList(route.children, `${path}`));
        }

        return array;
    }, []);
}

function formatDate() {
    var d = new Date(),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2)
        month = '0' + month;
    if (day.length < 2)
        day = '0' + day;

    return [year, month, day].join('-');
}

function getRoutesXML(router, site) {
    const today = formatDate()
    const list = getRoutesList(router.options.routes, site)
        .map(route => `<url>
    <loc>${route}</loc>
    <priority>0.6</priority>
    <changefreq>weekly</changefreq>
    <lastmod>${today}</lastmod>
</url>`)
        .join('\r\n');
    return `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
      ${list}
    </urlset>`;
}

export {
    getRoutesList,
    getRoutesXML,
}