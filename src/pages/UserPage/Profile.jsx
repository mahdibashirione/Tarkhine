import { useFormik } from "formik";
import InputCustom from "../../components/common/input";
import * as Yup from "yup";
import ButtonContain from "../../components/common/Buttons/ButtonContain";
import http from "../../services/httpSevices";

const Profile = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      nickName: "",
    },
    validationSchema: Yup.object().shape({
      firstName: Yup.string().required("لطفا نام خود را وارد کنید !"),
      lastName: Yup.string().required("لطفا نام خانوادگی خود را وارد کنید !"),
      email: Yup.string()
        .email("ایمیل شما نامعتبر است !")
        .required("لطفا ایمیل خود را وارد کنید !"),
      phoneNumber: Yup.string()
        .min(11, "طول شماره تلفن شما کم است !")
        .max(11, "طول شماره تلفن شما زیاد است !")
        .required("لطفا شماره تلفن خود را وارد کنید !"),
    }),
    onSubmit: updateProfileRequest,
    validateOnMount: true,
  });

  async function updateProfileRequest(value) {
    const headrs={}
    try {
      const {data} =await http.Post()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <article className="shadow flex-1 p-4 rounded-lg border select-none border-[#cbcbcb]">
      <div className="w-full py-2 border-b border-[#cbcbcb]">
        <h2 className="leading-9 text-xl font-semibold">پروفایل من</h2>
      </div>
      <form
        onSubmit={formik.handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 items-center flex-wrap gap-x-4 gap-y-1 pt-8"
      >
        <InputCustom formik={formik} name="firstName" label="نام" />
        <InputCustom formik={formik} name="lastName" label="نام خوانوادگی" />
        <InputCustom formik={formik} name="email" label="آدرس ایمیل" />
        <InputCustom
          inputMode="numeric"
          formik={formik}
          name="phoneNumber"
          label="شماره همراه"
        />
        <InputCustom
          formik={formik}
          name="nickName"
          label="نام نمایشی(اختیاری)"
        />
        <div className="col-span-1 md:col-span-2 gap-2 flex mb-8 justify-end">
          <ButtonContain
            disabled={!formik.isValid ? true : false}
            type="submit"
            className="px-4"
            title="ذخیره اطلاعات"
          />
        </div>
      </form>
    </article>
  );
};

export default Profile;
