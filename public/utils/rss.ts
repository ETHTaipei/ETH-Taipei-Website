// Minimal RSS <item> extractor for the /community page. Runs server-side only
// (getStaticProps), so no CORS concerns. Deliberately dependency-free: we only
// need title / link / pubDate from well-formed feeds (Medium, Substack), and a
// fetch failure should degrade to an empty list, never break the build.

export type FeedPost = {
  title: string;
  link: string;
  pubDate: string;
};

const stripCdata = (s: string) =>
  s.replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1").trim();

const tagContent = (block: string, tag: string): string => {
  const m = block.match(new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`));
  return m ? stripCdata(m[1]) : "";
};

const formatDate = (rfc822: string): string => {
  const d = new Date(rfc822);
  if (isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export async function fetchLatestPosts(
  feedUrl: string,
  limit = 3
): Promise<FeedPost[]> {
  try {
    const res = await fetch(feedUrl, {
      headers: { "user-agent": "ethtaipei.org website build" },
    });
    if (!res.ok) return [];
    const xml = await res.text();

    const posts: FeedPost[] = [];
    const itemRe = /<item>([\s\S]*?)<\/item>/g;
    let m: RegExpExecArray | null;
    while ((m = itemRe.exec(xml)) !== null && posts.length < limit) {
      const block = m[1];
      const title = tagContent(block, "title");
      // Medium appends ?source=rss tracking params; drop them for clean URLs.
      const link = tagContent(block, "link").split("?")[0];
      if (!title || !link) continue;
      posts.push({ title, link, pubDate: formatDate(tagContent(block, "pubDate")) });
    }
    return posts;
  } catch {
    return [];
  }
}
