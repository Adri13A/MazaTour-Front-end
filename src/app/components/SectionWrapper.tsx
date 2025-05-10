type SectionWrapperProps = {
    children: React.ReactNode;
    className?: string;
  };
  
  export default function SectionWrapper({ children, className = "" }: SectionWrapperProps) {
    return (
      <section>
        <div className={`p-5 md:px-20 md:py-10 bg-white ${className}`}>
          {children}
        </div>
      </section>
    );
  }
  