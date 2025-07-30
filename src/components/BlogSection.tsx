import type { ReactNode } from "react"

type InnerProps = {
  children: ReactNode;
  title: string;
};

const BlogSection = ({ children, title } : InnerProps) => {
    return (
        <div className="w-full text-left mb-5 blog-section first:border-t-0 border-t-4 border-gray-400 py-4">
            <div className="text-lg font-semibold mb-3">{title}</div>
            { children }
        </div>
    )
}

export default BlogSection