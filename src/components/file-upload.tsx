"use client";
import { UploadDropzone } from "@/lib/uploadthing";
import Image from "next/image";
import { X } from "lucide-react";
import "@uploadthing/react/styles.css";
interface FileUploadProps {
  onChange: (url?: string) => void;
  value: string;
  endpoint: "messageFile" | "serverImage";
}
export const FileUpload = ({ onChange, value, endpoint }: FileUploadProps) => {
  const fileType = value?.split(".").pop();
  console.log('vlaue',value)
  if (value && fileType !== "pdf") {
    return (
      <div className="relative h-24 w-24">
        <Image fill src={value} alt="Upload" className="rounded-full" />
        <button onClick={()=>onChange('') } className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0" >
          <X className="h-4 w-4"/>
        </button>
      </div>
    );
  }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res: any) => {
        onChange(res?.[0].url);
      }}
      onUploadError={(error: Error) => {
        console.log(error);
      }}
    />
  );
};
