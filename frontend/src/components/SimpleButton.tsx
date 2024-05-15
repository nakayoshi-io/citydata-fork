import React from 'react';

import Button from 'react-bootstrap/Button';

type Props = { text: string, id: string }

const SimpleButton: React.FC<Props> = (props: Props) => (
  <div>
    <Button href={"city?id=" + props.id} variant="success" className="m-1">
      {props.text}
    </Button>
  </div>
);

export default SimpleButton;
