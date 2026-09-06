import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    const githubUrl = SOCIAL_LINKS.find(s => s.name === 'github')?.url || 'https://github.com/Sarthak-Pandey';

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Interested in working together?</p>
                {GENERAL_INFO.email ? (
                    <a
                        href={`mailto:${GENERAL_INFO.email}`}
                        className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                    >
                        {GENERAL_INFO.email}
                    </a>
                ) : (
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 text-primary hover:underline"
                    >
                        Connect on GitHub
                    </a>
                )}

                <div>
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="leading-none text-muted-foreground hover:underline hover:text-white text-sm"
                    >
                        Design by Sarthak Pandey
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
