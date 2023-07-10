import React from 'react';
import useNetworkState from '../../lib/useNetworkState';

function NetworkState() {
  const isOnline = useNetworkState();
  const isNetwork = !isOnline ? (
    <div className="network">You are offline. Please check your connectivity and try again.</div>
  ) : null;

  return isNetwork;
}
export default NetworkState;
