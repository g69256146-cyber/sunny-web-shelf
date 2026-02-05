 import { Mail } from "lucide-react";
 import { ClinicalInvestigator } from "@/data/teamData";
 
 interface ClinicalInvestigatorCardProps {
   investigator: ClinicalInvestigator;
 }
 
 const ClinicalInvestigatorCard = ({ investigator }: ClinicalInvestigatorCardProps) => {
   return (
     <div className="p-6 bg-card rounded-xl card-hover border border-border">
       <div className="flex items-start gap-4">
         <div className="w-14 h-14 flex-shrink-0 rounded-full hero-gradient flex items-center justify-center">
           <span className="text-lg font-display font-bold text-primary-foreground">
             {investigator.initials}
           </span>
         </div>
         <div className="flex-1 min-w-0">
           <h3 className="text-lg font-display font-semibold text-foreground">
             {investigator.name}
           </h3>
           <p className="text-secondary font-medium text-sm">{investigator.role}</p>
         </div>
       </div>
       <div className="mt-4 space-y-2">
         <p className="text-sm text-muted-foreground font-medium">
           {investigator.institution}
         </p>
         <p className="text-xs text-muted-foreground">{investigator.position}</p>
         <div className="flex flex-wrap gap-1 mt-2">
           {investigator.expertise.map((exp, i) => (
             <span
               key={i}
               className="text-xs px-2 py-1 bg-muted rounded-full text-muted-foreground"
             >
               {exp}
             </span>
           ))}
         </div>
         <a
           href={`mailto:${investigator.email}`}
           className="inline-flex items-center text-xs text-primary hover:underline mt-2"
         >
           <Mail className="w-3 h-3 mr-1" />
           {investigator.email}
         </a>
 
         {investigator.coPi && (
           <div className="mt-4 pt-4 border-t border-border">
             <p className="text-xs font-medium text-muted-foreground mb-2">Co-PI:</p>
             <p className="text-sm font-medium text-foreground">{investigator.coPi.name}</p>
             {investigator.coPi.email && (
               <a
                 href={`mailto:${investigator.coPi.email}`}
                 className="inline-flex items-center text-xs text-primary hover:underline"
               >
                 <Mail className="w-3 h-3 mr-1" />
                 {investigator.coPi.email}
               </a>
             )}
             {investigator.coPi.phone && (
               <p className="text-xs text-muted-foreground mt-1">
                 Phone: {investigator.coPi.phone}
               </p>
             )}
           </div>
         )}
 
         {investigator.associate && (
           <div className="mt-4 pt-4 border-t border-border">
             <p className="text-xs font-medium text-muted-foreground mb-2">Associate:</p>
             <p className="text-sm font-medium text-foreground">{investigator.associate.name}</p>
             {investigator.associate.email && (
               <a
                 href={`mailto:${investigator.associate.email}`}
                 className="inline-flex items-center text-xs text-primary hover:underline"
               >
                 <Mail className="w-3 h-3 mr-1" />
                 {investigator.associate.email}
               </a>
             )}
             {investigator.associate.phone && (
               <p className="text-xs text-muted-foreground mt-1">
                 Phone: {investigator.associate.phone}
               </p>
             )}
           </div>
         )}
       </div>
     </div>
   );
 };
 
 export default ClinicalInvestigatorCard;