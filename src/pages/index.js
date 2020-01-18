import React from 'react';
import { Spin } from 'antd';
import InfiniteScroll from 'react-infinite-scroller';
import { myApiEndPoint } from '../constants/myApi.constant';
import TrackList from '../components/Track/TrackList';
import { TrackItemContainer } from '../components/Track/TrackItem.container';
import { usePublicTracks } from '../hooks/track/usePublicTracks';
import TrackListHeader from '../components/Track/TrackListHeader';
import { isBrowser } from '../helpers/utils.helper';

export default function Index() {
  const { trendingTracks, loadMore, hasMore } = usePublicTracks(
    myApiEndPoint.TRENDING_TRACKS,
    10,
  );

  return (
    isBrowser && (
      <div className="px-4 pt-16 bg-grey-100">
        <TrackListHeader />
        <InfiniteScroll
          initialLoad={false} // have to set up false then use useEffectOnce in hook. There is some bug with true state
          pageStart={0}
          loadMore={loadMore}
          hasMore={hasMore}
          loader={<Spin />}
        >
          <TrackList>
            {trendingTracks.map((track, i) => (
              <TrackItemContainer key={track.id} track={track} numericalOrder={i} />
            ))}
          </TrackList>
        </InfiniteScroll>
      </div>
    )
  );
}
