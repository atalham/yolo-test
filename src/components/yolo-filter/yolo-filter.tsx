import React, { ChangeEvent } from "react";
import { Paper } from "@mui/material";
import { YoloFilterMain } from "./yolo-filter.style";

type Props = {
  /**
   * @summary
   * Filter id
   */
  id?: string;
  /**
   * @summary
   * Input placeholder
   */
  placeholder?: string;
  /**
   * @summary
   * Input current text
   */
  text?: string;
  /**
   * @summary
   * Input variant
   */
  variant?: "filled" | "outlined" | "standard";
  /**
   * @summary
   * Triggered on text change
   */
  onTextChange?: (text: string) => void;
};

const YoloFilterComponent = ({
  id,
  placeholder,
  variant = "outlined",
  text,
  onTextChange,
}: Props) => {
  const onTextValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    onTextChange?.(value);
  };
  return (
    <Paper>
      <YoloFilterMain
        id={id}
        fullWidth
        placeholder={placeholder}
        variant={variant}
        value={text}
        onChange={onTextValueChange}
      />
    </Paper>
  );
};

export default YoloFilterComponent;
