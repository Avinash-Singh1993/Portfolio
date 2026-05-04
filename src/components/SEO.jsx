import { useEffect } from "react";
import portfolioData from "../mockData";

const SEO = ({ title, description, keywords, name, type }) => {

    useEffect(() => {
        // Title update
        document.title = title;

        // Meta helper function
        const setMeta = (attr, key, value) => {
            let element = document.querySelector(`meta[${attr}="${key}"]`);

            if (!element) {
                element = document.createElement("meta");
                element.setAttribute(attr, key);
                document.head.appendChild(element);
            }

            element.setAttribute("content", value);
        };

        // Standard meta
        setMeta("name", "description", description);
        setMeta("name", "keywords", keywords);

        // Open Graph (Facebook)
        setMeta("property", "og:type", type);
        setMeta("property", "og:title", title);
        setMeta("property", "og:description", description);

        // Twitter
        setMeta("name", "twitter:creator", name);
        setMeta("name", "twitter:card", type);
        setMeta("name", "twitter:title", title);
        setMeta("name", "twitter:description", description);

    }, [title, description, keywords, name, type]);

    return null;
};

SEO.defaultProps = {
    title: portfolioData.seo.title,
    description: portfolioData.seo.description,
    keywords: portfolioData.seo.keywords,
    name: portfolioData.seo.name,
    type: portfolioData.seo.type
};

export default SEO;