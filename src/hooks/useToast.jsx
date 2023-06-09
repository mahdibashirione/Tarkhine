import { toast } from "react-hot-toast";

const useToast = () => {
  const successToast = (message) => toast.success(message);
  const errorToast = (message) => toast.error(message);

  return { successToast, errorToast };
};

export default useToast;
