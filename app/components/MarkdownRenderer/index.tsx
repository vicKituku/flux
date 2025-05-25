'use client';

import React from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import type { Components } from 'react-markdown';

// Smooth scroll function with fallback and offset
const smoothScroll = (element: HTMLElement) => {
  // Add offset to account for fixed header (adjust this value based on your header height)
  const offset = 100;
  const targetPosition = element.getBoundingClientRect().top + window.scrollY - offset;
  const startPosition = window.scrollY;
  const distance = targetPosition - startPosition;
  const duration = 800;
  let start: number | null = null;

  const animation = (currentTime: number) => {
    if (start === null) start = currentTime;
    const timeElapsed = currentTime - start;
    const progress = Math.min(timeElapsed / duration, 1);

    // Easing function for smooth acceleration and deceleration
    const easeInOutQuad = (t: number) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }
  };

  requestAnimationFrame(animation);
};

const CustomLink: Components['a'] = ({ href, children }) => {
  const isInternalLink = href?.startsWith('#');

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isInternalLink && href) {
      e.preventDefault();
      const targetId = href.slice(1);
      const element = document.getElementById(targetId);
      if (element) {
        smoothScroll(element);
        window.history.pushState({}, '', href);
      }
    }
  };

  if (isInternalLink) {
    return (
      <a
        href={href}
        onClick={handleClick}
        className="text-blue-600 hover:text-blue-800 hover:underline cursor-pointer"
      >
        {children}
      </a>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800"
    >
      {children}
    </a>
  );
};

interface Props {
  content: string | null | undefined;
}

export default function MarkdownRenderer({ content }: Props) {
  if (!content) {
    return null;
  }

  // Process the content to handle newlines correctly
  const processedContent = content
    .replace(/\\n/g, '\n') // Replace escaped newlines with actual newlines
    .replace(/\n/g, '  \n'); // Add two spaces before newline for markdown line breaks

  const components: Components = {
    h1: ({ children }) => (
      <h1 id={typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, '-') : undefined} className="text-4xl font-bold mb-6">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 id={typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, '-') : undefined} className="text-3xl font-bold mb-4 mt-8">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 id={typeof children === 'string' ? children.toLowerCase().replace(/\s+/g, '-') : undefined} className="text-2xl font-bold mb-3 mt-6">
        {children}
      </h3>
    ),
    a: CustomLink,
    ul: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2">{children}</ol>
    ),
    table: ({ children }) => (
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 my-4">
          {children}
        </table>
      </div>
    ),
    th: ({ children }) => (
      <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {children}
      </td>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-100 p-4 rounded-lg overflow-x-auto my-4">
        {children}
      </pre>
    ),
    code: ({ children, className }) => (
      <code className={`${className || ''} font-mono text-sm bg-gray-100 px-1.5 py-0.5 rounded`}>
        {children}
      </code>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-gray-300 pl-4 italic my-4">
        {children}
      </blockquote>
    ),
    p: ({ children }) => (
      <p className="mb-4">
        {children}
      </p>
    ),
  };

  return (
    <div className="prose lg:prose-lg prose-gray max-w-none">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSlug]}
        components={components}
      >
        {processedContent}
      </ReactMarkdown>
    </div>
  );
}