import Link from "next/link";
import { allPosts } from "../../content/blog";

export const dynamic = "force-static";
export const revalidate = false;

export const metadata = {
  title: "ब्लॉग | ShraddhaSetu",
  description: "भक्ति, पाठ और साधना पर छोटे लेख — सरल, शांत और प्रेरणादायी मार्गदर्शन।",
  alternates: {
    canonical: "https://shraddha-setu.vercel.app/blog",
  },
  openGraph: {
    title: "ब्लॉग | ShraddhaSetu",
    description: "भक्ति, पाठ, और साधना पर छोटे लेख—सरल, शांत, और SEO-फ्रेंडली।",
    url: "https://shraddha-setu.vercel.app/blog",
    type: "website",
  },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="page-hero" aria-labelledby="page-heading">
        <div className="page-hero-inner">
          <div className="page-hero-icon" aria-hidden="true">
            ✍️
          </div>
          <h1 id="page-heading">ब्लॉग</h1>
          <p className="subtitle">भक्ति, पाठ और साधना पर सरल लेख</p>
        </div>
      </section>

      <section className="section" aria-label="ब्लॉग सूची">
        <div className="container">
          <div className="card-grid" role="list">
            {allPosts.map((post) => (
              <div key={post.slug} role="listitem">
                <Link
                  href={`/blog/${post.slug}`}
                  className="devotional-card"
                  aria-label={`${post.title} पढ़ें`}
                >
                  <span className="card-icon" aria-hidden="true">
                    🪷
                  </span>
                  <div className="card-category">
                    ब्लॉग
                    <span className="nav-badge" style={{ marginLeft: "0.4rem" }}>
                      {new Date(post.date).toLocaleDateString("hi-IN", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      })}
                    </span>
                  </div>
                  <h3 className="card-title">{post.title}</h3>
                  <p className="card-desc">{post.description}</p>
                  <span className="card-link">
                    पूरा पढ़ें <span aria-hidden="true">→</span>
                  </span>
                </Link>
              </div>
            ))}
          </div>

          <div className="container--narrow" style={{ marginTop: "var(--sp-xl)" }}>
            <div className="info-box" role="note">
              <strong>🕉 नोट:</strong> यह ब्लॉग पूरी तरह स्टैटिक है—हर पेज बिल्ड के समय जनरेट होता है।
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

