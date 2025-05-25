'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import rehypeSanitize from 'rehype-sanitize';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  content: string | null;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  if (!content) {
    console.log('No content provided to MarkdownRenderer');
    return null;
  }

  console.log('Content received:', content);

  // Replace escaped newlines with actual newlines
  const processedContent = content.replace(/\\n/g, '\n');

  const components: Partial<Components> = {
    // Add custom styling for headings
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-bold mb-4 mt-8">{children}</h2>
    ),
    // Style links to open in new tab
    a: ({ children, href }) => (
      <a 
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        {children}
      </a>
    ),
    // Style lists
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    // Style emphasis and strong text
    em: ({ children }) => (
      <em className="italic">{children}</em>
    ),
    strong: ({ children }) => (
      <strong className="font-bold">{children}</strong>
    ),
    // Style blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
  };

  return (
    <div className="prose lg:prose-lg prose-gray max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSanitize]}
        components={components}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
} 