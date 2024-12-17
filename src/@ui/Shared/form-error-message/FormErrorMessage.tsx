import { FC } from "react";
import { FormErrorMessageProps } from "../../../@core/interfaces";

const FormErrorMessage: FC<FormErrorMessageProps> = ({ message,className }) => (
  <p className={`font-bold ${className} text-white text-xs`}>{message}</p>
);

export default FormErrorMessage;
