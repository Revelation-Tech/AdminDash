import React from "react";
import { Drawer } from "antd";
import useModalStore from "@store/useModalStore";
import FaqForm from "../form";

const FaqDrawer = () => {
  const { onClose, title, show } = useModalStore();

  return (
    <Drawer
      width={500}
      title={
        <div className="inline-flex flex-col w-full py-1">
          <h4 className="font-normal text-lg lg:text-xl font-clashGrotesk text-bills-darkblue">
            Add New Ticket{" "}
          </h4>
          <p className="font-normal text-sm text-bills-darkblue/60">
            Make certain that the question and the answer are closely related
            and directly address each other.{" "}
          </p>
        </div>
      }
      onClose={onClose}
      open={show}
      closable={false}
    >
      <FaqForm />
    </Drawer>
  );
};

export default FaqDrawer;
