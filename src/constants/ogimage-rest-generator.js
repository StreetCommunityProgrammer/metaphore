export const seoBanner = (title, author, template = 'default') => {
    return `https://og-image-rest-generator.fly.dev/seo-banner?title=${encodeURIComponent(title)}&author=${author}&head=Punk%20Story&writer=Storyteller&template=${template}`;
}
