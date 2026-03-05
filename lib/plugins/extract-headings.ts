import { visit } from "unist-util-visit";

export function CustomExtractHeadings(headings: { text: string; id: string; level: number }[]) {
  return () => (tree: any) => {
    visit(tree, "heading", (node: any) => {
      const text = node.children
        .filter((child: { type: string; }) => child.type === "text")
        .map((child: { value: any; }) => child.value)
        .join("");

      if (!text) return;

      // Build slug like rehype-slug would
      const id = text
        .toLowerCase()
        .replace(/[^\w]+/g, "-")
        .replace(/(^-|-$)/g, "");

      headings.push({ text, id, level: node.depth });
    });
  };
}
