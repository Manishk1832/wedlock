import React from "react";
import { Modal, Select, Form, Input, Col, Row } from "antd";
import { createStyles, useTheme } from "antd-style";

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

interface LocationBagroundModelProps {
  isVisible: boolean;
  onClose: () => void;
}

const LocationBackgroundModal: React.FC<LocationBagroundModelProps> = ({
  isVisible,
  onClose,
}) => {
  const { styles } = useStyle();
  const token = useTheme();

  const { Option } = Select;
  const ComplexionOptions = [
    { value: "White", label: "White" },
    { value: "Black", label: "Black" },
    { value: "Asian", label: "Asian" },
    { value: "Indian", label: "Indian" },
    { value: "Others", label: "Others" },
  ];

  const classNames = {
    mask: styles["my-modal-mask"],
    header: styles["my-modal-header"],
    footer: styles["my-modal-footer"],
    content: styles["my-modal-content"],
    title: styles["my-modal-title"],
  };

  const [form] = Form.useForm<{ name: string; age: number }>();

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
          <span className={styles["my-modal-title"]}>Personal Background</span>
        }
        centered
      >
        <Form form={form} layout="vertical" autoComplete="off">
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item name="currentlocation" label="Current Location">
                <Input placeholder="Enter Current Location" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="cityofresidence" label="City of Residence">
                <Input placeholder="Enter City of Residence" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="nationality" label="Nationality">
                <Select placeholder="Select Nationality">
                  <Option value="indian">Indian</Option>
                  <Option value="australian">Australian</Option>
                  <Option value="american">American</Option>
                  <Option value="others">Others</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="citizenship" label="Citizenship">
                <Input placeholder="Enter Citizenship" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item
                name="Residency Visa Status"
                label="Residency Visa Status"
              >
                <Select placeholder="Select Residency Visa Status">
                  <Option value="yes">Yes</Option>
                  <Option value="">No</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default LocationBackgroundModal;
