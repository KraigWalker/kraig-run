// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nrwl/next/plugins/with-nx');
const withPlugins = require('next-compose-plugins');

const isProduction = process.env.NODE_ENV === 'production';

const ContentSecurityPolicy = `
  default-src 'self';
  script-src 'self';
  img-src 'self' https://kraig.run;
  child-src https://kraig.run;
  style-src 'self' https://kraig.run;
  font-src 'self';
  connect-src 'self' https://vitals.vercel-insights.com;`;

const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload',
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer',
  },
  {
    key: 'Content-Security-Policy',
    value: isProduction
      ? ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim()
      : '',
  },
];

/**
 * This will ensure that React Spectrum’s CSS is loaded properly by Next.js.
 *  Note that packages may need to be removed or added to the config below if using an older or newer version of React Spectrum.
 */
 const withTM = require('next-transpile-modules')([
  '@adobe/react-spectrum',
  '@react-spectrum/actiongroup',
  '@react-spectrum/breadcrumbs',
  '@react-spectrum/button',
  '@react-spectrum/buttongroup',
  '@react-spectrum/checkbox',
  '@react-spectrum/combobox',
  '@react-spectrum/contextualhelp',
  '@react-spectrum/dialog',
  '@react-spectrum/divider',
  '@react-spectrum/form',
  '@react-spectrum/icon',
  '@react-spectrum/illustratedmessage',
  '@react-spectrum/image',
  '@react-spectrum/label',
  '@react-spectrum/layout',
  '@react-spectrum/link',
  '@react-spectrum/listbox',
  '@react-spectrum/menu',
  '@react-spectrum/meter',
  '@react-spectrum/numberfield',
  '@react-spectrum/overlays',
  '@react-spectrum/picker',
  '@react-spectrum/progress',
  '@react-spectrum/provider',
  '@react-spectrum/radio',
  '@react-spectrum/slider',
  '@react-spectrum/searchfield',
  '@react-spectrum/statuslight',
  '@react-spectrum/switch',
  '@react-spectrum/table',
  '@react-spectrum/tabs',
  '@react-spectrum/text',
  '@react-spectrum/textfield',
  '@react-spectrum/theme-dark',
  '@react-spectrum/theme-default',
  '@react-spectrum/theme-light',
  '@react-spectrum/tooltip',
  '@react-spectrum/view',
  '@react-spectrum/well',
  '@spectrum-icons/ui',
  '@spectrum-icons/workflow'
]);

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  async headers() {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
};

module.exports = withPlugins([withNx, withTM], nextConfig);

