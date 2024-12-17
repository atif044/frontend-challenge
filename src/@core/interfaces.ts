import React from "react";

export interface formData{
    title:string;
    description:string;
}

export interface todoData extends formData{
    id:number;
    completed:boolean;
}

export interface FormErrorMessageProps {
  message: string;
  className?:string;
}

export interface PaginationProps{
  data:todoData[]
  setData:React.Dispatch<React.SetStateAction<todoData[]>>
}