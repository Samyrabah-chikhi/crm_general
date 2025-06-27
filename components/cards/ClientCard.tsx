import { $Enums } from "@/app/generated/prisma";
import { Trash } from "lucide-react";

export default function ClientCard({
  name,
  company,
  phone,
  email,
  status,
  created_At,
  onDelete
}: {
  name: string;
  status: $Enums.ClientStatus;
  phone: string;
  email: string;
  company: string | null;
  created_At: Date;
  onDelete: () => void
}) {
  return (
    <div className="grid grid-cols-[2fr_2fr_3fr_1fr_1fr_1fr] gap-4 px-4 py-2 font-medium border-t border-gray-300">
      <h3>{name}</h3>
      <h3>{company == "" ? "None" : company}</h3>
      <div className="flex flex-col">
        <h3>{email}</h3>
        <h3>{phone}</h3>
      </div>
      <h3>{status}</h3>
      <h3>{created_At?.toLocaleDateString("en-GB")}</h3>
      <button className="flex items-center justify-between" onClick={onDelete}>
        <Trash
          className="text-red-700 w-10 h-10 p-2
         hover:text-lg hover:scale-110 duration-300
         hover:bg-red-100 rounded-md "
        ></Trash>
      </button>
    </div>
  );
}
