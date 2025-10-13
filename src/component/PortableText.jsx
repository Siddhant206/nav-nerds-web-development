import React from "react";
import Image from "next/image";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";
 
// Map custom component overrides
const components = {
  // Block-level components
  block: {
    // Normal paragraphs
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold mb-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold mb-5 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-bold mb-4 text-gray-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-bold mb-2 text-gray-900">{children}</h4>
    ),
    h5: ({ children }) => (
      <h4 className="text-xl font-bold mb-2 text-gray-900">{children}</h4>
    ),
    h6: ({ children }) => (
      <h4 className="text-lg font-bold mb-2 text-gray-900">{children}</h4>
    ),
    // Blockquotes
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-700 bg-blue-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    left: ({ children }) => (
      <p className="text-left mb4 text-gray-700 leading-relaxed">{children}</p>
    ),
    center: ({ children }) => (
      <p className="text-center mb4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    right: ({ children }) => (
      <p className="text-right mb4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    justify: ({ children }) => (
      <p className="text-justify mb4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
  },

  // List components
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside">{children}</ol>,
    circle: ({ children }) => <ul className="list-[circle] list-inside">{children}</ul>,
    square: ({ children }) => <ul className="list-[square] list-inside">{children}</ul>,
    dash: ({ children }) => (
      <ul className="space-y-1">
        {children.map((child, i) => (
          <li key={i} className="flex items-start">
            <span className="font-semibold">–</span>
            <span>{child}</span>
          </li>
        ))}
      </ul>
    ),
    check: ({ children }) => (
      <ul className="space-y-1">
        {children.map((child, i) => (
          <li key={i} className="flex items-start">
            <span className=" text-green-600">✔</span>
            <span>{child}</span>
          </li>
        ))}
      </ul>
    ),
  },

  // List items
  listItem: {
    bullet: ({ children }) => <li className="ml1">{children}</li>,
    number: ({ children }) => <li className="ml1">{children}</li>,
    circle: ({ children }) => <li className="ml1">{children}</li>,
    square: ({ children }) => <li className="ml1">{children}</li>,
    dash: ({ children })   => <li className="ml1">{children}</li>,
    check: ({ children })  => <li className="ml1">{children}</li>,
  },

  // Inline formatting marks
  marks: {
    // Bold text
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    // Italic text
    em: ({ children }) => <em className="italic">{children}</em>,
    // Underlined text
    underline: ({ children }) => <u className="underline">{children}</u>,
    // Strikethrough text
    "strike-through": ({ children }) => (
      <del className="line-through">{children}</del>
    ),
    // Code spans
    code: ({ children }) => (
      <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    // Links
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:text-blue-800 underline"
        >
          {children}
        </a>
      );
    },
  },

  // Custom block types
  types: {
    // Code blocks
    code: ({ value }) => (
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
        <code className="text-sm">{value.code}</code>
      </pre>
    ),

    imageWithText: ({ value }) => {
      const {
        image,
        alt,
        caption,
        alignment = "left",
        size = "medium",
        // text,
      } = value;

      if (!image?.asset?._ref) return null;

      const imageUrl = urlFor(image).url();

      const sizeClasses = {
        small: "w-1/4",
        medium: "w-1/3",
        large: "w-1/2",
      };

      const alignClasses  = {
        left: "flex-row",
        right: "flex-row-reverse",
        center: "flex-col items-center",
      };

      return (
        <div className={`my-8 flex ${alignClasses[alignment]} gap-6`}>
          <div className={`${sizeClasses[size]} shrink-0`}>
            <Image
              src={imageUrl}
              alt={alt || ""}
              width={800}
              height={600}
              className="rounded-lg shadow-md object-cover w-full"
            />
            {caption && (
              <p className="mt-2 text-center text-sm text-gray-500">
                {caption}
              </p>
            )}
          </div>
          {/* <div className="flex-1">
            <PortableText value={text} components={components} />
          </div> */}
        </div>
      );
    },

    // Break/Separator
    break: () => <hr className="my-8 border-t-2 border-gray-200" />,
  },
};

export default function PortableTextRenderer({
  value,
}) {
  if (!value || value.length === 0) return null;
  return (
    <div className="portable-text-content">
      <PortableText value={value} components={components} />
    </div>
  );
}