import React, { useState } from "react";
import { Modal, ConfigProvider, theme, Select } from "antd";
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

interface FamilyModelProps {
  isVisible: boolean;
  onClose: () => void;
}

const FamilyModel: React.FC<FamilyModelProps> = ({ isVisible, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState([false, false]);
  const { styles } = useStyle();
  const { Option } = Select;

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
  const siblingCounts = [0, 1, 2, 3, 4, 5];
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
          <Form.Item name="fatheroccupation" label="Father occupation">
            <Input placeholder="Enter Father occupation" />
          </Form.Item>
          <Form.Item name="motheroccupation" label="Mother occupation">
            <Input placeholder="Enter Mother occupation" />
          </Form.Item>
          <Form.Item name="numberofsiblings" label="Number of siblings">
            <Select placeholder="Enter Number of siblings">
              {siblingCounts.map((siblingCount) => (
                <Option key={siblingCount} value={siblingCount}>
                  {siblingCount}
                </Option>
              ))}
            </Select>
          </Form.Item>
          <Form.Item name="livingwithfamily" label="Living with family">
            <Select placeholder="Select Living with family">
              <Option value="Yes">Yes</Option>
              <Option value="No">No</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default FamilyModel;
