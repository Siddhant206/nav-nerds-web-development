import React from "react";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/lib/image";

const components = {
  block: {
    normal: ({ children }) => (
      <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold my-6 text-gray-900">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-4xl font-bold my-5 text-gray-900">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-3xl font-bold my-4 text-gray-900">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl font-bold my-3 text-gray-900">{children}</h4>
    ),
    h5: ({ children }) => (
      <h5 className="text-xl font-bold my-2 text-gray-900">{children}</h5>
    ),
    h6: ({ children }) => (
      <h6 className="text-lg font-bold my-1 text-gray-900">{children}</h6>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-400 pl-6 my-6 italic text-gray-700 bg-blue-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
    left: ({ children }) => (
      <p className="text-left my-4 text-gray-700 leading-relaxed">{children}</p>
    ),
    center: ({ children }) => (
      <p className="text-center my-4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    right: ({ children }) => (
      <p className="text-right my-4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
    justify: ({ children }) => (
      <p className="text-justify my-4 text-gray-700 leading-relaxed">
        {children}
      </p>
    ),
  },

  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside my-4 space-y-2">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside my-4 space-y-2">{children}</ol>
    ),
    circle: ({ children }) => (
      <ul className="list-[circle] list-inside my-4 space-y-2">{children}</ul>
    ),
    square: ({ children }) => (
      <ul className="list-[square] list-inside my-4 space-y-2">{children}</ul>
    ),
    dash: ({ children }) => (
      <ul className="my-4 space-y-2">
        {React.Children.map(children, (child, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="font-semibold select-none">–</span>
            <span className="flex-1">{child}</span>
          </li>
        ))}
      </ul>
    ),
    check: ({ children }) => (
      <ul className="my-4 space-y-2">
        {React.Children.map(children, (child, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-green-600 select-none">✔</span>
            <span className="flex-1">{child}</span>
          </li>
        ))}
      </ul>
    ),
  },

  listItem: {
    bullet: ({ children }) => <li className="ml-1">{children}</li>,
    number: ({ children }) => <li className="ml-1">{children}</li>,
    circle: ({ children }) => <li className="ml-1">{children}</li>,
    square: ({ children }) => <li className="ml-1">{children}</li>,
  },

  marks: {
    strong: ({ children }) => (
      <strong className="font-bold text-gray-900">{children}</strong>
    ),
    em: ({ children }) => <em className="italic">{children}</em>,
    underline: ({ children }) => <u className="underline">{children}</u>,
    "strike-through": ({ children }) => (
      <del className="line-through">{children}</del>
    ),
    code: ({ children }) => (
      <code className="bg-gray-200 px-2 py-1 rounded text-sm font-mono text-gray-800">
        {children}
      </code>
    ),
    link: ({ value, children }) => {
      const target = (value?.href || "").startsWith("http")
        ? "_blank"
        : undefined;
      return (
        <a
          href={value?.href}
          target={target}
          rel={target === "_blank" ? "noopener noreferrer" : undefined}
          className="text-blue-600 hover:text-blue-800 underline transition-colors"
        >
          {children}
        </a>
      );
    },
  },

  types: {
    code: ({ value }) => (
      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto mb-6">
        <code className="text-sm font-mono">{value.code}</code>
      </pre>
    ),

    imageWithText: ({ value }) => {
      const {
        image,
        alt,
        caption,
        alignment = "left",
        size = "medium",
      } = value;

      if (!image?.asset?._ref) return null;

      const imageUrl = urlFor(image).url();

      const sizeClasses = {
        small: "w-1/4",
        medium: "w-1/3",
        large: "w-1/2",
      };

      const alignClasses = {
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
        </div>
      );
    },

    break: () => <hr className="my-2 border-t-2 border-gray-200" />,
  },
};

export default function PortableTextRenderer({ value }) {
  if (!value || value.length === 0) return null;
  return (
    <div className="portable-text-content prose prose-gray max-w-none">
      <PortableText value={value} components={components} />
    </div>
  );
}
