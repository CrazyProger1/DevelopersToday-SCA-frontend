import React from "react";
import { StopPropagation } from "@/components/modals/StopPropagation";
import { Motion, SmoothLink } from "@/components/utils";
import { IoClose } from "react-icons/io5";
import { ModalPortal } from "@/components/modals/ModalPortal";

type Props = {
  modalHeading?: string;
  className?: string;
  query: string;
  children: React.ReactNode;
  exitButtonHref?: string;
};

const BaseModal = ({ className, children, query, exitButtonHref = "/" }: Props) => {
  return (
    <ModalPortal visible={true} query={query}>
      <StopPropagation className={className + " relative"}>
        <div className="absolute top-4 right-4">
          <SmoothLink href={exitButtonHref} className="flex">
            <Motion whileHover={{ scale: 1.1 }}>
              <IoClose className="icon-shine cursor-pointer" size={32} />
            </Motion>
          </SmoothLink>
        </div>
        {children}
      </StopPropagation>
    </ModalPortal>
  );
};

export default BaseModal;
