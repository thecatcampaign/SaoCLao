import React, { Children } from 'react';
import { Avatar } from 'antd';

export default function TrackItemArtwork({ track }) {
  return (
    <div>
      <Avatar
        className=" mx-4 flex-none"
        shape="square"
        size={64}
        icon="user"
        src={track.artwork_url}
      />
    </div>
  );
}
