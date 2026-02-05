 import { Mail } from "lucide-react";
 import { Button } from "@/components/ui/button";
 
 interface TeamMemberCardProps {
   name: string;
   role: string;
   bio?: string;
   initials: string;
   variant?: "gradient" | "muted";
   showContact?: boolean;
 }
 
 const TeamMemberCard = ({
   name,
   role,
   bio,
   initials,
   variant = "gradient",
   showContact = false,
 }: TeamMemberCardProps) => {
   const avatarClasses =
     variant === "gradient"
       ? "hero-gradient text-primary-foreground"
       : "bg-muted text-primary ring-2 ring-border";
 
   return (
     <div className="p-6 bg-card rounded-xl card-hover border border-border text-center">
       <div
         className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 ${avatarClasses}`}
       >
         <span className="text-2xl font-display font-bold">{initials}</span>
       </div>
       <h3 className="text-lg font-display font-semibold text-foreground">{name}</h3>
       <p className="text-secondary font-medium text-sm mb-3">{role}</p>
       {bio && <p className="text-sm text-muted-foreground">{bio}</p>}
       {showContact && (
         <div className="mt-4">
           <Button variant="ghost" size="sm">
             <Mail className="w-4 h-4 mr-2" />
             Contact
           </Button>
         </div>
       )}
     </div>
   );
 };
 
 export default TeamMemberCard;