import { useFormik } from "formik";
import * as Yup from "yup";
import InputCustom from "../../components/common/input";
import { Link } from "react-router-dom";
import { FiChevronLeft } from "react-icons/fi";

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      phoneNumber: "",
      password: "",
    },
    validationSchema: Yup.object().shape({
      phoneNumber: Yup.string()
        .min(11, "طول شماره تلفن شما کم است !")
        .max(11, "طول شماره تلفن شما زیاد است !")
        .required("لطفا شماره تلفن خود را وارد کنید !"),
      password: Yup.string()
        .min(8, "رمز حداقل باید 8 کاراکتر باشد")
        .required("لطفا رمز ورود را وارد کنید !"),
    }),
    onSubmit: (value) => console.log(value),
    validateOnMount: true,
  });

  return (
    <section className="select-none md:bg-primary flex items-center justify-center min-h-screen">
      <form className="px-4 py-8 bg-white grid grid-cols-1 w-full max-w-[320px] md:max-w-[380px] md:shadow rounded-lg">
        <div className="col-span-1 flex flex-col gap-2 mb-4 items-center justify-center">
          <svg
            width="40"
            height="44"
            viewBox="0 0 40 44"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.4526 26.5021C12.2819 26.0092 11.1112 25.6483 10.0461 24.8298C11.0056 24.777 11.7362 25.2258 12.546 25.4107C11.3929 24.4689 10.1606 23.6327 9.26274 22.4093C10.2134 23.0342 11.164 23.6503 12.1146 24.2753C12.1411 24.2488 12.1675 24.2312 12.1851 24.2048C11.5425 23.5359 10.9087 22.8758 10.2662 22.2068C10.2926 22.1628 10.319 22.1188 10.3454 22.0748C10.6095 22.2156 10.9175 22.3037 11.1288 22.5061C11.9826 23.3071 12.8012 24.1432 13.6286 24.9706C13.8487 25.1906 14.0423 25.4195 14.2888 25.6835C14.4648 25.5163 14.5969 25.3755 14.7377 25.2611C14.9842 25.0762 14.9402 24.9002 14.7905 24.6713C13.6902 23.0166 12.2291 21.7315 10.5303 20.7546C9.22753 20.0064 7.81917 19.4431 6.46364 18.7918C5.88269 18.5101 5.31055 18.2108 4.72961 17.9204C4.75601 17.85 4.77362 17.7796 4.80002 17.7091C5.23133 17.7972 5.67144 17.8764 6.19957 17.982C5.36336 17.2691 4.42153 16.8026 3.8934 15.896C3.91981 15.8608 3.93741 15.8168 3.96382 15.7816C5.02008 16.4329 6.06754 17.0842 7.23823 17.806C6.45484 16.7409 5.75066 15.7904 5.05528 14.8398C5.09049 14.8046 5.12571 14.7694 5.16972 14.7341C5.53061 15.0862 5.9091 15.4119 6.24358 15.7816C7.14141 16.785 7.98642 17.8412 8.91945 18.8006C9.35076 19.2407 9.94051 19.5223 10.451 19.8832C11.1464 20.3673 11.833 20.8602 12.59 21.3971C12.5372 21.2387 12.5195 21.133 12.4667 21.0538C11.0144 18.6069 9.42118 16.2481 7.39667 14.2236C7.04458 13.8716 6.56926 13.6163 6.11155 13.4051C5.32815 13.053 4.50075 12.789 3.69975 12.4809C3.21563 12.2961 2.74031 12.0848 2.40583 11.6623C2.42343 11.6095 2.44103 11.5655 2.45864 11.5127C3.15401 11.6887 3.85819 11.8736 4.55356 12.0496C3.18922 10.8174 1.70165 9.70834 0.78622 8.05361C2.02733 9.07461 3.26844 10.0956 4.50075 11.1254C4.53596 11.099 4.57117 11.0638 4.59757 11.0374C3.92861 10.0868 3.25964 9.12743 2.59948 8.17684C2.64349 8.13283 2.6875 8.08882 2.73151 8.04481C2.94276 8.22085 3.18922 8.37047 3.35646 8.58172C4.07824 9.5147 4.73841 10.5093 5.5042 11.4159C6.15556 12.1816 6.93015 12.8506 7.60792 13.5899C8.23288 14.2677 8.80502 14.9894 9.39477 15.6935C9.48279 15.7992 9.57962 15.9136 9.66764 16.0192C9.70285 16.0016 9.73805 15.984 9.78206 15.9576C9.66764 15.6935 9.55321 15.4207 9.42998 15.1654C8.84903 13.9596 8.3385 12.7009 7.65193 11.5567C6.7189 10.0076 5.57462 8.60812 4.10465 7.51671C3.72615 7.23505 3.24204 7.11182 2.79312 6.92699C2.12416 6.64533 1.40238 6.46049 0.856642 5.84437C1.64884 5.65953 2.28259 6.18764 3.1188 6.31967C2.38822 5.52751 1.31435 5.23705 0.962264 4.25125C0.997473 4.19844 1.02388 4.15443 1.05909 4.10162C1.40238 4.29526 1.75446 4.4977 2.15937 4.72655C1.84249 4.16323 1.55201 3.65273 1.27034 3.13343C1.29675 3.10702 1.32316 3.08062 1.34956 3.05421C1.53441 3.20384 1.74566 3.32707 1.88649 3.5031C2.79312 4.63853 3.66454 5.80036 4.57997 6.91818C5.38097 7.89518 6.22598 8.84577 7.115 9.76995C6.79812 9.03941 6.50765 8.30006 6.15556 7.58712C5.71545 6.68054 5.38977 5.71234 4.65039 4.9818C3.64694 3.996 2.66109 3.0014 1.67524 1.998C1.39357 1.70754 1.15591 1.38188 0.953464 1.0122C2.14176 1.57552 2.95156 2.59652 3.9022 3.45029C3.93741 3.42389 3.97262 3.40628 4.00783 3.37988C3.47089 2.27966 2.93396 1.18824 2.38822 0.0880176C2.43223 0.0616123 2.48505 0.0264053 2.52906 0C3.38287 1.26745 4.24548 2.53491 5.0993 3.80236C5.1257 3.79356 5.16091 3.78476 5.18732 3.77596C5.02008 2.86938 4.85284 1.97159 4.6944 1.06501C4.74721 1.04741 4.80002 1.02981 4.85284 1.021C4.92325 1.20584 5.01128 1.38188 5.04648 1.57552C5.21373 2.39408 5.31055 3.23025 5.54821 4.02241C5.85629 5.02581 6.26999 5.994 6.66609 6.96219C6.88615 7.5079 7.16781 8.03601 7.49349 8.56412C7.5287 6.90058 7.02698 5.26345 7.22063 3.59992C7.27344 3.59112 7.31745 3.58232 7.37027 3.56471C7.5199 3.96079 7.66074 4.35687 7.81038 4.75295C7.83678 4.75295 7.86319 4.75295 7.88959 4.75295C8.02163 4.03121 8.15366 3.30066 8.3033 2.5085C8.7258 2.80776 8.69939 3.14223 8.66419 3.45029C8.51455 4.72655 8.34731 6.0028 8.18887 7.27025C8.17127 7.39348 8.18887 7.51671 8.23288 7.64873C8.717 6.84777 8.90185 5.89718 9.55321 5.21064C9.59722 5.21945 9.64123 5.23705 9.67644 5.24585C9.66764 5.37788 9.68524 5.5187 9.64123 5.63313C9.42118 6.30206 9.20112 6.96219 8.95466 7.62232C8.54976 8.69614 8.3297 9.79636 8.52335 10.9318C8.62898 11.5391 8.91065 12.12 9.16591 12.6921C9.80847 14.1532 10.4686 15.6055 11.1464 17.049C11.4545 17.7091 11.8066 18.3429 12.1411 18.9942C12.1939 18.9854 12.2379 18.9678 12.2907 18.959C12.2291 18.6069 12.1939 18.246 12.1146 17.894C11.9122 17.049 11.6833 16.204 11.4721 15.3591C11.2696 14.5669 11.0496 13.7836 10.8823 12.9826C10.7855 12.5073 10.7679 12.0144 10.7151 11.5303C10.7767 11.5127 10.8295 11.5039 10.8911 11.4863C11.1112 12.0056 11.3401 12.5337 11.6041 13.1674C11.7538 12.2697 11.8858 11.4775 12.0178 10.6853C12.0618 10.6853 12.1058 10.6941 12.1411 10.6941C12.2027 11.768 12.2643 12.8506 12.3347 13.9244C12.3699 13.9332 12.4051 13.9332 12.4491 13.942C12.7572 13.2555 12.8364 12.4545 13.5494 11.944C13.4966 12.2609 13.4614 12.5689 13.391 12.8858C13.1357 14.0212 12.7924 15.1478 12.6252 16.3009C12.5372 16.9346 12.722 17.6035 12.8188 18.2549C12.9509 19.1086 12.9685 20.024 13.3117 20.781C13.9015 22.0748 14.7113 23.2631 15.4595 24.5569C15.6795 24.3457 15.8028 24.2136 15.9436 24.0904C16.1549 23.9056 16.1549 23.7295 16.0492 23.4743C15.6619 22.5765 15.2922 21.6699 14.9402 20.7634C14.8345 20.4817 14.8169 20.1736 14.7641 19.8744C14.8169 19.8568 14.8609 19.8304 14.9137 19.8128C15.213 20.3761 15.5211 20.9306 15.8908 21.6171C15.8204 20.2264 15.4683 18.959 15.8468 17.6827C16.3573 18.5013 16.1813 19.4959 16.5333 20.4729C16.7358 19.76 16.9118 19.1438 17.0879 18.5101C17.528 18.6333 17.528 18.9062 17.4664 19.1878C17.2991 20.0152 17.1055 20.8426 16.9382 21.6699C16.8678 22.0396 16.8414 22.4181 16.8062 22.7966C16.7974 22.8846 16.8678 22.9726 16.9206 23.1398C18.8659 21.2298 20.7672 19.3639 22.6685 17.4979C21.6914 16.4065 21.3658 15.1566 21.6826 13.7924C21.8059 13.2731 22.0787 12.7273 22.4396 12.3401C25.8373 8.63453 29.2701 4.95539 32.6942 1.26746C32.7294 1.22345 32.7822 1.19704 32.8262 1.16183C33.416 1.4963 33.4952 1.91879 33.0727 2.40288C30.4848 5.37788 27.8882 8.35287 25.3091 11.3367C25.1331 11.5391 24.8954 11.7592 25.1771 12.0584C25.4148 12.3049 25.8813 12.3577 26.1453 12.1288C26.515 11.7944 26.8583 11.4335 27.2104 11.0814C29.7014 8.55531 32.2013 6.02921 34.6923 3.5031C34.7979 3.39748 34.8771 3.27426 34.9651 3.17744C35.6253 3.52951 35.7133 3.95199 35.2644 4.46249C32.703 7.40228 30.1415 10.3509 27.5889 13.2907C27.3777 13.5283 27.0432 13.7748 27.4217 14.1356C27.6945 14.3997 28.1699 14.3557 28.4867 14.0388C29.9479 12.5601 31.4003 11.0638 32.879 9.59392C34.3402 8.15043 35.819 6.73335 37.3241 5.28106C37.8083 5.52751 37.9051 5.9852 37.4914 6.46049C34.9211 9.40908 32.3509 12.3665 29.7807 15.3239C29.587 15.5439 29.2261 15.764 29.5694 16.1336C29.8511 16.4417 30.3176 16.4241 30.6697 16.0808C31.7699 14.9806 32.8614 13.8716 33.9529 12.7626C35.6693 11.0198 37.3857 9.26825 39.111 7.52551C39.2166 7.41988 39.3222 7.33187 39.5247 7.13823C39.7007 7.4903 39.8504 7.78956 40 8.09762C38.9701 9.20664 37.9667 10.2981 36.9632 11.3807C34.5778 13.9508 32.166 16.4945 29.8247 19.0998C28.3899 20.7017 26.1542 20.7369 24.7898 19.3991C24.7458 19.3551 24.7018 19.3287 24.6226 19.2671C24.4817 19.4343 24.3321 19.5927 24.2001 19.76C22.9325 21.2651 21.665 22.7702 20.3975 24.2577C20.2039 24.4865 20.1511 24.6801 20.2567 24.9706C20.4679 25.5779 20.6264 26.2028 20.82 26.819C20.8552 26.9422 20.9256 27.0566 21.0225 27.171C21.1633 26.1676 20.7848 25.1378 21.2601 24.0552C21.3834 24.4777 21.5242 24.8034 21.5682 25.1378C21.6826 26.0972 21.7266 27.0566 21.8587 28.016C22.0347 29.2923 22.29 30.5597 23.047 31.6511C23.7247 32.6369 24.3673 33.6579 25.0891 34.6173C25.3972 35.031 25.8373 35.3567 26.2422 35.6911C27.1928 36.4745 28.1523 37.2402 29.1117 38.0148C29.1997 38.0852 29.2965 38.1292 29.4286 38.2084C28.4691 37.0642 27.5009 35.9904 26.6207 34.8462C25.7404 33.7107 24.7546 32.6457 24.1472 31.3255C24.1913 31.2903 24.2441 31.2463 24.2881 31.211C24.9042 31.9416 25.5204 32.6633 26.207 33.4643C25.714 32.2761 25.2651 31.1846 24.8162 30.0844C24.869 30.058 24.9218 30.0404 24.9747 30.014C25.6788 31.3607 26.251 32.7866 27.2368 33.9748C27.0784 32.945 26.9199 31.924 26.7615 30.8942C27.3689 31.3343 27.4041 31.9768 27.5449 32.5665C27.6945 33.2178 27.8178 33.878 27.941 34.5381C28.1258 35.5063 28.4867 36.3777 29.2085 37.0906C30.1679 38.05 31.0218 39.1502 32.0692 40.004C33.1431 40.8754 34.3754 41.5531 35.5725 42.2661C36.5055 42.8118 37.4914 43.2783 38.4508 43.7712C38.5388 43.8152 38.6181 43.8768 38.6533 44C38.0547 43.7536 37.421 43.5511 36.8488 43.2519C35.2908 42.4245 33.768 41.5179 32.2013 40.6993C30.7137 39.9248 29.2173 39.1238 27.6505 38.5253C26.7879 38.1996 25.7757 38.2612 24.8338 38.182C24.1472 38.1204 23.4607 38.1292 22.7741 38.0676C22.5364 38.05 22.3076 37.9268 22.0787 37.7772C22.8357 37.3371 23.6455 37.5923 24.4377 37.4515C23.3198 37.1082 22.2108 36.765 21.0929 36.4217C21.1017 36.3689 21.1105 36.3249 21.1281 36.2721C21.5418 36.0344 21.9731 36.1488 22.4044 36.2456C22.8181 36.3337 23.2318 36.4481 23.6719 36.4569C22.6333 35.8232 21.5946 35.1806 20.556 34.5469C21.6386 34.6525 22.5541 35.1542 23.4783 35.6295C24.5522 36.1928 25.5996 36.8178 26.6735 37.3899C27.1312 37.6275 27.6241 37.8036 28.0994 38.006C28.1258 37.9708 28.1434 37.9356 28.1699 37.9004C27.8442 37.6275 27.5185 37.3635 27.1928 37.0818C25.0891 35.2511 22.6861 33.8868 20.1775 32.7161C19.5525 32.4257 18.7867 32.4257 18.0825 32.2761C17.396 32.1352 16.7094 32.0032 16.0316 31.836C15.8204 31.7832 15.6267 31.6335 15.3539 31.4927C16.0316 31.0878 16.6478 31.4839 17.3696 31.4135C16.6214 31.0262 15.97 30.7005 15.2922 30.3573C14.6145 31.1582 13.9455 31.9504 13.2765 32.7425C10.407 36.1576 7.53751 39.5639 4.66799 42.979C3.95501 43.824 3.04839 44.1144 1.98332 43.8328C0.900652 43.5423 0.293299 42.7942 0.0732444 41.7027C-0.155613 40.5761 0.152466 39.6607 0.988675 38.8422C5.04649 34.8902 9.07789 30.9206 13.1181 26.951C13.1797 26.7926 13.2941 26.6605 13.4526 26.5021ZM19.8694 24.821C19.306 25.4811 18.7955 26.062 18.3114 26.6693C18.2322 26.7662 18.2322 27.0038 18.2938 27.127C18.9187 28.3945 19.7373 29.5299 20.7232 30.5421C20.9873 30.815 21.2161 31.123 21.4714 31.3959C21.7883 31.7392 22.1315 32.056 22.466 32.3905C22.5188 32.3465 22.5717 32.3113 22.6245 32.2673C22.1668 31.4663 21.709 30.6565 21.2425 29.8556C20.6 28.7466 19.9398 27.6375 19.3148 26.5197C19.2004 26.3173 19.2092 26.0356 19.1564 25.7892C19.218 25.7628 19.2796 25.7364 19.3413 25.7099C19.7285 26.3349 20.1246 26.9598 20.5119 27.5759C20.5471 27.5583 20.5736 27.5495 20.6088 27.5319C20.3799 26.6693 20.1334 25.7892 19.8694 24.821ZM16.2781 29.081C17.9769 30.9558 20.1422 31.9944 22.3252 33.0242C20.556 31.4311 19.086 29.5035 16.9206 28.3065C16.7094 28.5705 16.4981 28.8258 16.2781 29.081Z"
              fill="#417F56"
            />
          </svg>
          <h2 className="font-bold md:text-xl">ورود / ثبت نام</h2>
          <p className="text-gray-500 text-center text-sm md:text-base]">
            لطفا برای ورود تمام اطلاعات خواسته شده را وارد کنید{" "}
          </p>
        </div>
        <InputCustom name="phoneNumber" formik={formik} label="شماره موبایل" />
        <InputCustom name="password" formik={formik} label="رمز ورود" />
        <button
          disabled={!formik.isValid ? true : false}
          className={`${
            !formik.isValid ? "opacity-50" : "opacity-100"
          } w-full py-2 rounded-lg bg-primary text-white text-sm md:text-base`}
        >
          تایید و ادامه
        </button>
        <div className="col-span-1 flex-wrap justify-center mt-2 flex gap-1 items-center text-sm">
          <p>ورود شما در ترخینه به منزله قبول</p>
          <Link className="text-primary" to="/signup">
            قوانین و مقررات
          </Link>
          <p>است</p>
        </div>
        <Link
          className="col-span-1 flex justify-center mt-4 text-primary text-sm items-center gap-1"
          to="/signup"
        >
          ثبت نام
          <FiChevronLeft />
        </Link>
      </form>
    </section>
  );
};

export default SignIn;