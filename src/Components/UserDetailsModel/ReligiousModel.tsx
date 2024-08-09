import React, { useState } from "react";
import { Modal, ConfigProvider, theme } from "antd";
import { createStyles, useTheme } from "antd-style";
import { Form, Input, InputNumber, Typography } from "antd";

const useStyle = createStyles(({ token }) => ({
  "my-modal-body": {
    background: token.blue1,
    padding: token.paddingSM,
  },
  "my-modal-mask": {
    boxShadow: `inset 0 0 15px #fff`,
  },
  "my-modal-header": {
    borderBottom: `1px dotted ${token.colorPrimary}`,
  },
  "my-modal-footer": {
    color: token.colorPrimary,
  },
  "my-modal-content": {
    border: "1px solid #333",
  },
  "my-modal-title": {
    color: "#007EAF",
  },
}));

interface ReligiousModalProps {
  isVisible: boolean;
  onClose: () => void;
}

const ReligiousModel: React.FC<ReligiousModalProps> = ({
  isVisible,
  onClose,
}) => {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const { styles } = useStyle();
  const token = useTheme();

  const classNames = {
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
    title: styles["my-modal-title"],
  };
  const [form] = Form.useForm<{ name: string; age: number }>();
  const nameValue = Form.useWatch("name", form);

  const modalStyles = {
    header: {
      borderRadius: 0,
    },

    mask: {
      backdropFilter: "blur(10px)",
    },

    content: {
      boxShadow: "0 0 30px #999",
    },
  };

  return (
    <div className="flex items-center">
      <Modal
        open={isVisible}
        onCancel={onClose}
        wrapClassName="my-modal-content"
        classNames={classNames}
        styles={modalStyles}
        title={
          <span className={styles["my-modal-title"]}>Religious Background</span>
        }
        centered
      >
        <Form form={form} layout="vertical" autoComplete="off">
          <Form.Item name="name" label="Religion">
            <Input placeholder="Enter Religion" />
          </Form.Item>
          <Form.Item name="name" label="Community">
            <Input placeholder="Enter Community" />
          </Form.Item>
          <Form.Item name="name" label="Sub Community">
            <Input placeholder="Enter Sub Community" />
          </Form.Item>
          <Form.Item name="name" label="Gothra/Gothram">
            <Input placeholder="Enter Gothra" />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ReligiousModel;
