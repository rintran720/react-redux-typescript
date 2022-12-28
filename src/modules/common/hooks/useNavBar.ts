import { useState } from 'react';

export default function useNavBar() {
  const [collapse, setCollapse] = useState(false);
  return { collapse, setCollapse };
}
