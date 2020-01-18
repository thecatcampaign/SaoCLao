import React from 'react';
import { Spin } from 'antd';
import { useFetchLiker } from '../../hooks/user/useFetchLiker';
import DynamicModal from '../Common/DynamicContent.modal';

export default function TrackItemLikerModal({ track }) {
  const { likers, loading } = useFetchLiker(track);

  const isZeroLikes = React.useMemo(() => track.count_like === 0,
    [track.like_count]);

  if (loading && !isZeroLikes) return <Spin />;

  return (
    <div>
      {isZeroLikes
        ? 'Nobody Likes This Song'
        : likers.map((singleLiker, i) => (
          <div className="" key={i}>
            {singleLiker}
          </div>
        ))}
    </div>
  );
}
