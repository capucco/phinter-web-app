import { Icon } from 'app';

import { Container } from './ViewPicker.styled';

const VIEWS = [
  {
    view: 'picture',
    icon: '',
  },
  {
    view: 'text',
    icon: '',
  },
  {
    view: 'combined',
    icon: '',
  },
];

export const ViewPicker = () => {
  const handleViewClick = () => {};

  return (
    <Container>
      {VIEWS.map(view => (
        <Icon icon={view.icon} />
      ))}
    </Container>
  );
};
