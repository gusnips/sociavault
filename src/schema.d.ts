export interface paths {
  "/v1/scrape/tiktok/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile
     * @description Scrapes a public TikTok profile
     */
    get: operations["tiktok_Profile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/demographics": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User's Audience Demographics
     * @description Returns audience demographic data for a TikTok user. Currently includes audience country distribution.
     *
     *     **Credit Cost:** 26 credits per request
     */
    get: operations["tiktok_User_s_Audience_Demographics"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile Videos
     * @description Scrapes videos from a TikTok profile. Pass cursor to get more videos.
     */
    get: operations["tiktok_Profile_Videos"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/video-info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Video Info
     * @description Scrapes data from a TikTok video
     */
    get: operations["tiktok_Video_Info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Transcript
     * @description Returns the transcript from a TikTok video. Enable the AI fallback option to generate a transcript when one is not natively available: note this costs 10 credits instead of 1.
     *
     *     **Credit Cost:** 1 credit (or 10 credits with AI fallback)
     */
    get: operations["tiktok_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/live": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * TikTok Live
     * @description Scrapes a TikTok user's live stream
     */
    get: operations["tiktok_TikTok_Live"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comments
     * @description Scrapes comments from a TikTok video
     */
    get: operations["tiktok_Comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/comment-replies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comment Replies
     * @description Scrapes replies to a TikTok comment
     */
    get: operations["tiktok_Comment_Replies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/following": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Following
     * @description Scrapes accounts that a TikTok user follows
     */
    get: operations["tiktok_Following"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Followers
     * @description Scrapes followers of a TikTok account
     */
    get: operations["tiktok_Followers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/search/users": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Users
     * @description Scrapes TikTok users matching a search query
     */
    get: operations["tiktok_Search_Users"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/search/hashtag": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search by Hashtag
     * @description Scrapes TikTok videos by hashtag.
     *
     *     If a hashtag that's in use returns "TikTok did not return an exact match for this hashtag", get its videos with [Hashtag Videos by ID](https://docs.sociavault.com/api-reference/tiktok/hashtag-videos) instead.
     */
    get: operations["tiktok_Search_by_Hashtag"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/hashtag/videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Hashtag Videos by ID
     * @description Gets the videos for a TikTok hashtag by its numeric hashtag ID.
     *
     *     Use it when [Search by Hashtag](https://docs.sociavault.com/api-reference/tiktok/search-hashtag) returns "TikTok did not return an exact match for this hashtag" for a hashtag that's in use. Any video that uses the hashtag has its ID in `text_extra[].hashtag_id`, for example in [Search by Keyword](https://docs.sociavault.com/api-reference/tiktok/search-keyword) results.
     *
     *     The response has the same format as Search by Hashtag, without `is_ad`, `is_paid_partnership`, `is_eligible_for_commission` and `shop_product_url`.
     */
    get: operations["tiktok_Hashtag_Videos_by_ID"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/search/keyword": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search by Keyword
     * @description Scrapes TikTok videos matching a keyword
     */
    get: operations["tiktok_Search_by_Keyword"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/search/music": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Music
     * @description Search TikTok sounds and music by keyword. Returns 10 results per page: use the `offset` parameter with the `cursor` value from the previous response to load more.
     */
    get: operations["tiktok_Search_Music"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/search/top": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Top Search
     * @description Access TikTok's 'Top' search results, which include both Photo Carousels and Videos. Unlike the Keyword Search endpoint, this returns mixed content types.
     */
    get: operations["tiktok_Top_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/music/popular": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get popular songs
     * @description Get trending songs from TikTok's Creative Center. Note: this endpoint can take up to 30 seconds to respond.
     */
    get: operations["tiktok_Get_popular_songs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/music/details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Song Details
     * @description Get detailed metadata for a specific TikTok song.
     */
    get: operations["tiktok_Get_Song_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/music/videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * TikToks using Song
     * @description Get the TikToks using a song
     */
    get: operations["tiktok_TikToks_using_Song"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/trending": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Trending Feed
     * @description Get the trending feed from TikTok.
     */
    get: operations["tiktok_Trending_Feed"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/creators/popular": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Popular Creators
     * @description Get popular TikTok creators with filtering options for follower count, creator country, and audience country. Sort results by engagement rate, follower count, or average views.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["tiktok_Popular_Creators"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/videos/popular": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Popular Videos
     * @description Get popular TikTok videos with filtering by time period and country. Sort results by likes, views, comments, or reposts.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["tiktok_Popular_Videos"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok/hashtags/popular": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Popular Hashtags
     * @description Get popular TikTok hashtags with filtering by time period and country. Optionally surface only newly trending hashtags.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["tiktok_Popular_Hashtags"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok-shop/products": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Shop Products
     * @description Get all products listed in a TikTok Shop. Use the cursor from each response to paginate through results.
     *
     *     **Credit Cost:** 1 credit per request
     *
     *     **Note:** Non-US shop catalog coverage depends on TikTok exposing that shop in the selected region.
     */
    get: operations["tiktok-shop_Shop_Products"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok-shop/product-details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Product Details
     * @description Get detailed information about a specific TikTok Shop product, including current stock levels, related TikTok videos promoting the product, and additional metadata. This endpoint currently supports US TikTok Shop products only.
     */
    get: operations["tiktok-shop_Product_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok-shop/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Shop Search
     * @description Search TikTok Shop for products by keyword. Returns 30 products per page: use the page parameter to navigate through results.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["tiktok-shop_Shop_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok-shop/product-reviews": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Product Reviews
     * @description Get a product's reviews (100 reviews per page).
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["tiktok-shop_Product_Reviews"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile
     * @description Gets public Instagram profile data, recent posts, and related accounts
     */
    get: operations["instagram_Profile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/basic-profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Basic Profile
     * @description Get a basic public Instagram profile by numeric user ID. Useful as a fallback when a handle-based lookup fails (some valid accounts return "account does not exist" when queried by username).
     */
    get: operations["instagram_BasicProfile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Posts
     * @description Get public posts from an Instagram profile. Note: play counts reflect Instagram-only views. When a Reel is cross-posted to Facebook, the combined view count is visible to logged-in users: this API returns Instagram views only.
     */
    get: operations["instagram_Posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/post-info": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post/Reel Info
     * @description Get detailed public information about a specific Instagram post or reel, including likes, comments, caption, media URLs, owner, audio, and: for reels and videos: the `video_play_count` view count. Note: play counts reflect Instagram views only; when a reel is cross-posted to Facebook, the combined count is visible only to logged-in users.
     */
    get: operations["instagram_Post_Reel_Info"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Transcript
     * @description Generate a transcript for an Instagram post or reel using AI. Responses typically take 10–30 seconds. Only videos under 2 minutes are supported: if no speech is detected, the transcript returns null. For carousel posts, a transcript is returned for each individual item.
     */
    get: operations["instagram_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Instagram native search: find users, hashtags, and places. Use this for account or entity lookup. It returns one page and does not return posts.
     */
    get: operations["instagram_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/search/popular": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Popular Search
     * @description Explore an Instagram topic and its curated posts. Use this when you want the Popular page's generated description, sources, suggested terms, media count, and paginated posts. Use the `cursor` from each response to fetch the next page.
     */
    get: operations["instagram_Search_Popular"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/comment/replies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comment Replies
     * @description Get replies to a specific Instagram comment. Provide the post or reel `url` and the parent `comment_id` (obtained from the Comments endpoint). Use the `cursor` from each response to load more replies.
     */
    get: operations["instagram_Comment_Replies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comments
     * @description Get comments from an Instagram post or reel, paginated at ~15 per page. Use the `cursor` from each response to load more. Note: Instagram's displayed comment count includes replies and hidden comments: this endpoint returns top-level visible comments only, so the total may be lower than what is shown on the post.
     */
    get: operations["instagram_Comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/search/hashtag": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Hashtag Posts
     * @description Find public Instagram posts and reels for a hashtag. This endpoint discovers Google-indexed content and then reads the public Instagram pages, so it works without Instagram's login-gated search and relies only on publicly available data.
     */
    get: operations["instagram_SearchHashtag"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/reels": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Reels
     * @description Get public reels from an Instagram profile. Accepts either a user_id or handle: user_id is recommended for faster responses. Pinned reels are not included, and reel descriptions are not returned here; use the Post/Reel Info endpoint to get those. Note: play counts reflect Instagram-only views. When a Reel is cross-posted to Facebook, the combined count is visible to logged-in users: this API returns Instagram views only.
     */
    get: operations["instagram_Reels"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/highlights": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Story Highlights
     * @description Get story highlights from an Instagram user
     */
    get: operations["instagram_Story_Highlights"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/highlight-detail": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Highlights Details
     * @description Get details about a specific highlight
     */
    get: operations["instagram_Highlights_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/instagram/reels-by-song": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Reels using Song
     * @description Get reels using a song
     */
    get: operations["instagram_Reels_using_Song"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/channel": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Details
     * @description Get comprehensive channel information including stats and metadata. Can pass channelId, handle, or url.
     */
    get: operations["youtube_Channel_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/channel-videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Videos
     * @description Get all videos from a channel with detailed information. Can pass channelId or handle.
     */
    get: operations["youtube_Channel_Videos"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/channel/shorts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Shorts
     * @description Get shorts from a YouTube channel. For additional details such as description or publish date, use the 'Video/Short Details' endpoint.
     */
    get: operations["youtube_Channel_Shorts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/video": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Video/Short Details
     * @description Get complete information about a video or short. To get transcripts, use the dedicated /v1/scrape/youtube/video/transcript endpoint.
     */
    get: operations["youtube_Video_Short_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/video/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Transcript
     * @description Get transcript of a video or short
     */
    get: operations["youtube_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Search YouTube and get matching videos, channels, playlists, shorts, lives, etc.
     */
    get: operations["youtube_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/search/hashtag": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search by Hashtag
     * @description Search YouTube and get matching videos, channels, and playlists
     */
    get: operations["youtube_Search_by_Hashtag"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/video/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comments
     * @description Get top-level comments from a YouTube video, paginated at ~20 per page. Use the `continuationToken` from each response to load more. Maximum retrievable: ~1,000 comments with `order=top` or ~7,000 with `order=newest`. Note: YouTube's displayed comment count includes reply threads, so the total returned may be lower.
     */
    get: operations["youtube_Comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/video/comment-replies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comment Replies
     * @description Get replies to a specific comment on a YouTube video.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["youtube_Comment_Replies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/shorts/trending": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Trending Shorts
     * @description Get about 48 trending shorts
     */
    get: operations["youtube_Trending_Shorts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/channel/playlists": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Playlists
     * @description Get playlists from a YouTube channel. Can pass channelId or handle.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["youtube_Channel_Playlists"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/channel/lives": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Lives
     * @description Get live streams and past streams from a YouTube channel. Can pass channelId or handle.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["youtube_Channel_Lives"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/youtube/channel/community-posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Channel Community Posts
     * @description Get community posts from a YouTube channel. Can pass channelId or handle.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["youtube_Channel_Community_Posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitch/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile
     * @description Get a Twitch user's public profile information.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["twitch_Profile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitch/user/videos": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Videos
     * @description Get videos from a Twitch user.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["twitch_User_Videos"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitch/user/schedule": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Schedule
     * @description Get a Twitch user's streaming schedule.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["twitch_User_Schedule"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitch/clip": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Clip
     * @description Get details of a Twitch clip.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["twitch_Clip"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok-ad-library/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Top Ads
     * @description Discover the best-performing TikTok Creative Center ads across regions, industries, and time windows. Filter by keyword, objective, format, and engagement metrics to study what's working in any market.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["tiktok_ad_library_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/tiktok-ad-library/ad": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Ad Details
     * @description Retrieve the full details for a single TikTok Creative Center Top Ad by its ad ID, including creative assets, metrics, and metadata.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["tiktok_ad_library_Ad"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/linkedin/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Person's Profile
     * @description Get a person's public LinkedIn profile including their recent posts. Returns only publicly available data: equivalent to what is visible in an incognito browser. Note: LinkedIn no longer exposes work history or job title publicly.
     */
    get: operations["linkedin_Person_s_Profile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/linkedin/company": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Company Page
     * @description Get a LinkedIn company page
     */
    get: operations["linkedin_Company_Page"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/linkedin/search/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Posts
     * @description Search for public LinkedIn posts by keyword. Uses Google Search to find indexed posts, then scrapes the public LinkedIn pages. Use the `cursor` from each response to page through more results.
     */
    get: operations["linkedin_Search_Posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/linkedin/post/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Transcript
     * @description Get the transcript from a LinkedIn post video, when LinkedIn exposes one. Returns the transcript text for the video attached to the given post.
     */
    get: operations["linkedin_Post_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/linkedin/post": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post
     * @description Get a Linkedin post. This can be a post or an article.
     */
    get: operations["linkedin_Post"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile
     * @description Get public Facebook profile information
     */
    get: operations["facebook_Profile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/profile/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile Posts
     * @description Get publicly visible posts from a Facebook profile: equivalent to what is accessible without being logged in. Accepts a profile URL or pageId (recommended for faster responses). Returns up to 3 posts per request.
     */
    get: operations["facebook_Profile_Posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/comment/replies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comment Replies
     * @description Get replies to a specific Facebook comment. Requires the feedback_id and expansion_token from the comments endpoint response.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["facebook_Comment_Replies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/profile/reels": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile Reels
     * @description Get public reels from a Facebook page, 10 at a time. **Important:** Pagination requires passing both `next_page_id` and `cursor` from the previous response.
     */
    get: operations["facebook_Profile_Reels"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/group/posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Facebook Group Posts
     * @description Get posts from a public Facebook group. Returns up to 3 posts per request due to Facebook API constraints.
     */
    get: operations["facebook_Facebook_Group_Posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/post": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post
     * @description Get a public Facebook post or reel by url.
     */
    get: operations["facebook_Post"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/post/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Transcript
     * @description Get the transcript of a Facebook post. Can be a post or reel.
     */
    get: operations["facebook_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook/post/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Comments
     * @description Get the comments of a Facebook post (or reel)
     */
    get: operations["facebook_Comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-ad-library/ad/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Ad Transcript
     * @description Get the transcript for a Facebook Ad Library video ad by ad ID or URL. Provide either `id` or `url`. Credits are only charged when a transcript is returned: if the ad has no available transcript, the request costs 0 credits.
     */
    get: operations["facebook_AdLibrary_Ad_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-ad-library/ad-details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Ad Details
     * @description Get details for a specific Facebook Ad Library entry by Ad ID. For ads with multiple versions, the title should be sourced from the `cards` object in the response.
     */
    get: operations["facebookAdLibrary_Ad_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-ad-library/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Search the Facebook (Meta) Ad Library by keyword. GET requests are capped at approximately 1,500 results due to cursor size limits. For larger result sets, use this endpoint as a POST request with the query parameters passed in the request body.
     */
    get: operations["facebookAdLibrary_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-ad-library/company-ads": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Company Ads
     * @description Get all the ads a company has running
     */
    get: operations["facebookAdLibrary_Company_Ads"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-ad-library/search-companies": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search for Companies
     * @description Search for companies by name and get their ad library page id
     */
    get: operations["facebookAdLibrary_Search_for_Companies"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-marketplace/location-search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Location Search
     * @description Look up cities and regions on Facebook Marketplace and get the coordinates you'll need to call the Marketplace Search endpoint.
     */
    get: operations["facebookMarketplace_Location_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-marketplace/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Pull Facebook Marketplace listings around any coordinate, with filters for price range, condition, delivery method, listing date, and availability. Use the Location Search endpoint first to grab the lat/lng for the city or region you want to search.
     */
    get: operations["facebookMarketplace_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/facebook-marketplace/item": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Item
     * @description Fetch full details for a single Facebook Marketplace listing by its ID or URL.
     */
    get: operations["facebookMarketplace_Item"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/google-ad-library/company-ads": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Company Ads
     * @description Get public ads for a company from the Google Ad Transparency Library. Only publicly accessible ads are returned: login-gated ads cannot be retrieved. Ad text is extracted via OCR, so response times may be slightly longer.
     */
    get: operations["googleAdLibrary_Company_Ads"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/google-ad-library/ad-details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Ad Details
     * @description Get details for a specific Google ad. Ad text is extracted via OCR and may not always be 100% accurate.
     */
    get: operations["googleAdLibrary_Ad_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/google-ad-library/search-advertisers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Advertisers
     * @description Search the Google Ad Transparency Library for advertisers to get their advertiser id
     */
    get: operations["googleAdLibrary_Search_Advertisers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/linkedin-ad-library/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Ads
     * @description Search the LinkedIn Ad Library
     */
    get: operations["linkedinAdLibrary_Search_Ads"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/linkedin-ad-library/ad-details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Ad Details
     * @description Get the details for an ad
     */
    get: operations["linkedinAdLibrary_Ad_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile
     * @description Get Twitter profile information including stats and metadata
     */
    get: operations["twitter_Profile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/user-tweets": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Tweets
     * @description Get tweets from a user's public profile. Note: Twitter's public API surfaces the user's ~100 most popular tweets, not their most recent ones.
     */
    get: operations["twitter_User_Tweets"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/tweet": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Tweet Details
     * @description Get detailed information about a specific tweet including engagement
     */
    get: operations["twitter_Tweet_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/tweet/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Transcript
     * @description Generate an AI-powered transcript for a video tweet. Response times may be slower than other endpoints due to AI processing.
     */
    get: operations["twitter_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/community": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Community
     * @description Get the details of a Twitter(X) Community
     */
    get: operations["twitter_Community"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/community/tweets": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Community Tweets
     * @description Get the tweets from a Twitter(X) Community
     */
    get: operations["twitter_Community_Tweets"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/user-tweets-all": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Tweets (All)
     * @description Get a user's latest tweets in chronological order using their numeric `rest_id`. Returns paginated timeline results: use the cursor parameter to load more. Maximum of 20 tweets per request.
     */
    get: operations["twitter_User_Tweets_All"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Tweet Comments
     * @description Get comments (replies) on a specific tweet. Results are paginated. Use the cursor parameter to fetch additional pages.
     */
    get: operations["twitter_Tweet_Comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Search Twitter for tweets, users, photos, media, and more. Results are paginated: use the cursor parameter to fetch additional pages.
     */
    get: operations["twitter_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/followers": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Followers
     * @description Get a user's followers list, paginated at up to 70 per request. Use the cursor parameter to load more.
     *
     *     **Tip:** Use the `/v1/scrape/twitter/profile` endpoint to resolve a user's `rest_id` from their handle.
     */
    get: operations["twitter_Followers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/followings": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Followings
     * @description Get the list of accounts a user is following, paginated at up to 70 per request. Use the cursor parameter to load more.
     *
     *     **Tip:** Use the `/v1/scrape/twitter/profile` endpoint to resolve a user's `rest_id` from their handle.
     */
    get: operations["twitter_Followings"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/quotes": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Quotes
     * @description Get tweets that quote a specific tweet. Results are paginated: use the cursor parameter to fetch additional pages. Returns up to 20 quote tweets per request.
     */
    get: operations["twitter_Quotes"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/twitter/retweets": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Retweets
     * @description Get users who retweeted a specific tweet. Results are paginated: use the cursor parameter to fetch additional pages. Returns up to 100 retweeters per request.
     */
    get: operations["twitter_Retweets"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/reddit/subreddit/details": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subreddit Details
     * @description Get details about a subreddit. Pass a subreddit name or URL to the subreddit.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["reddit_Subreddit_Details"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/reddit/subreddit/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subreddit Search
     * @description Search within a subreddit for posts, comments, or media matching a query
     */
    get: operations["reddit_Subreddit_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/reddit/subreddit": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Subreddit Posts
     * @description Get recent posts from a subreddit with engagement metrics
     */
    get: operations["reddit_Subreddit_Posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/reddit/post/comments": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Comments
     * @description Get comments and post information from a Reddit post
     */
    get: operations["reddit_Post_Comments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/reddit/post/transcript": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post Transcript
     * @description Get the transcript from a Reddit video post.
     *
     *     **Credit Cost:** 1 credit per request
     */
    get: operations["reddit_Post_Transcript"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/reddit/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Search Reddit for posts
     */
    get: operations["reddit_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/threads/profile": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Profile
     * @description Get Threads profile info
     */
    get: operations["threads_Profile"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/threads/user-posts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Posts
     * @description Get recent posts from a Threads user. Note: Threads limits public access to approximately the last 20–30 posts per user.
     */
    get: operations["threads_Posts"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/threads/post": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Post
     * @description Get a post by url. Also returns comments and related posts.
     */
    get: operations["threads_Post"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/threads/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search by Keyword
     * @description Search Threads posts by keyword. Returns 20–30 results per request due to platform constraints.
     */
    get: operations["threads_Search_by_Keyword"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/threads/search-users": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search Users
     * @description Search for users by username
     */
    get: operations["threads_Search_Users"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/google/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Search Google
     */
    get: operations["google_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/pinterest/search": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Search
     * @description Search Pinterest for pins
     */
    get: operations["pinterest_Search"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/pinterest/pin": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Pin
     * @description Get Pinterest pin details
     */
    get: operations["pinterest_Pin"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/pinterest/user/boards": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * User Boards
     * @description Get a user's boards
     */
    get: operations["pinterest_UserBoards"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/scrape/pinterest/board": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Board
     * @description Get the pins of a Pinterest board
     */
    get: operations["pinterest_Board"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/credits": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get Credits Balance
     * @description Returns the current credit balance and subscription status for the authenticated user
     */
    get: operations["get_credits"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: never;
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  tiktok_Profile: {
    parameters: {
      query: {
        /** @description TikTok handle */
        handle: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            user: {
              /** @example 6659752019493208069 */
              id: string;
              /** @example  */
              shortId: string;
              /** @example stoolpresidente */
              uniqueId: string;
              /** @example Dave Portnoy */
              nickname: string;
              /** @example https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310178711609032710~c5_1080x1080.jpeg?lk3s=a5d48078&nonce=58494&refresh_token=466ff0b92ed2f51170dbbdc2a30b9e9a&x-expires=1737921600&x-signature=uZnt1AjbwQ5pMTWNSV5hqw8QhMM%3D&shp=a5d48078&shcp=81f88b70 */
              avatarLarger: string;
              /** @example https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310178711609032710~c5_720x720.jpeg?lk3s=a5d48078&nonce=18587&refresh_token=4c5e30ff3fe99ca813d9f79d74c41fb1&x-expires=1737921600&x-signature=6ropsZzca3J6jx%2BH49D%2BAgxMoe4%3D&shp=a5d48078&shcp=81f88b70 */
              avatarMedium: string;
              /** @example https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7310178711609032710~c5_100x100.jpeg?lk3s=a5d48078&nonce=56685&refresh_token=52483b418cbeceeaf2863a9fe0feb830&x-expires=1737921600&x-signature=xGLErTLpukZpmPcYw1ZBHJpPEbM%3D&shp=a5d48078&shcp=81f88b70 */
              avatarThumb: string;
              /** @example El Presidente/Barstool Sports Founder. */
              signature: string;
              /** @example 1550594547 */
              createTime: number;
              /** @example true */
              verified: boolean;
              /** @example MS4wLjABAAAAINC_ElRR-l1RCcnEjOZhNO-9wOzAMf-YHXqRY8vvG9bEhMRa6iu23TaE3JPZYXBD */
              secUid: string;
              /** @example false */
              ftc: boolean;
              /** @example 0 */
              relation: number;
              /** @example false */
              openFavorite: boolean;
              bioLink: {
                /** @example https://www.barstoolsports.com/bios/Surviving-Barstool */
                link: string;
                /** @example 0 */
                risk: number;
              };
              /** @example 0 */
              commentSetting: number;
              commerceUserInfo: {
                /** @example false */
                commerceUser: boolean;
              };
              /** @example 0 */
              duetSetting: number;
              /** @example 0 */
              stitchSetting: number;
              /** @example false */
              privateAccount: boolean;
              /** @example false */
              secret: boolean;
              /** @example false */
              isADVirtual: boolean;
              /** @example  */
              roomId: string;
              /** @example 0 */
              uniqueIdModifyTime: number;
              /** @example false */
              ttSeller: boolean;
              /** @example 0 */
              downloadSetting: number;
              profileTab: {
                /** @example false */
                showMusicTab: boolean;
                /** @example false */
                showQuestionTab: boolean;
                /** @example true */
                showPlayListTab: boolean;
              };
              /** @example 1 */
              followingVisibility: number;
              /** @example  */
              recommendReason: string;
              /** @example  */
              nowInvitationCardUrl: string;
              /** @example 0 */
              nickNameModifyTime: number;
              /** @example false */
              isEmbedBanned: boolean;
              /** @example true */
              canExpPlaylist: boolean;
              /** @example 1 */
              profileEmbedPermission: number;
              /** @example en */
              language: string;
              eventList: unknown[];
              /** @example false */
              suggestAccountBind: boolean;
              /** @example 0 */
              isOrganization: number;
            };
            stats: {
              /** @example 4100000 */
              followerCount: number;
              /** @example 74 */
              followingCount: number;
              /** @example 190400000 */
              heart: number;
              /** @example 190400000 */
              heartCount: number;
              /** @example 2017 */
              videoCount: number;
              /** @example 0 */
              diggCount: number;
              /** @example 52 */
              friendCount: number;
            };
            itemList: unknown[];
          };
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_User_s_Audience_Demographics: {
    parameters: {
      query: {
        /** @description TikTok handle */
        handle: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example true */
            success: boolean;
            audienceLocations: {
              /** @example Mexico */
              country: string;
              /** @example MX */
              countryCode: string;
              /** @example 83 */
              count: number;
              /** @example 15.96% */
              percentage: string;
            }[];
          };
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Profile_Videos: {
    parameters: {
      query: {
        /** @description TikTok handle */
        handle: string;
        /** @description TikTok user id. Use this for faster responses. */
        user_id?: string;
        /** @description What to sort by (latest or popular) */
        sort_by?: "latest" | "popular";
        /** @description Cursor to get more videos. Get 'max_cursor' from previous response. */
        max_cursor?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `aweme_list[0].image_post_info.images`: Slideshow images (you'll want all of the 'thumbnail' images
       *     - `aweme_list[0].video.dynamic_cover.url_list`: Thumbnail
       *     - `aweme_list[0].statistics`: All the counts for views, likes, comments, etc. will be in this key
       *     - `aweme_list[0].statistics.play_count`: Views
       *     - `aweme_list[0].statistics.digg_count`: Likes
       *     - `aweme_list[0].aweme_id`: Id of the tiktok. No idea why they call it this, but aweme is a name you'll find everywhere in tiktok responses.
       *     - `aweme_list[0].video.play_addr.url_list`: Video without watermark
       *     - `aweme_list[0].is_ad`: Whether the tiktok is an ad. Make sure you're looking at the is_ad field and not the is_ads field
       *     - `aweme_list[0].is_top`: is_top: 1 means the tiktok is pinned
       *     - `aweme_list[0].is_eligible_for_commission`: If video is promoting an item from tiktok shop
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Video_Info: {
    parameters: {
      query: {
        /** @description TikTok video URL */
        url: string;
        /** @description Get transcript of the video */
        get_transcript?: boolean;
        /** @description Region of the proxy. Sometimes you'll need to specify the region if you're not getting a response. Commonly for videos from the Phillipines, in which case you'd use 'PH'. Use 2 letter country codes like US, GB, FR, etc */
        region?: string;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `image_post_info.images`: Slideshow images (you'll want all of the 'thumbnail' images
       *     - `aweme_detail.video.download_no_watermark_addr.url_list[0]`: The URL of the video
       *     - `digg_count`: digg_count === like_count. Not sure why TikTok calls it "digg" Maybe the user diggs it?
       *     - `is_ad`: Whether the tiktok is an ad. Make sure you're looking at the is_ad field and not the is_ads field
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Transcript: {
    parameters: {
      query: {
        /** @description TikTok video URL */
        url: string;
        /** @description Language of the transcript. 2 letter language code, ie 'en', 'es', 'fr', 'de', 'it', 'ja', 'ko', 'zh' */
        language?: string;
        /** @description Set to 'true' to use AI as a fallback to get the transcript if the transcript is not found. Adds 10 credits to the base cost. */
        use_ai_as_fallback?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_TikTok_Live: {
    parameters: {
      query: {
        /** @description TikTok handle */
        handle: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.liveRoomUserInfo.uniqueId`: Streamer's TikTok username
       *     - `data.liveRoomUserInfo.nickname`: Streamer's display name
       *     - `data.liveRoomUserInfo.id`: Streamer's user ID
       *     - `data.liveRoomUserInfo.secUid`: Streamer's secure user ID
       *     - `data.liveRoomUserInfo.followerCount`: Streamer's follower count
       *     - `data.liveRoomUserInfo.followingCount`: Streamer's following count
       *     - `data.liveRoomUserInfo.avatarLarger`: Streamer's profile picture (high-res)
       *     - `data.liveRoomUserInfo.signature`: Streamer's bio
       *     - `data.liveRoomUserInfo.roomId`: Live room ID
       *     - `data.liveRoomUserInfo.status`: User's live status (`4` = currently live)
       *     - `data.liveRoom.title`: Live stream title
       *     - `data.liveRoom.startTime`: Unix timestamp of when the stream started
       *     - `data.liveRoom.coverUrl`: Live stream cover image URL
       *     - `data.liveRoom.status`: Stream status (`4` = live)
       *     - `data.liveRoom.liveRoomStats.userCount`: Current viewer count
       *     - `data.liveRoom.liveRoomStats.enterCount`: Total unique viewers who entered
       *     - `data.liveRoom.streamData.pull_data.stream_data`: JSON string containing stream URLs: parse it to get FLV, HLS (m3u8), and CMAF URLs at various quality levels (origin, uhd_60, hd_60, hd, sd, ld)
       *     - `data.liveRoom.streamData.pull_data.options.qualities[]`: Available stream quality options with `name` (e.g. `1080p60`, `720p`) and `sdk_key`
       *     - `data.liveRoom.streamId`: Unique stream identifier
       *     - `data.liveRoom.liveSubOnly`: Whether the stream is subscriber-only
       *     - `data.liveRoom.gameTagId`: Game category tag (for gaming streams)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Comments: {
    parameters: {
      query: {
        /** @description TikTok video URL */
        url: string;
        /** @description Cursor to get more comments. Get 'cursor' from previous response. */
        cursor?: number;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.comments[].cid`: Unique comment ID
       *     - `data.comments[].text`: Comment text
       *     - `data.comments[].create_time`: Unix timestamp of when the comment was posted
       *     - `data.comments[].digg_count`: Number of likes on the comment
       *     - `data.comments[].reply_comment_total`: Number of replies to this comment
       *     - `data.comments[].comment_language`: Language code of the comment (e.g. `en`)
       *     - `data.comments[].is_author_digged`: Whether the video author liked this comment
       *     - `data.comments[].author_pin`: Whether the video author pinned this comment
       *     - `data.comments[].reply_id`: ID of the parent comment (`0` if top-level)
       *     - `data.comments[].aweme_id`: ID of the video this comment belongs to
       *     - `data.comments[].image_list`: Attached images (if any)
       *     - `data.comments[].label_list[].text`: Labels like "Creator liked"
       *     - `data.comments[].user.unique_id`: Commenter's TikTok username
       *     - `data.comments[].user.nickname`: Commenter's display name
       *     - `data.comments[].user.uid`: Commenter's user ID
       *     - `data.comments[].user.sec_uid`: Commenter's secure user ID
       *     - `data.comments[].user.avatar_thumb.url_list[0]`: Commenter's profile picture
       *     - `data.total`: Total number of comments on the video
       *     - `data.has_more`: Whether more comments are available (`1` = yes)
       *     - `data.cursor`: Pagination cursor: pass as `cursor` parameter to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Comment_Replies: {
    parameters: {
      query: {
        /** @description TikTok comment ID. This is the cid from the comments endpoint. */
        comment_id: string;
        /** @description TikTok video URL. This is the url from the comments endpoint. */
        url: string;
        /** @description Cursor to get more replies. Get 'cursor' from previous response. */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example TikTok comment ID is required */
            error: string;
            /** @example comment_replies */
            endpoint?: string;
            /** @example 1 */
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch TikTok comment replies */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Following: {
    parameters: {
      query: {
        /** @description TikTok handle */
        handle: string;
        /** @description Used to paginate. Get 'min_time' from previous response. */
        min_time?: number;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.followings[].unique_id`: User's TikTok username
       *     - `data.followings[].nickname`: User's display name
       *     - `data.followings[].uid`: User's numeric ID
       *     - `data.followings[].sec_uid`: User's secure user ID (use for profile lookups)
       *     - `data.followings[].signature`: User's bio
       *     - `data.followings[].follower_count`: User's follower count
       *     - `data.followings[].following_count`: User's following count
       *     - `data.followings[].total_favorited`: Total likes received across all videos
       *     - `data.followings[].aweme_count`: Number of videos posted
       *     - `data.followings[].favoriting_count`: Number of videos the user has liked
       *     - `data.followings[].avatar_larger.url_list[0]`: Profile picture (high-res)
       *     - `data.followings[].avatar_medium.url_list[0]`: Profile picture (medium)
       *     - `data.followings[].region`: 2-letter country code
       *     - `data.followings[].verification_type`: Verification status (`1` = verified)
       *     - `data.followings[].create_time`: Account creation Unix timestamp
       *     - `data.total`: Total number of accounts followed
       *     - `data.has_more`: Whether more results are available
       *     - `data.min_time`: Pagination cursor: pass as `min_time` parameter to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Followers: {
    parameters: {
      query?: {
        /** @description TikTok handle */
        handle?: string;
        /** @description User id. Use this for faster response times. */
        user_id?: string;
        /** @description Used to paginate. Get 'min_time' from previous response. */
        min_time?: number;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.followers[].unique_id`: Follower's TikTok username
       *     - `data.followers[].nickname`: Follower's display name
       *     - `data.followers[].uid`: Follower's numeric ID
       *     - `data.followers[].sec_uid`: Follower's secure user ID (use for profile lookups)
       *     - `data.followers[].signature`: Follower's bio
       *     - `data.followers[].follower_count`: Follower's own follower count
       *     - `data.followers[].following_count`: Follower's following count
       *     - `data.followers[].total_favorited`: Total likes received across all videos
       *     - `data.followers[].aweme_count`: Number of videos posted
       *     - `data.followers[].favoriting_count`: Number of videos they've liked
       *     - `data.followers[].avatar_larger.url_list[0]`: Profile picture (high-res)
       *     - `data.followers[].avatar_medium.url_list[0]`: Profile picture (medium)
       *     - `data.followers[].region`: 2-letter country code
       *     - `data.followers[].verification_type`: Verification status (`1` = verified)
       *     - `data.followers[].create_time`: Account creation Unix timestamp
       *     - `data.total`: Total number of followers
       *     - `data.has_more`: Whether more results are available
       *     - `data.min_time`: Pagination cursor: pass as `min_time` parameter to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Search_Users: {
    parameters: {
      query: {
        /** @description Search query for users */
        query: string;
        /** @description Cursor to get more users. Get 'cursor' from previous response. */
        cursor?: number;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.user_list[].user_info.unique_id`: User's TikTok username
       *     - `data.user_list[].user_info.nickname`: User's display name
       *     - `data.user_list[].user_info.uid`: User's numeric ID
       *     - `data.user_list[].user_info.sec_uid`: User's secure user ID (use for profile lookups)
       *     - `data.user_list[].user_info.signature`: User's bio
       *     - `data.user_list[].user_info.follower_count`: Follower count
       *     - `data.user_list[].user_info.following_count`: Following count
       *     - `data.user_list[].user_info.total_favorited`: Total likes received across all videos
       *     - `data.user_list[].user_info.aweme_count`: Number of videos posted
       *     - `data.user_list[].user_info.custom_verify`: Verification label (e.g. `Verified account`)
       *     - `data.user_list[].user_info.avatar_larger.url_list[0]`: Profile picture (high-res)
       *     - `data.user_list[].user_info.avatar_medium.url_list[0]`: Profile picture (medium)
       *     - `data.user_list[].user_info.search_user_desc`: User bio with search highlighting
       *     - `data.user_list[].user_info.search_user_name`: Username with search highlighting
       *     - `data.cursor`: Pagination cursor: pass as `cursor` parameter to get the next page
       *     - `data.has_more`: Whether more results are available (`1` = yes)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Search_by_Hashtag: {
    parameters: {
      query: {
        /** @description Hashtag to search for (without #) */
        hashtag: string;
        /** @description Region the proxy will be set to. Note: this isn't going to grab you all tiktoks from this region, you're just setting the proxy there. */
        region?: string;
        /** @description Cursor to get more videos. Get 'cursor' from previous response. */
        cursor?: number;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.aweme_list[].aweme_id`: Video ID
       *     - `data.aweme_list[].desc`: Caption/description text (includes hashtags)
       *     - `data.aweme_list[].create_time`: Unix timestamp of when the video was posted
       *     - `data.aweme_list[].statistics.play_count`: Total views
       *     - `data.aweme_list[].statistics.digg_count`: Likes
       *     - `data.aweme_list[].statistics.comment_count`: Comments
       *     - `data.aweme_list[].statistics.share_count`: Shares
       *     - `data.aweme_list[].statistics.collect_count`: Bookmarks/saves
       *     - `data.aweme_list[].statistics.download_count`: Downloads
       *     - `data.aweme_list[].video.play_addr.url_list[0]`: Video playback URL
       *     - `data.aweme_list[].video.cover.url_list[0]`: Thumbnail image URL
       *     - `data.aweme_list[].video.duration`: Video duration in milliseconds
       *     - `data.aweme_list[].author.unique_id`: Author's TikTok username
       *     - `data.aweme_list[].author.nickname`: Author's display name
       *     - `data.aweme_list[].author.sec_uid`: Author's secure user ID
       *     - `data.aweme_list[].music.title`: Sound/music title
       *     - `data.aweme_list[].music.author`: Sound/music artist
       *     - `data.aweme_list[].music.play_url.url_list[0]`: Audio playback URL
       *     - `data.cursor`: Pagination cursor: pass as `cursor` parameter to get the next page
       *     - `data.has_more`: Whether more results are available (`1` = yes)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Hashtag_Videos_by_ID: {
    parameters: {
      query: {
        /** @description The hashtag's numeric ID. Any video that uses the hashtag has it in `text_extra[].hashtag_id`. */
        hashtag_id: string;
        /** @description Cursor to get more videos. Get 'cursor' from previous response. */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *     **Key Response Fields:**
       *     - `data.aweme_list[].aweme_id`: Video ID
       *     - `data.aweme_list[].url`: Link to the video on TikTok
       *     - `data.aweme_list[].desc`: Caption text (includes hashtags)
       *     - `data.aweme_list[].create_time`: Unix timestamp of when the video was posted
       *     - `data.aweme_list[].create_time_utc`: The same time as an ISO date
       *     - `data.aweme_list[].statistics.play_count`: Total views
       *     - `data.aweme_list[].statistics.digg_count`: Likes
       *     - `data.aweme_list[].statistics.comment_count`: Comments
       *     - `data.aweme_list[].statistics.share_count`: Shares
       *     - `data.aweme_list[].statistics.collect_count`: Bookmarks/saves
       *     - `data.aweme_list[].video.play_addr.url_list[0]`: Video playback URL
       *     - `data.aweme_list[].video.cover.url_list[0]`: Thumbnail image URL
       *     - `data.aweme_list[].video.duration`: Video duration in milliseconds
       *     - `data.aweme_list[].author.unique_id`: Author's TikTok username
       *     - `data.aweme_list[].author.nickname`: Author's display name
       *     - `data.aweme_list[].music.title`: Sound title
       *     - `data.aweme_list[].text_extra[].hashtag_id`: IDs of the hashtags in the caption
       *     - `data.cursor`: Pagination cursor. Pass it as `cursor` to get the next page
       *     - `data.has_more`: `1` while the page returned videos. Keep paging until a page comes back empty; empty pages are free
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Not Found - No videos for this hashtag ID */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example No videos found for this hashtag_id. It should be the text_extra[].hashtag_id from a video that uses the hashtag. */
            error: string;
            /** @example hashtag_videos */
            endpoint?: string;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Search_by_Keyword: {
    parameters: {
      query: {
        /** @description Keyword to search for */
        query: string;
        /** @description Time Frame */
        date_posted?:
          | "yesterday"
          | "this-week"
          | "this-month"
          | "last-3-months"
          | "last-6-months"
          | "all-time";
        /** @description Sort by */
        sort_by?: "relevance" | "most-liked" | "date-posted";
        /** @description Note, this doesn't filter the tiktoks only in a specfic region, it puts the proxy there. Use it in case you want to scrape posts only available for some country. Use 2 letter country codes like US, GB, FR, etc */
        region?: string;
        /** @description Cursor to get more videos. Get 'cursor' from previous response. */
        cursor?: number;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.search_item_list[].aweme_info.aweme_id`: Video ID
       *     - `data.search_item_list[].aweme_info.desc`: Caption/description text
       *     - `data.search_item_list[].aweme_info.create_time`: Unix timestamp of when the video was posted
       *     - `data.search_item_list[].aweme_info.statistics.play_count`: Total views
       *     - `data.search_item_list[].aweme_info.statistics.digg_count`: Likes
       *     - `data.search_item_list[].aweme_info.statistics.comment_count`: Comments
       *     - `data.search_item_list[].aweme_info.statistics.share_count`: Shares
       *     - `data.search_item_list[].aweme_info.statistics.collect_count`: Bookmarks/saves
       *     - `data.search_item_list[].aweme_info.video.play_addr.url_list[0]`: Video playback URL
       *     - `data.search_item_list[].aweme_info.video.bit_rate[0].play_addr.url_list[0]`: Highest quality video URL
       *     - `data.search_item_list[].aweme_info.video.cover.url_list[0]`: Thumbnail image URL
       *     - `data.search_item_list[].aweme_info.video.duration`: Video duration in milliseconds
       *     - `data.search_item_list[].aweme_info.author.unique_id`: Author's TikTok username
       *     - `data.search_item_list[].aweme_info.author.nickname`: Author's display name
       *     - `data.search_item_list[].aweme_info.author.sec_uid`: Author's secure user ID
       *     - `data.search_item_list[].aweme_info.music.title`: Sound/music title
       *     - `data.search_item_list[].aweme_info.music.play_url.url_list[0]`: Audio playback URL
       *     - `data.cursor`: Pagination cursor: pass as `cursor` parameter to get the next page
       *     - `data.has_more`: Whether more results are available (`1` = yes)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Search_Music: {
    parameters: {
      query: {
        /** @description Search query text */
        keyword: string;
        /** @description Alpha-2 country code (default: US) */
        region?: string;
        /** @description Filter type: 0 - All, 1 - Title, 2 - Creators */
        filter_by?: "0" | "1" | "2";
        /** @description Sort type: 0 - Relevance, 1 - Most used, 2 - Most recent, 3 - Shortest, 4 - Longest */
        sort_type?: "0" | "1" | "2" | "3" | "4";
        /** @description Pagination offset. If the response has `has_more: 1`, use the `cursor` value from the response as the offset for the next page. */
        offset?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.music[].id_str`: Unique music ID (use this instead of `id` to avoid precision issues)
       *     - `data.music[].title`: Song title
       *     - `data.music[].author`: Artist/creator name
       *     - `data.music[].album`: Album name
       *     - `data.music[].duration`: Clip duration in seconds (the usable TikTok clip)
       *     - `data.music[].play_url.url_list[0]`: Direct audio playback URL
       *     - `data.music[].cover_large.url_list[0]`: High-res cover art (720x720)
       *     - `data.music[].cover_medium.url_list[0]`: Medium cover art (100x100)
       *     - `data.music[].artists[]`: Artist details including `nick_name`, `handle`, `sec_uid`, and `avatar`
       *     - `data.music[].artists[].is_verified`: Whether the artist is verified
       *     - `data.music[].matched_song`: Original full song info including `full_duration` (in ms)
       *     - `data.music[].language`: Detected language of the track
       *     - `data.music[].theme_tags`: Tags like "Party", "Chill", etc.
       *     - `data.music[].has_human_voice`: Whether the track contains vocals
       *     - `data.music[].is_commerce_music`: Whether cleared for commercial use
       *     - `data.music[].is_original_sound`: Whether it's an original TikTok sound vs. licensed music
       *     - `data.music[].video_duration`: Max video duration allowed with this sound
       *     - `data.music[].search_music_name`: Display name shown in search results
       *     - `data.music[].search_music_desc`: Display description shown in search results
       *     - `data.music[].tt_to_dsp_song_infos[]`: Links to streaming platforms (Apple Music, Spotify, etc.)
       *     - `data.has_more`: 1 if more results available, 0 if not
       *     - `data.cursor`: Pass as `offset` parameter to get next page
       *     - `data.total`: Total number of matching results
       *     - `data.music_info_list[]`: Alternative format of results with `card_type` metadata
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Search keyword is required */
            error?: string;
          };
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  tiktok_Top_Search: {
    parameters: {
      query: {
        /** @description Keyword to search for */
        query: string;
        /** @description Time Frame TikTok was posted */
        publish_time?:
          | "yesterday"
          | "this-week"
          | "this-month"
          | "last-3-months"
          | "last-6-months"
          | "all-time";
        /** @description Sort by */
        sort_by?: "relevance" | "most-liked" | "date-posted";
        /** @description Note, this doesn't filter the tiktoks only in a specfic region, it puts the proxy there. Use it in case you want to scrape posts only available for some country. Use 2 letter country codes like US, GB, FR, etc */
        region?: string;
        /** @description Cursor to get more videos. Get 'cursor' from previous response. */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.items[].id`: Video/post ID
       *     - `data.items[].desc`: Caption/description text (includes hashtags)
       *     - `data.items[].content_type`: Type of post: `video` or `photo` (carousel)
       *     - `data.items[].create_time`: ISO 8601 timestamp of when the post was published
       *     - `data.items[].region`: 2-letter country code where the post originated (e.g. `US`)
       *     - `data.items[].url`: Direct TikTok URL to the post
       *     - `data.items[].statistics.play_count`: Total views
       *     - `data.items[].statistics.digg_count`: Likes (TikTok calls likes "diggs")
       *     - `data.items[].statistics.comment_count`: Comments
       *     - `data.items[].statistics.share_count`: Shares
       *     - `data.items[].statistics.collect_count`: Bookmarks/saves
       *     - `data.items[].statistics.download_count`: Downloads
       *     - `data.items[].video.cover.url_list[0]`: Static thumbnail URL
       *     - `data.items[].video.origin_cover.url_list[0]`: Original cover image URL
       *     - `data.items[].video.play_addr.url_list[0]`: Video playback URL
       *     - `data.items[].video.download_addr.url_list[0]`: Video download URL
       *     - `data.items[].video.duration`: Video duration in milliseconds
       *     - `data.items[].video.width` / `height`: Video dimensions
       *     - `data.items[].video.bit_rate[0].play_addr.url_list[0]`: Highest quality video URL (multiple quality options available)
       *     - `data.items[].author.unique_id`: Author's TikTok username
       *     - `data.items[].author.nickname`: Author's display name
       *     - `data.items[].author.uid`: Author's numeric user ID
       *     - `data.items[].author.sec_uid`: Author's secure user ID (use for profile lookups)
       *     - `data.items[].author.follower_count`: Author's follower count
       *     - `data.items[].author.avatar_larger.url_list[0]`: Author's profile picture (high-res)
       *     - `data.items[].is_ad`: Whether the post is a paid advertisement
       *     - `data.items[].is_paid_partnership`: Whether it's a paid brand partnership
       *     - `data.cursor`: Pagination cursor: pass as `cursor` parameter to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Get_popular_songs: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Time period to get popular songs from */
        timePeriod?: "7" | "30" | "130";
        /** @description Get popular or surging songs */
        rankType?: "popular" | "surging";
        /** @description New to top 100 */
        newOnBoard?: boolean;
        /** @description Approved for business use? */
        commercialMusic?: boolean;
        /** @description Country code to get popular songs from */
        countryCode?:
          | "AR"
          | "AU"
          | "AT"
          | "BH"
          | "BD"
          | "BY"
          | "BE"
          | "BR"
          | "BG"
          | "KH"
          | "CA"
          | "CL"
          | "CO"
          | "HR"
          | "CZ"
          | "DK"
          | "EG"
          | "EE"
          | "FI"
          | "FR"
          | "DE"
          | "GR"
          | "HU"
          | "IS"
          | "ID"
          | "IQ"
          | "IE"
          | "IL"
          | "IT"
          | "JP"
          | "JO"
          | "KZ"
          | "KW"
          | "LV"
          | "LB"
          | "LT"
          | "LU"
          | "MO"
          | "MY"
          | "MX"
          | "MA"
          | "MM"
          | "NL"
          | "NZ"
          | "NG"
          | "NO"
          | "OM"
          | "PK"
          | "PE"
          | "PH"
          | "PL"
          | "PT"
          | "QA"
          | "RO"
          | "SA"
          | "SG"
          | "SK"
          | "ZA"
          | "KR"
          | "ES"
          | "SE"
          | "CH"
          | "TW"
          | "TH"
          | "TR"
          | "UA"
          | "AE"
          | "GB"
          | "US"
          | "UZ"
          | "VN";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.sound_list[].title`: Song title
       *     - `data.sound_list[].author`: Artist name
       *     - `data.sound_list[].clip_id`: Unique clip ID
       *     - `data.sound_list[].song_id`: Unique song ID
       *     - `data.sound_list[].cover`: Album/cover art URL (720x720)
       *     - `data.sound_list[].duration`: Clip duration in seconds
       *     - `data.sound_list[].link`: Direct TikTok music page URL
       *     - `data.sound_list[].rank`: Current position on the chart
       *     - `data.sound_list[].rank_diff`: Change in rank since last period (`null` if new)
       *     - `data.sound_list[].country_code`: 2-letter country code (e.g. `US`)
       *     - `data.sound_list[].promoted`: Whether the song is being promoted
       *     - `data.sound_list[].if_cml`: Whether the song is approved for commercial/business use
       *     - `data.sound_list[].trend[]`: Popularity trend data over time: each entry has `time` (Unix timestamp) and `value` (relative popularity 0–1)
       *     - `data.sound_list[].related_items[]`: Sample videos using this sound: each has `item_id` (video ID) and `cover_uri` (thumbnail URL)
       *     - `data.pagination.page`: Current page number
       *     - `data.pagination.size`: Items per page
       *     - `data.pagination.total`: Total number of songs available
       *     - `data.pagination.has_more`: Whether more pages exist
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Get_Song_Details: {
    parameters: {
      query: {
        /** @description This is a little confusing because this isn't songId like you'd think. It is the clipId. I guess because you can clip different portions of a song 🤷‍♂️ */
        clipId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `music_info.id_str`: Unique music/clip ID
       *     - `music_info.title`: Song title
       *     - `music_info.author`: Artist name(s)
       *     - `music_info.album`: Album name
       *     - `music_info.duration`: Clip duration in seconds
       *     - `music_info.user_count`: Number of TikTok videos using this sound
       *     - `music_info.create_time`: When the sound was added (Unix timestamp)
       *     - `music_info.is_original`: Whether it's an original sound
       *     - `music_info.is_commerce_music`: Whether it's cleared for commercial use
       *     - `music_info.artists[].nick_name`: Artist display name
       *     - `music_info.artists[].sec_uid`: Artist secure user ID
       *     - `music_info.artists[].is_verified`: Whether the artist is verified
       *     - `music_info.cover_large.url_list[0]`: Large album cover image URL
       *     - `music_info.play_url.url_list[0]`: Audio stream URL
       *     - `music_info.multi_bit_rate_play_info[].gear_name`: Quality tier (`medium`, `higher`, `highest`)
       *     - `music_info.multi_bit_rate_play_info[].bit_rate`: Audio bitrate
       *     - `music_info.multi_bit_rate_play_info[].play_addr.url_list[0]`: Audio URL for that quality
       *     - `music_info.matched_song.title`: Full song title from music catalog
       *     - `music_info.matched_song.full_duration`: Full song duration in ms
       *     - `music_info.share_info.share_url`: Shareable TikTok music link
       *     - `music_info.theme_tags[]`: Genre/mood tags (e.g., `Love`)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_TikToks_using_Song: {
    parameters: {
      query?: {
        /** @description This is clipId. Can be found on a url like so: https://www.tiktok.com/music/That%27s-Who-I-Praise-7370375686554782506, where 7370375686554782506 is the clipId */
        clipId?: string;
        /** @description The cursor to get the next page of results. */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `aweme_list[].aweme_id`: Video ID
       *     - `aweme_list[].desc`: Caption/description text
       *     - `aweme_list[].create_time`: Unix timestamp of when the video was posted
       *     - `aweme_list[].content_type`: Content format (e.g., `video`)
       *     - `aweme_list[].is_pinned_by_artist`: Whether the artist pinned this video
       *     - `aweme_list[].statistics.play_count`: Total views
       *     - `aweme_list[].statistics.digg_count`: Likes
       *     - `aweme_list[].statistics.comment_count`: Comments
       *     - `aweme_list[].statistics.share_count`: Shares
       *     - `aweme_list[].statistics.collect_count`: Bookmarks/saves
       *     - `aweme_list[].statistics.download_count`: Downloads
       *     - `aweme_list[].video.play_addr.url_list[0]`: Video playback URL
       *     - `aweme_list[].video.cover.url_list[0]`: Thumbnail image URL
       *     - `aweme_list[].video.duration`: Video duration in milliseconds
       *     - `aweme_list[].video.height` / `width`: Video dimensions
       *     - `aweme_list[].author.unique_id`: Author's TikTok username
       *     - `aweme_list[].author.nickname`: Author's display name
       *     - `aweme_list[].author.sec_uid`: Author's secure user ID
       *     - `aweme_list[].author.region`: Author's country code
       *     - `aweme_list[].music.title`: Sound/music title used in the video
       *     - `aweme_list[].music.author`: Sound/music artist
       *     - `aweme_list[].music.duration`: Audio clip duration in seconds
       *     - `cursor`: Pass as `cursor` parameter to get the next page
       *     - `has_more`: `1` if more results are available, `0` if not
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Trending_Feed: {
    parameters: {
      query: {
        /** @description Where you want the proxy to be. This doesn't mean that you will only see TikToks from this region, you will just see the content that isn't banned in that region. */
        region: string;
        /** @description Set to true to get a trimmed response. */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.aweme_list[].aweme_id`: Video ID
       *     - `data.aweme_list[].desc`: Caption/description text
       *     - `data.aweme_list[].create_time`: Unix timestamp of when the video was posted
       *     - `data.aweme_list[].is_top`: Whether the video is pinned
       *     - `data.aweme_list[].statistics.play_count`: Total views
       *     - `data.aweme_list[].statistics.digg_count`: Likes (TikTok calls likes "diggs")
       *     - `data.aweme_list[].statistics.comment_count`: Comments
       *     - `data.aweme_list[].statistics.share_count`: Shares
       *     - `data.aweme_list[].statistics.collect_count`: Bookmarks/saves
       *     - `data.aweme_list[].statistics.download_count`: Downloads
       *     - `data.aweme_list[].video.play_addr.url_list[0]`: Video playback URL
       *     - `data.aweme_list[].video.cover.url_list[0]`: Thumbnail image URL
       *     - `data.aweme_list[].video.duration`: Video duration in milliseconds
       *     - `data.aweme_list[].author.unique_id`: Author's TikTok username
       *     - `data.aweme_list[].author.nickname`: Author's display name
       *     - `data.aweme_list[].author.sec_uid`: Author's secure user ID (use for profile lookups)
       *     - `data.aweme_list[].author.avatar_medium.url_list[0]`: Author's profile picture
       *     - `data.aweme_list[].music.title`: Sound/music title
       *     - `data.aweme_list[].music.author`: Sound/music artist
       *     - `data.aweme_list[].music.play_url.url_list[0]`: Direct audio playback URL
       *     - `data.aweme_list[].music.duration`: Audio clip duration in seconds
       *     - `data.aweme_list[].music.is_commerce_music`: Whether the sound is approved for commercial use
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  tiktok_Popular_Creators: {
    parameters: {
      query?: {
        /** @description Page number */
        page?: number;
        /** @description Sort creators by engagement, follower count, or average views */
        sortBy?: "engagement" | "follower" | "avg_views";
        /** @description Filter by follower count range */
        followerCount?: "10K-100K" | "100K-1M" | "1M-10M" | "10M+";
        /** @description Country code of the creator */
        creatorCountry?:
          | "AU"
          | "BR"
          | "CA"
          | "EG"
          | "FR"
          | "DE"
          | "ID"
          | "IL"
          | "IT"
          | "JP"
          | "MY"
          | "PH"
          | "RU"
          | "SA"
          | "SG"
          | "KR"
          | "ES"
          | "TW"
          | "TH"
          | "TR"
          | "AE"
          | "GB"
          | "US"
          | "VN";
        /** @description Country code of the audience/follower */
        audienceCountry?:
          | "AU"
          | "BR"
          | "CA"
          | "EG"
          | "FR"
          | "DE"
          | "ID"
          | "IL"
          | "IT"
          | "JP"
          | "MY"
          | "PH"
          | "RU"
          | "SA"
          | "SG"
          | "KR"
          | "ES"
          | "TW"
          | "TH"
          | "TR"
          | "AE"
          | "GB"
          | "US"
          | "VN";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `creators[].tcm_id`: TikTok Creator Marketplace ID
       *     - `creators[].user_id`: TikTok user ID
       *     - `creators[].nick_name`: Creator display name
       *     - `creators[].avatar_url`: Profile picture URL
       *     - `creators[].country_code`: Creator's country code (e.g., `US`)
       *     - `creators[].follower_cnt`: Total follower count
       *     - `creators[].liked_cnt`: Total likes received across all videos
       *     - `creators[].tt_link`: Direct TikTok profile URL
       *     - `creators[].tcm_link`: TikTok Creator Marketplace profile link
       *     - `creators[].items[].item_id`: Video ID
       *     - `creators[].items[].cover_url`: Video thumbnail URL
       *     - `creators[].items[].tt_link`: Direct TikTok video URL
       *     - `creators[].items[].vv`: Video view count
       *     - `creators[].items[].liked_cnt`: Video like count
       *     - `creators[].items[].create_time`: Video publish timestamp (Unix)
       *     - `pagination.page`: Current page number
       *     - `pagination.size`: Results per page
       *     - `pagination.total`: Total number of pages
       *     - `pagination.has_more`: Whether more pages are available
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
      /** @description Server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch popular TikTok creators */
            error?: string;
          };
        };
      };
    };
  };
  tiktok_Popular_Videos: {
    parameters: {
      query?: {
        /** @description Time period in days (7 or 30) */
        period?: 7 | 30;
        /** @description Page number */
        page?: number;
        /** @description Sort videos by likes, views (hot), comments, or reposts */
        orderBy?: "like" | "hot" | "comment" | "repost";
        /** @description Country code to get popular videos from */
        countryCode?:
          | "AU"
          | "BR"
          | "CA"
          | "EG"
          | "FR"
          | "DE"
          | "ID"
          | "IL"
          | "IT"
          | "JP"
          | "MY"
          | "PH"
          | "RU"
          | "SA"
          | "SG"
          | "KR"
          | "ES"
          | "TW"
          | "TH"
          | "TR"
          | "AE"
          | "GB"
          | "US"
          | "VN";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.videos[].id`: Video ID
       *     - `data.videos[].item_id`: Same as `id`: the video's unique identifier
       *     - `data.videos[].title`: Video caption/description
       *     - `data.videos[].cover`: Thumbnail image URL
       *     - `data.videos[].duration`: Video duration in seconds
       *     - `data.videos[].item_url`: Direct TikTok URL to the video
       *     - `data.videos[].country_code`: 2-letter country code (e.g. `US`)
       *     - `data.videos[].region`: Full country name (e.g. `United States`)
       *     - `data.pagination.page`: Current page number
       *     - `data.pagination.limit`: Items per page
       *     - `data.pagination.total_count`: Total number of videos available
       *     - `data.pagination.has_more`: Whether more pages exist
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
      /** @description Server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch popular TikTok videos */
            error?: string;
          };
        };
      };
    };
  };
  tiktok_Popular_Hashtags: {
    parameters: {
      query?: {
        /** @description Time period in days (7, 30, or 120) */
        period?: 7 | 30 | 120;
        /** @description Page number */
        page?: number;
        /** @description Country code to get popular hashtags from */
        countryCode?:
          | "AU"
          | "BR"
          | "CA"
          | "EG"
          | "FR"
          | "DE"
          | "ID"
          | "IL"
          | "IT"
          | "JP"
          | "MY"
          | "PH"
          | "RU"
          | "SA"
          | "SG"
          | "KR"
          | "ES"
          | "TW"
          | "TH"
          | "TR"
          | "AE"
          | "GB"
          | "US"
          | "VN";
        /** @description Show only newly trending hashtags */
        newOnBoard?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.list[].hashtag_id`: Unique hashtag ID
       *     - `data.list[].hashtag_name`: The hashtag text (without `#`)
       *     - `data.list[].publish_cnt`: Total number of videos published with this hashtag
       *     - `data.list[].video_views`: Total video views across all posts using this hashtag
       *     - `data.list[].rank`: Current position on the chart
       *     - `data.list[].rank_diff`: Change in rank since last period (`0` = no change)
       *     - `data.list[].rank_diff_type`: Type of rank change (e.g. `2` = stable)
       *     - `data.list[].is_promoted`: Whether the hashtag is being promoted
       *     - `data.list[].country_info.id`: 2-letter country code (e.g. `US`)
       *     - `data.list[].country_info.value`: Full country name (e.g. `United States`)
       *     - `data.list[].industry_info.id`: Industry category ID
       *     - `data.list[].industry_info.value`: Industry name (e.g. `Apparel & Accessories`)
       *     - `data.list[].trend[]`: Popularity trend over time: each entry has `time` (Unix timestamp) and `value` (relative popularity 0–1)
       *     - `data.pagination.page`: Current page number
       *     - `data.pagination.size`: Items per page
       *     - `data.pagination.total`: Total number of hashtags available
       *     - `data.pagination.has_more`: Whether more pages exist
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
      /** @description Server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch popular TikTok hashtags */
            error?: string;
          };
        };
      };
    };
  };
  "tiktok-shop_Shop_Products": {
    parameters: {
      query: {
        /** @description The TikTok Shop store URL. */
        url: string;
        /** @description Cursor parameter from the previous response to retrieve the next page of products. Omit for the first page. */
        cursor?: string;
        /** @description Region to get shop products from. Defaults to US if not provided. */
        region?:
          | "US"
          | "GB"
          | "DE"
          | "FR"
          | "IT"
          | "ID"
          | "MY"
          | "MX"
          | "PH"
          | "SG"
          | "ES"
          | "TH"
          | "VN"
          | "BR"
          | "JP"
          | "IE";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example true */
            success: boolean;
            shopInfo: {
              /** @example 7495794203056835079 */
              seller_id: string;
              /** @example 3767605 */
              sold_count: number;
              /** @example 36 */
              on_sell_product_count: number;
              /** @example 284185 */
              review_count: number;
              /** @example 7495794203056835079 */
              global_seller_id: string;
              /** @example 3767605 */
              global_sold_count: string;
              /** @example 237879 */
              followers_count: string;
              /** @example 2413 */
              video_count: string;
              /** @example true */
              enable_follow: boolean;
              /** @example Goli Nutrition */
              shop_name: string;
              shop_logo: {
                /** @example 300 */
                height: number;
                /** @example 300 */
                width: number;
                /** @example tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506 */
                uri: string;
                url_list: string[];
              };
              /** @example 4.6 */
              shop_rating: string;
              /** @example https://www.tiktok.com/shop/store/goli-nutrition/7495794203056835079 */
              shop_link: string;
              /** @example 3.7M */
              format_sold_count: string;
              /** @example US */
              region: string;
              /** @example 36 */
              display_on_sell_product_count: string;
              /** @example 3.7M */
              format_global_sold_count: string;
              /**
               * @example Health Simple✨
               *     Vegan. Gluten-Free. Non-GMO.
               */
              shop_slogan: string;
              /** @example 237.8K+ */
              format_followers_count: string;
              /** @example 2413 */
              format_video_count: string;
              store_sub_score: {
                /** @example 0.9967 */
                score: number;
                /** @example 1 */
                type: number;
                /** @example 100 */
                score_percentage: string;
                /** @example 1 */
                high_light_tag: number;
                /** @example 1 */
                platform_rate_type: number;
              }[];
              /** @example 0 */
              worst_rating: string;
              /** @example 5 */
              best_rating: string;
              /** @example Goli® Nutrition */
              creator_name: string;
              /** @example Shop Goli Nutrition on TikTok Shop! 3.7M sold, 237.8K+ followers. 89+% positive feedback. 50+% Ships in 48h, 100% replies in 24h. Join the trend! */
              desc: string;
            };
            products: {
              /** @example 1729527313880355335 */
              product_id: string;
              /** @example Goli Ashwagandha & Vitamin D Gummy - Mixed Berry, KSM-66, Vegan, Plant Based, Non-GMO, Gluten-Free & Gelatin Free. America's #1 Ashwagandha Brand */
              title: string;
              image: {
                /** @example 1500 */
                height: number;
                /** @example 1500 */
                width: number;
                /** @example tos-useast5-i-omjb5zjo8w-tx/30fc1338a2bf474a9d252a790e4c119f */
                uri: string;
                url_list: string[];
              };
              product_price_info: {
                /** @example 1729527298861535751 */
                sku_id: string;
                /** @example 1 */
                symbol_position: number;
                /** @example false */
                show_currency_space: boolean;
                /** @example 1 */
                currency_show_mode: number;
                /** @example USD */
                currency_name: string;
                /** @example $ */
                currency_symbol: string;
                /** @example 14.96 */
                sale_price_decimal: string;
                /** @example 24.99 */
                origin_price_decimal: string;
                /** @example 14.96 */
                sale_price_format: string;
                /** @example 24.99 */
                origin_price_format: string;
                /** @example 40% */
                discount_format: string;
                /** @example 0.4 */
                discount_decimal: string;
                /** @example Saving $10.03 */
                reduce_price_format: string;
                /** @example 14.96 */
                single_product_price_format: string;
                /** @example 14.96 */
                single_product_price_decimal: string;
                /** @example 14 */
                sale_price_integer_part_format: string;
                /** @example 96 */
                sale_price_decimal_part_format: string;
                /** @example . */
                decimal_point_symbol: string;
                promotion_deduction_details: {
                  /** @example 10.03 */
                  seller_subtotal_deduction: string;
                  /** @example 10.03 */
                  seller_subtotal_deduction_decimal: string;
                };
              };
              rate_info: {
                /** @example 4.5 */
                score: number;
                /** @example 91316 */
                review_count: string;
              };
              sold_info: {
                /** @example 1235089 */
                sold_count: number;
              };
              seller_info: {
                /** @example 7495794203056835079 */
                seller_id: string;
                /** @example Goli Nutrition */
                shop_name: string;
                shop_logo: {
                  /** @example 300 */
                  height: number;
                  /** @example 300 */
                  width: number;
                  /** @example tos-useast5-i-omjb5zjo8w-tx/e7478d3e93d4487a9e772fa74e10f506 */
                  uri: string;
                  url_list: string[];
                };
              };
              seo_url: {
                /** @example 1754035613102 */
                updated_at: string;
                /** @example https://www.tiktok.com/shop/pdp/ashwagandha-gummies-by-goli-ksm-66-mixed-berry-vegan-non-gmo/1729527313880355335 */
                canonical_url: string;
                /** @example ashwagandha-gummies-by-goli-ksm-66-mixed-berry-vegan-non-gmo */
                slug: string;
                /** @example 2 */
                type: number;
                /** @example 2 */
                version: number;
              };
            }[];
          };
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  "tiktok-shop_Product_Details": {
    parameters: {
      query: {
        /** @description The URL of the product to get details for. */
        url: string;
        /** @description Whether to get related videos for the product. These are affiliate videos promoting the product. *This will take a little longer to process.* */
        get_related_videos?: string;
        /** @description Region the proxy will be set to so you can access products from that country. Use 2 letter country codes like US, GB, FR, etc */
        region?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `product_id`: Unique product identifier
       *     - `status`: Product availability status
       *     - `seller.seller_id`: Unique seller/shop identifier
       *     - `seller.name`: Shop/seller display name
       *     - `seller.avatar`: Seller profile image URLs
       *     - `seller.product_count`: Total products listed by seller
       *     - `seller.rating`: Overall seller star rating
       *     - `seller.seller_location`: Seller's country/region
       *     - `seller.seller_detail_infos[]`: Detailed seller metrics (items count, total sales, response rate, delivery rate, review count, followers count) with both formatted display text and raw numeric values
       *     - `seller.shop_performance.shop_performance_value`: Shop performance percentile score
       *     - `seller.shop_performance.detailed_metrics[]`: Breakdown of shop performance metrics (delivery speed, customer service, etc.)
       *     - `seller.seller_user_info`: Seller's linked TikTok account info (uid, nickname, follower_count, aweme_count, following_count)
       *     - `product_base.title`: Full product listing title
       *     - `product_base.images[]`: Array of product images with CDN URLs and thumbnail variants
       *     - `product_base.specifications`: Product attributes (brand, region of origin, manufacturer, ingredients, etc.)
       *     - `product_base.sold_count`: Total units sold (raw number)
       *     - `product_base.price.original_price`: MSRP/list price (formatted string)
       *     - `product_base.price.real_price`: Current sale price (formatted string)
       *     - `product_base.price.discount`: Discount percentage
       *     - `product_base.price.min_sku_price`: Lowest SKU price (decimal string)
       *     - `product_base.price.currency`: Price currency code (e.g., USD)
       *     - `product_base.category_name`: Product category
       *     - `product_base.category_id`: Product category identifier
       *     - `product_base.combined_sales_volume`: Formatted sales volume text (e.g., "830.4K sold")
       *     - `product_base.voucher_reminder`: Active coupon/voucher info with deduction text
       *     - `product_base.desc_detailv3`: Rich product description with text blocks and images
       *     - `sale_props[]`: Sale property options (e.g., size, color, specification) with available values
       *     - `skus[]`: Individual SKU variants with sku_id, sale properties, stock quantity, purchase_limit, pricing (real_price, original_price, discount), and availability status
       *     - `logistic`: Shipping details: delivery option, estimated lead time, shipping fee, free_shipping flag, delivery min/max days, ship_from location
       *     - `product_detail_review.product_rating`: Average product star rating
       *     - `product_detail_review.review_count`: Total number of product reviews
       *     - `product_detail_review.review_items[]`: Sample reviews with review_id, rating, display_text, images, media, reviewer info (name, avatar), sku_specification, review_timestamp, and review_source
       *     - `shop_review_entry.review_count`: Total shop-wide review count
       *     - `shop_review_entry.review_filters[]`: Review filter options with counts (by star rating, media-included, etc.)
       *     - `share_info`: Product sharing deep link and cover image
       *     - `shipping.logistics[]`: All available shipping methods with fees, delivery windows, and tracking metadata
       *     - `button_area`: Purchase button configurations for various states (default, sold out, gift, etc.)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  "tiktok-shop_Shop_Search": {
    parameters: {
      query: {
        /** @description Term you want to search for */
        query: string;
        /** @description Page number to retrieve */
        page?: number;
        /** @description Region to search shop products in. Available options: US, GB, DE, FR, IT, ID, MY, MX, PH, SG, ES, TH, VN, BR, JP, IE */
        region?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `query`: The search term used
       *     - `total_products`: Total number of products returned
       *     - `products[]`: Array of matching products:
       *       - `product_id`: Unique product identifier
       *       - `title`: Product listing title
       *       - `image`: Product thumbnail with CDN URLs
       *       - `product_price_info.currency_name`: Price currency (e.g., USD)
       *       - `product_price_info.currency_symbol`: Currency symbol (e.g., $)
       *       - `product_price_info.sale_price_decimal`: Current sale price
       *       - `product_price_info.sale_price_format`: Formatted sale price string
       *       - `rate_info`: Product rating info (if available)
       *       - `sold_info.sold_count`: Total units sold
       *       - `seller_info.seller_id`: Seller/shop unique identifier
       *       - `seller_info.shop_name`: Shop display name
       *       - `seller_info.shop_logo`: Shop logo image (if available)
       *       - `seo_url.canonical_url`: Product page canonical URL
       *       - `seo_url.slug`: URL-friendly product slug
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  "tiktok-shop_Product_Reviews": {
    parameters: {
      query?: {
        /** @description The URL of the product (required if product_id is not provided) */
        url?: string;
        /** @description The ID of the product (required if url is not provided) */
        product_id?: string;
        /** @description The page number of the reviews */
        page?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `has_more`: Whether additional review pages are available
       *     - `total_reviews`: Total number of reviews for the product
       *     - `product_reviews[]`: Array of individual reviews:
       *       - `review_id`: Unique review identifier
       *       - `product_id`: Associated product identifier
       *       - `sku_id`: SKU variant that was reviewed
       *       - `reviewer_id`: Reviewer's user identifier
       *       - `review_rating`: Star rating (1-5)
       *       - `review_time`: Review timestamp (milliseconds)
       *       - `is_verified_purchase`: Whether the reviewer purchased on TikTok Shop
       *       - `is_incentivized_review`: Whether the review was incentivized
       *       - `product_name`: Full product name at time of review
       *       - `reviewer_name`: Display name of the reviewer
       *       - `reviewer_avatar_url`: Reviewer's profile image URL
       *       - `review_text`: Full review text content
       *       - `display_image_url`: Primary review image thumbnail
       *       - `review_images[]`: Array of all review image URLs
       *       - `sku_specification`: SKU variant name reviewed (e.g., "Default")
       *       - `review_country`: Country code of the reviewer
       *     - `review_ratings`: Aggregated rating summary:
       *       - `review_count`: Total review count
       *       - `overall_score`: Average star rating
       *       - `rating_result`: Breakdown by star level (1-5) with counts
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Either product URL or product_id is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Profile: {
    parameters: {
      query: {
        /** @description Instagram handle */
        handle: string;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.data.user.username`: Instagram handle
       *     - `data.data.user.full_name`: Display name
       *     - `data.data.user.id`: Numeric Instagram user ID
       *     - `data.data.user.biography`: Bio text
       *     - `data.data.user.bio_links[].url`: Bio link URLs
       *     - `data.data.user.bio_links[].title`: Bio link titles
       *     - `data.data.user.external_url`: Primary link in bio
       *     - `data.data.user.edge_followed_by.count`: Followers count
       *     - `data.data.user.edge_follow.count`: Following count
       *     - `data.data.user.profile_pic_url`: Profile picture URL (low-res)
       *     - `data.data.user.profile_pic_url_hd`: Profile picture URL (high-res)
       *     - `data.data.user.is_verified`: Whether the account is verified
       *     - `data.data.user.is_private`: Whether the account is private
       *     - `data.data.user.is_business_account`: Whether it's a business account
       *     - `data.data.user.is_professional_account`: Whether it's a professional/creator account
       *     - `data.data.user.business_category_name`: Business category (e.g. `Personal Goods & General Merchandise Stores`)
       *     - `data.data.user.business_email`: Public business email
       *     - `data.data.user.business_phone_number`: Public business phone
       *     - `data.data.user.highlight_reel_count`: Number of story highlights
       *     - `data.data.user.has_clips`: Whether the account has Reels
       *     - `data.data.user.edge_owner_to_timeline_media.count`: Total post count
       *     - `data.data.user.edge_owner_to_timeline_media.page_info.end_cursor`: Pagination cursor for posts
       *     - `data.data.user.edge_owner_to_timeline_media.edges[].node.shortcode`: Post shortcode (use to build URL: `instagram.com/p/{shortcode}`)
       *     - `data.data.user.edge_owner_to_timeline_media.edges[].node.display_url`: Post thumbnail image
       *     - `data.data.user.edge_owner_to_timeline_media.edges[].node.is_video`: Whether the post is a video/reel
       *     - `data.data.user.edge_owner_to_timeline_media.edges[].node.edge_liked_by.count`: Like count per post
       *     - `data.data.user.edge_owner_to_timeline_media.edges[].node.edge_media_to_comment.count`: Comment count per post
       *     - `data.data.user.edge_owner_to_timeline_media.edges[].node.taken_at_timestamp`: Post timestamp (Unix)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_BasicProfile: {
    parameters: {
      query: {
        /** @description Instagram numeric user ID */
        userId: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.pk` / `data.id`: Numeric Instagram user ID
       *     - `data.username`: Instagram handle
       *     - `data.full_name`: Display name
       *     - `data.biography`: Bio text
       *     - `data.bio_links[].url`: Bio link URLs
       *     - `data.external_url`: Primary link in bio
       *     - `data.follower_count`: Followers count
       *     - `data.following_count`: Following count
       *     - `data.media_count`: Total post count
       *     - `data.is_verified`: Whether the account is verified
       *     - `data.is_private`: Whether the account is private
       *     - `data.is_business`: Whether it's a business account
       *     - `data.is_professional_account`: Whether it's a professional/creator account
       *     - `data.account_type`: Account type
       *     - `data.category`: Business/creator category (when available)
       *     - `data.city_name`: Business city (when available)
       *     - `data.profile_pic_url`: Profile picture URL (low-res)
       *     - `data.hd_profile_pic_url_info.url`: Profile picture URL (high-res)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Posts: {
    parameters: {
      query: {
        /** @description Instagram handle */
        handle: string;
        /** @description Cursor to get next page of results. */
        next_max_id?: string;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.num_results`: Number of posts returned in this page
       *     - `data.more_available`: Whether more posts exist: use `next_max_id` to paginate
       *     - `data.next_max_id`: Cursor for the next page of posts
       *     - `data.user.username`: The queried profile's username
       *     - `data.user.is_verified`: Whether the account is verified
       *     - `data.items[0].pk`: Unique post ID
       *     - `data.items[0].code`: Post shortcode (used in the URL as `instagram.com/p/{code}`)
       *     - `data.items[0].play_count`: View/play count for reels and videos
       *     - `data.items[0].video_duration`: Duration of the video in seconds
       *     - `data.items[0].has_audio`: Whether the post has audio
       *     - `data.items[0].image_versions2.candidates[0].url`: Thumbnail image URL
       *     - `data.items[0].video_versions[0].url`: Video download URL (only present for video posts)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Post_Reel_Info: {
    parameters: {
      query: {
        /** @description Instagram post or reel URL */
        url: string;
        /** @description Set to true to get a trimmed response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.xdt_shortcode_media.__typename`: Media type: `XDTGraphVideo` for reels/videos, `XDTGraphImage` for photos
       *     - `data.xdt_shortcode_media.id`: Unique post ID
       *     - `data.xdt_shortcode_media.shortcode`: Post shortcode used in the URL
       *     - `data.xdt_shortcode_media.display_url`: Main display/thumbnail image URL
       *     - `data.xdt_shortcode_media.thumbnail_src`: Thumbnail image URL (cropped square version)
       *     - `data.xdt_shortcode_media.dimensions`: Width and height of the media (`height`, `width`)
       *     - `data.xdt_shortcode_media.is_video`: Whether the post is a video/reel
       *     - `data.xdt_shortcode_media.product_type`: Content type: `clips` for reels, `feed` for regular posts
       *     - `data.xdt_shortcode_media.video_url`: Video download URL (for video posts and reels)
       *     - `data.xdt_shortcode_media.video_duration`: Video length in seconds
       *     - `data.xdt_shortcode_media.video_play_count`: View/play count for reels and videos.
       *     - `data.xdt_shortcode_media.has_audio`: Whether the video has audio
       *     - `data.xdt_shortcode_media.dash_info.is_dash_eligible`: Whether DASH adaptive streaming is available
       *     - `data.xdt_shortcode_media.edge_media_preview_like.count`: Total like count
       *     - `data.xdt_shortcode_media.edge_media_to_parent_comment.count`: Total comment count
       *     - `data.xdt_shortcode_media.edge_media_to_caption.edges[0].node.text`: Post caption text
       *     - `data.xdt_shortcode_media.taken_at_timestamp`: Post publish timestamp (Unix)
       *     - `data.xdt_shortcode_media.owner.id`: Owner's numeric user ID
       *     - `data.xdt_shortcode_media.owner.username`: Owner's username/handle
       *     - `data.xdt_shortcode_media.owner.full_name`: Owner's display name
       *     - `data.xdt_shortcode_media.owner.is_verified`: Whether the owner is verified
       *     - `data.xdt_shortcode_media.owner.is_private`: Whether the owner's account is private
       *     - `data.xdt_shortcode_media.owner.profile_pic_url`: Owner's profile picture URL
       *     - `data.xdt_shortcode_media.owner.edge_followed_by.count`: Owner's follower count
       *     - `data.xdt_shortcode_media.owner.edge_owner_to_timeline_media.count`: Owner's total post count
       *     - `data.xdt_shortcode_media.clips_music_attribution_info.artist_name`: Audio artist name
       *     - `data.xdt_shortcode_media.clips_music_attribution_info.song_name`: Audio/song name
       *     - `data.xdt_shortcode_media.clips_music_attribution_info.uses_original_audio`: Whether the reel uses original audio
       *     - `data.xdt_shortcode_media.clips_music_attribution_info.audio_id`: Audio track ID
       *     - `data.xdt_shortcode_media.coauthor_producers`: Array of collaborators/co-authors on the post (each has `id`, `username`, `is_verified`)
       *     - `data.xdt_shortcode_media.edge_media_to_tagged_user.edges`: Tagged users in the post
       *     - `data.xdt_shortcode_media.is_paid_partnership`: Whether the post is a paid/sponsored partnership
       *     - `data.xdt_shortcode_media.is_ad`: Whether the post is an ad
       *     - `data.xdt_shortcode_media.comments_disabled`: Whether comments are turned off
       *     - `data.xdt_shortcode_media.like_and_view_counts_disabled`: Whether like/view counts are hidden
       *     - `data.xdt_shortcode_media.location`: Location tag (null if none)
       *     - `data.xdt_shortcode_media.accessibility_caption`: Alt text for the media (image description)
       *     - `data.xdt_shortcode_media.pinned_for_users`: Users who pinned this post to their profile
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Forbidden - The post is age-restricted and can't be scraped (we only access public data). No credits are charged for this request. */
      403: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example The post is age-restricted and cannot be scraped. You will not be charged any credits for this request. */
            error: string;
            /** @example post_info */
            endpoint?: string;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Transcript: {
    parameters: {
      query: {
        /** @description Instagram post or reel URL */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.transcripts[0].id`: Post ID the transcript belongs to
       *     - `data.transcripts[0].shortcode`: Post shortcode
       *     - `data.transcripts[0].text`: AI-generated transcript of the spoken audio in the video
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Search: {
    parameters: {
      query: {
        /** @description The username, hashtag, place, or keyword to search for */
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.users`: Matched accounts, keyed by index (0, 1, 2, ...)
       *     - `data.users[0].username`: Account username
       *     - `data.users[0].full_name`: Account display name
       *     - `data.users[0].id`: Numeric user ID
       *     - `data.users[0].is_verified`: Whether the account is verified
       *     - `data.users[0].profile_pic_url`: Profile picture URL
       *     - `data.hashtags`: Matched hashtags, keyed by index
       *     - `data.hashtags[0].name`: Hashtag name (without #)
       *     - `data.hashtags[0].media_count`: Number of posts using the hashtag
       *     - `data.places`: Matched places, keyed by index (name, title, `facebook_places_id`)
       *     - `data.keywords`: Suggested keyword entities (when present)
       *     - `data.rank_token`: Token identifying this search ranking
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example query is required for Instagram search */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            required?: number;
            available?: number;
          };
        };
      };
    };
  };
  instagram_Search_Popular: {
    parameters: {
      query: {
        /** @description The Popular topic to search for */
        query: string;
        /** @description The opaque cursor returned by the previous response. Use it with the same query to fetch the next page of posts. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.title`: The topic title
       *     - `data.total_media_count`: Total number of posts for the topic
       *     - `data.description.plain_text`: Generated description of the topic
       *     - `data.description.source_uris`: Sources cited in the description, keyed by index
       *     - `data.suggested_terms`: Related/suggested search terms, keyed by index
       *     - `data.posts`: Curated posts, keyed by index (0, 1, 2, ...)
       *     - `data.posts[0].url`: Post/reel URL
       *     - `data.posts[0].type`: Media type (e.g. reel)
       *     - `data.posts[0].caption`: Post caption
       *     - `data.posts[0].play_count`: Play count (for video/reel posts)
       *     - `data.posts[0].owner.username`: Author's username
       *     - `data.posts[0].owner.is_verified`: Whether the author is verified
       *     - `data.cursor`: Opaque pagination cursor: pass with the same `query` to fetch the next page
       *     - `data.has_more`: Whether more posts are available
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example query is required for Instagram popular search */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            required?: number;
            available?: number;
          };
        };
      };
    };
  };
  instagram_Comment_Replies: {
    parameters: {
      query: {
        /** @description The Instagram post or reel URL */
        url: string;
        /** @description The parent comment ID from the Comments endpoint */
        comment_id: string;
        /** @description Cursor for pagination. Get 'cursor' from the previous response to fetch more replies. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.comments`: Replies keyed by index (0, 1, 2, ...)
       *     - `data.comments[0].id`: Unique reply ID
       *     - `data.comments[0].text`: Reply text content
       *     - `data.comments[0].created_at`: ISO timestamp of when the reply was posted
       *     - `data.comments[0].parent_comment_id`: ID of the parent comment these replies belong to
       *     - `data.comments[0].child_comment_count`: Number of nested replies under this reply
       *     - `data.comments[0].user.username`: Replier's Instagram username
       *     - `data.comments[0].user.profile_pic_url`: Replier's profile picture URL
       *     - `data.comments[0].user.is_verified`: Whether the replier is a verified account
       *     - `data.cursor`: Pagination cursor: pass to the `cursor` parameter to fetch the next page (null when there are no more)
       *     - `data.has_more`: Whether more replies are available
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Parent comment_id is required */
            error: string;
            endpoint?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            required?: number;
            available?: number;
          };
        };
      };
    };
  };
  instagram_Comments: {
    parameters: {
      query: {
        /** @description Instagram post or reel URL */
        url: string;
        /** @description Cursor for pagination. Get 'cursor' from previous response to fetch more comments. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.comments[0].id`: Unique comment ID
       *     - `data.comments[0].text`: Comment text content
       *     - `data.comments[0].created_at`: ISO timestamp of when the comment was posted
       *     - `data.comments[0].user.username`: Commenter's Instagram username
       *     - `data.comments[0].user.profile_pic_url`: Commenter's profile picture URL
       *     - `data.comments[0].user.is_verified`: Whether the commenter is a verified account
       *     - `data.cursor`: Pagination cursor: pass to the `cursor` parameter to fetch the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_SearchHashtag: {
    parameters: {
      query: {
        /** @description The hashtag to search for. The # is optional. */
        hashtag: string;
        /** @description Only return posts Google indexed within this recent window. */
        date_posted?:
          "last-hour" | "last-day" | "last-week" | "last-month" | "last-year";
        /** @description Use `all` to search public posts and reels, or `reels` to return only reels. Defaults to `all`. */
        media_type?: "all" | "reels";
        /** @description Cursor from the previous response. Here it is the next Google results page number. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.hashtag`: The hashtag that was searched
       *     - `data.media_type`: Media-type filter applied (`all` or `reels`)
       *     - `data.posts`: Matched posts/reels, keyed by index (`"0"`, `"1"`, ...)
       *     - `data.posts[0].shortcode`: The post/reel shortcode
       *     - `data.posts[0].url`: Direct Instagram URL to the post or reel
       *     - `data.posts[0].caption`: Caption text (includes hashtags)
       *     - `data.posts[0].is_video`: Whether the item is a video/reel
       *     - `data.posts[0].product_type`: Content type (e.g. `clips` for reels)
       *     - `data.posts[0].display_url`: Full-size image/thumbnail URL
       *     - `data.posts[0].video_url`: Direct video file URL (videos only)
       *     - `data.posts[0].video_view_count`: View count (videos only)
       *     - `data.posts[0].video_play_count`: Play count (videos only)
       *     - `data.posts[0].like_count`: Number of likes
       *     - `data.posts[0].comment_count`: Number of comments
       *     - `data.posts[0].taken_at`: ISO timestamp of when it was posted
       *     - `data.posts[0].owner.username`: Author's Instagram username
       *     - `data.posts[0].owner.follower_count`: Author's follower count
       *     - `data.posts[0].owner.is_verified`: Whether the author is verified
       *     - `data.posts[0].clips_music_attribution_info.song_name`: Audio/song name (reels)
       *     - `data.posts[0].comments[0].text`: Text of an attached top-level comment
       *     - `data.cursor`: Next Google results page number: pass to the `cursor` parameter to fetch more
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Hashtag is required (the # is optional) */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Reels: {
    parameters: {
      query?: {
        /** @description Instagram user id. Use this for faster response times. */
        user_id?: string;
        /** @description Instagram handle. Use user_id for faster response times. */
        handle?: string;
        /** @description Max id to get more reels. Get 'max_id' from previous response. */
        max_id?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.items[0].media.pk`: Unique reel ID
       *     - `data.items[0].media.code`: Reel shortcode (used in the URL as `instagram.com/reel/{code}`)
       *     - `data.items[0].media.play_count`: Total view/play count
       *     - `data.items[0].media.video_duration`: Duration of the reel in seconds
       *     - `data.items[0].media.has_audio`: Whether the reel has audio
       *     - `data.items[0].media.image_versions2.candidates[0].url`: Thumbnail image URL
       *     - `data.items[0].media.video_versions[0].url`: Video download URL
       *     - `data.paging_info.max_id`: Pagination cursor: pass as `max_id` to get the next page
       *     - `data.paging_info.more_available`: Whether more reels are available
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Story_Highlights: {
    parameters: {
      query?: {
        /** @description Instagram user id. Use for faster response times. */
        user_id?: string;
        /** @description Instagram handle. Use user_id for faster response times. */
        handle?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.highlights[0].id`: Unique highlight reel ID: pass to the highlight-detail endpoint to get the stories
       *     - `data.highlights[0].title`: Display title of the highlight reel
       *     - `data.highlights[0].cover_media.thumbnail_src`: Cover image thumbnail URL
       *     - `data.highlights[0].cover_media_cropped_thumbnail.url`: Cropped cover thumbnail URL
       *     - `data.highlights[0].owner.id`: Owner's Instagram user ID
       *     - `data.highlights[0].owner.username`: Owner's Instagram username
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Highlights_Details: {
    parameters: {
      query?: {
        /** @description The ID of the highlight to get details for */
        id?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.id`: Full highlight ID in the format `highlight:{id}`
       *     - `data.title`: Display title of the highlight reel
       *     - `data.media_count`: Total number of story items in the highlight
       *     - `data.created_at`: Unix timestamp of when the highlight was created
       *     - `data.user.username`: Owner's Instagram username
       *     - `data.user.full_name`: Owner's full display name
       *     - `data.user.is_verified`: Whether the owner is a verified account
       *     - `data.cover_media.cropped_image_version.url`: Cover image URL
       *     - `data.items[0].id`: Unique ID of a story item
       *     - `data.items[0].video_versions[0].url`: Video download URL for a story item
       *     - `data.items[0].video_duration`: Duration of the story video in seconds
       *     - `data.items[0].image_versions2.candidates[0].url`: Thumbnail URL for a story item
       *     - `data.items[0].taken_at`: Unix timestamp of when the story was taken
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  instagram_Reels_using_Song: {
    parameters: {
      query: {
        /** @description Audio ID */
        audio_id: string;
        /** @description How you paginate the results. Pass the cursor from the previous response to get the next set of reels. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *     **Key Response Fields:**
       *     - `data.reels`: Object of reels keyed by index (`0`, `1`, ...): iterate over its values
       *     - `data.reels[0].pk`: Unique reel ID
       *     - `data.reels[0].id`: Reel ID combined with the author's user ID
       *     - `data.reels[0].code`: Reel shortcode (used in the URL as `instagram.com/reel/{code}`)
       *     - `data.reels[0].taken_at`: Unix timestamp of when the reel was posted
       *     - `data.reels[0].caption.text`: Reel caption text
       *     - `data.reels[0].user.username`: Username of the reel creator
       *     - `data.reels[0].user.is_verified`: Whether the reel creator is verified
       *     - `data.reels[0].like_count`: Number of likes
       *     - `data.reels[0].play_count`: Number of plays
       *     - `data.reels[0].comment_count`: Number of comments
       *     - `data.cursor`: Pagination cursor: pass as `cursor` to get the next set of reels
       *     - `data.has_more`: Whether more reels are available
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Channel_Details: {
    parameters: {
      query?: {
        /** @description YouTube channel ID. Can pass a channelId, handle or url */
        channelId?: string;
        /** @description YouTube channel handle. Can pass a channelId, handle or url */
        handle?: string;
        /** @description YouTube channel URL. Can pass a channelId, handle or url */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.channelId`: Unique YouTube channel ID
       *     - `data.name`: Channel display name
       *     - `data.handle`: Channel @handle
       *     - `data.avatar.image.sources[0].url`: Channel avatar image URL
       *     - `data.description`: Channel description/bio
       *     - `data.subscriberCount`: Total subscriber count (integer)
       *     - `data.subscriberCountText`: Human-readable subscriber count (e.g., "2.97M subscribers")
       *     - `data.videoCount`: Total number of videos
       *     - `data.viewCount`: Total channel view count
       *     - `data.joinedDateText`: When the channel was created
       *     - `data.tags`: Comma-separated channel tags/keywords
       *     - `data.email`: Public contact email (may be null)
       *     - `data.country`: Channel's registered country
       *     - `data.links`: External social/website links
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Channel_Videos: {
    parameters: {
      query?: {
        /** @description YouTube channel ID */
        channelId?: string;
        /** @description YouTube channel handle */
        handle?: string;
        /** @description Sort by latest or popular */
        sort?: "latest" | "popular";
        /** @description Continuation token to get more videos. Get 'continuationToken' from previous response. */
        continuationToken?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.videos[0].id`: YouTube video ID
       *     - `data.videos[0].url`: Full YouTube video URL
       *     - `data.videos[0].title`: Video title
       *     - `data.videos[0].thumbnail`: Video thumbnail URL
       *     - `data.videos[0].viewCountInt`: View count as integer
       *     - `data.videos[0].publishedTime`: ISO timestamp of when the video was published
       *     - `data.videos[0].lengthSeconds`: Video duration in seconds
       *     - `data.continuationToken`: Pagination cursor: pass as `continuationToken` to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Channel_Shorts: {
    parameters: {
      query?: {
        /** @description Can pass channelId or handle */
        handle?: string;
        /** @description Can pass channelId or handle */
        channelId?: string;
        /** @description Sort by newest or popular */
        sort?: "newest" | "popular";
        /** @description Continuation token to get more videos. Get 'continuationToken' from previous response. */
        continuationToken?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.shorts[0].id`: YouTube short video ID
       *     - `data.shorts[0].url`: Full YouTube URL
       *     - `data.shorts[0].title`: Short title
       *     - `data.shorts[0].viewCountInt`: View count as integer
       *     - `data.shorts[0].likeCountInt`: Like count as integer
       *     - `data.shorts[0].commentCountInt`: Comment count as integer
       *     - `data.shorts[0].publishDate`: ISO timestamp of when the short was published
       *     - `data.shorts[0].genre`: Content genre/category
       *     - `data.continuationToken`: Pagination cursor: pass as `continuationToken` to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Video_Short_Details: {
    parameters: {
      query: {
        /** @description YouTube video or short URL */
        url: string;
        /** @description Preferred response language (mapped to Accept-Language header; not guaranteed due to YouTube localization behavior). 2 letter language code, ie 'en', 'es', 'fr' etc. */
        language?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.id`: YouTube video ID
       *     - `data.title`: Video title
       *     - `data.description`: Video description (may be null for shorts)
       *     - `data.url`: Full YouTube video URL
       *     - `data.thumbnail`: Thumbnail image URL
       *     - `data.type`: Media type: `"video"` or `"short"`
       *     - `data.publishDate`: ISO timestamp of publication
       *     - `data.viewCountInt`: View count as integer
       *     - `data.likeCountInt`: Like count as integer
       *     - `data.commentCountInt`: Comment count as integer
       *     - `data.durationMs`: Duration in milliseconds
       *     - `data.durationFormatted`: Duration as formatted string (e.g., `"00:01:30"`)
       *     - `data.channel.id`: Channel ID of the creator
       *     - `data.channel.handle`: Creator's @handle
       *     - `data.genre`: Video genre/category
       *     - `data.keywords`: Associated keywords/tags
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Transcript: {
    parameters: {
      query: {
        /** @description YouTube video or short URL */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.transcript[0].text`: Text content of a transcript segment
       *     - `data.transcript[0].startMs`: Segment start time in milliseconds
       *     - `data.transcript[0].endMs`: Segment end time in milliseconds
       *     - `data.transcript[0].startTimeText`: Human-readable start time (e.g., `"0:00"`)
       *     - `data.transcript_only_text`: Full transcript as a single plain-text string
       *     - `data.language`: Language of the transcript (e.g., `"English"`)
       *     - `data.videoId`: YouTube video ID
       *     - `data.captionTracks[0].languageCode`: Language code of the caption track
       *     - `data.captionTracks[0].kind`: Caption type: `"asr"` for auto-generated
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Search: {
    parameters: {
      query: {
        /** @description Search query */
        query: string;
        /** @description Upload date */
        uploadDate?: "today" | "this_week" | "this_month" | "this_year";
        /** @description Sort by */
        sortBy?: "relevance" | "popular";
        /** @description Filter by these options. Note this doesn't work when you use either 'uploadDate' or 'sortBy'. It basically only works when you have a query. */
        filter?: "all" | "shorts";
        /** @description Continuation token to get more videos. Get 'continuationToken' from previous response. */
        continuationToken?: string;
        /** @description 2 letter country code of the country to put the proxy in. */
        region?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.videos[0].id`: Video ID
       *     - `data.videos[0].url`: Full YouTube video URL
       *     - `data.videos[0].title`: Video title
       *     - `data.videos[0].channel.id`: Channel ID of the uploader
       *     - `data.videos[0].channel.title`: Channel display name
       *     - `data.videos[0].viewCountInt`: View count as integer
       *     - `data.videos[0].publishedTime`: ISO timestamp of publication
       *     - `data.videos[0].lengthSeconds`: Duration in seconds
       *     - `data.shorts[0]`: Short-format videos matching the query (same structure as videos)
       *     - `data.lives[0]`: Active or recent live streams matching the query
       *     - `data.continuationToken`: Pagination cursor: pass as `continuationToken` to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Search_by_Hashtag: {
    parameters: {
      query: {
        /** @description Hashtag to search for */
        hashtag: string;
        /** @description Continuation token to get more videos. Get 'continuationToken' from previous response. */
        continuationToken?: string;
        /** @description Search for all types of content or only shorts */
        type?: "all" | "shorts";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.videos[0].id`: Video ID
       *     - `data.videos[0].url`: Full YouTube video URL
       *     - `data.videos[0].title`: Video title
       *     - `data.videos[0].channel.id`: Channel ID of the uploader
       *     - `data.videos[0].channel.title`: Channel display name
       *     - `data.videos[0].viewCountInt`: View count as integer
       *     - `data.videos[0].publishedTime`: ISO timestamp of publication
       *     - `data.videos[0].lengthSeconds`: Duration in seconds
       *     - `data.shorts[0]`: Short-format videos matching the hashtag (same structure as videos)
       *     - `data.continuationToken`: Pagination cursor: pass as `continuationToken` to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Comments: {
    parameters: {
      query: {
        /** @description YouTube video URL */
        url: string;
        /** @description Continuation token to get more comments. Get 'continuationToken' from previous response. */
        continuationToken?: string;
        /** @description Order of comments */
        order?: "top" | "newest";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.comments[0].id`: Unique comment ID
       *     - `data.comments[0].content`: Comment text content
       *     - `data.comments[0].publishedTime`: ISO timestamp of when the comment was posted
       *     - `data.comments[0].author.name`: Commenter's channel name
       *     - `data.comments[0].author.channelId`: Commenter's YouTube channel ID
       *     - `data.comments[0].author.avatarUrl`: Commenter's avatar image URL
       *     - `data.comments[0].author.isVerified`: Whether the commenter is a verified account
       *     - `data.comments[0].engagement.likes`: Number of likes on the comment
       *     - `data.comments[0].engagement.replies`: Number of replies to the comment
       *     - `data.continuationToken`: Pagination cursor: pass as `continuationToken` to get the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Comment_Replies: {
    parameters: {
      query: {
        /** @description Continuation token for the comment replies. Use 'repliesContinuationToken' from the Comments endpoint, or 'continuationToken' from a previous replies response to paginate. */
        continuationToken: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Continuation token is required. Use 'repliesContinuationToken' from the Comments endpoint. */
            error: string;
            /** @example video/comment-replies */
            endpoint?: string;
            /** @example 1 */
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch YouTube comment replies */
            error: string;
          };
        };
      };
    };
  };
  youtube_Trending_Shorts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.shorts[0].id`: YouTube short video ID
       *     - `data.shorts[0].url`: Full YouTube URL
       *     - `data.shorts[0].title`: Short title
       *     - `data.shorts[0].description`: Short description (may be null)
       *     - `data.shorts[0].thumbnail`: Thumbnail URL
       *     - `data.shorts[0].viewCountInt`: View count as integer
       *     - `data.shorts[0].likeCountInt`: Like count as integer
       *     - `data.shorts[0].commentCountInt`: Comment count as integer
       *     - `data.shorts[0].publishDate`: ISO timestamp of publication
       *     - `data.shorts[0].durationMs`: Duration in milliseconds
       *     - `data.shorts[0].durationFormatted`: Duration as formatted string (e.g., `"00:00:14"`)
       *     - `data.shorts[0].channel.id`: Channel ID of the creator
       *     - `data.shorts[0].channel.handle`: Creator's @handle
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  youtube_Channel_Playlists: {
    parameters: {
      query?: {
        /** @description YouTube channel ID */
        channelId?: string;
        /** @description YouTube channel handle */
        handle?: string;
        /** @description Continuation token to get more playlists. Get 'continuationToken' from previous response. */
        continuationToken?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response containing channel playlists
       *
       *     **Key Response Fields:**
       *     - `playlists[].id`: YouTube playlist ID
       *     - `playlists[].title`: Playlist title
       *     - `playlists[].playlistUrl`: Full URL to the playlist
       *     - `playlists[].videoId`: ID of the first video in the playlist
       *     - `playlists[].videoUrl`: URL to the first video
       *     - `playlists[].videoCount`: Number of videos in the playlist
       *     - `playlists[].thumbnail`: Playlist thumbnail image URL
       *     - `continuationToken`: Token to fetch the next page of playlists (null if no more pages)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing channelId or handle */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Either channelId or handle is required */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  youtube_Channel_Lives: {
    parameters: {
      query?: {
        /** @description YouTube channel ID */
        channelId?: string;
        /** @description YouTube channel handle */
        handle?: string;
        /** @description Continuation token to get more lives. Get 'continuationToken' from previous response. */
        continuationToken?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response containing channel live streams
       *
       *     **Key Response Fields:**
       *     - `lives[].id`: YouTube video ID
       *     - `lives[].url`: Full URL to the live stream
       *     - `lives[].title`: Live stream title
       *     - `lives[].thumbnail`: Thumbnail image URL
       *     - `lives[].viewCountText`: Formatted view/waiting count (e.g. "54 waiting", "1.2M")
       *     - `lives[].viewCountInt`: Numeric view count
       *     - `lives[].publishedTimeText`: Human-readable publish or schedule time
       *     - `lives[].lengthText`: Duration label (e.g. "2:13:29" or "Upcoming")
       *     - `lives[].lengthSeconds`: Duration in seconds (null for upcoming streams)
       *     - `continuationToken`: Token to fetch the next page of live streams (null if no more pages)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing channelId or handle */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Either channelId or handle is required */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  youtube_Channel_Community_Posts: {
    parameters: {
      query?: {
        /** @description YouTube channel ID */
        channelId?: string;
        /** @description YouTube channel handle */
        handle?: string;
        /** @description Continuation token to get more community posts. Get 'continuationToken' from previous response. */
        continuationToken?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response containing channel community posts
       *
       *     **Key Response Fields:**
       *     - `posts[].id`: Unique community post ID
       *     - `posts[].url`: Full URL to the community post
       *     - `posts[].channel.id`: Channel ID
       *     - `posts[].channel.title`: Channel name
       *     - `posts[].channel.handle`: Channel handle
       *     - `posts[].content`: Post text content
       *     - `posts[].image`: Primary attached image URL (null if none)
       *     - `posts[].images`: All attached images indexed by position
       *     - `posts[].likeCountText`: Formatted like count (e.g. "674K")
       *     - `posts[].likeCount`: Numeric like count
       *     - `posts[].publishedTimeText`: Human-readable publish time
       *     - `posts[].video`: Attached video details (null if none)
       *     - `continuationToken`: Token to fetch the next page of posts (null if no more pages)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing channelId or handle */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Either channelId or handle is required */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  twitch_Profile: {
    parameters: {
      query: {
        /** @description Twitch handle */
        handle: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `id`: Twitch user ID
       *     - `handle`: Twitch login handle
       *     - `displayName`: Display name
       *     - `profileImageURL`: Profile avatar URL
       *     - `bannerImageURL`: Profile banner URL
       *     - `description`: Channel bio/description
       *     - `followers`: Total follower count
       *     - `isPartner`: Whether the user is a Twitch Partner
       *     - `isLive`: Whether currently streaming
       *     - `currentViewersCount`: Current live viewer count (null if offline)
       *     - `stream`: Current stream details (empty object if offline)
       *     - `recentBroadcasts[].title`: VOD title
       *     - `recentBroadcasts[].viewCount`: VOD view count
       *     - `recentBroadcasts[].lengthSeconds`: VOD duration in seconds
       *     - `recentBroadcasts[].publishedAt`: ISO 8601 publish timestamp
       *     - `recentBroadcasts[].game`: Game/category info with name and box art
       *     - `allVideos[]`: All videos including highlights and uploads
       *     - `similarStreamers`: Related streamers
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Twitch handle is required */
            error?: string;
          };
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  twitch_User_Videos: {
    parameters: {
      query: {
        /** @description Twitch handle */
        handle: string;
        /** @description Pagination cursor from previous response */
        cursor?: string;
        /** @description Filter videos by type */
        filter_by?: "HIGHLIGHT" | "ARCHIVE" | "UPLOAD";
        /** @description Sort videos */
        sort_by?: "TIME" | "VIEWS";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `videos[].id`: Twitch video ID
       *     - `videos[].title`: Video/VOD title
       *     - `videos[].publishedAt`: ISO 8601 publish timestamp
       *     - `videos[].viewCount`: Total view count
       *     - `videos[].lengthSeconds`: Video duration in seconds
       *     - `videos[].previewThumbnailURL`: Thumbnail image URL
       *     - `videos[].animatedPreviewURL`: Animated preview strip URL
       *     - `videos[].game.id`: Game/category ID
       *     - `videos[].game.name`: Game/category name
       *     - `videos[].game.displayName`: Game display name
       *     - `videos[].game.boxArtURL`: Game box art image URL
       *     - `videos[].owner.displayName`: Channel owner display name
       *     - `videos[].owner.login`: Channel owner login handle
       *     - `hasNextPage`: Whether more videos are available
       *     - `cursor`: Cursor for pagination (null if last page)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Twitch handle is required */
            error?: string;
          };
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  twitch_User_Schedule: {
    parameters: {
      query: {
        /** @description Twitch handle */
        handle: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `id`: Twitch user ID
       *     - `primaryColorHex`: User's brand color
       *     - `lastBroadcast.id`: Last broadcast ID
       *     - `lastBroadcast.startedAt`: ISO 8601 timestamp of last stream start
       *     - `broadcastSettings.title`: Current/last stream title
       *     - `stream`: Active stream details (null if offline)
       *     - `videos.edges`: Recent video edges
       *     - `channel.schedule`: Scheduled stream segments (null if no schedule set)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Twitch handle is required */
            error?: string;
          };
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  twitch_Clip: {
    parameters: {
      query: {
        /** @description Twitch clip URL */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `clip.id`: Clip ID
       *     - `clip.slug`: Clip slug identifier (used in URLs)
       *     - `clip.url`: Full clip URL on Twitch
       *     - `clip.embedURL`: Embeddable clip URL
       *     - `clip.title`: Clip title
       *     - `clip.viewCount`: Total view count
       *     - `clip.language`: Language code (e.g. "ES", "EN")
       *     - `clip.durationSeconds`: Clip length in seconds
       *     - `clip.createdAt`: ISO 8601 creation timestamp
       *     - `clip.thumbnailURL`: Clip thumbnail URL
       *     - `clip.isFeatured`: Whether the clip is featured
       *     - `clip.broadcaster.login`: Streamer's Twitch handle
       *     - `clip.broadcaster.displayName`: Streamer's display name
       *     - `clip.broadcaster.followers.totalCount`: Streamer's follower count
       *     - `clip.broadcaster.isPartner`: Whether the streamer is a Twitch Partner
       *     - `clip.game.name`: Game/category name
       *     - `clip.game.displayName`: Game display name
       *     - `clip.game.boxArtURL`: Game box art image URL
       *     - `clip.curator`: User who created the clip
       *     - `clip.videoQualities[].sourceURL`: Direct download URLs by quality
       *     - `clip.videoURL`: Direct video download URL (highest quality with auth token)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Twitch clip URL is required */
            error?: string;
          };
        };
      };
      /** @description Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  tiktok_ad_library_Search: {
    parameters: {
      query?: {
        /** @description Country code. Defaults to US. */
        region?:
          | "DZ"
          | "AR"
          | "AU"
          | "AT"
          | "AZ"
          | "BH"
          | "BD"
          | "BY"
          | "BE"
          | "BO"
          | "BR"
          | "BG"
          | "KH"
          | "CA"
          | "CL"
          | "CO"
          | "CR"
          | "HR"
          | "CY"
          | "CZ"
          | "DK"
          | "DO"
          | "EC"
          | "EG"
          | "EE"
          | "FI"
          | "FR"
          | "DE"
          | "GR"
          | "GT"
          | "JO"
          | "HU"
          | "ID"
          | "IQ"
          | "IE"
          | "IL"
          | "IT"
          | "JP"
          | "KZ"
          | "KE"
          | "KW"
          | "LV"
          | "LB"
          | "MY"
          | "MX"
          | "MA"
          | "NL"
          | "NZ"
          | "NG"
          | "NO"
          | "OM"
          | "PK"
          | "PA"
          | "PY"
          | "PE"
          | "PH"
          | "PL"
          | "PT"
          | "PR"
          | "QA"
          | "LT"
          | "RO"
          | "SA"
          | "RS"
          | "SG"
          | "SK"
          | "SI"
          | "ZA"
          | "KR"
          | "ES"
          | "LK"
          | "SE"
          | "CH"
          | "TW"
          | "TH"
          | "TR"
          | "AE"
          | "GB"
          | "US"
          | "UY"
          | "VN";
        /** @description Time window for Top Ads (in days). */
        period?: "7" | "30" | "180";
        /** @description Optional keyword to search ad titles/content. */
        query?: string;
        /** @description Sort metric. Defaults to for_you. */
        order_by?:
          | "for_you"
          | "impression"
          | "play_2s_rate"
          | "play_6s_rate"
          | "cvr"
          | "ctr"
          | "like";
        /** @description Industry filter. */
        industry?:
          | "apparel_accessories"
          | "appliances"
          | "apps"
          | "baby_kids_maternity"
          | "beauty_personal_care"
          | "business_services"
          | "ecommerce_non_app"
          | "education"
          | "financial_services"
          | "food_beverage"
          | "games"
          | "health"
          | "home_improvement"
          | "household_products"
          | "life_services"
          | "news_entertainment"
          | "pets"
          | "sports_outdoor"
          | "tech_electronics"
          | "travel"
          | "vehicle_transportation";
        /** @description Campaign objective filter. */
        objective?:
          | "app_installs"
          | "conversions"
          | "lead_generation"
          | "product_sales"
          | "reach"
          | "traffic"
          | "video_views";
        /** @description Video duration filter. */
        duration?:
          "under_10s" | "10_20s" | "20_30s" | "30_40s" | "40_50s" | "over_50s";
        /** @description Likes percentile filter. */
        likes?:
          "top_1_20" | "top_21_40" | "top_41_60" | "top_61_80" | "top_81_100";
        /** @description Ad format filter. */
        ad_format?: "spark_ads" | "non_spark_ads";
        /** @description Ad language filter. */
        ad_language?:
          | "en"
          | "es"
          | "ar"
          | "vi"
          | "th"
          | "de"
          | "id"
          | "pt"
          | "fr"
          | "ms"
          | "nl"
          | "ja"
          | "it"
          | "ro"
          | "zh-Hant"
          | "ko";
        /** @description Page number to fetch. Use the cursor returned from the previous response, like 3 for page 3. */
        cursor?: number;
        /** @description Number of ads to return, max 50. Defaults to 20. */
        limit?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response containing top ads
       *
       *     **Key Response Fields:**
       *     - `query`: The search keyword used
       *     - `region`: Region code applied to the search
       *     - `period`: Time window in days
       *     - `ads[].id`: Unique ad ID
       *     - `ads[].ad_title`: Ad creative text/caption
       *     - `ads[].brand_name`: Brand name (if available)
       *     - `ads[].ctr`: Click-through rate
       *     - `ads[].like`: Total likes on the ad
       *     - `ads[].cost`: Credit cost indicator
       *     - `ads[].industry_key`: Industry category identifier
       *     - `ads[].objective_key`: Campaign objective (e.g. "campaign_objective_traffic")
       *     - `ads[].video_info.duration`: Video length in seconds
       *     - `ads[].video_info.cover`: Video cover/thumbnail URL
       *     - `ads[].video_info.video_url`: Download URLs by quality (540p, 720p)
       *     - `ads[].video_info.width`: Video width in pixels
       *     - `ads[].video_info.height`: Video height in pixels
       *     - `pagination.has_more`: Whether more pages are available
       *     - `pagination.page`: Current page number
       *     - `pagination.total_count`: Total number of matching ads
       *     - `total`: Total ads returned
       *     - `has_more`: Whether more pages exist
       *     - `cursor`: Cursor value for the next page (null if last page)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example User not authenticated */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  tiktok_ad_library_Ad: {
    parameters: {
      query: {
        /** @description The TikTok Creative Center ad ID. */
        ad_id: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response containing ad details
       *
       *     **Key Response Fields:**
       *     - `id`: Unique ad ID
       *     - `ad_title`: Ad creative text/caption
       *     - `brand_name`: Brand name (if available)
       *     - `like`: Total likes
       *     - `comment`: Total comments
       *     - `share`: Total shares
       *     - `ctr`: Click-through rate
       *     - `country_code`: Countries where the ad ran
       *     - `industry_key`: Industry category identifier
       *     - `objective_key`: Primary campaign objective
       *     - `objectives[]`: All objectives with label and weight
       *     - `landing_page`: Ad destination URL
       *     - `source`: Ad source type
       *     - `video_info.duration`: Video length in seconds
       *     - `video_info.cover`: Video cover/thumbnail URL
       *     - `video_info.video_url`: Download URLs by quality (540p, 720p)
       *     - `video_info.width`: Video width in pixels
       *     - `video_info.height`: Video height in pixels
       *     - `creative_center_url`: Link to the ad on TikTok Creative Center
       *     - `interactive_time_analysis`: Second-by-second metrics for CTR, CVR, clicks, conversions, and retention
       *     - `recommended_for_you`: Related ads suggested by Creative Center
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing required parameter */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example ad_id parameter is required */
            error?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example User not authenticated */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  linkedin_Person_s_Profile: {
    parameters: {
      query: {
        /** @description The URL of the LinkedIn profile to get */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.name`: Person's full name
       *     - `data.image`: Profile photo URL
       *     - `data.location`: Geographic location
       *     - `data.followers`: Total LinkedIn follower count
       *     - `data.about`: Bio/about section text
       *     - `data.recentPosts`: Person's recent posts (limited by LinkedIn public visibility)
       *     - `data.experience`: Work experience list (may be partially redacted for private profiles)
       *     - `data.education`: Education history
       *     - `data.articles`: Published LinkedIn articles
       *     - `data.activity`: Recent activity: likes, shares, and original posts
       *     - `data.recommendations`: Received recommendations from connections
       *     - `data.publications`: External publications mentioning the person
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  linkedin_Company_Page: {
    parameters: {
      query: {
        /** @description The URL of the LinkedIn company page to get */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.id`: LinkedIn company ID
       *     - `data.name`: Company display name
       *     - `data.handle`: LinkedIn handle (e.g., `"shopify"`)
       *     - `data.description`: Full company description/bio
       *     - `data.location`: City, state, and country
       *     - `data.followers`: LinkedIn follower count
       *     - `data.employeeCount`: Number of employees listed on LinkedIn
       *     - `data.website`: Company website URL
       *     - `data.logo`: Company logo image URL
       *     - `data.industry`: Industry category (e.g., `"Software Development"`)
       *     - `data.type`: Company type (e.g., `"Public Company"`)
       *     - `data.founded`: Year the company was founded
       *     - `data.specialties`: List of company specialties/tags
       *     - `data.funding`: Funding round history and investors
       *     - `data.employees`: Notable employees visible on the page
       *     - `data.posts`: Recent posts published by the company
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  linkedin_Search_Posts: {
    parameters: {
      query: {
        /** @description Keyword or phrase to search for in public LinkedIn posts */
        query: string;
        /** @description Filter results by how recently they were posted (based on Google-indexed results) */
        date_posted?:
          "last-hour" | "last-day" | "last-week" | "last-month" | "last-year";
        /** @description Pagination cursor from the previous response. Must be between 1 and 11; cursor 12 or greater returns a 400 response. */
        cursor?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *     **Key Response Fields:**
       *     - `data.query`: The search term that was run
       *     - `data.posts[n].url`: Permalink to the post: the `/posts/<slug>_` segment identifies the author
       *     - `data.posts[n].name`: Post title or opening line
       *     - `data.posts[n].description`: Full post body text
       *     - `data.posts[n].datePublished`: ISO timestamp of publication
       *     - `data.posts[n].likeCount`: Total reactions on the post
       *     - `data.posts[n].commentCount`: Total comment count
       *     - `data.posts[n].author.name`: Author's full name
       *     - `data.posts[n].author.url`: Author's LinkedIn profile URL
       *     - `data.posts[n].author.followers`: Author's follower count
       *     - `data.posts[n].image`: Primary image attached to the post
       *     - `data.posts[n].images`: All images attached to the post
       *     - `data.posts[n].transcript`: Video transcript, present only on video posts
       *     - `data.posts[n].comments`: Public comments, when LinkedIn exposes them
       *     - `data.cursor`: Pass back as `cursor` for the next page (max 11)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example query parameter is required */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            required?: number;
            available?: number;
          };
        };
      };
    };
  };
  linkedin_Post_Transcript: {
    parameters: {
      query: {
        /** @description The URL of the LinkedIn post to get the transcript from */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.transcript`: The transcript text extracted from the post's video
       *     - `data.transcriptNotAvailable`: Whether a transcript was unavailable (false when a transcript is returned)
       *     - `data.url`: The LinkedIn post URL the transcript was extracted from
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example URL parameter is required */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            required?: number;
            available?: number;
          };
        };
      };
    };
  };
  linkedin_Post: {
    parameters: {
      query: {
        /** @description The URL of the LinkedIn post to get */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.url`: Post or article URL
       *     - `data.name`: Article/post title
       *     - `data.headline`: Article subtitle or lede paragraph
       *     - `data.description`: Full body text of the post or article
       *     - `data.likeCount`: Total number of likes/reactions
       *     - `data.commentCount`: Total comment count
       *     - `data.datePublished`: ISO timestamp of publication
       *     - `data.author.name`: Author's full name
       *     - `data.author.url`: Author's LinkedIn profile URL
       *     - `data.author.followers`: Author's LinkedIn follower count
       *     - `data.comments`: Array of public comments with author and text
       *     - `data.moreArticles`: Other articles by the same author
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_Profile: {
    parameters: {
      query: {
        /** @description Facebook profile URL */
        url: string;
        /** @description Get the business's hours */
        get_business_hours?: "true" | "";
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.id`: Facebook page/profile ID
       *     - `data.name`: Page display name
       *     - `data.url`: Facebook page URL
       *     - `data.profilePicLarge`: Profile photo URL (large)
       *     - `data.pageIntro`: Short page description or category intro
       *     - `data.category`: Page category (e.g., `"Restaurant"`)
       *     - `data.address`: Physical address (if a business)
       *     - `data.email`: Public contact email
       *     - `data.phone`: Public phone number
       *     - `data.website`: External website URL
       *     - `data.likeCount`: Always `null`: Facebook retired Page likes
       *     - `data.followerCount`: Page followers, rounded by Facebook (798K, 5.9M)
       *     - `data.talkingAboutCount`: Recent activity about the page: exact, unlike `followerCount`
       *     - `data.adLibrary.adStatus`: Whether the page is currently running ads
       *     - `data.creationDate`: When the page was created
       *     - `data.businessHours`: Business hours (if `get_business_hours=true` and available)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_Profile_Posts: {
    parameters: {
      query?: {
        /** @description Facebook profile URL */
        url?: string;
        /** @description Facebook profile page id */
        pageId?: string;
        /** @description To paginate through the posts */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.posts[0].id`: Post ID
       *     - `data.posts[0].text`: Post text/caption
       *     - `data.posts[0].url`: Direct URL to the post or reel
       *     - `data.posts[0].author.name`: Name of the page that posted
       *     - `data.posts[0].reactionCount`: Total reaction (like/love/etc.) count
       *     - `data.posts[0].commentCount`: Total comment count
       *     - `data.posts[0].publishTime`: Unix timestamp of when the post was published
       *     - `data.posts[0].videoDetails.sdUrl`: SD video stream URL (if a video post)
       *     - `data.posts[0].videoDetails.hdUrl`: HD video stream URL (if a video post)
       *     - `data.posts[0].videoDetails.thumbnailUrl`: Video thumbnail URL
       *     - `data.posts[0].image`: Static post image URL (for image posts)
       *     - `data.cursor`: Pagination cursor: pass as `cursor` to get the next 3 posts
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_Comment_Replies: {
    parameters: {
      query: {
        /** @description The feedback_id of the comment. Note: this is not the comment id. You can get the feedback_id from the /v1/scrape/facebook/post/comments endpoint. */
        feedback_id: string;
        /** @description The expansion_token of the comment. You can get the expansion_token from the /v1/scrape/facebook/post/comments endpoint. */
        expansion_token: string;
        /** @description Cursor to paginate to the next page of replies. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response containing comment replies */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing required parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Comment feedback_id is required */
            error?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  facebook_Profile_Reels: {
    parameters: {
      query: {
        /** @description Facebook page URL */
        url: string;
        /** @description To paginate through to the next page. Must be used together with 'cursor' parameter. */
        next_page_id?: string;
        /** @description To paginate through to the next page. Must be used together with 'next_page_id' parameter. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `reels[0].video_url`: The URL of the video
       *     - `reels[0].thumbnail`: Thumbnail image URL
       *     - `reels[0].view_count`: Number of views
       *     - `reels[0].play_time_in_ms`: Video duration in milliseconds
       *     - `cursor`: Use for pagination
       *     - `next_page_id`: Use for pagination
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Facebook profile URL is required */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid or missing API key */
            error: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /** @example 1 */
            required: number;
            /** @example 0 */
            available: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_Facebook_Group_Posts: {
    parameters: {
      query?: {
        /** @description The URL of the group */
        url?: string;
        /** @description The ID of the group */
        group_id?: string;
        /** @description How to sort the posts */
        sort_by?:
          | "TOP_POSTS"
          | "RECENT_ACTIVITY"
          | "CHRONOLOGICAL"
          | "CHRONOLOGICAL_LISTINGS";
        /** @description The cursor to paginate to the next page */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.posts[0].id`: Post ID
       *     - `data.posts[0].text`: Post text content
       *     - `data.posts[0].url`: Direct URL to the group post
       *     - `data.posts[0].author.name`: Name of the user who posted
       *     - `data.posts[0].reactionCount`: Total reaction count
       *     - `data.posts[0].commentCount`: Total comment count
       *     - `data.posts[0].publishTime`: Unix timestamp of publication
       *     - `data.posts[0].topComments`: Top comments on the post (with author and text)
       *     - `data.posts[0].image`: Post image URL (if applicable)
       *     - `data.cursor`: Pagination cursor: pass as `cursor` to get the next 3 posts
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_Post: {
    parameters: {
      query: {
        /** @description The URL of the post to get */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.post_id`: Unique post/reel ID
       *     - `data.url`: Direct URL to the post or reel
       *     - `data.description`: Post caption/description text
       *     - `data.like_count`: Total like count
       *     - `data.comment_count`: Total comment count
       *     - `data.share_count`: Total share count
       *     - `data.view_count`: Total video view count (for videos/reels)
       *     - `data.video.id`: Video ID
       *     - `data.video.sd_url`: SD video stream URL
       *     - `data.video.hd_url`: HD video stream URL
       *     - `data.video.thumbnail`: Video thumbnail image URL
       *     - `data.video.length_in_second`: Video duration in seconds
       *     - `data.video.captions_url`: SRT captions/subtitles URL (if available)
       *     - `data.author.name`: Name of the post author
       *     - `data.author.is_verified`: Whether the author is a verified account
       *     - `data.music.track_title`: Audio track title (if applicable)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_Transcript: {
    parameters: {
      query: {
        /** @description Facebook post URL */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.transcript`: Full SRT-formatted transcript with segment timestamps (e.g., `"1\n00:00:00,000 --> 00:00:02,561\nText here..."`)
       *       Each numbered segment includes the cue number, start → end timecode, and the spoken text
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_Comments: {
    parameters: {
      query: {
        /** @description Facebook post URL (or reel URL) */
        url: string;
        /** @description Cursor to get more comments. Get 'cursor' from previous response. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.comments[0].id`: Unique comment ID
       *     - `data.comments[0].text`: Comment text content
       *     - `data.comments[0].created_at`: ISO timestamp of when the comment was posted
       *     - `data.comments[0].reply_count`: Number of replies to this comment
       *     - `data.comments[0].reaction_count`: Number of reactions (likes) on the comment
       *     - `data.comments[0].author.name`: Commenter's name
       *     - `data.comments[0].author.id`: Commenter's Facebook user ID
       *     - `data.cursor`: Pagination cursor: pass as `cursor` to get the next page of comments
       *     - `data.has_next_page`: Whether more comments are available to paginate
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebook_AdLibrary_Ad_Transcript: {
    parameters: {
      query?: {
        /** @description Facebook Ad ID (provide either id or url) */
        id?: string;
        /** @description Facebook Ad URL (provide either id or url) */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.transcript`: The transcript text extracted from the ad's video
       *     - `data.transcript_available`: Whether a transcript was available (true when one is returned). Credits are only charged when a transcript is returned.
       *     - `data.ad_id`: The Facebook Ad ID
       *     - `data.url`: The Facebook Ad Library URL for the ad
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Either Ad ID or Ad URL parameter is required */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            required?: number;
            available?: number;
          };
        };
      };
    };
  };
  facebookAdLibrary_Ad_Details: {
    parameters: {
      query?: {
        /** @description Facebook Ad Id */
        id?: string;
        /** @description Facebook Ad URL */
        url?: string;
        /** @description Get the transcript of the ad. This is a new feature, so let me know if its not working how you expected. */
        get_transcript?: boolean;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.adArchiveID`: The actual ad ID (note: `adid` is always 0: always use `adArchiveID`)
       *     - `data.isActive`: Whether the ad is currently running
       *     - `data.pageName`: Name of the Facebook page running the ad
       *     - `data.pageID`: Facebook page ID
       *     - `data.startDateString`: ISO timestamp of when the ad started running
       *     - `data.endDateString`: ISO timestamp of when the ad stopped (or is scheduled to stop)
       *     - `data.publisherPlatform`: Platforms the ad runs on (e.g., facebook, instagram, messenger)
       *     - `data.snapshot.title`: Ad headline/title
       *     - `data.snapshot.body`: Ad body copy
       *     - `data.snapshot.cta_text`: Call-to-action button text (e.g., `"Install Now"`, `"Shop Now"`)
       *     - `data.snapshot.cta_type`: CTA type identifier (e.g., `"INSTALL_MOBILE_APP"`, `"SHOP_NOW"`)
       *     - `data.snapshot.cards[0].title`: Title from the first carousel card (for multi-creative ads)
       *     - `data.snapshot.cards[0].body`: Body text from the first carousel card
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebookAdLibrary_Search: {
    parameters: {
      query: {
        /** @description Keyword to search for */
        query: string;
        /** @description Sort by impressions (high to low), or Most Recent (relevancy_monthly_grouped). Defaults to impressions. */
        sort_by?: "total_impressions" | "relevancy_monthly_grouped";
        /** @description If you want to search by exact phrase or not */
        search_type?: "keyword_unordered" | "keyword_exact_phrase";
        /** @description Search for all ads or only political and issue ads */
        ad_type?: "all" | "political_and_issue_ads";
        /** @description This can only be one country. It has to be the 2 letter code for the country. It defaults to ALL. */
        country?: string;
        /** @description Status of the ad. Defaults to ACTIVE. */
        status?: "ALL" | "ACTIVE" | "INACTIVE";
        /** @description Media type of the ad. Defaults to ALL. Meme just means the ad has text and an image. No clue why they call it meme. */
        media_type?:
          "ALL" | "IMAGE" | "VIDEO" | "MEME" | "IMAGE_AND_MEME" | "NONE";
        /** @description Impressions start date. Needs to be in YYYY-MM-DD format. */
        start_date?: string;
        /** @description Impressions end date. Needs to be in YYYY-MM-DD format. */
        end_date?: string;
        /** @description Cursor to paginate through results */
        cursor?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.searchResults[0].ad_archive_id`: The actual ad ID (use this: `ad_id` is always null)
       *     - `data.searchResults[0].is_active`: Whether the ad is currently running
       *     - `data.searchResults[0].page_id`: Facebook page ID running the ad
       *     - `data.searchResults[0].page_name`: Facebook page name
       *     - `data.searchResults[0].start_date_string`: ISO timestamp of when the ad started
       *     - `data.searchResults[0].end_date_string`: ISO timestamp of when the ad ended or will end
       *     - `data.searchResults[0].publisher_platform`: Platforms the ad runs on
       *     - `data.searchResults[0].snapshot.title`: Ad headline/title
       *     - `data.searchResults[0].snapshot.body.text`: Ad body copy
       *     - `data.searchResults[0].snapshot.cta_text`: Call-to-action button text
       *     - `data.searchResults[0].snapshot.cards[0].original_image_url`: Ad creative image URL
       *     - `data.searchResultsCount`: Total number of matching ads found
       *     - `data.cursor`: Pagination cursor: pass as `cursor` to get further results
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebookAdLibrary_Company_Ads: {
    parameters: {
      query?: {
        /** @description The companies ad library page id. You can get this with my Search For Companies Endpoint. Can either use this or companyName */
        pageId?: string;
        /** @description The name of the company. Can either use this or pageId */
        companyName?: string;
        /** @description This can only be one country. It has to be the 2 letter code for the country. It defaults to ALL. */
        country?: string;
        /** @description Status of the ad. Defaults to ACTIVE. */
        status?: "ALL" | "ACTIVE" | "INACTIVE";
        /** @description Media type of the ad. Defaults to ALL. Meme refers to ads with image and text. Not sure why they call it meme. */
        media_type?:
          "ALL" | "IMAGE" | "VIDEO" | "MEME" | "IMAGE_AND_MEME" | "NONE";
        /** @description Language to filter ads on. Needs to be 2 letter language code, ie EN, ES, FR, etc */
        language?: string;
        /** @description Start date to search for. Format: YYYY-MM-DD */
        start_date?: string;
        /** @description End date to search for. Format: YYYY-MM-DD */
        end_date?: string;
        /** @description Cursor to paginate through results */
        cursor?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.results[0].ad_archive_id`: The actual ad ID (use this: `ad_id` is always null)
       *     - `data.results[0].is_active`: Whether the ad is currently running
       *     - `data.results[0].page_id`: Facebook page ID running the ad
       *     - `data.results[0].page_name`: Facebook page name
       *     - `data.results[0].start_date_string`: ISO timestamp of when the ad started
       *     - `data.results[0].end_date_string`: ISO timestamp of when the ad ended or will end
       *     - `data.results[0].publisher_platform`: Platforms the ad runs on
       *     - `data.results[0].snapshot.title`: Ad headline/title
       *     - `data.results[0].snapshot.body.text`: Ad body copy
       *     - `data.results[0].snapshot.cta_text`: Call-to-action button text
       *     - `data.results[0].snapshot.cards[0].original_image_url`: Ad creative image URL
       *     - `data.searchResultsCount`: Total number of ads found for this company
       *     - `data.cursor`: Pagination cursor: pass as `cursor` to get further results
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebookAdLibrary_Search_for_Companies: {
    parameters: {
      query: {
        /** @description Keyword to search for */
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.searchResults[0].page_id`: The company's ad library page ID: use this with the Company Ads endpoint
       *     - `data.searchResults[0].name`: Company display name
       *     - `data.searchResults[0].category`: Facebook page category
       *     - `data.searchResults[0].image_uri`: Company logo/profile image URL
       *     - `data.searchResults[0].likes`: Total Facebook page likes
       *     - `data.searchResults[0].verification`: Verification status (e.g., `"BLUE_VERIFIED"`)
       *     - `data.searchResults[0].ig_username`: Associated Instagram username
       *     - `data.searchResults[0].ig_followers`: Instagram follower count
       *     - `data.searchResults[0].ig_verification`: Whether the Instagram account is verified
       *     - `data.searchResults[0].entity_type`: Facebook entity type (e.g., `"PERSON_PROFILE"`)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebookMarketplace_Location_Search: {
    parameters: {
      query: {
        /** @description Location search query */
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.locations[0].name`: Full location display name (e.g. `"London, United Kingdom"`)
       *     - `data.locations[0].city`: City name
       *     - `data.locations[0].latitude` / `longitude`: Coordinates: pass these as `lat` / `lng` to the Marketplace Search endpoint
       *     - `data.locations[0].page_id`: Facebook page ID for the location
       *     - `data.locations[0].subtitle`: Human-readable description with check-in count
       *     - `data.locations[0].postal_code`: Postal / ZIP code for the location
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Search query parameter is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebookMarketplace_Search: {
    parameters: {
      query: {
        /** @description Search keyword */
        query: string;
        /** @description Latitude for the search location */
        lat: number;
        /** @description Longitude for the search location */
        lng: number;
        /** @description Search radius in kilometers */
        radius_km?: number;
        /** @description Minimum listing price */
        min_price?: number;
        /** @description Maximum listing price */
        max_price?: number;
        /** @description Number of listings to return */
        count?: number;
        /** @description Sort order */
        sort_by?:
          | "suggested"
          | "distance_ascend"
          | "creation_time_descend"
          | "price_ascend"
          | "price_descend";
        /** @description Delivery filter */
        delivery_method?: "all" | "local_pickup" | "shipping";
        /** @description Condition filter */
        condition?: "new" | "used_like_new" | "used_good" | "used_fair";
        /** @description Date listed filter */
        date_listed?:
          | "all"
          | "1"
          | "7"
          | "30"
          | "last_24_hours"
          | "last_7_days"
          | "last_30_days";
        /** @description Availability filter */
        availability?: "available" | "sold" | "all";
        /** @description Opaque pagination cursor returned from the previous response. Pass it back as-is. */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.listings[0].id`: Marketplace listing identifier
       *     - `data.listings[0].url`: Direct link to the listing on Facebook
       *     - `data.listings[0].title`: Listing title
       *     - `data.listings[0].price.amount`: Numeric price value
       *     - `data.listings[0].price.formatted_amount`: Display price string (e.g. `"£50"`)
       *     - `data.listings[0].strikethrough_price`: Original price before discount, or `null`
       *     - `data.listings[0].location.city` / `display_name`: Listing location
       *     - `data.listings[0].primary_photo.url`: Primary listing image URL
       *     - `data.listings[0].is_sold`: Whether the item has been sold
       *     - `data.listings[0].delivery_types`: Available delivery methods (e.g. `IN_PERSON`)
       *     - `data.cursor`: Opaque token: pass back as `cursor` to get the next page
       *     - `data.has_next_page`: Whether more results are available
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example lat is required and must be a number */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  facebookMarketplace_Item: {
    parameters: {
      query?: {
        /** @description Facebook Marketplace item id (use id or url) */
        id?: string;
        /** @description Facebook Marketplace item URL (use id or url) */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.id`: Marketplace listing identifier
       *     - `data.url` / `share_uri`: Direct link to the listing on Facebook
       *     - `data.title`: Listing title
       *     - `data.description`: Full listing description text
       *     - `data.creation_time`: ISO 8601 timestamp of when the listing was posted
       *     - `data.location_text`: Human-readable location (e.g. `"London, United Kingdom"`)
       *     - `data.location.latitude` / `longitude`: Precise coordinates of the listing
       *     - `data.price.amount`: Numeric price value
       *     - `data.price.formatted_amount_zeros_stripped`: Display price string (e.g. `"£5"`)
       *     - `data.price.currency`: ISO currency code (e.g. `"GBP"`)
       *     - `data.strikethrough_price`: Original price before discount, or `null`
       *     - `data.attributes[0].attribute_name` / `value` / `label`: Item attributes such as condition
       *     - `data.photos[0].url` / `width` / `height`: Listing photos array
       *     - `data.is_sold` / `is_live` / `is_pending`: Listing status flags
       *     - `data.delivery_types`: Available delivery methods (e.g. `IN_PERSON`)
       *     - `data.seller`: Seller profile info, or `null` if not available
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Either Marketplace item id or url parameter is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  googleAdLibrary_Company_Ads: {
    parameters: {
      query?: {
        /** @description The domain of the company */
        domain?: string;
        /** @description The advertiser id of the company */
        advertiser_id?: string;
        /** @description The topic to search for. If you search for 'political', you will also need to pass a 'region', like 'US' or 'AU' */
        topic?: "all" | "political";
        /** @description The region to search for. Defaults to anywhere */
        region?: string;
        /** @description Start date to search for. Format: YYYY-MM-DD */
        start_date?: string;
        /** @description End date to search for. Format: YYYY-MM-DD */
        end_date?: string;
        /** @description Cursor to paginate through results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `ads[0].advertiserId`: Unique advertiser identifier (e.g. `AR01614014350098432001`)
       *     - `ads[0].creativeId`: Unique creative identifier (e.g. `CR16304891583101140993`)
       *     - `ads[0].format`: Ad format type (`image`, `video`, `text`)
       *     - `ads[0].adUrl`: Direct link to the ad on Google Ads Transparency
       *     - `ads[0].advertiserName`: Display name of the advertiser
       *     - `ads[0].domain`: Advertiser's domain (e.g. `lululemon.com`)
       *     - `ads[0].imageUrl`: URL of the ad's image (may be `null`)
       *     - `ads[0].firstShown`: ISO 8601 timestamp of when the ad first ran
       *     - `ads[0].lastShown`: ISO 8601 timestamp of when the ad last ran
       *     - `cursor`: Opaque token to paginate to the next page of results
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  googleAdLibrary_Ad_Details: {
    parameters: {
      query: {
        /** @description The url of the ad */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `advertiserId`: Unique advertiser identifier
       *     - `creativeId`: Unique creative identifier
       *     - `format`: Ad format type (`image`, `video`, `text`)
       *     - `url`: Direct link to the ad on Google Ads Transparency
       *     - `firstShown` / `lastShown`: ISO 8601 timestamps for ad run dates
       *     - `overallImpressions.min` / `overallImpressions.max`: Impression count range (may be `null`)
       *     - `creativeRegions[0].regionCode` / `regionName`: Countries where the ad was shown
       *     - `regionStats[0].firstShown` / `lastShown` / `impressions`: Per-region performance stats
       *     - `variations[0].headline`: Ad headline text variation
       *     - `variations[0].description`: Ad body copy variation
       *     - `variations[0].destinationUrl`: Landing page URL for this variation
       *     - `variations[0].visibleUrl`: Display URL shown in the ad
       *     - `variations[0].youtubeUrl`: YouTube URL if it's a video ad (may be `null`)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  googleAdLibrary_Search_Advertisers: {
    parameters: {
      query: {
        /** @description The query to search for */
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `advertisers[0].name`: Advertiser display name
       *     - `advertisers[0].advertiser_id`: Unique advertiser ID to use in other endpoints
       *     - `advertisers[0].region`: Country code of the advertiser (e.g. `US`, `IT`)
       *     - `websites[0].domain`: Associated domain name matching the search query
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Query parameter is required */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /** @example 1 */
            required: number;
            /** @example 0 */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example An error occurred while searching Google Ad Library advertisers */
            error: string;
          };
        };
      };
    };
  };
  linkedinAdLibrary_Search_Ads: {
    parameters: {
      query?: {
        /** @description The company name to search for. 'Microsoft' for example */
        company?: string;
        /** @description The keyword to search for */
        keyword?: string;
        /** @description Comma separated list of countries. Example: US,CA,MX */
        countries?: string;
        /** @description Start date to search for. Format: YYYY-MM-DD */
        startDate?: string;
        /** @description End date to search for. Format: YYYY-MM-DD */
        endDate?: string;
        /** @description Pagination token to paginate through results */
        paginationToken?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `ads[0].id`: Unique ad identifier
       *     - `ads[0].description`: Full ad body text/copy
       *     - `ads[0].headline`: Ad headline (may be `null`)
       *     - `ads[0].poster`: Name of the company running the ad
       *     - `ads[0].adType`: Format of the ad (e.g. `Single Image Ad`, `Video Ad`, `Carousel Ad`)
       *     - `ads[0].advertiser`: Advertiser display name
       *     - `ads[0].advertiserLinkedinPage`: URL to the advertiser's LinkedIn company page
       *     - `ads[0].image`: URL of the ad's image asset (may be `null`)
       *     - `ads[0].cta`: Call-to-action button text (e.g. `Learn more`, `Request Demo`)
       *     - `ads[0].destinationUrl`: Landing page URL
       *     - `ads[0].targeting.language`: Audience language targeting description
       *     - `ads[0].targeting.location`: Audience location targeting description
       *     - `ads[0].startDate` / `endDate`: ISO 8601 timestamps for ad run period
       *     - `ads[0].totalImpressions`: Impression range string (e.g. `5k-10k`) or `null`
       *     - `ads[0].url`: Direct link to this ad in the LinkedIn Ad Library
       *     - `paginationToken`: Token to pass as `paginationToken` for the next page
       *     - `isLastPage`: Boolean indicating whether this is the final page of results
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  linkedinAdLibrary_Ad_Details: {
    parameters: {
      query: {
        /** @description The url of the ad */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `id`: Unique ad identifier
       *     - `description`: Full ad body text/copy
       *     - `headline`: Ad headline (may be `null`)
       *     - `poster`: Name of the company running the ad
       *     - `adType`: Ad format (e.g. `Single Image Ad`, `Video Ad`, `Carousel Ad`)
       *     - `advertiser`: Advertiser display name
       *     - `advertiserLinkedinPage`: URL to the advertiser's LinkedIn company page
       *     - `image`: URL of the ad's image asset (may be `null`)
       *     - `video`: Video asset details (may be `null`)
       *     - `carouselImages`: Object containing carousel image assets
       *     - `cta`: Call-to-action button text (e.g. `Request Demo`)
       *     - `destinationUrl`: Full landing page URL including UTM parameters
       *     - `targeting.language`: Audience language targeting description
       *     - `targeting.location`: Audience location targeting description
       *     - `adDuration`: Human-readable run period (e.g. `Ran from Feb 6, 2026 to Feb 8, 2026`)
       *     - `startDate` / `endDate`: ISO 8601 timestamps for ad run period
       *     - `totalImpressions`: Impression range string (e.g. `5k-10k`) or `null`
       *     - `impressionsByCountry`: Per-country impression breakdown
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_Profile: {
    parameters: {
      query: {
        /** @description Twitter handle */
        handle: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `rest_id`: User's numeric ID string
       *     - `core.name` / `core.screen_name`: Display name and @handle
       *     - `core.created_at`: Account creation date
       *     - `is_blue_verified`: Whether the account has a blue checkmark
       *     - `legacy.followers_count`: Total follower count
       *     - `legacy.friends_count`: Number of accounts the user follows
       *     - `legacy.favourites_count`: Total likes count
       *     - `legacy.statuses_count`: Total tweet count
       *     - `legacy.media_count`: Total media posts count
       *     - `legacy.description`: Bio text
       *     - `legacy.location`: Profile location string
       *     - `legacy.profile_image_url_https`: Profile picture URL
       *     - `legacy.profile_banner_url`: Banner image URL
       *     - `avatar.image_url`: Profile avatar URL
       *     - `verification.verified`: Legacy verified status
       *     - `affiliates_highlighted_label`: Affiliated organization badge info
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_User_Tweets: {
    parameters: {
      query: {
        /** @description Twitter handle */
        handle: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `tweets[0].rest_id`: Tweet ID string
       *     - `tweets[0].legacy.full_text`: Full tweet text content
       *     - `tweets[0].legacy.created_at`: Tweet creation timestamp
       *     - `tweets[0].legacy.favorite_count`: Like count
       *     - `tweets[0].legacy.retweet_count`: Retweet count
       *     - `tweets[0].legacy.reply_count`: Reply count
       *     - `tweets[0].legacy.quote_count`: Quote tweet count
       *     - `tweets[0].legacy.bookmark_count`: Bookmark count
       *     - `tweets[0].views.count`: Total view count
       *     - `tweets[0].legacy.entities.media`: Attached photos/videos
       *     - `tweets[0].url`: Direct URL to the tweet on x.com
       *     - `tweets[0].core.user_results.result.core.screen_name`: Author @handle
       *     - Use `trim=true` for a leaner response without nested user objects
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_Tweet_Details: {
    parameters: {
      query: {
        /** @description Tweet URL */
        url: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `rest_id`: Tweet ID string
       *     - `legacy.full_text`: Full tweet text content
       *     - `legacy.created_at`: Tweet creation timestamp
       *     - `legacy.favorite_count`: Like count
       *     - `legacy.retweet_count`: Retweet count
       *     - `legacy.reply_count`: Reply count
       *     - `legacy.quote_count`: Quote tweet count
       *     - `legacy.bookmark_count`: Bookmark count
       *     - `views.count`: Total view count
       *     - `legacy.entities.media`: Attached photos/videos
       *     - `legacy.entities.urls`: Expanded URLs in the tweet
       *     - `core.user_results.result.core.screen_name` / `name`: Author @handle and display name
       *     - `quoted_status_result`: Nested object for the quoted tweet (if applicable)
       *     - `card.legacy.binding_values`: Rich card data (YouTube embeds, link previews, etc.)
       *     - Use `trim=true` for a leaner response without deeply nested user objects
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_Transcript: {
    parameters: {
      query: {
        /** @description Tweet URL */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `transcript`: AI-generated plain text transcript of the video in the tweet
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_Community: {
    parameters: {
      query: {
        /** @description Community URL */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `rest_id`: Unique community ID
       *     - `name`: Community display name
       *     - `description`: Community description text
       *     - `join_policy`: Membership policy (`Open`, `RestrictedJoin`, etc.)
       *     - `created_at`: Unix timestamp (ms) of community creation
       *     - `member_count`: Total number of community members
       *     - `role`: Your role in the community (e.g. `NonMember`)
       *     - `is_member`: Boolean indicating membership status
       *     - `creator_results.result.core.screen_name`: @handle of the community creator
       *     - `rules[0].name` / `description`: Community rules
       *     - `custom_banner_media.media_info.original_img_url`: Banner image URL
       *     - `is_nsfw`: Whether the community is marked NSFW
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_Community_Tweets: {
    parameters: {
      query: {
        /** @description Community URL */
        url: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `tweets[0].id`: Tweet ID string
       *     - `tweets[0].full_text`: Full tweet text content
       *     - `tweets[0].created_at`: Tweet creation timestamp
       *     - `tweets[0].favorite_count`: Like count
       *     - `tweets[0].view_count`: Total view count
       *     - `tweets[0].bookmark_count`: Bookmark count
       *     - `tweets[0].entities.media`: Attached photos/videos
       *     - `tweets[0].entities.user_mentions`: @mentions in the tweet
       *     - `tweets[0].entities.urls`: Expanded URLs in the tweet
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_User_Tweets_All: {
    parameters: {
      query: {
        /** @description Twitter numeric user ID (rest_id). Use the profile endpoint to get this from a handle. */
        user_id: string;
        /** @description Pagination cursor from a previous response to get the next page of results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *
       *     **Pagination:**
       *     - `data.cursor.bottom`: Pass as `cursor` query param to get the next page of tweets
       *     - `data.cursor.top`: Cursor for the previous/newer page
       *
       *     **Timeline Structure:**
       *     - `data.result.timeline.instructions[0]`: `TimelineClearCache` (internal, can ignore)
       *     - `data.result.timeline.instructions[1]`: `TimelinePinEntry`: The user's pinned tweet (if any). Check `.entry.content.itemContent.socialContext.text` which will be `Pinned`
       *     - `data.result.timeline.instructions[2]`: `TimelineAddEntries`: The main tweet list in `.entries[]`
       *
       *     **Each Tweet** (at `entries[].content.itemContent.tweet_results.result`):
       *     - `.rest_id`: Tweet ID
       *     - `.legacy.full_text`: Tweet text (truncated at 280 chars for long tweets)
       *     - `.note_tweet.note_tweet_results.result.text`: Full untruncated text for tweets longer than 280 characters
       *     - `.legacy.created_at`: Timestamp when the tweet was posted
       *     - `.views.count`: View count (returned as string)
       *     - `.legacy.favorite_count`: Likes
       *     - `.legacy.retweet_count`: Retweets
       *     - `.legacy.reply_count`: Replies
       *     - `.legacy.quote_count`: Quote tweets
       *     - `.legacy.bookmark_count`: Bookmarks
       *     - `.legacy.lang`: Language code (e.g. `en`)
       *     - `.legacy.is_quote_status`: Whether this tweet is quoting another tweet
       *     - `.legacy.user_id_str`: Author's numeric user ID
       *     - `.source`: App used to post (e.g. `Twitter for iPhone`, `Twitter Web App`)
       *
       *     **Author Info** (at `entries[].content.itemContent.tweet_results.result.core.user_results.result`):
       *     - `.rest_id`: User's numeric ID (rest_id)
       *     - `.is_blue_verified`: Whether user has a blue checkmark
       *     - `.legacy.name`: Display name
       *     - `.legacy.screen_name`: Handle (username without @)
       *     - `.legacy.description`: Bio
       *     - `.legacy.followers_count`: Follower count
       *     - `.legacy.friends_count`: Following count
       *     - `.legacy.statuses_count`: Total tweet count
       *     - `.legacy.profile_image_url_https`: Profile picture URL
       *     - `.legacy.profile_banner_url`: Banner image URL
       *     - `.legacy.location`: Location set by user
       *
       *     **Media** (at `entries[].content.itemContent.tweet_results.result.legacy.extended_entities.media[]`):
       *     - `.type`: `photo`, `video`, or `animated_gif`
       *     - `.media_url_https`: Image URL (for photos) or video thumbnail
       *     - `.video_info.variants[]`: Array of video URLs at different qualities (for video/gif types)
       *     - `.video_info.variants[].url`: Video file URL
       *     - `.video_info.variants[].bitrate`: Video bitrate (higher = better quality)
       *
       *     **Quoted Tweet** (if `is_quote_status` is true):
       *     - `entries[].content.itemContent.tweet_results.result.quoted_status_result.result`: The quoted tweet: same structure as a regular tweet
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example user_id (rest_id) is required */
            error: string;
            /** @example Use the /v1/scrape/twitter/profile endpoint to get a user's rest_id from their handle */
            tip?: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_Tweet_Comments: {
    parameters: {
      query: {
        /** @description The tweet ID to get comments for */
        pid: string;
        /** @description Sort comments by ranking criterion: Relevance (default), Recency (most recent), or Likes (highest likes) */
        rankingMode?: "Relevance" | "Recency" | "Likes";
        /** @description Pagination cursor from a previous response to get the next page of results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *
       *     **Pagination:**
       *     - `data.cursor.bottom`: Pass as `cursor` query param to get the next page of comments
       *
       *     **Comment List:**
       *     - `data.result.instructions[0].entries[]`: Array of comment entries (type `TimelineAddEntries`)
       *     - `data.result.instructions[1]`: `TimelineTerminateTimeline`: indicates end of available results
       *
       *     **Each Comment** (at `entries[].content.itemContent.tweet_results.result`):
       *     - `.rest_id`: Comment tweet ID
       *     - `.legacy.full_text`: Comment text
       *     - `.legacy.created_at`: Timestamp when the comment was posted
       *     - `.views.count`: View count (returned as string)
       *     - `.legacy.favorite_count`: Likes
       *     - `.legacy.retweet_count`: Retweets
       *     - `.legacy.reply_count`: Replies
       *     - `.legacy.quote_count`: Quote tweets
       *     - `.legacy.bookmark_count`: Bookmarks
       *     - `.legacy.lang`: Language code (e.g. `en`)
       *     - `.legacy.conversation_id_str`: The original tweet ID this comment is replying to
       *     - `.legacy.in_reply_to_status_id_str`: The tweet ID being directly replied to
       *     - `.source`: App used to post
       *     - `.note_tweet.note_tweet_results.result.text`: Full text for comments longer than 280 characters
       *
       *     **Comment Author** (at `entries[].content.itemContent.tweet_results.result.core.user_results.result`):
       *     - `.rest_id`: User's numeric ID
       *     - `.is_blue_verified`: Whether user has a blue checkmark
       *     - `.legacy.name`: Display name
       *     - `.legacy.screen_name`: Handle (username without @)
       *     - `.legacy.description`: Bio
       *     - `.legacy.followers_count`: Follower count
       *     - `.legacy.profile_image_url_https`: Profile picture URL
       *
       *     **Media** (at `entries[].content.itemContent.tweet_results.result.legacy.extended_entities.media[]`):
       *     - `.type`: `photo`, `video`, or `animated_gif`
       *     - `.media_url_https`: Image URL or video thumbnail
       *     - `.video_info.variants[].url`: Video file URL
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example pid (tweet ID) is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  twitter_Search: {
    parameters: {
      query: {
        /** @description The search query text */
        query: string;
        /** @description The type of search results to return. Defaults to Top if not provided. */
        type?: "Top" | "Latest" | "People" | "Photos" | "Media" | "Lists";
        /** @description Pagination cursor from a previous response to get the next page of results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *
       *     **Pagination:**
       *     - `has_more`: `false` when this page returned no results: the signal to stop paginating (keep paging while `true`)
       *     - `result_count`: Number of results (tweets or users) on this page
       *     - `data.cursor.bottom`: Pass as `cursor` query param to get the next page of results
       *     - `data.cursor.top`: Cursor for the previous/newer page
       *
       *     **Search Results (type=Top):**
       *     - `data.result.timeline.instructions[0].entries[]`: Array of result entries (type `TimelineAddEntries`)
       *
       *     **People Carousel** (first entry when type=Top):
       *     - `entries[0].content.items[]`: Array of matched user profiles displayed in a carousel
       *     - `entries[0].content.header.text`: Will be `People`
       *     - Each user at `.item.itemContent.user_results.result`:
       *       - `.rest_id`: User's numeric ID
       *       - `.is_blue_verified`: Blue checkmark status
       *       - `.legacy.name`: Display name
       *       - `.legacy.screen_name`: Handle (username without @)
       *       - `.legacy.description`: Bio
       *       - `.legacy.followers_count`: Follower count
       *       - `.legacy.friends_count`: Following count
       *       - `.legacy.profile_image_url_https`: Profile picture URL
       *       - `.legacy.verified_type`: `Business` for business accounts
       *
       *     **Tweet Results** (subsequent entries):
       *     - Each tweet at `entries[].content.itemContent.tweet_results.result`:
       *       - `.rest_id`: Tweet ID
       *       - `.legacy.full_text`: Tweet text
       *       - `.legacy.created_at`: Timestamp
       *       - `.views.count`: View count (string)
       *       - `.legacy.favorite_count`: Likes
       *       - `.legacy.retweet_count`: Retweets
       *       - `.legacy.reply_count`: Replies
       *       - `.legacy.quote_count`: Quote tweets
       *       - `.legacy.bookmark_count`: Bookmarks
       *
       *     **Feedback Actions:**
       *     - `data.result.timeline.responseObjects.feedbackActions[]`: Internal feedback metadata (can ignore)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example query is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to search Twitter */
            error: string;
            /** @example search */
            endpoint?: string;
          };
        };
      };
    };
  };
  twitter_Followers: {
    parameters: {
      query: {
        /** @description The numeric user ID (rest_id) of the account to get followers for */
        user_id: string;
        /** @description Pagination cursor from a previous response to get the next page of results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *
       *     **Pagination:**
       *     - `data.cursor.bottom`: Pass as `cursor` query param to get the next page of followers
       *     - `data.cursor.top`: Cursor for the previous page
       *
       *     **Timeline Structure:**
       *     - `data.result.timeline.instructions[0]`: `TimelineClearCache` (internal, can ignore)
       *     - `data.result.timeline.instructions[1]`: `TimelineTerminateTimeline` direction Top
       *     - `data.result.timeline.instructions[2]`: `TimelineTerminateTimeline` direction Bottom: indicates no more results when present
       *     - `data.result.timeline.instructions[3].entries[]`: Array of follower entries (type `TimelineAddEntries`)
       *
       *     **Each Follower** (at `entries[].content.itemContent.user_results.result`):
       *     - `.rest_id`: User's numeric ID
       *     - `.is_blue_verified`: Whether user has a blue checkmark
       *     - `.legacy.name`: Display name
       *     - `.legacy.screen_name`: Handle (username without @)
       *     - `.legacy.description`: Bio
       *     - `.legacy.followers_count`: Follower count
       *     - `.legacy.friends_count`: Following count
       *     - `.legacy.statuses_count`: Total tweet count
       *     - `.legacy.favourites_count`: Total likes given
       *     - `.legacy.media_count`: Total media posts
       *     - `.legacy.listed_count`: Number of lists the user is on
       *     - `.legacy.created_at`: Account creation date
       *     - `.legacy.location`: Location set by user
       *     - `.legacy.profile_image_url_https`: Profile picture URL
       *     - `.legacy.profile_banner_url`: Banner image URL
       *     - `.legacy.protected`: Whether account is private
       *     - `.legacy.verified`: Legacy verified status
       *     - `.professional.professional_type`: `Creator` or `Business` (if applicable)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example user_id (rest_id) is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch Twitter followers */
            error: string;
            /** @example followers */
            endpoint?: string;
          };
        };
      };
    };
  };
  twitter_Followings: {
    parameters: {
      query: {
        /** @description The numeric user ID (rest_id) of the account to get followings for */
        user_id: string;
        /** @description Pagination cursor from a previous response to get the next page of results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *
       *     **Pagination:**
       *     - `data.cursor.bottom`: Pass as `cursor` query param to get the next page of followings
       *     - `data.cursor.top`: Cursor for the previous page
       *
       *     **Timeline Structure:**
       *     - `data.result.timeline.instructions[0]`: `TimelineClearCache` (internal, can ignore)
       *     - `data.result.timeline.instructions[1]`: `TimelineTerminateTimeline` direction Top
       *     - `data.result.timeline.instructions[2]`: `TimelineTerminateTimeline` direction Bottom: indicates no more results when present
       *     - `data.result.timeline.instructions[3].entries[]`: Array of following entries (type `TimelineAddEntries`)
       *
       *     **Each Following** (at `entries[].content.itemContent.user_results.result`):
       *     - `.rest_id`: User's numeric ID
       *     - `.is_blue_verified`: Whether user has a blue checkmark
       *     - `.legacy.name`: Display name
       *     - `.legacy.screen_name`: Handle (username without @)
       *     - `.legacy.description`: Bio
       *     - `.legacy.followers_count`: Follower count
       *     - `.legacy.friends_count`: Following count
       *     - `.legacy.statuses_count`: Total tweet count
       *     - `.legacy.favourites_count`: Total likes given
       *     - `.legacy.media_count`: Total media posts
       *     - `.legacy.listed_count`: Number of lists the user is on
       *     - `.legacy.created_at`: Account creation date
       *     - `.legacy.location`: Location set by user
       *     - `.legacy.profile_image_url_https`: Profile picture URL
       *     - `.legacy.profile_banner_url`: Banner image URL
       *     - `.legacy.protected`: Whether account is private
       *     - `.legacy.verified`: Legacy verified status
       *     - `.professional.professional_type`: `Creator` or `Business` (if applicable)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example user_id (rest_id) is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch Twitter followings */
            error: string;
            /** @example followings */
            endpoint?: string;
          };
        };
      };
    };
  };
  twitter_Quotes: {
    parameters: {
      query: {
        /** @description The tweet ID to get quotes for */
        pid: string;
        /** @description Pagination cursor from a previous response to get the next page of results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *
       *     **Pagination:**
       *     - `data.cursor.bottom`: Pass as `cursor` query param to get the next page of quotes
       *     - `data.cursor.top`: Cursor for the previous page
       *
       *     **Timeline Structure:**
       *     - `data.result.timeline.instructions[0].entries[]`: Array of quote tweet entries (type `TimelineAddEntries`)
       *
       *     **Each Quote Tweet** (at `entries[].content.itemContent.tweet_results.result`):
       *     - `.rest_id`: Tweet ID
       *     - `.legacy.full_text`: Tweet text
       *     - `.legacy.created_at`: When the quote tweet was posted
       *     - `.legacy.favorite_count`: Like count
       *     - `.legacy.retweet_count`: Retweet count
       *     - `.legacy.reply_count`: Reply count
       *     - `.legacy.quote_count`: Quote count
       *     - `.legacy.bookmark_count`: Bookmark count
       *     - `.legacy.lang`: Language code
       *     - `.legacy.is_quote_status`: Always `true` for quote tweets
       *     - `.legacy.quoted_status_id_str`: ID of the original quoted tweet
       *     - `.views.count`: View count
       *     - `.note_tweet.note_tweet_results.result.text`: Full expanded text (for long tweets)
       *
       *     **Quote Tweet Author** (at `.core.user_results.result`):
       *     - `.rest_id`: Author's numeric ID
       *     - `.is_blue_verified`: Whether author has a blue checkmark
       *     - `.legacy.name`: Display name
       *     - `.legacy.screen_name`: Handle (username without @)
       *     - `.legacy.description`: Bio
       *     - `.legacy.followers_count`: Follower count
       *     - `.legacy.profile_image_url_https`: Profile picture URL
       *     - `.professional.professional_type`: `Creator` or `Business` (if applicable)
       *
       *     **Quoted Original Tweet** (at `.quoted_status_result.result`):
       *     - Same structure as above: includes the original tweet's text, stats, author, and media
       *
       *     **Feedback Actions:**
       *     - `data.result.timeline.responseObjects.feedbackActions[]`: User feedback options (not helpful, not relevant, not credible)
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example pid (tweet ID) is required */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch tweet quotes */
            error: string;
            /** @example quotes */
            endpoint?: string;
          };
        };
      };
    };
  };
  twitter_Retweets: {
    parameters: {
      query: {
        /** @description The tweet ID to get retweeters for */
        pid: string;
        /** @description Pagination cursor from a previous response to get the next page of results */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *
       *     **Pagination:**
       *     - `data.cursor.bottom`: Pass as `cursor` query param to get the next page of retweeters
       *     - `data.cursor.top`: Cursor for the previous page
       *
       *     **Timeline Structure:**
       *     - `data.result.timeline.instructions[0].entries[]`: Array of retweeter entries (type `TimelineAddEntries`)
       *
       *     **Each Retweeter** (at `entries[].content.itemContent.user_results.result`):
       *     - `.rest_id`: User's numeric ID
       *     - `.is_blue_verified`: Whether user has a blue checkmark
       *     - `.legacy.name`: Display name
       *     - `.legacy.screen_name`: Handle (username without @)
       *     - `.legacy.description`: Bio
       *     - `.legacy.followers_count`: Follower count
       *     - `.legacy.friends_count`: Following count
       *     - `.legacy.statuses_count`: Total tweet count
       *     - `.legacy.favourites_count`: Total likes given
       *     - `.legacy.media_count`: Total media posts
       *     - `.legacy.listed_count`: Number of lists the user is on
       *     - `.legacy.created_at`: Account creation date
       *     - `.legacy.location`: Location set by user
       *     - `.legacy.profile_image_url_https`: Profile picture URL
       *     - `.legacy.profile_banner_url`: Banner image URL
       *     - `.legacy.protected`: Whether account is private
       *     - `.legacy.verified`: Legacy verified status
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example pid (tweet ID) is required */
            error: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Failed to fetch tweet retweets */
            error: string;
            /** @example retweets */
            endpoint?: string;
          };
        };
      };
    };
  };
  reddit_Subreddit_Details: {
    parameters: {
      query?: {
        /** @description Subreddit name. MUST be case sensitive. So 'AskReddit' not 'askreddit'. */
        subreddit?: string;
        /** @description Subreddit URL */
        url?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `subreddit_id`: Unique Reddit full-name ID for the subreddit (e.g. `t5_a7wuv`)
       *     - `display_name`: The subreddit's display name (case-sensitive)
       *     - `subscribers`: Total subscriber count
       *     - `weekly_active_users`: Users active in the past week
       *     - `weekly_contributions`: Content contributions in the past week
       *     - `description`: Subreddit's public description or tagline
       *     - `rules`: Full rules text for the subreddit
       *     - `icon_img`: URL of the subreddit's community icon
       *     - `created_at`: ISO 8601 timestamp when the subreddit was created
       *     - `credits_remaining`: How many API credits remain after this request
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example true */
            success: boolean;
            /** @example 33950256 */
            credits_remaining?: number;
            /** @example t5_a7wuv */
            subreddit_id: string;
            /** @example AbsoluteUnits */
            display_name: string;
            /** @example 1428398 */
            weekly_active_users?: number;
            /** @example 8923 */
            weekly_contributions?: number;
            /**
             * @example #ABSOLUTE UNITS
             *
             *     ---
             *
             *         Be in awe at the size of these lads
             *
             *     ---
             *
             *     ###[Check out our deep, well-reflected definitions of an absolute unit.](https://www.reddit.com/r/AbsoluteUnits/wiki/index)
             */
            rules?: string;
            /** @example Absolute Unit : an Animal or Public Figure, who is larger than we should normally expect. */
            description?: string;
            /** @example null */
            header_img?: string | null;
            /** @example https://styles.redditmedia.com/t5_a7wuv/styles/communityIcon_t3cspt08bl681.png?width=128&frame=1&auto=webp&s=6f7e59ccf1724bd6c8b3e0d2840c9b21297102c3 */
            icon_img?: string;
            /** @example 1923642 */
            subscribers: number;
            /** @example  */
            advertiser_category?: string;
            /** @example 2018-01-05T10:35:24.000Z */
            created_at?: string;
            /** @example  */
            submit_text?: string;
          };
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Either subreddit name or URL is required */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  reddit_Subreddit_Search: {
    parameters: {
      query: {
        /** @description Subreddit name (e.g. 'Fitness', not 'r/Fitness' or a full URL) */
        subreddit: string;
        /** @description Search query to find matching content */
        query?: string;
        /** @description Type of content to search for (default: posts). Response will only include the matching key */
        filter?: "posts" | "comments" | "media";
        /** @description Sort order. For posts/media: relevance, hot, top, new, comments. For comments: relevance, top, new */
        sort?: "relevance" | "hot" | "top" | "new" | "comments";
        /** @description Timeframe to filter results */
        timeframe?: "all" | "year" | "month" | "week" | "day" | "hour";
        /** @description Cursor for pagination. Get 'cursor' from previous response */
        cursor?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response with search results
       *
       *     **Key Response Fields:**
       *     - `data.posts[n].id`: Reddit fullname of the post (e.g. `t3_1o09lhe`)
       *     - `data.posts[n].title`: Title text of the post
       *     - `data.posts[n].url`: Full URL to the Reddit post
       *     - `data.posts[n].votes`: Net upvote count
       *     - `data.posts[n].num_comments`: Number of comments on the post
       *     - `data.posts[n].created_at_iso`: ISO 8601 creation timestamp
       *     - `data.posts[n].subreddit.name`: Name of the subreddit the post belongs to
       *     - `data.cursor`: Base64 pagination cursor: pass as `cursor` param to retrieve the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing or invalid parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Subreddit name is required (e.g. 'Fitness', not 'r/Fitness') */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  reddit_Subreddit_Posts: {
    parameters: {
      query: {
        /** @description Subreddit name */
        subreddit: string;
        /** @description Timeframe to get posts from. */
        timeframe?: "all" | "day" | "week" | "month" | "year";
        /** @description Sort order. */
        sort?: "best" | "hot" | "new" | "top" | "rising";
        /** @description After to get more posts. Get 'after' from previous response. */
        after?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.posts[n].id`: Short Reddit post ID
       *     - `data.posts[n].title`: Post title text
       *     - `data.posts[n].author`: Reddit username of the poster
       *     - `data.posts[n].subreddit`: Name of the subreddit
       *     - `data.posts[n].score`: Net upvote score
       *     - `data.posts[n].upvote_ratio`: Ratio of upvotes vs total votes (0–1)
       *     - `data.posts[n].num_comments`: Comment count
       *     - `data.posts[n].url`: Full URL to the post
       *     - `data.posts[n].created_utc`: Unix timestamp of post creation
       *     - `data.posts[n].is_video`: Whether the post contains a video
       *     - `data.after`: Pagination cursor: pass as `after` param for the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  reddit_Post_Comments: {
    parameters: {
      query: {
        /** @description Reddit post URL */
        url: string;
        /** @description Cursor to get more comments, or replies. */
        cursor?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.post.id`: Short Reddit ID of the post
       *     - `data.post.title`: Post title text
       *     - `data.post.author`: Reddit username of the original poster
       *     - `data.post.score`: Net upvote score of the post
       *     - `data.post.num_comments`: Total comment count
       *     - `data.comments[n].id`: Short ID of the comment
       *     - `data.comments[n].author`: Username of the commenter
       *     - `data.comments[n].body`: Plain text body of the comment
       *     - `data.comments[n].score`: Net upvote score of the comment
       *     - `data.comments[n].replies`: Nested reply tree with `items` and `more.cursor` for pagination
       *     - `data.more.cursor`: Comma-separated cursor IDs: pass as `cursor` param to load more top-level comments
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  reddit_Post_Transcript: {
    parameters: {
      query: {
        /** @description Reddit post URL or direct v.redd.it video URL */
        url: string;
        /** @description 2 letter language code. Defaults to en. */
        language?: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response containing the video transcript */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing required URL parameter */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Reddit post URL is required */
            error?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Invalid API key */
            error?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Insufficient credits */
            error?: string;
            /** @example 1 */
            required?: number;
            /** @example 0 */
            available?: number;
          };
        };
      };
    };
  };
  reddit_Search: {
    parameters: {
      query: {
        /** @description Search query */
        query: string;
        /** @description Sort by */
        sort?: "relevance" | "new" | "top" | "comment_count";
        /** @description Timeframe */
        timeframe?: "all" | "day" | "week" | "month" | "year";
        /** @description Used to paginate to next page */
        after?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.posts[n].id`: Short Reddit post ID
       *     - `data.posts[n].title`: Post title text
       *     - `data.posts[n].author`: Reddit username of the poster
       *     - `data.posts[n].subreddit`: Name of the subreddit where the post appears
       *     - `data.posts[n].score`: Net upvote score
       *     - `data.posts[n].upvote_ratio`: Ratio of upvotes to total votes (0–1)
       *     - `data.posts[n].num_comments`: Comment count
       *     - `data.posts[n].url`: Full URL to the post
       *     - `data.posts[n].is_video`: Whether the post contains native Reddit video
       *     - `data.after`: Pagination token: pass as `after` param for the next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  threads_Profile: {
    parameters: {
      query: {
        /** @description Threads username */
        handle: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.pk`: Unique user ID
       *     - `data.username`: Threads handle
       *     - `data.full_name`: Display name
       *     - `data.biography`: Profile bio text
       *     - `data.follower_count`: Total follower count
       *     - `data.is_verified`: Verification status
       *     - `data.profile_pic_url`: Profile picture URL
       *     - `data.bio_links`: External links listed in bio
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  threads_Posts: {
    parameters: {
      query: {
        /** @description Threads username */
        handle: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.posts[n].pk`: Post unique ID
       *     - `data.posts[n].user.username`: Author Threads handle
       *     - `data.posts[n].caption.text`: Post text content
       *     - `data.posts[n].code`: Short post code used in URL construction
       *     - `data.posts[n].like_count`: Number of likes
       *     - `data.posts[n].taken_at`: Unix timestamp of post
       *     - `data.posts[n].text_post_app_info.reshare_count`: Reshare count
       *     - `data.posts[n].text_post_app_info.direct_reply_count`: Reply count
       *     - `data.posts[n].url`: Full URL to the post
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  threads_Post: {
    parameters: {
      query: {
        /** @description The URL of the post to get */
        url: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.post.pk`: Post unique ID
       *     - `data.post.user.username`: Author Threads handle
       *     - `data.post.caption.text`: Post text content
       *     - `data.post.like_count`: Like count
       *     - `data.post.view_counts`: Number of views
       *     - `data.post.taken_at`: Unix timestamp
       *     - `data.post.text_post_app_info.direct_reply_count`: Reply count
       *     - `data.post.text_post_app_info.repost_count`: Repost count
       *     - `data.comments`: Array of comment objects with text and user info
       *     - `data.relatedPosts`: Array of algorithmically related posts
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  threads_Search_by_Keyword: {
    parameters: {
      query: {
        /** @description Keyword to search for */
        query: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `posts[n].id`: Post unique ID
       *     - `posts[n].user.username`: Author Threads handle
       *     - `posts[n].user.is_verified`: Author verification status
       *     - `posts[n].caption.text`: Post text content
       *     - `posts[n].like_count`: Like count
       *     - `posts[n].taken_at`: Unix timestamp
       *     - `posts[n].text_post_app_info.reshare_count`: Reshare count
       *     - `posts[n].text_post_app_info.direct_reply_count`: Reply count
       *     - `posts[n].code`: Post short code
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example true */
            success: boolean;
            posts: {
              /** @example 3623717915788120086_63263616227 */
              id: string;
              /** @example 3623717915788120086 */
              pk: string;
              user: {
                friendship_status?: null;
                /** @example 63263616227 */
                pk: string;
                /** @example https://instagram.fcae1-1.fna.fbcdn.net/v/t51.2885-19/482795192_3376548399146227_6340123271493467395_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fcae1-1.fna.fbcdn.net&_nc_cat=1&_nc_oc=Q6cZ2QFfhhbPZWsd0GfT28z5WO_4qqp0J0TZeg_2rJ1msbR_DS_f6Lu6JdkORdUt7DIkVes&_nc_ohc=SCH32yXVc04Q7kNvwHfg6hS&_nc_gid=DuGtmKyvvrTkwZuS-75tqg&edm=APs17CUBAAAA&ccb=7-5&oh=00_AfEGgKt7JWHgrAUYwyj3koqHwPnipcqDXEiz-YsAN4c3Fg&oe=681B5320&_nc_sid=10d13b */
                profile_pic_url: string;
                /** @example shams */
                username: string;
                /** @example 63263616227 */
                id: string;
                transparency_label?: null;
                transparency_product?: null;
                /** @example false */
                transparency_product_enabled: boolean;
                /** @example true */
                is_verified: boolean;
                /** @example false */
                text_post_app_is_private: boolean;
                /** @example true */
                has_onboarded_to_text_post_app: boolean;
              };
              text_post_app_info: {
                show_header_follow?: null;
                is_markup?: null;
                custom_feed_preview_info?: null;
                link_preview_attachment?: null;
                linked_inline_media?: null;
                /** @example  */
                special_effects_enabled_str: string;
                text_fragments: {
                  fragments: {
                    /** @example plaintext */
                    fragment_type: string;
                    link_fragment?: null;
                    mention_fragment?: null;
                    /** @example BREAKING: Gregg Popovich will no longer be Head Coach of the San Antonio Spurs and is transitioning full-time to Team President, sources told ESPN. The iconic Popovich is a Basketball Hall of Famer, the NBA’s all-time winningest coach, and led the Spurs to five championships. */
                    plaintext: string;
                    tag_fragment?: null;
                    linkified_web_url?: null;
                    styling_info?: null;
                  }[];
                };
                /** @example 260 */
                reshare_count: number;
                /** @example 75 */
                direct_reply_count: number;
                /** @example 200 */
                repost_count: number;
                /** @example 59 */
                quote_count: number;
                share_info: {
                  /** @example true */
                  quoted_attachment_author_attribution_allowed: boolean;
                  /** @example false */
                  quoted_attachment_post_unavailable: boolean;
                  quoted_attachment_post?: null;
                  quoted_post?: null;
                  reposted_post?: null;
                };
                reply_to_author?: null;
                /** @example everyone */
                reply_control: string;
                private_reply_partner?: null;
                self_thread_count?: null;
                tag_header?: null;
                root_post_author?: null;
                pinned_post_info?: null;
                related_trends_info?: null;
                /** @example false */
                is_reply: boolean;
                /** @example false */
                is_post_unavailable: boolean;
                post_unavailable_reason?: null;
                hush_info?: null;
              };
              is_paid_partnership?: null;
              audio?: null;
              caption: {
                /** @example BREAKING: Gregg Popovich will no longer be Head Coach of the San Antonio Spurs and is transitioning full-time to Team President, sources told ESPN. The iconic Popovich is a Basketball Hall of Famer, the NBA’s all-time winningest coach, and led the Spurs to five championships. */
                text: string;
                /** @example 17901829044168955 */
                pk: string;
                has_translation?: null;
              };
              /** @example false */
              caption_is_edited: boolean;
              transcription_data?: null;
              carousel_media?: null;
              /** @example DJKCD7AxRAW */
              code: string;
              image_versions2: {
                candidates: unknown[];
              };
              /** @example 612 */
              original_height: number;
              /** @example 612 */
              original_width: number;
              accessibility_caption?: null;
              video_versions?: null;
              has_audio?: null;
              /** @example 19 */
              media_type: number;
              caption_add_on?: null;
              giphy_media_info?: null;
              media_overlay_info?: null;
              sharing_friction_info: {
                /** @example false */
                should_have_sharing_friction: boolean;
                sharing_friction_payload?: null;
              };
              /** @example 4093 */
              like_count: number;
              metaPlace?: null;
              meta_place?: null;
              gen_ai_detection_method?: null;
              /** @example 1746200860 */
              taken_at: number;
              /** @example eyJ2ZXJzaW9uIjo1LCJwYXlsb2FkIjp7ImlzX2FuYWx5dGljc190cmFja2VkIjp0cnVlLCJ1dWlkIjoiYjgzMzc1NDA2MzU4NDg2OGIyMTFlZDc0NDZkYjdiNDUzNjIzNzE3OTE1Nzg4MTIwMDg2In0sInNpZ25hdHVyZSI6IiJ9 */
              organic_tracking_token: string;
              logging_info_token?: null;
              /** @example false */
              like_and_view_counts_disabled: boolean;
            }[];
          };
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  threads_Search_Users: {
    parameters: {
      query: {
        /** @description Username to search for */
        query: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.users[n].username`: Threads handle
       *     - `data.users[n].pk`: User unique ID
       *     - `data.users[n].full_name`: Display name
       *     - `data.users[n].is_verified`: Verification status
       *     - `data.users[n].profile_pic_url`: Profile picture URL
       *     - `data.users[n].is_active_on_text_post_app`: Whether user is active on Threads
       *     - `data.users[n].has_onboarded_to_text_post_app`: Whether user has set up Threads
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  google_Search: {
    parameters: {
      query: {
        /** @description Search query */
        query: string;
        /** @description 2 letter country code, ie US, UK, CA, etc This will show results from that country */
        region?: string;
        /** @description Filter results by how recently they were posted */
        date_posted?:
          "last-hour" | "last-day" | "last-week" | "last-month" | "last-year";
        /** @description Page number to retrieve, for paginating through results. Must be between 1 and 11. Use the next-page indicator in the response to walk pages; each page is a separate request and costs 1 credit. */
        page?: number;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `data.results[n].title`: Page title from search result
       *     - `data.results[n].url`: URL of the result page
       *     - `data.results[n].description`: Snippet text from the search result
       *     - `credits_used`: Number of credits consumed by the request
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Invalid parameters or missing required fields */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Missing required parameter: handle */
            error: string;
            endpoint?: string;
            credits_required?: number;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Invalid API key */
            error: string;
            /** @example https://docs.sociavault.com/authentication */
            docs?: string;
          };
        };
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Insufficient credits */
            error: string;
            /**
             * @description Credits required for this request
             * @example 1
             */
            required: number;
            /**
             * @description Credits currently available
             * @example 0
             */
            available: number;
          };
        };
      };
      /** @description Internal Server Error - Service configuration or processing error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example Service configuration error */
            error: string;
          };
        };
      };
    };
  };
  pinterest_Search: {
    parameters: {
      query: {
        /** @description Search query */
        query: string;
        /** @description Cursor for pagination */
        cursor?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `pins[n].id`: Pin unique ID
       *     - `pins[n].url`: Full URL to the pin
       *     - `pins[n].title`: Pin title
       *     - `pins[n].description`: Pin description text
       *     - `pins[n].images`: Image size variants (170x, 236x, 474x, 736x, orig)
       *     - `pins[n].pinner.username`: Pinner's username
       *     - `pins[n].board.name`: Board the pin belongs to
       *     - `pins[n].created_at`: Creation timestamp
       *     - `cursor`: Pagination cursor for the next page of results
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing or invalid parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Search query is required */
            error?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  pinterest_Pin: {
    parameters: {
      query: {
        /** @description Pinterest pin URL */
        url: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `entityId`: Pin unique ID
       *     - `title`: Pin title
       *     - `description`: Full pin description text
       *     - `link`: External destination URL
       *     - `domain`: Source domain of the linked content
       *     - `pinner.username`: Pinner's handle
       *     - `pinner.followerCount`: Pinner's follower count
       *     - `aggregatedPinData.aggregatedStats.saves`: Total save count
       *     - `repinCount`: Number of repins
       *     - `createdAt`: Pin creation timestamp
       *     - `board.name`: Board name the pin belongs to
       *     - `images_474x.url`: Medium resolution image URL
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing or invalid parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Pinterest pin URL is required */
            error?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  pinterest_UserBoards: {
    parameters: {
      query: {
        /** @description The username of the user to get boards for */
        handle: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `boards[n].id`: Board unique ID
       *     - `boards[n].name`: Board name
       *     - `boards[n].url`: Full URL to the board
       *     - `boards[n].description`: Board description text
       *     - `boards[n].pin_count`: Number of pins on the board
       *     - `boards[n].follower_count`: Board follower count
       *     - `boards[n].created_at`: Board creation timestamp
       *     - `boards[n].owner.username`: Board owner's handle
       *     - `boards[n].image_cover_hd_url`: Board cover image URL
       *     - `cursor`: Pagination cursor for next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing or invalid parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example User handle is required */
            error?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  pinterest_Board: {
    parameters: {
      query: {
        /** @description The URL of the board to get */
        url: string;
        /** @description The cursor to get the next page of results */
        cursor?: string;
        /** @description Set to true for a trimmed down version of the response */
        trim?: boolean;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /**
       * @description Successful response
       *
       *     **Key Response Fields:**
       *     - `pins[n].id`: Pin unique ID
       *     - `pins[n].title`: Pin title
       *     - `pins[n].description`: Pin description text
       *     - `pins[n].link`: External destination URL
       *     - `pins[n].domain`: Source domain
       *     - `pins[n].images`: Image size variants
       *     - `pins[n].pinner.username`: Pinner handle
       *     - `pins[n].aggregated_pin_data.aggregated_stats.saves`: Total saves count
       *     - `pins[n].board.name`: Parent board name
       *     - `cursor`: Pagination cursor for next page
       */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": unknown;
        };
      };
      /** @description Bad Request - Missing or invalid parameters */
      400: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /** @example false */
            success?: boolean;
            /** @example Board URL is required */
            error?: string;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Payment Required - Insufficient credits */
      402: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Internal Server Error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
  get_credits: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description Successful response */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "application/json": {
            /**
             * @description Remaining credits available
             * @example 950
             */
            credits: number;
            /**
             * @description Billing state of the account. `free` is the default for every new account, including accounts that still hold their signup credits, and remains the value until a credit pack is purchased. `active` means a credit pack has been purchased on this account. These are the only two values the API returns.
             * @example active
             * @enum {string}
             */
            subscriptionStatus: "free" | "active";
            /**
             * @description Stripe Checkout Session ID of the most recent credit pack purchase, or null if there has not been one. Despite the field name this is a checkout session (cs_...), not a Stripe subscription - credit packs are one-time purchases.
             * @example cs_live_a1B2c3D4e5F6g7H8i9J0k1L2m3N4o5P6q7R8s9T0u1V2w3X4y5Z6
             */
            subscriptionId?: string | null;
          };
        };
      };
      /** @description Unauthorized - Invalid or missing API key */
      401: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description User not found */
      404: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
      /** @description Server error */
      500: {
        headers: {
          [name: string]: unknown;
        };
        content?: never;
      };
    };
  };
}
