import React, { useRef, useEffect, useState } from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

let hydrated = false;

function FontLoader({ preconnect, href }) {
  const hydratedRef = useRef(false);
  const [, reRender] = useState(false);

  useEffect(() => {
    if (!hydratedRef.current) {
      hydrated = true;
      hydratedRef.current = true;
      reRender(true);
    }
  }, []);

  return (
    <Head>
      {preconnect && (
        <link rel="preconnect" href={preconnect} crossOrigin="anonymous" />
      )}
      <link rel="preload" as="style" href={href} />
      <link href={href} rel="stylesheet" media={!hydrated ? 'print' : 'all'} />
    </Head>
  );
}

FontLoader.propTypes = {
  preconnect: PropTypes.string,
  href: PropTypes.string.isRequired,
};

FontLoader.defaultProps = {
  preconnect: null,
};

export default FontLoader;
