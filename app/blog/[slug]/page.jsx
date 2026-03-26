import { notFound } from "next/navigation";
import Link from "next/link";
import { allPosts, getPostBySlug } from "../../../content/blog";

export const dynamic = "force-static";
export const revalidate = false;

export function generateStaticParams() {
  return allPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const canonical = `https://shraddha-setu.vercel.app/blog/${post.slug}`;

  return {
    title: `${post.title} | ShraddhaSetu`,
    description: post.description,
    alternates: { canonical },
    openGraph: {
      title: post.title,
      description: post.description,
      url: canonical,
      type: "article",
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const formattedDate = new Date(post.date).toLocaleDateString("hi-IN", {
    year: "numeric",
    month: "long",
    day: "2-digit",
  });

  return (
    <>
      <section className="page-hero" aria-labelledby="page-heading">
        <div className="page-hero-inner">
          <div className="page-hero-icon" aria-hidden="true">
            🪷
          </div>
          <h1 id="page-heading">{post.title}</h1>
          <p className="subtitle">{formattedDate}</p>
        </div>
      </section>

      <nav className="breadcrumb container" aria-label="Breadcrumb">
        <Link href="/">होम</Link>
        <span aria-hidden="true">›</span>
        <Link href="/blog">ब्लॉग</Link>
        <span aria-hidden="true">›</span>
        <span aria-current="page">{post.title}</span>
      </nav>

      <section className="section" aria-label="ब्लॉग सामग्री" style={{ paddingTop: "var(--sp-lg)" }}>
        <div className="container--narrow">
          <article className="content-section" aria-label={post.title}>
            <p className="text-muted" style={{ marginBottom: "var(--sp-lg)" }}>
              प्रकाशित: <strong style={{ color: "var(--crimson)" }}>{formattedDate}</strong>
            </p>
            <div
              style={{ lineHeight: 1.9 }}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </section>
    </>
  );
}

