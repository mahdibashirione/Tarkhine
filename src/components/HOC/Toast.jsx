import { toast, Toaster } from "react-hot-toast";

const withToast = (WrappedComponents) => {
  return (props) => {
    const success = (message) => toast.success(message);
    const error = (message) => toast.error(message);

    return (
      <>
        <WrappedComponents
          toastSuccess={success}
          toastError={error}
          {...props}
        />
        <Toaster position="top-center" reverseOrder={false} />
      </>
    );
  };
};

export default withToast;
