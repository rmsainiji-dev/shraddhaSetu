import Link from "next/link";
export const dynamic = 'force-static';
export const revalidate = false;
export const metadata = {
  title: "पृष्ठ नहीं मिला – 404 | ShraddhaSetu",
};

export default function NotFound() {
  return (
    <div style={{
      minHeight: "70vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      padding: "var(--sp-2xl) var(--sp-lg)",
    }}>
      <div style={{ fontSize: "5rem", marginBottom: "var(--sp-lg)" }}>🕉</div>
      <h1 style={{
        fontFamily: "'Vesper Libre', serif",
        fontSize: "var(--fs-3xl)",
        color: "var(--crimson)",
        marginBottom: "var(--sp-md)",
      }}>
        पृष्ठ नहीं मिला
      </h1>
      <p style={{
        color: "var(--ink-muted)",
        marginBottom: "var(--sp-xl)",
        maxWidth: "400px",
        lineHeight: 1.8,
      }}>
        आप जिस पृष्ठ को खोज रहे हैं वह उपलब्ध नहीं है।
        कृपया होमपेज पर जाएँ।
      </p>
      <Link href="/" className="btn btn-primary">
        🏠 होमपेज पर जाएँ
      </Link>
    </div>
  );
}
