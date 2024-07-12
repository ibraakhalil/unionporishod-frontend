import * as Yup from "yup";

export const holdingSchema = Yup.object().shape({
  name: Yup.string()
    .required("নাম আবশ্যক")
    .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  guardianName: Yup.string()
    .required("পিতা/স্বামীর নাম আবশ্যক")
    .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  motherName: Yup.string()
    .required("মাতার নাম আবশ্যক")
    .min(2, "নাম কমপক্ষে ২ অক্ষরের হতে হবে"),
  nid: Yup.string()
    .required("আইডি নম্বর আবশ্যক")
    .matches(/^[0-9]+$/, "আইডি নম্বর শুধুমাত্র সংখ্যা হতে হবে"),
  mobile: Yup.string()
    .required("মোবাইল নম্বর আবশ্যক")
    .matches(/^01[3-9]\d{8}$/, "অবৈধ মোবাইল নম্বর"),
  yearlyIncome: Yup.number()
    .required("বাৎসরিক আয় আবশ্যক")
    .positive("বাৎসরিক আয় ধনাত্মক হতে হবে"),
  religion: Yup.string().required("ধর্ম নির্বাচন করুন"),
  occupation: Yup.string().required("পেশা নির্বাচন করুন"),
  gender: Yup.string().required("লিঙ্গ নির্বাচন করুন"),
  ward: Yup.string().required("ওয়ার্ড নির্বাচন করুন"),
  totalMember: Yup.number()
    .required("মোট সদস্য সংখ্যা আবশ্যক")
    .integer("মোট সদস্য সংখ্যা পূর্ণসংখ্যা হতে হবে")
    .min(1, "মোট সদস্য সংখ্যা কমপক্ষে ১ হতে হবে"),
  maleMember: Yup.number()
    .required("পুরুষ সদস্য সংখ্যা আবশ্যক")
    .integer("পুরুষ সদস্য সংখ্যা পূর্ণসংখ্যা হতে হবে")
    .min(0, "পুরুষ সদস্য সংখ্যা ঋণাত্মক হতে পারে না"),
  femaleMember: Yup.number()
    .required("মহিলা সদস্য সংখ্যা আবশ্যক")
    .integer("মহিলা সদস্য সংখ্যা পূর্ণসংখ্যা হতে হবে")
    .min(0, "মহিলা সদস্য সংখ্যা ঋণাত্মক হতে পারে না"),
  maleChildren: Yup.number()
    .required("পুরুষ শিশু সংখ্যা আবশ্যক")
    .integer("পুরুষ শিশু সংখ্যা পূর্ণসংখ্যা হতে হবে")
    .min(0, "পুরুষ শিশু সংখ্যা ঋণাত্মক হতে পারে না"),
  femaleChildren: Yup.number()
    .required("মহিলা শিশু সংখ্যা আবশ্যক")
    .integer("মহিলা শিশু সংখ্যা পূর্ণসংখ্যা হতে হবে")
    .min(0, "মহিলা শিশু সংখ্যা ঋণাত্মক হতে পারে না"),
  multibuilding: Yup.boolean().required("বহুতল ঘর নির্বাচন করুন"),
  building: Yup.boolean().required("পাকা ঘর নির্বাচন করুন"),
  halfbuilding: Yup.boolean().required("আধা-পাকা ঘর নির্বাচন করুন"),
  rawhouse: Yup.boolean().required("কাঁচা ঘর নির্বাচন করুন"),
  village: Yup.string().required("গ্রাম/মহল্লা নির্বাচন করুন"),
  postoffice: Yup.string().required("ডাকঘর নির্বাচন করুন"),
  thana: Yup.string().required("উপজেলা নির্বাচন করুন"),
  distric: Yup.string().required("জেলা নির্বাচন করুন"),
  tax: Yup.number().required("কর আবশ্যক").positive("কর ধনাত্মক হতে হবে"),
  yearlyincome: Yup.number()
    .required("বাৎসরিক আয় আবশ্যক")
    .positive("বাৎসরিক আয় ধনাত্মক হতে হবে"),
});
