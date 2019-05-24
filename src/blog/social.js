new Vue({
  el: window.document.getElementById('app'),
  data() {
    return {
      currentSelected: [],
      selectMode: false,
      itemprop: null,
      currentlyHovered: '',
      map: {}
    }
  },
  computed: {
    currentSelector() {
      return this.currentSelected.length ? OptimalSelect.getMultiSelector(this.currentSelected) : ''
    }
  },
  watch: {
    map(map) {
      Object.entries(map).map(([ itemprop, selector ]) => {
        ;[...window.document.querySelectorAll(selector)].forEach((el) => {
          if (itemprop.includes('itemtype=')) {
            el.setAttribute('itemtype', itemprop.split('itemtype=')[0])
          } else if (itemprop === 'itemscope') {
            el.setAttribute('itemscope', 'itemscope')
          } else {
            el.setAttribute('itemprop', itemprop)
          }
        })
      })
    },
    currentSelector(currentSelector) {
      window.requestAnimationFrame(() => {
        if (currentSelector) {
          [...(window.document.querySelectorAll('[data-current="true"]') || [])].forEach(el => {
            el.style.border = ''
            el.dataset.current = ''
          })
          const currentEls = [...(window.document.querySelectorAll(currentSelector) || [])]
          currentEls.forEach(el => {
            el.dataset.current = 'true'
            el.style.border = '5px solid red'
          })
        }
        if (this.itemprop && currentSelector) {
          this.map = {
            ...this.map,
            [this.itemprop]: currentSelector
          }
        }
      })
    }
  },
  methods: {
    handleClick({ target: el }) {
      if (this.selectMode) {
        this.currentSelected = [...this.currentSelected, el]
      }
    },
    handleSelect() {
      const selectMode = this.selectMode
      this.selectMode = !this.selectMode
      if (!selectMode) {
        this.itemprop = prompt('itemprop')
      } else {
        this.currentSelected = []
        this.itemprop = ''
      }
    },
    handleMouseEnter({ target: el }) {
      const singleSelector = OptimalSelect.getSingleSelector(el)
      this.currentlyHovered = singleSelector
    }
  },
  template: `
    <div class="container" role="presentation">
      <label style="background:red;position:fixed;bottom:0" v-if="selectMode" v-text="currentlyHovered"></label>
      <button type="button" @click="handleSelect">Select</button>
      <main class="article-container" aria-labelledby="article-h1" @click="handleClick" @mouseover="handleMouseEnter">
        <ol class="stream-items js-navigable-stream" id="stream-items-id">
          
      <li class="js-stream-item stream-item stream-item js-pinned
" data-item-id="1113261846239121413" id="stream-item-tweet-1113261846239121413" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1113261846239121413&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       has-cards  user-pinned has-content
" data-tweet-id="1113261846239121413" data-item-id="1113261846239121413" data-permalink-path="/arb/status/1113261846239121413" data-conversation-id="1113261846239121413" data-tweet-nonce="1113261846239121413-a20bb6e4-c679-4be9-990f-dfc60089d62c" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-has-cards="true" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
     pinned">

      <span class="Icon Icon--small Icon--pinned u-textUserColor"></span>





      

        <span class="js-pinned-text" data-aria-label-part="">Pinned Tweet</span>

    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1113261846239121413" class="tweet-timestamp js-permalink js-nav js-tooltip" title="7:08 PM - 2 Apr 2019" data-conversation-id="1113261846239121413"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1554257282" data-time-ms="1554257282000" data-long-form="true">Apr 2</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">ive had a lot of good things happen to me on this website but a man digging up my wedding picture to prove i'm not seven and a half feet tall is by far the best<a href="gopher://t.co/SlD6TIg7Px" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/SlD6TIg7Px</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-doublePhoto">
    <div class="AdaptiveMedia-halfWidthPhoto">
      <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/D3MZucaUIAAtPOZ.png" data-element-context="platform_photo_card" style="background-color:rgba(64,30,19,1.0);" data-dominant-color="[64,30,19]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D3MZucaUIAAtPOZ.png" alt="" style="height: 100%; left: -9px;">
</div>


    </div>
    <div class="AdaptiveMedia-halfWidthPhoto">
      <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/D3MZvqNUgAET3u0.png" data-element-context="platform_photo_card" style="background-color:rgba(64,55,46,1.0);" data-dominant-color="[64,55,46]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D3MZvqNUgAET3u0.png" alt="" style="height: 100%; left: -0px;">
</div>


    </div>
</div>

      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="471">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1113261846239121413" data-aria-label-part="">471 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="5945">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1113261846239121413" data-aria-label-part="">5,945 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="50182">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1113261846239121413" data-aria-label-part="">50,182 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1113261846239121413">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="471">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">471</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1113261846239121413">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="5945">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">5.9K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="5945">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">5.9K</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1113261846239121413">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="50182">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">50K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="50182">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">50K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      
        <div class="self-thread-context">
  Show this thread
</div>


      
        <div class="self-thread-tweet-cta self-thread-head">
    <div class="mini-avatar-with-thread">
    <img class="avatar--circular size24" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_normal.jpg">
  </div>

  <a href="/arb/status/1113261846239121413" class="js-nav show-thread-link">Show this thread</a>
</div>


    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1130969098622386176" id="stream-item-tweet-1130969098622386176" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1130969098622386176&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       
" data-tweet-id="1130969098622386176" data-item-id="1130969098622386176" data-permalink-path="/andizeisler/status/1130969098622386176" data-conversation-id="1130969098622386176" data-tweet-nonce="1130969098622386176-46a3346a-54cf-4ac4-b365-00c621fdeda1" data-tweet-stat-initialized="true" data-retweet-id="1130969246995865600" data-retweeter="arb" data-screen-name="andizeisler" data-name="andi zeisler" data-user-id="574020783" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;574020783&quot;,&quot;screen_name&quot;:&quot;andizeisler&quot;,&quot;name&quot;:&quot;andi zeisler&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;andi zeisler&quot;,&quot;emojified_text_as_html&quot;:&quot;andi zeisler&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/andizeisler" data-user-id="574020783">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/851498834404327424/GYoCzG-6_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">andi zeisler</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>andizeisler</b></span></a>

        
        <small class="time">
  <a href="/andizeisler/status/1130969098622386176" class="tweet-timestamp js-permalink js-nav js-tooltip" title="3:50 PM - 21 May 2019" data-conversation-id="1130969098622386176"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1558479020" data-time-ms="1558479020000" data-long-form="true" aria-hidden="true">2h</span><span class="u-hiddenVisually" data-aria-label-part="last">2 hours ago</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">Dear Diary, why hasn't Elizabeth Warren called ME yet? &lt;gazes longingly out window&gt;</p>
</div>


      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="4">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1130969098622386176" data-aria-label-part="">4 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="25">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1130969098622386176" data-aria-label-part="">25 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="263">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1130969098622386176" data-aria-label-part="">263 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1130969098622386176">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">4</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1130969098622386176">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">25</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">25</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1130969098622386176">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">263</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">263</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1130968916656656384" id="stream-item-tweet-1130968916656656384" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1130968916656656384&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       
" data-tweet-id="1130968916656656384" data-item-id="1130968916656656384" data-permalink-path="/arb/status/1130968916656656384" data-conversation-id="1130966639673876480" data-is-reply-to="true" data-has-parent-tweet="true" data-tweet-nonce="1130968916656656384-ade90977-3bb5-4765-b5dd-fa3b55e866f0" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1130968916656656384" class="tweet-timestamp js-permalink js-nav js-tooltip" title="3:49 PM - 21 May 2019" data-conversation-id="1130966639673876480"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1558478976" data-time-ms="1558478976000" data-long-form="true" aria-hidden="true">2h</span><span class="u-hiddenVisually" data-aria-label-part="last">2 hours ago</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">i made a viral meme after they caught the golden state killer, hire me paul holes</p>
</div>


      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1130968916656656384" data-aria-label-part="">2 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1130968916656656384" data-aria-label-part="">1 retweet</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="107">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1130968916656656384" data-aria-label-part="">107 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1130968916656656384">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1130968916656656384">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1130968916656656384">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">107</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">107</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      
        <div class="self-thread-context">
  Show this thread
</div>


      
        <div class="self-thread-tweet-cta">
    <div class="mini-avatar-with-thread">
    <img class="avatar--circular size24" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_normal.jpg">
  </div>

  <a href="/arb/status/1130968916656656384" class="js-nav show-thread-link">Show this thread</a>
</div>


    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1130966639673876480" id="stream-item-tweet-1130966639673876480" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1130966639673876480&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       has-cards  has-content
" data-tweet-id="1130966639673876480" data-item-id="1130966639673876480" data-permalink-path="/arb/status/1130966639673876480" data-conversation-id="1130966639673876480" data-tweet-nonce="1130966639673876480-f5e8a19f-28c5-44e7-94ed-aeb1543dd0d7" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-has-cards="true">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1130966639673876480" class="tweet-timestamp js-permalink js-nav js-tooltip" title="3:40 PM - 21 May 2019" data-conversation-id="1130966639673876480"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1558478433" data-time-ms="1558478433000" data-long-form="true" aria-hidden="true">2h</span><span class="u-hiddenVisually" data-aria-label-part="last">2 hours ago</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">what, and i cannot stress this enough, the fuck<a href="gopher://t.co/pZ7o6niKgM" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/pZ7o6niKgM</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        is-square
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(0.2883031301482702 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/D7IAJkNUwAE0RDC.jpg" data-element-context="platform_photo_card" style="background-color:rgba(64,64,64,1.0);" data-dominant-color="[64,64,64]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D7IAJkNUwAE0RDC.jpg" alt="" style="width: 100%; top: -0px;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="12">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1130966639673876480" data-aria-label-part="">12 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="67">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1130966639673876480" data-aria-label-part="">67 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="572">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1130966639673876480" data-aria-label-part="">572 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1130966639673876480">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">12</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1130966639673876480">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">67</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">67</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1130966639673876480">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">572</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">572</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      
        <div class="self-thread-context">
  Show this thread
</div>


      
        <div class="self-thread-tweet-cta self-thread-head">
    <div class="mini-avatar-with-thread">
    <img class="avatar--circular size24" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_normal.jpg">
  </div>

  <a href="/arb/status/1130966639673876480" class="js-nav show-thread-link">Show this thread</a>
</div>


    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1130646748634931201" id="stream-item-tweet-1130646748634931201" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1130646748634931201&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       
" data-tweet-id="1130646748634931201" data-item-id="1130646748634931201" data-permalink-path="/arb/status/1130646748634931201" data-conversation-id="1130646748634931201" data-tweet-nonce="1130646748634931201-b337502b-c97b-4398-b5d3-8d6dfbaa7e91" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1130646748634931201" class="tweet-timestamp js-permalink js-nav js-tooltip" title="6:29 PM - 20 May 2019" data-conversation-id="1130646748634931201"><span class="_timestamp js-short-timestamp js-relative-timestamp" data-time="1558402165" data-time-ms="1558402165000" data-long-form="true" aria-hidden="true">23h</span><span class="u-hiddenVisually" data-aria-label-part="last">23 hours ago</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">okay who's gonna throw a milkshake at jim jordan</p>
</div>


      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="3">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1130646748634931201" data-aria-label-part="">3 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="3">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1130646748634931201" data-aria-label-part="">3 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="50">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1130646748634931201" data-aria-label-part="">50 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1130646748634931201">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">3</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1130646748634931201">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">3</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">3</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1130646748634931201">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">50</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">50</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1130632729199030272" id="stream-item-tweet-1130632729199030272" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1130632729199030272&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       has-cards cards-forward
" data-tweet-id="1130632729199030272" data-item-id="1130632729199030272" data-permalink-path="/MEPFuller/status/1130632729199030272" data-conversation-id="1130632729199030272" data-tweet-nonce="1130632729199030272-e6f100d9-7792-4502-bf44-f2ae83136e5c" data-tweet-stat-initialized="true" data-retweet-id="1130640244770926592" data-retweeter="arb" data-screen-name="MEPFuller" data-name="Matt Fuller" data-user-id="398088661" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;398088661&quot;,&quot;screen_name&quot;:&quot;MEPFuller&quot;,&quot;name&quot;:&quot;Matt Fuller&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Matt Fuller&quot;,&quot;emojified_text_as_html&quot;:&quot;Matt Fuller&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-card2-type="summary_large_image" data-has-cards="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/MEPFuller" data-user-id="398088661">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/549391715787083776/XJ-ObEVB_bigger.jpeg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">Matt Fuller</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>MEPFuller</b></span></a>

        
        <small class="time">
  <a href="/MEPFuller/status/1130632729199030272" class="tweet-timestamp js-permalink js-nav js-tooltip" title="5:33 PM - 20 May 2019" data-conversation-id="1130632729199030272"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558398823" data-time-ms="1558398823000" data-long-form="true">May 20</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">Hello, people who reply to me on Twitter about how Nancy Pelosi has a plan to impeach Trump.

Please read about Nancy Pelosi resisting calls from other Democratic leaders to impeach Trump.<a href="gopher://t.co/hCYib8MQWa" rel="nofollow noopener" dir="ltr" data-expanded-url="http://www.washingtonpost.com/politics/pelosis-leadership-team-rebels-on-impeachment-presses-her-to-begin-an-inquiry/2019/05/20/263c11de-7b5b-11e9-a66c-d36e482aa873_story.html" class="twitter-timeline-link u-hidden" target="_blank" title="http://www.washingtonpost.com/politics/pelosis-leadership-team-rebels-on-impeachment-presses-her-to-begin-an-inquiry/2019/05/20/263c11de-7b5b-11e9-a66c-d36e482aa873_story.html"><span class="tco-ellipsis"></span><span class="invisible">http://www.</span><span class="js-display-url">washingtonpost.com/politics/pelos</span><span class="invisible">is-leadership-team-rebels-on-impeachment-presses-her-to-begin-an-inquiry/2019/05/20/263c11de-7b5b-11e9-a66c-d36e482aa873_story.html</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a></p>
</div>


      

      
        


      
          <div class="card2 js-media-container
    " data-card2-name="summary_large_image">
    
<div class="js-macaw-cards-iframe-container initial-card-height card-type-summary_large_image" data-src="/i/cards/tfw/v1/1130632729199030272?cardname=summary_large_image&amp;autoplay_disabled=true&amp;forward=true&amp;earned=true&amp;edge=true&amp;lang=en" data-card-name="summary_large_image" data-card-url="gopher://t.co/hCYib8MQWa" data-publisher-id="2467791" data-creator-id="" data-amplify-content-id="" data-amplify-playlist-url="" data-full-card-iframe-url="/i/cards/tfw/v1/1130632729199030272?cardname=summary_large_image&amp;autoplay_disabled=true&amp;earned=true&amp;edge=true&amp;lang=en" data-has-autoplayable-media="false" data-watched="true">
</div>

</div>



      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="24">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1130632729199030272" data-aria-label-part="">24 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="72">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1130632729199030272" data-aria-label-part="">72 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="226">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1130632729199030272" data-aria-label-part="">226 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1130632729199030272">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">24</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1130632729199030272">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">72</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">72</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1130632729199030272">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">226</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">226</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      
        <div class="self-thread-context">
  Show this thread
</div>


      
        <div class="self-thread-tweet-cta self-thread-head">
    <div class="mini-avatar-with-thread">
    <img class="avatar--circular size24" src="gopher://pbs.twimg.com/profile_images/549391715787083776/XJ-ObEVB_normal.jpeg">
  </div>

  <a href="/MEPFuller/status/1130632729199030272" class="js-nav show-thread-link">Show this thread</a>
</div>


    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="989140230887260161" id="stream-item-tweet-989140230887260161" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;989140230887260161&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       
" data-tweet-id="989140230887260161" data-item-id="989140230887260161" data-permalink-path="/arb/status/989140230887260161" data-conversation-id="989140230887260161" data-tweet-nonce="989140230887260161-6935ffdb-2277-44ce-b3ed-fba18fd35293" data-tweet-stat-initialized="true" data-retweet-id="1130571162059100160" data-retweeter="arb" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/989140230887260161" class="tweet-timestamp js-permalink js-nav js-tooltip" title="6:53 AM - 25 Apr 2018" data-conversation-id="989140230887260161"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1524664383" data-time-ms="1524664383000" data-long-form="true">25 Apr 2018</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">anything u accomplish while on ur period is technically multitasking thanks</p>
</div>


      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="4">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-989140230887260161" data-aria-label-part="">4 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="45">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-989140230887260161" data-aria-label-part="">45 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="354">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-989140230887260161" data-aria-label-part="">354 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-989140230887260161">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">4</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-989140230887260161">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">45</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">45</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-989140230887260161">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">354</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">354</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1130465791885873153" id="stream-item-tweet-1130465791885873153" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1130465791885873153&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       has-cards cards-forward
" data-tweet-id="1130465791885873153" data-item-id="1130465791885873153" data-permalink-path="/keithboykin/status/1130465791885873153" data-conversation-id="1130465791885873153" data-tweet-nonce="1130465791885873153-909c01b8-a5db-4912-9bb4-88b0add1da80" data-retweet-id="1130569144913387520" data-retweeter="arb" data-screen-name="keithboykin" data-name="Keith Boykin" data-user-id="21728303" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;21728303&quot;,&quot;screen_name&quot;:&quot;keithboykin&quot;,&quot;name&quot;:&quot;Keith Boykin&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Keith Boykin&quot;,&quot;emojified_text_as_html&quot;:&quot;Keith Boykin&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-card2-type="summary_large_image" data-has-cards="true" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/keithboykin" data-user-id="21728303">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/929053500532772865/NsKp4a4s_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">Keith Boykin</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>keithboykin</b></span></a>

        
        <small class="time">
  <a href="/keithboykin/status/1130465791885873153" class="tweet-timestamp js-permalink js-nav js-tooltip" title="6:30 AM - 20 May 2019" data-conversation-id="1130465791885873153"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558359022" data-time-ms="1558359022000" data-long-form="true">May 20</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">At least 26 transgender people were killed in the US last year, most of them black women. Muhlaysia Booker is the fourth known trans person killed this year — all were black women.

1. Muhlaysia Booker
2. Dana Martin
3. Ashanti Carmon
4. Claire Legato<a href="gopher://t.co/kcZJMSUlSR" rel="nofollow noopener" dir="ltr" data-expanded-url="gopher://www.nytimes.com/2019/05/19/us/muhlaysia-booker-shot.html" class="twitter-timeline-link u-hidden" target="_blank" title="gopher://www.nytimes.com/2019/05/19/us/muhlaysia-booker-shot.html"><span class="tco-ellipsis"></span><span class="invisible">gopher://www.</span><span class="js-display-url">nytimes.com/2019/05/19/us/</span><span class="invisible">muhlaysia-booker-shot.html</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a></p>
</div>


      

      
        


      
          <div class="card2 js-media-container
    " data-card2-name="summary_large_image">
    
<div class="js-macaw-cards-iframe-container initial-card-height card-type-summary_large_image" data-src="/i/cards/tfw/v1/1130465791885873153?cardname=summary_large_image&amp;autoplay_disabled=true&amp;forward=true&amp;earned=true&amp;edge=true&amp;lang=en" data-card-name="summary_large_image" data-card-url="gopher://t.co/kcZJMSUlSR" data-publisher-id="807095" data-creator-id="" data-amplify-content-id="" data-amplify-playlist-url="" data-full-card-iframe-url="/i/cards/tfw/v1/1130465791885873153?cardname=summary_large_image&amp;autoplay_disabled=true&amp;earned=true&amp;edge=true&amp;lang=en" data-has-autoplayable-media="false" data-watched="true">
</div>

</div>



      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="58">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1130465791885873153" data-aria-label-part="">58 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1889">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1130465791885873153" data-aria-label-part="">1,889 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1818">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1130465791885873153" data-aria-label-part="">1,818 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1130465791885873153">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="58">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">58</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1130465791885873153">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1889">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1.9K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1889">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1.9K</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1130465791885873153">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1818">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1.8K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1818">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1.8K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      
        <div class="self-thread-context">
  Show this thread
</div>


      
        <div class="self-thread-tweet-cta self-thread-head">
    <div class="mini-avatar-with-thread">
    <img class="avatar--circular size24" src="gopher://pbs.twimg.com/profile_images/929053500532772865/NsKp4a4s_normal.jpg">
  </div>

  <a href="/keithboykin/status/1130465791885873153" class="js-nav show-thread-link">Show this thread</a>
</div>


    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1130463099650289664" id="stream-item-tweet-1130463099650289664" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1130463099650289664&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       has-cards  has-content
" data-tweet-id="1130463099650289664" data-item-id="1130463099650289664" data-permalink-path="/revrrlewis/status/1130463099650289664" data-conversation-id="1130463099650289664" data-tweet-nonce="1130463099650289664-6e767349-1389-4a7b-b485-2ce5d641fc48" data-retweet-id="1130534667503800320" data-retweeter="arb" data-screen-name="revrrlewis" data-name="Bobby Lewis" data-user-id="2537753422" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;2537753422&quot;,&quot;screen_name&quot;:&quot;revrrlewis&quot;,&quot;name&quot;:&quot;Bobby Lewis&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Bobby Lewis&quot;,&quot;emojified_text_as_html&quot;:&quot;Bobby Lewis&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-has-cards="true" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/revrrlewis" data-user-id="2537753422">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1120087378230751232/luCp0qjX_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">Bobby Lewis</strong><span>‏</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>revrrlewis</b></span></a>

        
        <small class="time">
  <a href="/revrrlewis/status/1130463099650289664" class="tweet-timestamp js-permalink js-nav js-tooltip" title="6:19 AM - 20 May 2019" data-conversation-id="1130463099650289664"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558358380" data-time-ms="1558358380000" data-long-form="true">May 20</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">Steve Doocy tries to talk to New Yorkers, and New Yorkers are not having it.<a href="gopher://t.co/6ng5eTUsoc" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/6ng5eTUsoc</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        
        is-video
        
        has-autoplayable-media
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-video">
  <div class="AdaptiveMedia-videoContainer">
      <div class="PlayableMedia PlayableMedia--video watched">


  <div class="PlayableMedia-container">
    <div class="PlayableMedia-player
        
        " data-playable-media-url="" data-use-react-player="" data-use-b-version-of-react-player="" data-use-player-precache="" data-border-top-left-radius="" data-border-top-right-radius="" data-border-bottom-left-radius="" data-border-bottom-right-radius="" style="padding-bottom: 56.25%; background-image:url('gopher://pbs.twimg.com/ext_tw_video_thumb/1130462806472581120/pu/img/pFX_e_Wj8BBH7cEH.jpg')">
    </div>

  </div>
</div>

  </div>
</div>

      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2354">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1130463099650289664" data-aria-label-part="">2,354 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="3059">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1130463099650289664" data-aria-label-part="">3,059 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="15567">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1130463099650289664" data-aria-label-part="">15,567 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1130463099650289664">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2354">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2.4K</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1130463099650289664">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="3059">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">3.1K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="3059">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">3.1K</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1130463099650289664">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="15567">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">16K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="15567">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">16K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129835089989382144" id="stream-item-tweet-1129835089989382144" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129835089989382144&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       
" data-tweet-id="1129835089989382144" data-item-id="1129835089989382144" data-permalink-path="/MollyJongFast/status/1129835089989382144" data-conversation-id="1129835089989382144" data-tweet-nonce="1129835089989382144-583cf65a-f561-4c4f-86c1-b597193ea132" data-retweet-id="1129845872601096193" data-retweeter="arb" data-screen-name="MollyJongFast" data-name="Molly Jong-Fast" data-user-id="14298769" data-you-follow="false" data-follows-you="false" data-you-block="false" data-mentions="justinamash" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;14298769&quot;,&quot;screen_name&quot;:&quot;MollyJongFast&quot;,&quot;name&quot;:&quot;Molly Jong-Fast&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Molly Jong-Fast&quot;,&quot;emojified_text_as_html&quot;:&quot;Molly Jong-Fast&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}},{&quot;id_str&quot;:&quot;233842454&quot;,&quot;screen_name&quot;:&quot;justinamash&quot;,&quot;name&quot;:&quot;Justin Amash&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Justin Amash&quot;,&quot;emojified_text_as_html&quot;:&quot;Justin Amash&quot;}}]" data-disclosure-type="" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/MollyJongFast" data-user-id="14298769">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1111013446475268096/jR6B6p1K_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate ">Molly Jong-Fast</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr">@<b>MollyJongFast</b></span></a>

        
        <small class="time">
  <a href="/MollyJongFast/status/1129835089989382144" class="tweet-timestamp js-permalink js-nav js-tooltip" title="12:44 PM - 18 May 2019" data-conversation-id="1129835089989382144"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558208651" data-time-ms="1558208651000" data-long-form="true">May 18</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
          <p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="1">Molly Jong-Fast Retweeted Justin Amash</p>


<div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="4">Um, <a href="/justinamash" class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="233842454"><s>@</s><b>justinamash</b></a> is a Republican and an attorney. Just saying.<a href="gopher://t.co/q5HkMFpUpS" rel="nofollow noopener" dir="ltr" data-expanded-url="gopher://twitter.com/justinamash/status/1129831615952236546" class="twitter-timeline-link u-hidden" target="_blank" title="gopher://twitter.com/justinamash/status/1129831615952236546"><span class="tco-ellipsis"></span><span class="invisible">gopher://</span><span class="js-display-url">twitter.com/justinamash/st</span><span class="invisible">atus/1129831615952236546</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a></p>
</div>


<p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="3">Molly Jong-Fast added,</p>
  
      <div class="QuoteTweet
    
    
    u-block js-tweet-details-fixer">
  <div class="QuoteTweet-container">
    <a class="QuoteTweet-link js-nav" href="/justinamash/status/1129831615952236546" data-conversation-id="1129831615952236546" aria-hidden="true">
    </a>
    <div class="QuoteTweet-innerContainer u-cf js-permalink js-media-container" data-item-id="1129831615952236546" data-item-type="tweet" data-screen-name="justinamash" data-user-id="233842454" href="/justinamash/status/1129831615952236546" data-conversation-id="1129831615952236546" tabindex="0">
      <div class="tweet-content">
        <div class="QuoteTweet-authorAndText u-alignTop">
            
  <div class="QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link">
    <b class="QuoteTweet-fullname u-linkComplex-target">Justin Amash</b><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>justinamash</b></span>
  </div>

          
          
          <div class="QuoteTweet-text tweet-text u-dir" lang="en" data-aria-label-part="2" dir="ltr">Here are my principal conclusions:
1. Attorney General Barr has deliberately misrepresented Mueller’s report.
2. President Trump has engaged in impeachable conduct.
3. Partisanship has eroded our system of checks and balances.…</div>
              <div class="self-thread-context">
  Show this thread
</div>

        </div>
      </div>
    </div>
  </div>
</div>



      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="86">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129835089989382144" data-aria-label-part="">86 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="733">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129835089989382144" data-aria-label-part="">733 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="4059">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129835089989382144" data-aria-label-part="">4,059 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129835089989382144">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="86">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">86</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129835089989382144">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="733">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">733</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="733">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">733</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129835089989382144">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="4059">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">4.1K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="4059">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">4.1K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129748063172616193" id="stream-item-tweet-1129748063172616193" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129748063172616193&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       has-cards  has-content
" data-tweet-id="1129748063172616193" data-item-id="1129748063172616193" data-permalink-path="/arb/status/1129748063172616193" data-conversation-id="1129748063172616193" data-tweet-nonce="1129748063172616193-7ec313b5-2aa0-4a08-841c-22954be4ff13" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-has-cards="true">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1129748063172616193" class="tweet-timestamp js-permalink js-nav js-tooltip" title="6:58 AM - 18 May 2019" data-conversation-id="1129748063172616193"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558187902" data-time-ms="1558187902000" data-long-form="true">May 18</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="und" data-aria-label-part="0">hey<a href="gopher://t.co/DHMP0f2tBB" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/DHMP0f2tBB</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        is-square
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(1.3333333333333333 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/D62r3whXYAIT1MY.jpg" data-element-context="platform_photo_card" style="background-color:rgba(64,45,29,1.0);" data-dominant-color="[64,45,29]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D62r3whXYAIT1MY.jpg" alt="" style="width: 100%; top: -84px;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="7">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129748063172616193" data-aria-label-part="">7 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="8">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129748063172616193" data-aria-label-part="">8 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="198">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129748063172616193" data-aria-label-part="">198 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129748063172616193">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">7</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129748063172616193">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">8</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">8</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129748063172616193">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">198</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">198</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1126832598335074305" id="stream-item-tweet-1126832598335074305" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1126832598335074305&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       has-cards  has-content
" data-tweet-id="1126832598335074305" data-item-id="1126832598335074305" data-permalink-path="/geekysteven/status/1126832598335074305" data-conversation-id="1126832598335074305" data-tweet-nonce="1126832598335074305-af21c0b3-ee8b-4b31-979a-dc26206e04df" data-tweet-stat-initialized="true" data-retweet-id="1129567082582962176" data-retweeter="arb" data-screen-name="geekysteven" data-name="Geekysteven does what Nintendon't" data-user-id="16360261" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16360261&quot;,&quot;screen_name&quot;:&quot;geekysteven&quot;,&quot;name&quot;:&quot;Geekysteven does what Nintendon't&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Geekysteven does what Nintendon't&quot;,&quot;emojified_text_as_html&quot;:&quot;Geekysteven does what Nintendon&amp;#39;t&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-has-cards="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/geekysteven" data-user-id="16360261">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1116161305377935360/XVLm-uto_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">Geekysteven does what Nintendon't</strong><span>‏</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>geekysteven</b></span></a>

        
        <small class="time">
  <a href="/geekysteven/status/1126832598335074305" class="tweet-timestamp js-permalink js-nav js-tooltip" title="5:53 AM - 10 May 2019" data-conversation-id="1126832598335074305"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1557492801" data-time-ms="1557492801000" data-long-form="true">May 10</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">KIDS: Can we get a progressive candidate?
PARENTS: We have candidates at home
CANDIDATES AT HOME:<a href="gopher://t.co/475ezsdUpC" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/475ezsdUpC</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        is-square
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(1.0651162790697675 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/D6NQQRKW0AAibD3.jpg" data-element-context="platform_photo_card" style="background-color:rgba(30,35,47,1.0);" data-dominant-color="[30,35,47]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D6NQQRKW0AAibD3.jpg" alt="" style="width: 100%; top: -0px;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="3">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1126832598335074305" data-aria-label-part="">3 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="103">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1126832598335074305" data-aria-label-part="">103 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="424">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1126832598335074305" data-aria-label-part="">424 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1126832598335074305">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">3</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1126832598335074305">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">103</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">103</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1126832598335074305">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">424</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">424</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129527307897454592" id="stream-item-tweet-1129527307897454592" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129527307897454592&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       
" data-tweet-id="1129527307897454592" data-item-id="1129527307897454592" data-permalink-path="/arb/status/1129527307897454592" data-conversation-id="1129527307897454592" data-tweet-nonce="1129527307897454592-4b5848bd-f42a-4cbf-bb99-d237318f97d0" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-mentions="JulianCastro" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}},{&quot;id_str&quot;:&quot;19682187&quot;,&quot;screen_name&quot;:&quot;JulianCastro&quot;,&quot;name&quot;:&quot;Juli\u00e1n Castro&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Juli\u00e1n Castro&quot;,&quot;emojified_text_as_html&quot;:&quot;Juli\u00e1n Castro&quot;}}]" data-disclosure-type="">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate ">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1129527307897454592" class="tweet-timestamp js-permalink js-nav js-tooltip" title="4:21 PM - 17 May 2019" data-conversation-id="1129527307897454592"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558135270" data-time-ms="1558135270000" data-long-form="true">May 17</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
          <p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="1">amy brown Retweeted 𝕤𝕥𝕖𝕡𝕙𝕒𝕟𝕚𝕖 𝕣𝕦𝕓𝕪</p>


<div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="4">we met <a href="/JulianCastro" class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="19682187"><s>@</s><b>juliancastro</b></a> and the light was in my eyes because why wouldnt it be<a href="gopher://t.co/0FhI0YXkB4" rel="nofollow noopener" dir="ltr" data-expanded-url="gopher://twitter.com/rubyjnkie/status/1129526890564268033" class="twitter-timeline-link u-hidden" target="_blank" title="gopher://twitter.com/rubyjnkie/status/1129526890564268033"><span class="tco-ellipsis"></span><span class="invisible">gopher://</span><span class="js-display-url">twitter.com/rubyjnkie/stat</span><span class="invisible">us/1129526890564268033</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a></p>
</div>


<p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="3">amy brown added,</p>
  
      <div class="QuoteTweet
    
    
    u-block js-tweet-details-fixer">
  <div class="QuoteTweet-container">
    <a class="QuoteTweet-link js-nav" href="/rubyjnkie/status/1129526890564268033" data-conversation-id="1129526890564268033" aria-hidden="true">
    </a>
    <div class="QuoteTweet-innerContainer u-cf js-permalink js-media-container" data-item-id="1129526890564268033" data-item-type="tweet" data-screen-name="rubyjnkie" data-user-id="29459595" href="/rubyjnkie/status/1129526890564268033" data-conversation-id="1129526890564268033" tabindex="0">
      <div class="tweet-content">
            <div class="QuoteMedia">
      <div class="QuoteMedia-container js-quote-media-container">
          <div class="QuoteMedia-singlePhoto">
    <div class="QuoteMedia-photoContainer js-quote-photo" data-image-url="gopher://pbs.twimg.com/media/D6zit-lUEAARcXJ.jpg" data-element-context="platform_photo_card" style="background-color:rgba(64,51,39,1.0);" data-dominant-color="[64,51,39]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D6zit-lUEAARcXJ.jpg" alt="" style="height: 100%; left: -5px;">
</div>

</div>


      </div>
  </div>

        <div class="QuoteTweet-authorAndText u-alignTop">
            
  <div class="QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link">
    <b class="QuoteTweet-fullname u-linkComplex-target">𝕤𝕥𝕖𝕡𝕙𝕒𝕟𝕚𝕖 𝕣𝕦𝕓𝕪</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>rubyjnkie</b></span>
  </div>

          
          
          <div class="QuoteTweet-text tweet-text u-dir" lang="en" data-aria-label-part="2" dir="ltr">He legit told me to say hi to <span class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="19278046"><s>@</s><b>monicaisliberal</b></span>. <span class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="16444936"><s>@</s><b>arb</b></span>  is on brand per usual. Thanks <span class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="19682187"><s>@</s><b>JulianCastro</b></span> <span class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/j5dsPil5Lp</span></div>
        </div>
      </div>
    </div>
  </div>
</div>



      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129527307897454592" data-aria-label-part="">2 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129527307897454592">0 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="35">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129527307897454592" data-aria-label-part="">35 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129527307897454592">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129527307897454592">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129527307897454592">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">35</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">35</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129476291407671296" id="stream-item-tweet-1129476291407671296" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129476291407671296&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       
" data-tweet-id="1129476291407671296" data-item-id="1129476291407671296" data-permalink-path="/arb/status/1129476291407671296" data-conversation-id="1129476291407671296" data-tweet-nonce="1129476291407671296-5a27d995-dfca-46f7-b319-95c2b727361a" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate ">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1129476291407671296" class="tweet-timestamp js-permalink js-nav js-tooltip" title="12:58 PM - 17 May 2019" data-conversation-id="1129476291407671296"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558123107" data-time-ms="1558123107000" data-long-form="true">May 17</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
          <p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="1">amy brown Retweeted Timothy Johnson</p>


<div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="4">dana loesch is like if you gave any real housewife too many klonopin<a href="gopher://t.co/S5pRTK1EIC" rel="nofollow noopener" dir="ltr" data-expanded-url="gopher://twitter.com/timothywjohnson/status/1129020643071221760" class="twitter-timeline-link u-hidden" target="_blank" title="gopher://twitter.com/timothywjohnson/status/1129020643071221760"><span class="tco-ellipsis"></span><span class="invisible">gopher://</span><span class="js-display-url">twitter.com/timothywjohnso</span><span class="invisible">n/status/1129020643071221760</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a></p>
</div>


<p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="3">amy brown added,</p>
  
      <div class="QuoteTweet
    
    
    u-block js-tweet-details-fixer">
  <div class="QuoteTweet-container">
    <a class="QuoteTweet-link js-nav" href="/timothywjohnson/status/1129020643071221760" data-conversation-id="1129020643071221760" aria-hidden="true">
    </a>
    <div class="QuoteTweet-innerContainer u-cf js-permalink js-media-container" data-item-id="1129020643071221760" data-item-type="tweet" data-screen-name="timothywjohnson" data-user-id="576318595" href="/timothywjohnson/status/1129020643071221760" data-conversation-id="1129020643071221760" tabindex="0">
      <div class="tweet-content">
            <div class="QuoteMedia">
      <div class="QuoteMedia-container js-quote-media-container">
              <div class="QuoteMedia-videoPreview">
      <img data-aria-label-part="" src="gopher://pbs.twimg.com/ext_tw_video_thumb/1129020557838692353/pu/img/ZevJUhaY7-wc0vXY.jpg" alt="" style="height: 100%; left: -39px;">
      <div class="AdaptiveMedia-badge">
        <div class="AdaptiveMedia-badgeText">0:32</div>
        
      </div>
  </div>


      </div>
  </div>

        <div class="QuoteTweet-authorAndText u-alignTop">
            
  <div class="QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link">
    <b class="QuoteTweet-fullname u-linkComplex-target">Timothy Johnson</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>timothywjohnson</b></span>
  </div>

          
          
          <div class="QuoteTweet-text tweet-text u-dir" lang="en" data-aria-label-part="2" dir="ltr">Dana Loesch reminds NRATV viewers not to leave their guns behind in public bathrooms so "the disarmament left" can't use incidents to "get rid of your Second Amendment rights." <span class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/Rdf7Bdj5jY</span></div>
        </div>
      </div>
    </div>
  </div>
</div>



      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="5">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129476291407671296" data-aria-label-part="">5 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129476291407671296" data-aria-label-part="">2 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="48">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129476291407671296" data-aria-label-part="">48 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129476291407671296">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">5</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129476291407671296">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129476291407671296">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">48</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">48</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129124428904828937" id="stream-item-tweet-1129124428904828937" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129124428904828937&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       
" data-tweet-id="1129124428904828937" data-item-id="1129124428904828937" data-permalink-path="/emily_murnane/status/1129124428904828937" data-conversation-id="1129124428904828937" data-tweet-nonce="1129124428904828937-f99083f9-8ccb-4032-af88-bb2f21450f89" data-retweet-id="1129460315945463808" data-retweeter="arb" data-screen-name="emily_murnane" data-name="Emily Murnane" data-user-id="1720011902" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;1720011902&quot;,&quot;screen_name&quot;:&quot;emily_murnane&quot;,&quot;name&quot;:&quot;Emily Murnane&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Emily Murnane&quot;,&quot;emojified_text_as_html&quot;:&quot;Emily Murnane&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/emily_murnane" data-user-id="1720011902">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1092712213566156801/TUBicBvp_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">Emily Murnane</strong><span>‏</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>emily_murnane</b></span></a>

        
        <small class="time">
  <a href="/emily_murnane/status/1129124428904828937" class="tweet-timestamp js-permalink js-nav js-tooltip" title="1:40 PM - 16 May 2019" data-conversation-id="1129124428904828937"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558039216" data-time-ms="1558039216000" data-long-form="true">May 16</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">Once u pass 27, every day becomes a game of “am I sick or is this just how I am now”</p>
</div>


      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="80">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129124428904828937" data-aria-label-part="">80 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1830">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129124428904828937" data-aria-label-part="">1,830 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="9919">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129124428904828937" data-aria-label-part="">9,919 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129124428904828937">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="80">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">80</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129124428904828937">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1830">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1.8K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1830">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1.8K</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129124428904828937">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="9919">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">9.9K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="9919">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">9.9K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      
        <div class="self-thread-context">
  Show this thread
</div>


      
        <div class="self-thread-tweet-cta self-thread-head">
    <div class="mini-avatar-with-thread">
    <img class="avatar--circular size24" src="gopher://pbs.twimg.com/profile_images/1092712213566156801/TUBicBvp_normal.jpg">
  </div>

  <a href="/emily_murnane/status/1129124428904828937" class="js-nav show-thread-link">Show this thread</a>
</div>


    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129435653815406592" id="stream-item-tweet-1129435653815406592" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129435653815406592&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       has-cards cards-forward
" data-tweet-id="1129435653815406592" data-item-id="1129435653815406592" data-permalink-path="/arb/status/1129435653815406592" data-conversation-id="1129435653815406592" data-tweet-nonce="1129435653815406592-ce50f2ec-95f2-4060-a1a3-56ba7c715689" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-mentions="Jim_Jordan" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}},{&quot;id_str&quot;:&quot;18166778&quot;,&quot;screen_name&quot;:&quot;Jim_Jordan&quot;,&quot;name&quot;:&quot;Rep. Jim Jordan&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Rep. Jim Jordan&quot;,&quot;emojified_text_as_html&quot;:&quot;Rep. Jim Jordan&quot;}}]" data-disclosure-type="" data-card2-type="summary_large_image" data-has-cards="true">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1129435653815406592" class="tweet-timestamp js-permalink js-nav js-tooltip" title="10:16 AM - 17 May 2019" data-conversation-id="1129435653815406592"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558113418" data-time-ms="1558113418000" data-long-form="true">May 17</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">"Victims allege that more than 20 school officials and staff members—including two athletic directors and <a href="/Jim_Jordan" class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="18166778"><s>@</s><b>Jim_Jordan</b></a>, a former coach who is now a Republican congressman—were aware of concerns."<a href="gopher://t.co/EsPGFufVAb" rel="nofollow noopener" dir="ltr" data-expanded-url="gopher://www.thedailybeast.com/richard-strauss-ex-ohio-state-team-doctor-abused-177-men-and-school-leaders-knew-report" class="twitter-timeline-link u-hidden" target="_blank" title="gopher://www.thedailybeast.com/richard-strauss-ex-ohio-state-team-doctor-abused-177-men-and-school-leaders-knew-report"><span class="tco-ellipsis"></span><span class="invisible">gopher://www.</span><span class="js-display-url">thedailybeast.com/richard-straus</span><span class="invisible">s-ex-ohio-state-team-doctor-abused-177-men-and-school-leaders-knew-report</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a></p>
</div>


      

      
        


      
          <div class="card2 js-media-container
    " data-card2-name="summary_large_image">
    
<div class="js-macaw-cards-iframe-container initial-card-height card-type-summary_large_image" data-src="/i/cards/tfw/v1/1129435653815406592?cardname=summary_large_image&amp;autoplay_disabled=true&amp;forward=true&amp;earned=true&amp;edge=true&amp;lang=en" data-card-name="summary_large_image" data-card-url="gopher://t.co/EsPGFufVAb" data-publisher-id="16012783" data-creator-id="" data-amplify-content-id="" data-amplify-playlist-url="" data-full-card-iframe-url="/i/cards/tfw/v1/1129435653815406592?cardname=summary_large_image&amp;autoplay_disabled=true&amp;earned=true&amp;edge=true&amp;lang=en" data-has-autoplayable-media="false" data-watched="true">
</div>

</div>



      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="3">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129435653815406592" data-aria-label-part="">3 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="4">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129435653815406592" data-aria-label-part="">4 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="14">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129435653815406592" data-aria-label-part="">14 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129435653815406592">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">3</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129435653815406592">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">4</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">4</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129435653815406592">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">14</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">14</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129252714641317888" id="stream-item-tweet-1129252714641317888" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129252714641317888&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       
" data-tweet-id="1129252714641317888" data-item-id="1129252714641317888" data-permalink-path="/RespectableLaw/status/1129252714641317888" data-conversation-id="1129252714641317888" data-tweet-nonce="1129252714641317888-8743e529-2132-4f32-b02c-9801f04485ba" data-retweet-id="1129386465622863872" data-retweeter="arb" data-screen-name="RespectableLaw" data-name="Respectable Lawyer" data-user-id="863320472641044481" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;863320472641044481&quot;,&quot;screen_name&quot;:&quot;RespectableLaw&quot;,&quot;name&quot;:&quot;Respectable Lawyer&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Respectable Lawyer&quot;,&quot;emojified_text_as_html&quot;:&quot;Respectable Lawyer&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/RespectableLaw" data-user-id="863320472641044481">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/876312155666006016/Xjo9gwWD_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate ">Respectable Lawyer</strong><span>‏</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr">@<b>RespectableLaw</b></span></a>

        
        <small class="time">
  <a href="/RespectableLaw/status/1129252714641317888" class="tweet-timestamp js-permalink js-nav js-tooltip" title="10:10 PM - 16 May 2019" data-conversation-id="1129252714641317888"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558069802" data-time-ms="1558069802000" data-long-form="true">May 16</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
          <p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="1">Respectable Lawyer Retweeted DTru</p>


<div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="4">As a man
who was once
a baby<a href="gopher://t.co/swdlf2E2Zh" rel="nofollow noopener" dir="ltr" data-expanded-url="gopher://twitter.com/DTru1222/status/1129029137178472449" class="twitter-timeline-link u-hidden" target="_blank" title="gopher://twitter.com/DTru1222/status/1129029137178472449"><span class="tco-ellipsis"></span><span class="invisible">gopher://</span><span class="js-display-url">twitter.com/DTru1222/statu</span><span class="invisible">s/1129029137178472449</span><span class="tco-ellipsis"><span class="invisible">&nbsp;</span>…</span></a></p>
</div>


<p class="u-hiddenVisually" aria-hidden="true" data-aria-label-part="3">Respectable Lawyer added,</p>
  
      <div class="QuoteTweet
    
    
    u-block js-tweet-details-fixer">
  <div class="QuoteTweet-container">
    <a class="QuoteTweet-link js-nav" href="/DTru1222/status/1129029137178472449" data-conversation-id="1129024982158331904" aria-hidden="true">
    </a>
    <div class="QuoteTweet-innerContainer u-cf js-permalink js-media-container" data-item-id="1129029137178472449" data-item-type="tweet" data-screen-name="DTru1222" data-user-id="198227844" href="/DTru1222/status/1129029137178472449" data-conversation-id="1129024982158331904" tabindex="0">
      <div class="tweet-content">
        <div class="QuoteTweet-authorAndText u-alignTop">
            
  <div class="QuoteTweet-originalAuthor u-cf u-textTruncate stream-item-header account-group js-user-profile-link">
    <b class="QuoteTweet-fullname u-linkComplex-target">DTru</b><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span><span class="username u-dir u-textTruncate" dir="ltr">@<b>DTru1222</b></span>
  </div>

          
            <div class="ReplyingToContextBelowAuthor" data-aria-label-part="">
    Replying to <span class="username u-dir u-textTruncate" dir="ltr">@<b>ixersz</b></span>



</div>

          
          <div class="QuoteTweet-text tweet-text u-dir" lang="en" data-aria-label-part="2" dir="ltr">As a man who was once a baby, I absolutely have an opinion.  Trying to silence the other sides arguments is a very weak approach.</div>
        </div>
      </div>
    </div>
  </div>
</div>



      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="301">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129252714641317888" data-aria-label-part="">301 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="9354">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129252714641317888" data-aria-label-part="">9,354 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="54082">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129252714641317888" data-aria-label-part="">54,082 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129252714641317888">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="301">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">301</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129252714641317888">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="9354">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">9.4K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="9354">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">9.4K</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129252714641317888">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="54082">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">54K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="54082">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">54K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129383542109007873" id="stream-item-tweet-1129383542109007873" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129383542109007873&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       has-cards  has-content
" data-tweet-id="1129383542109007873" data-item-id="1129383542109007873" data-permalink-path="/arb/status/1129383542109007873" data-conversation-id="1129383542109007873" data-tweet-nonce="1129383542109007873-b9a49854-3a43-4a09-b655-82fcd5511cbc" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-has-cards="true">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1129383542109007873" class="tweet-timestamp js-permalink js-nav js-tooltip" title="6:49 AM - 17 May 2019" data-conversation-id="1129383542109007873"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558100994" data-time-ms="1558100994000" data-long-form="true">May 17</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">tgif<a href="gopher://t.co/LeElBRojcc" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/LeElBRojcc</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        is-square
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(1.3333333333333333 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/D6xgVu-UcAAxWEn.jpg" data-element-context="platform_photo_card" style="background-color:rgba(47,40,35,1.0);" data-dominant-color="[47,40,35]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D6xgVu-UcAAxWEn.jpg" alt="" style="width: 100%; top: -84px;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129383542109007873" data-aria-label-part="">1 reply</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" aria-hidden="true" data-tweet-stat-count="0">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129383542109007873">0 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="89">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129383542109007873" data-aria-label-part="">89 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129383542109007873">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129383542109007873">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount ProfileTweet-actionCount--isZero">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true"></span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129383542109007873">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">89</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">89</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129379935221510146" id="stream-item-tweet-1129379935221510146" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129379935221510146&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
      
       
" data-tweet-id="1129379935221510146" data-item-id="1129379935221510146" data-permalink-path="/arb/status/1129379935221510146" data-conversation-id="1129379935221510146" data-tweet-nonce="1129379935221510146-42d6eeb0-949f-486d-9073-ebc5eb2c8df8" data-tweet-stat-initialized="true" data-screen-name="arb" data-name="amy brown" data-user-id="16444936" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="">

    <div class="context">
      
      
    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/arb" data-user-id="16444936">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1084304510841905154/oSstN42z_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">amy brown</strong><span>‏</span><span class="UserBadges"><span class="Icon Icon--verified"><span class="u-hiddenVisually">Verified account</span></span></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>arb</b></span></a>

        
        <small class="time">
  <a href="/arb/status/1129379935221510146" class="tweet-timestamp js-permalink js-nav js-tooltip" title="6:35 AM - 17 May 2019" data-conversation-id="1129379935221510146"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558100134" data-time-ms="1558100134000" data-long-form="true">May 17</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">i once went to a conference where the "keynote speaker" was grumpy cat and everyone lined up afterward to get their picture taken with this clearly tranquilized animal</p>
</div>


      

      
        


      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="12">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129379935221510146" data-aria-label-part="">12 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="53">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129379935221510146" data-aria-label-part="">53 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="460">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129379935221510146" data-aria-label-part="">460 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129379935221510146">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount ">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">12</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129379935221510146">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">53</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">53</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129379935221510146">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">460</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">460</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="1129077402821451777" id="stream-item-tweet-1129077402821451777" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;1129077402821451777&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       has-cards  has-content
" data-tweet-id="1129077402821451777" data-item-id="1129077402821451777" data-permalink-path="/kittygaga_/status/1129077402821451777" data-conversation-id="1129077402821451777" data-tweet-nonce="1129077402821451777-11bd4e0f-d401-4a9d-b410-39bc681660e3" data-retweet-id="1129369197010595840" data-retweeter="arb" data-screen-name="kittygaga_" data-name="intrusive thot" data-user-id="1079470635099787264" data-you-follow="false" data-follows-you="false" data-you-block="false" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;1079470635099787264&quot;,&quot;screen_name&quot;:&quot;kittygaga_&quot;,&quot;name&quot;:&quot;intrusive thot&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;intrusive thot&quot;,&quot;emojified_text_as_html&quot;:&quot;intrusive thot&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}}]" data-disclosure-type="" data-has-cards="true" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/kittygaga_" data-user-id="1079470635099787264">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/1113115175379505154/IXLQvE3l_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">intrusive thot</strong><span>‏</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>kittygaga_</b></span></a>

        
        <small class="time">
  <a href="/kittygaga_/status/1129077402821451777" class="tweet-timestamp js-permalink js-nav js-tooltip" title="10:33 AM - 16 May 2019" data-conversation-id="1129077402821451777"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1558028004" data-time-ms="1558028004000" data-long-form="true">May 16</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">this list of top tier lacrosse players names is destroying my life right now<a href="gopher://t.co/MQE1BwJ6nY" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/MQE1BwJ6nY</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        is-square
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(1.5598548972188633 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/D6tJ6RWW4AYy72a.jpg" data-element-context="platform_photo_card" style="background-color:rgba(64,64,64,1.0);" data-dominant-color="[64,64,64]">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/D6tJ6RWW4AYy72a.jpg" alt="" style="width: 100%; top: -141px;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1303">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-1129077402821451777" data-aria-label-part="">1,303 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="14200">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-1129077402821451777" data-aria-label-part="">14,200 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="61043">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-1129077402821451777" data-aria-label-part="">61,043 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-1129077402821451777">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="1303">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">1.3K</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-1129077402821451777">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="14200">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">14K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="14200">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">14K</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-1129077402821451777">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="61043">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">61K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="61043">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">61K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      
        <div class="self-thread-context">
  Show this thread
</div>


      
        <div class="self-thread-tweet-cta self-thread-head">
    <div class="mini-avatar-with-thread">
    <img class="avatar--circular size24" src="gopher://pbs.twimg.com/profile_images/1113115175379505154/IXLQvE3l_normal.jpg">
  </div>

  <a href="/kittygaga_/status/1129077402821451777" class="js-nav show-thread-link">Show this thread</a>
</div>


    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>

      <li class="js-stream-item stream-item stream-item
" data-item-id="663790800690683904" id="stream-item-tweet-663790800690683904" data-item-type="tweet" data-suggestion-json="{&quot;suggestion_details&quot;:{},&quot;tweet_ids&quot;:&quot;663790800690683904&quot;,&quot;scribe_component&quot;:&quot;tweet&quot;}">
    


  <div class="tweet js-stream-tweet js-actionable-tweet js-profile-popup-actionable dismissible-content
       original-tweet js-original-tweet
      
       tweet-has-context
       has-cards  has-content
" data-tweet-id="663790800690683904" data-item-id="663790800690683904" data-permalink-path="/meganamram/status/663790800690683904" data-conversation-id="663790800690683904" data-tweet-nonce="663790800690683904-73c7846a-4f33-495f-9f15-3c7ea6cc1dc9" data-retweet-id="1129231164487528449" data-retweeter="arb" data-screen-name="meganamram" data-name="Megan Amram" data-user-id="35206553" data-you-follow="false" data-follows-you="false" data-you-block="false" data-mentions="GloriaSteinem" data-reply-to-users-json="[{&quot;id_str&quot;:&quot;35206553&quot;,&quot;screen_name&quot;:&quot;meganamram&quot;,&quot;name&quot;:&quot;Megan Amram&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Megan Amram&quot;,&quot;emojified_text_as_html&quot;:&quot;Megan Amram&quot;}},{&quot;id_str&quot;:&quot;16444936&quot;,&quot;screen_name&quot;:&quot;arb&quot;,&quot;name&quot;:&quot;amy brown&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;amy brown&quot;,&quot;emojified_text_as_html&quot;:&quot;amy brown&quot;}},{&quot;id_str&quot;:&quot;48269483&quot;,&quot;screen_name&quot;:&quot;GloriaSteinem&quot;,&quot;name&quot;:&quot;Gloria Steinem&quot;,&quot;emojified_name&quot;:{&quot;text&quot;:&quot;Gloria Steinem&quot;,&quot;emojified_text_as_html&quot;:&quot;Gloria Steinem&quot;}}]" data-disclosure-type="" data-has-cards="true" data-tweet-stat-initialized="true">

    <div class="context">
      
          <div class="tweet-context with-icn
    
    ">

      <span class="Icon Icon--small Icon--retweeted"></span>



            <span class="js-retweet-text">
                <a class="pretty-link js-user-profile-link" href="/arb" data-user-id="16444936" rel="noopener"><b>amy brown</b></a> Retweeted
            </span>


      


    </div>

    </div>

    <div class="content">
      

      

      
      <div class="stream-item-header">
          <a class="account-group js-account-group js-action-profile js-user-profile-link js-nav" href="/meganamram" data-user-id="35206553">
      <img class="avatar js-action-profile-avatar" src="gopher://pbs.twimg.com/profile_images/890366092/n31883_33925212_8870_bigger.jpg" alt="">
    <span class="FullNameGroup">
      <strong class="fullname show-popup-with-id u-textTruncate " data-aria-label-part="">Megan Amram</strong><span>‏</span><span class="UserBadges"></span><span class="UserNameBreak">&nbsp;</span></span><span class="username u-dir u-textTruncate" dir="ltr" data-aria-label-part="">@<b>meganamram</b></span></a>

        
        <small class="time">
  <a href="/meganamram/status/663790800690683904" class="tweet-timestamp js-permalink js-nav js-tooltip" title="10:50 AM - 9 Nov 2015" data-conversation-id="663790800690683904"><span class="_timestamp js-short-timestamp " data-aria-label-part="last" data-time="1447095034" data-time-ms="1447095034000" data-long-form="true">9 Nov 2015</span></a>
</small>

          <div class="ProfileTweet-action ProfileTweet-action--more js-more-ProfileTweet-actions">
    <div class="dropdown">
  <button class="ProfileTweet-actionButton u-textUserColorHover dropdown-toggle js-dropdown-toggle" type="button" aria-haspopup="true">
      <div class="IconContainer js-tooltip" title="More">
        <span class="Icon Icon--caretDownLight Icon--small"></span>
        <span class="u-hiddenVisually">More</span>
      </div>
  </button>
  <div class="dropdown-menu is-autoCentered">
  <div class="dropdown-caret">
    <div class="caret-outer"></div>
    <div class="caret-inner"></div>
  </div>
  <ul>
    
      <li class="copy-link-to-tweet js-actionCopyLinkToTweet">
        <button type="button" class="dropdown-link">Copy link to Tweet</button>
      </li>
      <li class="embed-link js-actionEmbedTweet" data-nav="embed_tweet">
        <button type="button" class="dropdown-link">Embed Tweet</button>
      </li>
  </ul>
</div>

</div>

  </div>

      </div>

      

      


      
        <div class="js-tweet-text-container">
  <p class="TweetTextSize TweetTextSize--normal js-tweet-text tweet-text" lang="en" data-aria-label-part="0">The beautiful dedication in <a href="/GloriaSteinem" class="twitter-atreply pretty-link js-nav" dir="ltr" data-mentioned-user-id="48269483"><s>@</s><b>GloriaSteinem</b></a>'s new book "My Life On the Road." Thank you, Gloria.<a href="gopher://t.co/HikfvErCDJ" class="twitter-timeline-link u-hidden" data-pre-embedded="true" dir="ltr">pic.twitter.com/HikfvErCDJ</a></p>
</div>


      

      
            <div class="AdaptiveMediaOuterContainer">
    <div class="AdaptiveMedia
        
        is-square
        
        
        
        ">
      <div class="AdaptiveMedia-container">
          <div class="AdaptiveMedia-singlePhoto" style="padding-top: calc(1.0 * 100% - 0.5px);">
    <div class="AdaptiveMedia-photoContainer js-adaptive-photo " data-image-url="gopher://pbs.twimg.com/media/CTZCNeEUAAAot6-.jpg" data-element-context="platform_photo_card">
  <img data-aria-label-part="" src="gopher://pbs.twimg.com/media/CTZCNeEUAAAot6-.jpg" alt="" style="width: 100%; top: -0px;">
</div>


</div>
      </div>
    </div>
  </div>




      
      

      
      <div class="stream-item-footer">
  
      <div class="ProfileTweet-actionCountList u-hiddenVisually">
    
    
    <span class="ProfileTweet-action--reply u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="53">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-reply-count-aria-663790800690683904" data-aria-label-part="">53 replies</span>
      </span>
    </span>
    <span class="ProfileTweet-action--retweet u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2678">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-retweet-count-aria-663790800690683904" data-aria-label-part="">2,678 retweets</span>
      </span>
    </span>
    <span class="ProfileTweet-action--favorite u-hiddenVisually">
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="11305">
        <span class="ProfileTweet-actionCountForAria" id="profile-tweet-action-favorite-count-aria-663790800690683904" data-aria-label-part="">11,305 likes</span>
      </span>
    </span>
  </div>

  <div class="ProfileTweet-actionList js-actions" role="group" aria-label="Tweet actions">
    <div class="ProfileTweet-action ProfileTweet-action--reply">
  <button class="ProfileTweet-actionButton js-actionButton js-actionReply" data-modal="ProfileTweet-reply" type="button" aria-describedby="profile-tweet-action-reply-count-aria-663790800690683904">
    <div class="IconContainer js-tooltip" title="Reply">
      <span class="Icon Icon--medium Icon--reply"></span>
      <span class="u-hiddenVisually">Reply</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="53">
        <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">53</span>
      </span>
  </button>
</div>

    <div class="ProfileTweet-action ProfileTweet-action--retweet js-toggleState js-toggleRt">
  <button class="ProfileTweet-actionButton  js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button" aria-describedby="profile-tweet-action-retweet-count-aria-663790800690683904">
    <div class="IconContainer js-tooltip" title="Retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweet</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2678">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2.7K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo js-actionButton js-actionRetweet" data-modal="ProfileTweet-retweet" type="button">
    <div class="IconContainer js-tooltip" title="Undo retweet">
      <span class="Icon Icon--medium Icon--retweet"></span>
      <span class="u-hiddenVisually">Retweeted</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="2678">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">2.7K</span>
  </span>

  </button>
</div>


    <div class="ProfileTweet-action ProfileTweet-action--favorite js-toggleState">
  <button class="ProfileTweet-actionButton js-actionButton js-actionFavorite" type="button" aria-describedby="profile-tweet-action-favorite-count-aria-663790800690683904">
    <div class="IconContainer js-tooltip" title="Like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Like</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="11305">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">11K</span>
  </span>

  </button><button class="ProfileTweet-actionButtonUndo ProfileTweet-action--unfavorite u-linkClean js-actionButton js-actionFavorite" type="button">
    <div class="IconContainer js-tooltip" title="Undo like">
      <span role="presentation" class="Icon Icon--heart Icon--medium"></span>
      <div class="HeartAnimation"></div>
      <span class="u-hiddenVisually">Liked</span>
    </div>
      <span class="ProfileTweet-actionCount" data-tweet-stat-count="11305">
    <span class="ProfileTweet-actionCountForPresentation" aria-hidden="true">11K</span>
  </span>

  </button>
</div>


    

    

  </div>

</div>
  



      
      

      

      

    </div>

  </div>



    
<div class="dismiss-module">
  <div class="dismissed-module">
    <div class="feedback-actions">
        <div class="feedback-action" data-feedback-type="DontLike" data-feedback-url="">
          <div class="action-confirmation dismiss-module-item">Thanks. Twitter will use this to make your timeline better.
            <span class="undo-action">Undo</span>
          </div>
        </div>
    </div>
    <div class="child-feedback-confirmation">
      <div class="child-confirmation-item">
        <span class="child-confirmation-text"></span>
        <span class="undo-child-feedback-action">Undo</span>
      </div>
    </div>
  </div>
</div>

</li>















 

        </ol>
      </main>
    </div>
  `
})