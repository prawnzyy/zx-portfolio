import type { ReactNode } from "react"

type InnerProps = {
  children: ReactNode;
  id?: string;
  className?: string;
};

const CustomSection = ({ children, id="", className="" } : InnerProps) => {
    return (
        <section id={id != "" ? id : undefined}>
            <div className={className != "" ? className : 'container mx-auto flex flex-col sm:flex-row gap-4 sm:p-4 p-3'}>
                {children}
            </div>
        </section>
    )
}

export default CustomSection