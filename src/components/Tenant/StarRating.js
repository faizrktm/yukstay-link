import { memo, useState } from "react";
import { Anchor, Box } from "grommet";
import { Star } from "grommet-icons";

const StarRating = ({ max, initialValue, onChange }) => {
  const [selected, setSelected] = useState(initialValue || 0);

  const onSelectRate = (rate) => {
    setSelected(rate);
    if(onChange) onChange(rate);
  }

  return(
    <Box direction="row" align="center" justify="between">
      {[...new Array(max)].map((_item, index) => (
        <Anchor onClick={() => onSelectRate(index + 1)} key={`star-${index}`}>
          <Star size="large" color={selected >= index + 1 ? 'gold' : 'softGrey'} />
        </Anchor>
      ))}
    </Box>
  )
};

export default memo(StarRating);
