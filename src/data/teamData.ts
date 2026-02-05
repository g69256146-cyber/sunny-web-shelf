 export const principalInvestigator = {
   name: "Dr. Naveen Salins",
   role: "Principal Investigator",
   affiliation: "Professor, Department of Palliative Medicine and Supportive Care",
   institution: "Kasturba Medical College, Manipal, MAHE",
   bio: "Leading expert in palliative medicine with extensive experience in clinical research and healthcare policy development.",
   initials: "NS",
 };
 
 export const researchTeam = [
   {
     name: "Ashmitha",
     role: "Project Research Scientist",
     bio: "Responsible for supporting study implementation, data collection, and research analysis activities.",
     initials: "A",
   },
   {
     name: "Aparna Nanda",
     role: "Project Research Scientist",
     bio: "Contributes to research coordination, participant-level data processes, and outcome assessment.",
     initials: "AN",
   },
   {
     name: "Anusha",
     role: "Data Management and Reporting Coordinator",
     bio: "Oversees data integrity, database management, and preparation of study reports and summaries.",
     initials: "A",
   },
   {
     name: "Sowmya",
     role: "Qualitative Research Coordinator",
     bio: "Supports qualitative research activities, data analysis, and thematic interpretation.",
     initials: "S",
   },
 ];
 
 export const operationsTeam = [
   {
     name: "Akshatha",
     role: "Training Program Coordinator",
     bio: "Leads planning and delivery of training programs for clinical and project staff across study sites.",
     initials: "AK",
   },
   {
     name: "Subhashchandra",
     role: "Project Site Implementation Lead (Support)",
     bio: "Supports on-site implementation, coordination, and adherence to study protocols.",
     initials: "SC",
   },
   {
     name: "Prasanna Naik",
     role: "Project Technical Support III / Social Worker",
     bio: "Provides technical and psychosocial support to facilitate patient- and family-centered care processes.",
     initials: "PN",
   },
   {
     name: "Stacy Mendonca",
     role: "Communication Liaison",
     bio: "Coordinates internal and external communication to support stakeholder engagement and dissemination.",
     initials: "SM",
   },
   {
     name: "Gauthami",
     role: "Digital Liaison",
     bio: "Manages digital coordination, online resources, and technology-supported project communication.",
     initials: "G",
   },
   {
     name: "Chithra",
     role: "Office Helper",
     bio: "Provides essential office support to ensure smooth day-to-day project operations.",
     initials: "C",
   },
 ];
 
 export const administrationTeam = [
   {
     name: "Harsha",
     role: "Ethics and Regulatory Documentation Officer",
     affiliation: "Department of Palliative Medicine, KMC Manipal",
     initials: "H",
   },
   {
     name: "Pooja Naik",
     role: "Finance and Administrative Officer",
     affiliation: "MATHRU ICU Palliative Care Research Project",
     initials: "PN",
   },
 ];
 
 export interface ClinicalInvestigator {
   institution: string;
   name: string;
   role: string;
   position: string;
   expertise: string[];
   email: string;
   initials: string;
   coPi?: {
     name: string;
     email: string;
     phone: string;
   };
   associate?: {
     name: string;
     email: string;
     phone: string;
   };
 }
 
 export const clinicalSiteInvestigators: ClinicalInvestigator[] = [
   {
     institution: "Kasturba Medical College Manipal",
     name: "Dr Naveen Salins",
     role: "Principal Investigator",
     position: "Professor and Head, Department of Palliative Medicine and Supportive Care",
     expertise: ["ICU Palliative Care", "Health Research", "Public Policy"],
     email: "naveen.salins@manipal.edu",
     initials: "NS",
     coPi: {
       name: "Dr. Arun Ghoshal",
       email: "arun.ghoshal@manipal.edu",
       phone: "9434890160",
     },
     associate: {
       name: "Mr. Prasanna Naik",
       email: "",
       phone: "9743907407",
     },
   },
   {
     institution: "AIIMS Delhi",
     name: "Dr Seema Mishra",
     role: "Co-Principal Investigator",
     position: "Professor and Head, Department of Onco-Anaesthesia and Palliative Medicine, Dr. B.R. Ambedkar IRCH and NCI Jhajjar",
     expertise: ["ICU Palliative Care", "Health Research", "Public Policy"],
     email: "seemamishra2003@gmail.com",
     initials: "SM",
     associate: {
       name: "Dr. Raghav Gupta",
       email: "raghavgupta88@gmail.com",
       phone: "",
     },
   },
   {
     institution: "CMC Vellore",
     name: "Dr Jenifer Jeba Sundararaj",
     role: "Co-Principal Investigator",
     position: "Professor and Head, Department of Palliative Medicine",
     expertise: ["Palliative Care", "Health Research", "Public Policy"],
     email: "jenifermugesh@yahoo.com",
     initials: "JJS",
     coPi: {
       name: "Dr. Binila Chacko",
       email: "binilachacko@cmcvellore.ac.in",
       phone: "9600272412",
     },
     associate: {
       name: "Dr. Jyothsna Kuriakose",
       email: "jyothsna.kuriakose@cmcvellore.ac.in",
       phone: "9605538456",
     },
   },
   {
     institution: "Tata Memorial Hospital Mumbai",
     name: "Dr Sheila Nainan Myatra",
     role: "Co-Principal Investigator",
     position: "Professor, Department of Anaesthesiology, Critical Care and Pain",
     expertise: ["ICU Palliative Care", "Health Research", "Public Policy"],
     email: "sheila150@hotmail.com",
     initials: "SNM",
     coPi: {
       name: "Ms. Farnaz Shaikh",
       email: "shkfarnaz@gmail.com",
       phone: "9967024614",
     },
     associate: {
       name: "Dr. Anjana Shrivastava",
       email: "dranjanashrivastava@gmail.com",
       phone: "9820401867",
     },
   },
   {
     institution: "Bharati Vidyapeeth Deemed University Pune",
     name: "Dr Shivakumar Iyer",
     role: "Co-Principal Investigator",
     position: "Professor and Head, Department of Critical Care Medicine",
     expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
     email: "suchetashiva@gmail.com",
     initials: "SI",
     coPi: {
       name: "Vikas Govind Munde",
       email: "vikasmunde010@gmail.com",
       phone: "9579056920",
     },
     associate: {
       name: "Dr. Rutula",
       email: "drrutula@gmail.com",
       phone: "8149990072",
     },
   },
   {
     institution: "P. D. Hinduja Hospital Mumbai",
     name: "Dr Roop Gursahani",
     role: "Co-Investigator",
     position: "Consultant Neurologist",
     expertise: ["Neurology", "ICU Palliative Care", "Health Research"],
     email: "roop_gursahani@hotmail.com",
     initials: "RG",
     coPi: {
       name: "Dr. Farhad Kapadia",
       email: "dr.fkapadia@hindujahospital.com",
       phone: "",
     },
     associate: {
       name: "Dr. Smriti Khanna",
       email: "smriti.umesh.khanna@gmail.com",
       phone: "9892008228",
     },
   },
   {
     institution: "St John's Medical College Hospital Bangalore",
     name: "Dr Nandini Vallath",
     role: "Co-Principal Investigator",
     position: "Professor and Head, Department of Pain and Palliative Medicine",
     expertise: ["ICU Palliative Care", "Health Research"],
     email: "aanandini@gmail.com",
     initials: "NV",
     coPi: {
       name: "Dr. Havaldhar Amarja Ashok",
       email: "havaldar.aa@stjohns.in",
       phone: "9036082112",
     },
     associate: {
       name: "Dr. Mathangi Krishnakumar",
       email: "mathangi.krishnakumar@stjohns.in",
       phone: "9764062212",
     },
   },
   {
     institution: "Vardhaman Mahavir Medical College & Safdarjung Hospital Delhi",
     name: "Dr Anirban Hom Choudhuri",
     role: "Co-Principal Investigator",
     position: "Director, Professor & Head, Department of Critical Care Medicine",
     expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
     email: "anirban.homchoudhuri@gmail.com",
     initials: "AHC",
     coPi: {
       name: "Dr. Saurav Mitra Mustafi",
       email: "saurav82in@yahoo.co.in",
       phone: "9899124943",
     },
     associate: {
       name: "Dr. Geetika Khanna",
       email: "principal@vmmc-sjh.nic.in",
       phone: "9911332802",
     },
   },
   {
     institution: "Aster CMI Hospital Bengaluru",
     name: "Dr Raghavendra Ramanjulu",
     role: "Co-Principal Investigator",
     position: "Head, Department of Pain and Palliative Medicine",
     expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
     email: "drragraj1@gmail.com",
     initials: "RR",
     coPi: {
       name: "Madam Rajeshwari",
       email: "rajeshwari@asterhospital.in",
       phone: "7892988203",
     },
     associate: {
       name: "Dr. Surinder Kher",
       email: "surinder.kher@asterhospital.in",
       phone: "9900503671",
     },
   },
   {
     institution: "Yashoda Super-speciality Hospital Kaushambi Ghaziabad",
     name: "Dr Raj Kumar Mani",
     role: "Co-Principal Investigator",
     position: "Chairman, Department of Critical Care and Pulmonology",
     expertise: ["Critical Care", "ICU Palliative Care", "Health Research"],
     email: "raj.rkmjs@gmail.com",
     initials: "RKM",
   },
 ];