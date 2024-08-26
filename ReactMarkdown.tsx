<div className="flex max-w-full flex-grow">
  <div className="markdown-content">
    <ReactMarkdown remarkPlugins={[remarkGfm]}>
      {message.content}
    </ReactMarkdown>
  </div>
</div>
/**
1. <ReactMarkdown remarkPlugins={[remarkGfm]}>:
- This is a React component called ReactMarkdown.
- It renders Markdown content as HTML.
2. The remarkPlugins prop specifies that the remarkGfm plugin (GitHub Flavored Markdown) should be used for parsing the Markdown.
3. {message.content}:
This is an interpolated value (JavaScript expression) inside the ReactMarkdown component.
It expects a message object with a content property (likely containing Markdown text).
*/
