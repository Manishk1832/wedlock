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

interface PersonalBagroundModelProps {
  isVisible: boolean;
  onClose: () => void;
}

const ReligiouModel: React.FC<PersonalBagroundModelProps> = ({
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
              <Form.Item label="Height">
                <Input.Group compact>
                  <Input
                    style={{ width: "49%", marginRight: "2%" }}
                    placeholder="Feet"
                  />
                  <Input style={{ width: "49%" }} placeholder="Inches" />
                </Input.Group>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="weight" label="Weight">
                <Input placeholder="Enter Weight" />
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="language" label="Language">
                <Select placeholder="Enter Language">
                  <Option value="1">English</Option>
                  <Option value="2">Hindi</Option>
                  <Option value="3">Marathi</Option>
                  <Option value="4">Gujarati</Option>
                  <Option value="5">Punjabi</Option>
                  <Option value="6">Kannada</Option>
                  <Option value="7">Tamil</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="bodyType" label="Body Type">
                <Select placeholder="Select Body Type">
                  <Option value="mesomorph">Mesomorph</Option>
                  <Option value="ectomorph">Ectomorph</Option>
                  <Option value="endomorph">Endomorph</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="smokingHabit" label="Smoking Habit">
                <Select placeholder="Select Smoking Habit">
                  <Option value="smoker">Smoker</Option>
                  <Option value="non-smoker">Non-Smoker</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="drinkingHabit" label="Drinking Habit">
                <Select placeholder="Select Drinking Habit">
                  <Option value="alcoholic">Alcoholic</Option>
                  <Option value="non-alcoholic">Non-Alcoholic</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="diet" label="Diet">
                <Select placeholder="Select Diet">
                  <Option value="veg">Veg</Option>
                  <Option value="non-veg">Non-Veg</Option>
                </Select>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item name="complexion" label="Complexion">
                <Select placeholder="Select Complexion">
                  {ComplexionOptions.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};

export default ReligiouModel;
