import ReactMarkdown from 'react-markdown';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer = ({ content }: MarkdownRendererProps) => {
  return (
    <article className="prose prose-slate prose-headings:text-[#003366] prose-a:text-[#003366] prose-img:rounded-lg max-w-none text-gray-800">
      <ReactMarkdown>{content}</ReactMarkdown>
    </article>
  );
};

export default MarkdownRenderer;
