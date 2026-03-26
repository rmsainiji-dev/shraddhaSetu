import Link from "next/link";

/**
 * DevotionalCard
 * @param {string}  href       – Internal page link
 * @param {string}  icon       – Emoji icon
 * @param {string}  category   – Small category label (e.g. "चालीसा")
 * @param {string}  title      – Card heading
 * @param {string}  description – Short description
 * @param {string}  [lang]     – Language badge label
 */
export default function DevotionalCard({ href, icon, category, title, description, lang }) {
  return (
    <Link href={href} className="devotional-card" aria-label={`${title} पाठ करें`}>
      <span className="card-icon" aria-hidden="true">{icon}</span>
      <div className="card-category">{category}{lang && <span className="nav-badge" style={{ marginLeft: "0.4rem" }}>{lang}</span>}</div>
      <h3 className="card-title">{title}</h3>
      <p className="card-desc">{description}</p>
      <span className="card-link">
        पाठ करें <span aria-hidden="true">→</span>
      </span>
    </Link>
  );
}
