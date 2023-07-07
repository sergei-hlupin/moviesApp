import React, { useState } from 'react';
import { Alert } from 'antd';

function NetworkState() {
  const [network, setNetwork] = useState(false);

  window.onoffline = () => {
    setNetwork(() => !network);
  };
  window.ononline = () => {
    setNetwork(() => network);
  };

  const isNetwork = network ? <Alert className="alert alert-net" message="нет сети" /> : null;

  return { isNetwork };
}

export default NetworkState;
