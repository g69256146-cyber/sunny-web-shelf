 interface AdministrationCardProps {
   name: string;
   role: string;
   affiliation?: string;
   initials: string;
 }
 
 const AdministrationCard = ({
   name,
   role,
   affiliation,
   initials,
 }: AdministrationCardProps) => {
   return (
     <div className="p-8 bg-card rounded-xl card-hover border border-border text-center">
       <div className="w-24 h-24 mx-auto rounded-full bg-muted flex items-center justify-center mb-4 ring-4 ring-primary/20">
         <span className="text-2xl font-display font-bold text-primary">
           {initials}
         </span>
       </div>
       <h3 className="text-xl font-display font-semibold text-foreground">{name}</h3>
       <p className="text-secondary font-medium mb-2">{role}</p>
       {affiliation && (
         <p className="text-sm text-muted-foreground">{affiliation}</p>
       )}
     </div>
   );
 };
 
 export default AdministrationCard;