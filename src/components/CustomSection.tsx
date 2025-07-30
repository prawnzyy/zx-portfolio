import type { ReactNode } from "react"

type InnerProps = {
  children: ReactNode;
  id?: string;
};

const CustomSection = ({ children, id="" } : InnerProps) => {
    return (
        <section id={id != "" ? id : undefined}>
            <div className='container mx-auto flex flex-col sm:flex-row gap-4 sm:p-4 p-3'>
                {children}
            </div>
        </section>
    )
}

export default CustomSection