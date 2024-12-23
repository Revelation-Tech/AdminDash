import React from "react";

const StepIcon = ({icon: Icon, label, value}) => {
  return (
    <div className="inline-flex gap-2.5 w-full capitalize">
      <Icon className={`${label == 'error' ? "text-red-500" : "text-bills-skyblue "} w-8 h-8`} size={32} />
      <span>
        <h6 className="text-bills-skyblue text-base font-bold font-inter">
         {label}
        </h6>
        <p className="text-black text-base font-medium font-inter">{value}</p>
      </span>
    </div>
  );
};

export default StepIcon;
