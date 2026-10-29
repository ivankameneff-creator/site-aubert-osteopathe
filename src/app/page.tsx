/* eslint-disable @next/next/no-img-element */

import { ContactForm } from "@/components/sites/aubert/contact-form";

const source = "https://www.aubert-osteopatheparis16.com";
const bookingUrl = "https://www.doctolib.fr/osteopathe/paris/charlotte-aubert";

const babyLinks = [
  { label: "Bébé/Nourrisson", href: `${source}/osteopathe-bebe-paris` },
  { label: "Tête Plate/Plagiocéphalie", href: `${source}/osteopathe-tete-plate-paris` },
  { label: "Coliques du Nourrisson", href: `${source}/osteopathie-colique-bebe-paris` },
  { label: "Reflux/RGO", href: `${source}/osteopathie-reflux-bebe-paris` },
  { label: "Troubles de la Succion", href: `${source}/osteopathe-succion-bebe-frein` },
  { label: "Constipation", href: `${source}/osteopathie-constipation-bebe-paris` },
  { label: "Sommeil", href: `${source}/osteopathe-sommeil-bebe-paris` },
  { label: "Enfant", href: `${source}/osteopathe-enfant-paris` },
  { label: "Comment je soigne les bébés ?", href: `${source}/comment-je-soigne-les-bebes` },
];

const womenLinks = [
  { label: "Grossesse et femme enceinte", href: `${source}/osteopathie-femme-enceinte` },
  { label: "Cycle et douleurs pelviennes", href: `${source}/osteopathie-cycle-douloureux-douleurs-pelviennes` },
  { label: "Endométriose", href: `${source}/osteopathie-endometriose` },
  { label: "Fertilité et conception", href: `${source}/osteopathie-fertilite-conception` },
  { label: "Post-partum", href: `${source}/osteopathie-post-partum` },
  { label: "Ménopause", href: `${source}/osteopathie-menopause` },
];

const adultLinks = [
  { label: "Ostéopathe adulte", href: `${source}/osteopathe-adulte-paris` },
  ...womenLinks,
  { label: "Sommeil", href: `${source}/osteopathie-sommeil` },
  { label: "Mâchoire / ATM", href: `${source}/osteopathie-machoire-atm` },
  { label: "Anxiété - stress", href: `${source}/osteopathie-anxiete-stress` },
];

const aboutLinks = [
  { label: "Charlotte Aubert - Ostéopathe D.O.", href: `${source}/votre-osteopathe-paris` },
  { label: "L'ostéopathie", href: `${source}/qu-est-ce-que-l-ostéopathie` },
  { label: "Ostéopathie crânienne - biodynamique", href: `${source}/ostéopathie-cranienne` },
];

const officeLinks = [
  { label: "Cabinet Paris 16", href: `${source}/cabinet-paris-16` },
  { label: "Cabinet Yvelines-Moisson", href: `${source}/moisson-freneuse-bonnieres` },
  { label: "Venir au cabinet", href: `${source}/adresse` },
];

const expertiseCards = [
  {
    title: "Bébé & enfant",
    subtitle: "Ostéopathie pédiatrique",
    href: `${source}/osteopathe-bebe-paris`,
    image: "/sites/aubert-osteopatheparis16/expertise-baby.webp",
  },
  {
    title: "Adulte",
    subtitle: "Ostéopathie crânienne et biodynamique",
    href: `${source}/ostéopathie-cranienne`,
    image: "/sites/aubert-osteopatheparis16/expertise-adult.webp",
  },
  {
    title: "Stress, sommeil & système nerveux",
    subtitle: "Approche somato-émotionnelle et nerf vague",
    href: `${source}/osteopathie-anxiete-stress`,
    image: "/sites/aubert-osteopatheparis16/expertise-cranial.webp",
  },
  {
    title: "Mâchoire, ATM & bruxisme",
    subtitle: "Tensions de la mâchoire, ATM et bruxisme",
    href: `${source}/osteopathie-machoire-atm`,
    image: "/sites/aubert-osteopatheparis16/expertise-jaw.webp",
  },
];

const blogCards = [
  {
    title: "10 raisons pour lesquelles votre enfant devrait consulter un ostéopathe pédiatrique",
    href: `${source}/post/10-raisons-pour-lesquelles-votre-enfant-devrait-consulter-un-ostéopathe-pédiatrique`,
    image: "/sites/aubert-osteopatheparis16/blog-child-care.webp",
    alt: "Un nourrisson",
    excerpt: "Au cabinet d'ostéopathie de Charlotte Aubert, des soins pédiatriques adaptés aux besoins de l'enfant.",
  },
  {
    title: "Comment améliorer la succion du Bébé en 10 Étapes",
    href: `${source}/post/comment-améliorer-la-succion-du-bébé-en-10-étapes`,
    image: "/sites/aubert-osteopatheparis16/blog-feeding-optimized.webp",
    alt: "Un bébé apaisé",
    excerpt: "Des repères pour mieux comprendre les difficultés de succion du nourrisson.",
  },
  {
    title: "Les 5 points clés pour améliorer votre fertilité avec l'ostéopathie",
    href: `${source}/post/les-5-points-clés-pour-améliorer-votre-fertilité-avec-l-ostéopathie`,
    image: "/sites/aubert-osteopatheparis16/blog-fertility.webp",
    alt: "Illustration d'un accompagnement de fertilité",
    excerpt: "Un accompagnement centré sur les besoins des femmes et des couples.",
  },
];

const footerLinks = [
  { label: "Adultes", href: `${source}/osteopathe-adulte-paris` },
  { label: "Femme Enceinte - Post Partum", href: `${source}/osteopathie-femme-enceinte` },
  { label: "Bébé - Nourrisson", href: `${source}/osteopathe-bebe-paris` },
  { label: "Enfant", href: `${source}/osteopathe-enfant-paris` },
  { label: "Gynécologie", href: `${source}/osteopathe-fertilite-paris` },
  { label: "Sportif", href: `${source}/sportifs` },
  { label: "Musicien", href: `${source}/musiciens` },
  { label: "Ostéopathe Paris 16", href: `${source}/cabinet-paris-16` },
];

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com",
    image: "/sites/aubert-osteopatheparis16/social-instagram.png",
  },
  {
    label: "Twitter",
    href: "https://twitter.com/AubertOsteo",
    image: "/sites/aubert-osteopatheparis16/social-twitter.png",
  },
  {
    label: "LinkedIn",
    href: "https://fr.linkedin.com/in/charlotte-aubert-79332b13b",
    image: "/sites/aubert-osteopatheparis16/social-linkedin.png",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/Charlotteaubertosteopatheparis16/",
    image: "/sites/aubert-osteopatheparis16/social-facebook.png",
  },
  {
    label: "Google+",
    href: "https://plus.google.com/105851375618438431006",
    image: "/sites/aubert-osteopatheparis16/social-googleplus.png",
  },
];

function Submenu({ links }: { links: { label: string; href: string }[] }) {
  return (
    <ul className="submenu">
      {links.map((link) => (
        <li key={link.label}>
          <a href={link.href}>{link.label}</a>
        </li>
      ))}
    </ul>
  );
}

export default function Home() {
  return (
    <>
      <header className="site-header">
        <div className="header-top">
          <a className="brand" href="#home" aria-label="Ostéopathe Paris 16, accueil">
            <img
              className="brand-mark"
              src="/sites/aubert-osteopatheparis16/brand-logo.png"
              alt=""
            />
            <span className="brand-copy">
              <span>Ostéopathe Paris 16</span>
              <span>Du Bébé à l&apos;Adulte</span>
              <em>Charlotte Aubert</em>
            </span>
          </a>
          <a className="booking-button header-booking" href={bookingUrl} target="_blank" rel="noreferrer">
            Réservez en ligne
          </a>
        </div>

        <nav className="main-nav" aria-label="Navigation principale">
          <ul>
            <li>
              <a href="#home">ACCUEIL</a>
            </li>
            <li className="nav-with-submenu">
              <a href="#bebe">BÉBÉ - ENFANT</a>
              <Submenu links={babyLinks} />
            </li>
            <li className="nav-with-submenu">
              <a href="#adulte">ADULTE</a>
              <Submenu links={adultLinks} />
            </li>
            <li className="nav-with-submenu">
              <a href="#apropos">A PROPOS</a>
              <Submenu links={aboutLinks} />
            </li>
            <li className="nav-with-submenu">
              <a href="#cabinets">CABINETS</a>
              <Submenu links={officeLinks} />
            </li>
            <li>
              <a href={`${source}/patient-information`}>PREMIERE VISITE</a>
            </li>
            <li>
              <a href="#blog">BLOG</a>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-copy">
            <h1>Ostéopathe Paris 16</h1>
            <p className="hero-subtitle">Adultes, Bébés, Femmes Enceintes</p>
            <p className="hero-description">
              Charlotte Aubert, ostéopathe D.O., spécialisée en ostéopathie pédiatrique et dans les
              approches crânienne, tissulaire et biodynamique.
            </p>
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <p className="intro-lead">
            J&apos;accueille les nourrissons, les enfants et les adultes au cabinet de Paris 16,
            dans une approche douce, globale et adaptée à chaque personne.
          </p>
          <h2 id="intro-title">Ostéopathie pour adultes, bébés et femmes enceintes à Paris 16</h2>
          <div className="intro-copy">
            <p>
              Chez l&apos;adulte, l&apos;ostéopathie peut accompagner les douleurs et tensions
              corporelles, les périodes de stress, les troubles du sommeil ainsi que les tensions
              de la mâchoire (ATM) et le bruxisme.
            </p>
            <p>
              L&apos;ostéopathie pédiatrique constitue une expertise particulière de ma pratique.
              Les consultations s&apos;adressent aux bébés et enfants présentant des inconforts,
              des troubles du sommeil, des difficultés de succion, d&apos;allaitement, des coliques,
              un reflux ou une plagiocéphalie (tête plate).
            </p>
            <p>
              J&apos;accompagne également les femmes enceintes pour soulager les douleurs liées à la
              grossesse et préparer le corps à l&apos;accouchement. Mon approche associe notamment
              ostéopathie crânienne, tissulaire et biodynamique, avec un travail adapté aux besoins
              de chaque patient.
            </p>
          </div>
          <a className="booking-button intro-booking" href={bookingUrl} target="_blank" rel="noreferrer">
            Prendre RDV en ligne
          </a>
        </section>

        <section className="feature feature-baby" id="bebe">
          <div className="feature-inner feature-baby-inner">
            <img
              className="feature-photo"
              src="/sites/aubert-osteopatheparis16/baby-care.webp"
              alt="Une ostéopathe accompagne un nourrisson"
            />
            <div className="feature-copy">
              <h2>Ostéopathe bébé et enfant à Paris 16</h2>
              <p>
                Spécialisée en ostéopathie pédiatrique, j&apos;accompagne les nourrissons avec
                douceur, précision et une attention particulière à leur histoire et leur rythme.
              </p>
              <h3>SPÉCIALISTE EN OSTÉOPATHIE PÉDIATRIQUE à Paris 16</h3>
              <p>
                Les consultations peuvent notamment concerner les troubles de la succion et de
                l&apos;allaitement, les coliques, le reflux, les troubles du sommeil, la
                plagiocéphalie (tête plate), le torticolis ou certaines tensions liées à la
                naissance. Chaque bébé et chaque enfant bénéficie d&apos;une prise en charge
                attentive, respectueuse de son rythme et de ses besoins.
              </p>
              <a className="text-link" href={`${source}/osteopathe-bebe-paris`}>
                Découvrir l&apos;ostéopathie pédiatrique
              </a>
            </div>
          </div>
        </section>

        <section className="feature feature-adult" id="adulte">
          <div className="feature-inner feature-adult-inner">
            <div className="feature-copy">
              <h2>Ostéopathe pour adultes à Paris 16</h2>
              <p>
                J&apos;accompagne les adultes dans une approche personnalisée, douce et globale,
                adaptée à leurs besoins et à leur motif de consultation.
              </p>
              <h3>Ostéopathie crânienne et biodynamique à Paris 16</h3>
              <p>
                Je pratique une ostéopathie crânienne et biodynamique, douce et précise, fondée
                sur une écoute fine du corps et de ses équilibres. Cette approche privilégie un
                travail manuel subtil, sans manipulations forcées, adapté à chaque personne.
              </p>
              <p>
                Elle peut notamment s&apos;intégrer à l&apos;accompagnement du stress, des troubles
                du sommeil, de la fatigue, des tensions de la tête et du cou, de la mâchoire et du
                bruxisme, ainsi qu&apos;à une approche somato-émotionnelle lorsque celle-ci est
                pertinente.
              </p>
              <a className="text-link" href={`${source}/ostéopathie-cranienne`}>
                À propos
              </a>
            </div>
            <img
              className="feature-photo"
              src="/sites/aubert-osteopatheparis16/adult-cabinet.webp"
              alt="Le cabinet d'ostéopathie de Paris 16"
            />
          </div>
        </section>

        <section className="feature feature-women">
          <div className="feature-inner feature-women-inner">
            <div className="feature-copy">
              <h2>Ostéopathe pour les femmes à Paris 16</h2>
              <p>
                J&apos;accompagne les femmes à différentes étapes de leur vie : cycle menstruel,
                grossesse, post-partum, ménopause et douleurs pelviennes. Mon approche, douce et
                globale, s&apos;adapte aux besoins de chaque période et peut notamment
                s&apos;intégrer à la prise en charge de l&apos;endométriose, des douleurs
                pelviennes et des inconforts liés aux changements hormonaux.
              </p>
              <ul className="women-links">
                {womenLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
            <img
              className="feature-photo"
              src="/sites/aubert-osteopatheparis16/women-care.webp"
              alt="Une séance d'ostéopathie pour une femme"
            />
          </div>
        </section>

        <section className="expertise" aria-labelledby="expertise-title">
          <div className="expertise-heading">
            <h2 id="expertise-title">Mes expertises en ostéopathie à Paris 16</h2>
            <p>
              Une pratique spécialisée, de l&apos;ostéopathie pour les bébés aux approches
              crânienne, biodynamique et somato-émotionnelle.
            </p>
          </div>
          <div className="expertise-grid">
            {expertiseCards.map((card) => (
              <article className="expertise-card" key={card.title}>
                <img src={card.image} alt="" />
                <div className="expertise-card-copy">
                  <h3>
                    <a href={card.href}>{card.title}</a>
                  </h3>
                  <p>{card.subtitle}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="approach">
          <div className="approach-inner">
            <img
              className="approach-photo"
              src="/sites/aubert-osteopatheparis16/approach-portrait.webp"
              alt="Une consultation d'ostéopathie crânienne"
            />
            <div className="approach-copy">
              <h2>Ostéopathie crânienne, tissulaire et biodynamique à Paris 16</h2>
              <p>
                Ma pratique associe différentes approches ostéopathiques, notamment crânienne,
                tissulaire, fasciale et biodynamique. Le choix des techniques s&apos;adapte à
                chaque patient, à son âge, à ses besoins et à son motif de consultation.
              </p>
              <p>
                Une approche douce, précise et respectueuse du corps, sans recherche de
                manipulation forcée.
              </p>
              <a className="text-link" href={`${source}/ostéopathie-cranienne`}>
                À propos
              </a>
            </div>
          </div>
        </section>

        <section className="about" id="apropos">
          <div className="about-inner">
            <h2>Bonjour, je suis Charlotte</h2>
            <div className="about-content">
              <img
                className="about-photo"
                src="/sites/aubert-osteopatheparis16/charlotte-portrait.webp"
                alt="Portrait de Charlotte Aubert"
              />
              <div className="about-copy">
                <p>
                  Ostéopathe à Paris 16 et dans les Yvelines, je suis passionnée par les médecines
                  naturelles et convaincue qu&apos;il n&apos;existe pas qu&apos;une seule voie de
                  compréhension de notre corps. Qu&apos;ils soient allopathiques ou naturels, je
                  pense que les moyens nous permettant de garder la santé peuvent être variés.
                </p>
                <p>
                  Depuis toujours, l&apos;accompagnement des femmes et des bébés a occupé une place
                  centrale dans ma pratique. Ces dernières années, cette facette de mon métier
                  m&apos;a particulièrement inspirée, et je lui consacre désormais une attention
                  encore plus grande. En parallèle, mon approche est devenue de plus en plus
                  douce, et je m&apos;oriente désormais vers l&apos;ostéopathie biodynamique.
                </p>
                <p>
                  Je suis animée par le désir sincère de prendre soin de chaque personne qui
                  pousse la porte de mon cabinet, quel que soit son âge ou sa situation. Mon
                  engagement est de toujours offrir un accompagnement chaleureux, fondé sur
                  l&apos;écoute et le respect de chaque parcours de vie.
                </p>
                <a className="text-link" href={`${source}/votre-osteopathe-paris`}>
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="blog" id="blog">
          <div className="blog-heading">
            <h2>Les derniers articles du Blog de votre ostéopathe Paris 16</h2>
          </div>
          <div className="blog-list">
            {blogCards.map((card) => (
              <article className="blog-card" key={card.title}>
                <a href={card.href}>
                  <img src={card.image} alt={card.alt} />
                  <div className="blog-card-copy">
                    <h3>{card.title}</h3>
                    <p>{card.excerpt}</p>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="booking-cta" id="cabinets">
          <p>Prenez rendez-vous dès maintenant avec un ostéopathe spécialisé à Paris :</p>
          <a className="booking-button" href={bookingUrl} target="_blank" rel="noreferrer">
            Prendre RDV en ligne
          </a>
        </section>
      </main>

      <footer className="site-footer" id="contact">
        <div className="footer-inner">
          <nav className="footer-links" aria-label="Autres consultations">
            {footerLinks.map((link) => (
              <a key={link.label} href={link.href}>
                {link.label}
              </a>
            ))}
          </nav>

          <section className="footer-contact" aria-labelledby="footer-contact-title">
            <h2 id="footer-contact-title">Pour tous renseignements complémentaires, contactez-nous :</h2>
            <ContactForm />
          </section>

          <div className="footer-bottom">
            <nav className="socials" aria-label="Réseaux sociaux">
              {socials.map((social) => (
                <a key={social.label} href={social.href} aria-label={social.label}>
                  <img src={social.image} alt="" />
                </a>
              ))}
            </nav>
            <div className="legal">
              <p>
                Charlotte Aubert Ostéopathe Paris 16{" "}
                <a href={source}>www.aubert-osteopatheparis16.com</a>
              </p>
              <p>© Tous droits réservés</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
