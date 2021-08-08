import { useContext } from 'react';

import { UserContext } from 'app';

export const useUser = () => useContext(UserContext);
