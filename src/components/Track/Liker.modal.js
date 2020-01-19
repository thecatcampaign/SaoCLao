import React from 'react';
import { Spin, List, Avatar } from 'antd';
import { useFetchLiker } from '../../hooks/user/useFetchLiker';

export default function LikerModal({ track }) {
  const { likers, loading } = useFetchLiker(track);

  const isZeroLikes = React.useMemo(() => track.count_like === 0, [track.like_count]);

  if (loading && !isZeroLikes) return <Spin />;

  return (
    <div>
      {isZeroLikes ? (
        'Nobody Likes This Song'
      ) : (
        <List
          itemLayout="horizontal"
          dataSource={likers}
          renderItem={(liker) => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                }
                title={liker}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
}
