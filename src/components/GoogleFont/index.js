import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

let hydrated = false;

function GoogleFonts({ href }) {
  const hydratedRef = useRef(false);
  const [, rerender] = useState(false);

  useEffect(() => {
    if (!hydratedRef.current) {
      hydrated = true;
      hydratedRef.current = true;
      rerender(true);
    }
  }, []);

  return (
    <Head>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link rel="preload" as="style" href={href} />
      <link href={href} rel="stylesheet" media={!hydrated ? 'print' : 'all'} />
    </Head>
  );
}

GoogleFonts.propTypes = {
  href: PropTypes.string.isRequired,
};

export default GoogleFonts;
