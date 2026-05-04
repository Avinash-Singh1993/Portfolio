import React from 'react';
import { Helmet } from 'react-helmet-async';

import portfolioData from '../mockData';

const SEO = ({ title, description, keywords, name, type }) => {
    return (
        <Helmet>
            {/* Standard metadata tags */}
            <title>{title}</title>
            <meta name='description' content={description} />
            <meta name='keywords' content={keywords} />

            {/* End standard metadata tags */}

            {/* Facebook tags */}
            <meta property="og:type" content={type} />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* End Facebook tags */}

            {/* Twitter tags */}
            <meta name="twitter:creator" content={name} />
            <meta name="twitter:card" content={type} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            {/* End Twitter tags */}
        </Helmet>
    );
}

SEO.defaultProps = {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    keywords: portfolioData.seo.keywords,
    name: portfolioData.seo.name,
    type: portfolioData.seo.type
};

export default SEO;
