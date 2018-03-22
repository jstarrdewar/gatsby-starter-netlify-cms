import React from 'react'
import { TwitterTweetEmbed } from 'react-twitter-embed';

export default ({ tweets }) => (
  <div>
    {tweets.map(tweet => (
      <TwitterTweetEmbed
        tweetId={tweet.id}
      />
    ))}
  </div>
)
