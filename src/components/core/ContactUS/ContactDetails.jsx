import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat with Our Experts",
    description: "Our healthcare team is available for quick advice.",
    details: "healthcare@ehealthfit.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit Us",
    description: "Come to our clinic for consultations and wellness services.",
    details: "123 Health Street, Wellness Center, City-500012",
  },
  {
    icon: "IoCall",
    heading: "Call Us",
    description: "Available for consultations from 9am to 6pm, Mon - Fri.",
    details: "+123 456 7890",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col gap-6 rounded-xl bg-richblack-800 p-4 lg:p-6">
      {contactDetails.map((ele, i) => {
        let Icon = Icon1[ele.icon] || Icon2[ele.icon] || Icon3[ele.icon];
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-richblack-200"
            key={i}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-richblack-5">
                {ele?.heading}
              </h1>
            </div>
            <p className="font-medium">{ele?.description}</p>
            <p className="font-semibold">{ele?.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
