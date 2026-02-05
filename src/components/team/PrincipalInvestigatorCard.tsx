 import { Mail } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 interface PrincipalInvestigatorCardProps {
   name: string;
   role: string;
   affiliation: string;
   institution: string;
   bio: string;
   initials: string;
 }
 
 const PrincipalInvestigatorCard = ({
   name,
   role,
   affiliation,
   institution,
   bio,
   initials,
 }: PrincipalInvestigatorCardProps) => {
   return (
     <div className="p-8 bg-card rounded-2xl card-hover border border-border text-center">
       <div className="w-28 h-28 mx-auto rounded-full hero-gradient flex items-center justify-center mb-6 ring-4 ring-secondary/30">
         <span className="text-3xl font-display font-bold text-primary-foreground">
           {initials}
         </span>
       </div>
       <h3 className="text-2xl font-display font-semibold text-foreground">{name}</h3>
       <p className="text-secondary font-medium text-lg mb-2">{role}</p>
       <p className="text-muted-foreground mb-1">{affiliation}</p>
       <p className="text-muted-foreground text-sm mb-4">{institution}</p>
       <p className="text-muted-foreground leading-relaxed">{bio}</p>
       <div className="mt-6">
         <Button variant="ghost" size="sm">
           <Mail className="w-4 h-4 mr-2" />
           Contact
         </Button>
       </div>
     </div>
   );
 };
 
 export default PrincipalInvestigatorCard;