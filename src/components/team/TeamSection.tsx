 import { ReactNode } from "react";
 
 interface TeamSectionProps {
   title: string;
   highlightedWord: string;
   description?: string;
   children: ReactNode;
   className?: string;
   gridClassName?: string;
 }
 
 const TeamSection = ({
   title,
   highlightedWord,
   description,
   children,
   className = "",
   gridClassName = "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto",
 }: TeamSectionProps) => {
   return (
     <section className={`section-padding ${className}`}>
       <div className="container mx-auto container-padding">
         <div className="text-center max-w-3xl mx-auto mb-12">
           <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground">
             {title} <span className="text-gradient">{highlightedWord}</span>
           </h2>
           {description && (
             <p className="mt-4 text-lg text-muted-foreground">{description}</p>
           )}
         </div>
         <div className={gridClassName}>{children}</div>
       </div>
     </section>
   );
 };
 
 export default TeamSection;