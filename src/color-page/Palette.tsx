import ColorPlate from "../shared/ColorPlate";
import React from "react";

interface PaletteProps {
  tinyColors: tinycolor.Instance[];
  onColorClick: (color: string) => void;
  colorSize: number;
}

const Palette: React.FC<PaletteProps> = (props) => {
  const { tinyColors, onColorClick, colorSize } = props;

  return (
    <div className="palette">
      {tinyColors.map((t, i) => (
        <ColorPlate
          key={i}
          tinycolor={t}
          onColorClick={onColorClick}
          size={colorSize}
        />
      ))}
    </div>
  );
};

export default Palette;
