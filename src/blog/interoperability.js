Vue.component('app-section', {
  props: ['headingLevel'],
  inject: {
    defaultHeadingLevel: {
      default: 2
    }
  },
  data() {
    return {
      headingId: `x_${[...Array(7)].map(i => (~~(Math.random() * 36)).toString(36)).join('')}`
    }
  },
  provide() {
    return {
      headingLevel: this.computedHeadingLevel + 1
    }
  },
  computed: {
    computedHeadingLevel() {
      return this.headingLevel || (this.defaultHeadingLevel + 1)
    }
  },
  template: `
    <section :aria-labelledby="headingId">
      <slot :headingLevel="computedHeadingLevel" :headingId="headingId"></slot>
    </section>
  `
})

Vue.component('app-heading', {
  props: ['headingLevel', 'headingId'],
  template: `
    <component :is="'h' + headingLevel" :id="headingId">
      <slot></slot>
    </component>
  `
})

Vue.component('app-definition', {
  props: ['id'],
  mounted() {
    this.$nextTick(() => {
      if (window.location.hash === `#${this.idAttr}`) {
        window.document.getElementById('dialog').show()
        this.$el.focus()
      }
    })
  },
  data() {
    return {
      idAttr: this.id || `x_${[...Array(7)].map(i => (~~(Math.random() * 36)).toString(36)).join('')}`
    }
  },
  methods: {
    closeDialog() {
      const dialogEl = window.document.getElementById('dialog')
      if (dialogEl.open || typeof dialogEl.open === 'undefined') {
        dialogEl.close()
        window.history.replaceState(null, null, ' ')
      }
    }
  },
  template: `
    <li
      tabindex="-1"
      :id="idAttr"
      class="app-definition"
      itemprop="hasDefinedTerm"
      itemscope
      itemtype="http://schema.org/DefinedTerm">
      <slot></slot>
      <button type="button" @click="closeDialog">
        Done
      </button>
    </li>
  `
})

Vue.component('app-dl-root', {
  template: `
    <div class="app-dl-root" itemscope itemtype="http://schema.org/DefinedTermSet">
      <slot></slot>
    </div>
  `
})

Vue.component('app-dl', {
  props: ['headingId'],
  inject: {
    headingLevel: {
      default: 2
    }
  },
  provide() {
    return {
      headingLevel: this.headingLevel + 1
    }
  },
  data() {
    return {
      termsForId: `x_${[...Array(7)].map(i => (~~(Math.random() * 36)).toString(36)).join('')}`
    }
  },
  template: `
    <div role="presentation">
      <div aria-hidden="true" class="visually-hidden" :id="termsForId">Vocabulary Terms for</div>
      <ul class="app-dl" :aria-labelledby="termsForId + ' ' + headingId">
        <slot :headingLevel="headingLevel"></slot>
      </ul>
    </div>
  `
})

Vue.component('app-dt', {
  props: ['headingLevel'],
  template: `
    <component :data-glossary-slug="$slots.default[0].text.trim().toLowerCase()" :is="headingLevel ? 'h' + headingLevel : 'div'" itemprop="name">
      <slot></slot>
    </component>
  `
})

Vue.component('app-dd', {
  template: `
    <div role="presentation" itemprop="description">
      <slot></slot>
    </div>
  `
})

Vue.component('app-glossary-link', {
  props: ['slug'],
  methods: {
    focus() {
      this.$el.focus({
        preventScroll: true
      })
    },
    handleClose() {
      this.focus()
      window.document.getElementById('dialog').removeEventListener('close', this.handleClose)
    },
    handleClick() {
      window.document.getElementById('dialog').show()
      window.document.querySelector(`[data-glossary-slug="${this.slug}"]`).closest('.app-definition').focus()
      const hash = window.document.querySelector(`[data-glossary-slug="${this.slug}"]`).closest('.app-definition').id
      window.history.replaceState(undefined, undefined, `#${hash}`)
      window.document.getElementById('dialog').addEventListener('close', this.handleClose)
    }
  },
  template: `
    <span class="app-glossary-link" tabindex="0" role="link" @click="handleClick" @keydown.enter="handleClick">
      <slot></slot>
    </span>
  `
})

new Vue({
  el: window.document.getElementById('app'),
  mounted() {
    const dialogEl = window.document.getElementById('dialog')
    if (typeof dialogEl.show !== 'function') {
      dialogEl.show = function () {
        dialogEl.setAttribute('open', 'open')
      }
    }
    if (typeof dialogEl.close !== 'function') {
      dialogEl.close = function () {
        dialogEl.removeAttribute('open')
      }
      this.$root.$emit('dialogClose')
    }
  },
  methods: {
    closeDialog({ target: el }) {
      if (!el.closest('main') || (el.closest('main') && el.classList.contains('app-glossary-link') && !el.closest('.app-glossary-link'))) {
        const dialogEl = window.document.getElementById('dialog')
        if (dialogEl.open || typeof dialogEl.open === 'undefined') {
          dialogEl.close()
          window.history.replaceState(null, null, ' ')
        }
      }
    }
  },
  template: `
    <div class="container" role="presentation">
      <main class="article-container" aria-labelledby="article-h1" @click="closeDialog">
        <article class="article" itemscope itemtype="http://schema.org/Article">
          <header>
            <h1 id="article-h1" itemprop="headline">
              Accessible
              &amp;
              Interoperable
              HTML
            </h1>
            <div role="presentation" class="visually-hidden">
              <div role="presentation" class="glossary-author">
                <div role="presentation">By</div>
                <div itemprop="author" itemscope itemtype="http://schema.org/Person">
                  <div itemprop="givenName">Michael</div>
                  <div itemprop="familyName">Puckett</div>
                </div>
              </div>
              <div role="presentation" class="glossary-date">
                <div role="presentation">on</div>
                <time role="presentation" itemprop="datePublished" datetime="2019-05-19">
                  May 19, 2019
                </time>
              </div>
            </div>
          </header>
          <div>
            <section aria-labelledby="accessibility">
              <h2 id="accessibility">Accessibility</h2>
              <p>
                How do people with disabilities use the internet?
                Most blind people do not use a <app-glossary-link slug="fine pointer input">mouse</app-glossary-link>.
                Instead, they use <app-glossary-link slug="keyboard input">keyboard input</app-glossary-link> to operate a <app-glossary-link slug="screen reader">screen reader</app-glossary-link>.
                People who are deafblind might use a screen reader with a <app-glossary-link slug="refreshable braille display">refreshable Braille display</app-glossary-link>.
                Some people use neither a mouse nor a keyboard and instead use their voice to issue commands to <app-glossary-link slug="speech recognition software">speech recognition software</app-glossary-link>.
              </p>
              <p>
                These alternative ways of navigating the web rely on properly marked up HTML code.
              </p>
              <p>              
                For
                example, marking up all headings using heading elements (h1-h6) will make them available when
                a screen reader user navigates via the <app-glossary-link slug="heading outline">heading outline</app-glossary-link>.
              </p>
              <p>
                When a user <app-glossary-link slug="keyboard focus">focuses</app-glossary-link>
                an element, it will announce the type of element, and
                also any relevant state properties, such as being disabled.
                Some of these state properties are defined by
                <app-glossary-link slug="aria">ARIA</app-glossary-link> attributes,
                which can be
                added to and removed from elements in order to
                indicate state changes and relationships to other elements.
              </p>
            </section>
            <section aria-labelledby="interoperability">
              <h2 id="interoperability">Interoperability</h2>
              <p>
                We should also consider the ability for external sites and services to gather information from the page for
                indexing and sharing.
              </p>
              <p>
              Audio-enabled <app-glossary-link slug="digital assistant">digital assistants</app-glossary-link>, for instance,
              often parse web pages'
                <app-glossary-link slug="structured data">structured data</app-glossary-link>
                and
                <app-glossary-link slug="document outline">document outlines</app-glossary-link>
                to find information.
                The relevant data it finds is packaged into an experience that is <app-glossary-link slug="native search results">native</app-glossary-link> to that service's <app-glossary-link slug="voice user interface">voice UI</app-glossary-link>.
              </p>
              <p>
                Browsers may have plugins or provide features, such as <app-glossary-link slug="reader view">reader view</app-glossary-link>, that parse web pages, so it is best to provide as much relevant metadata as possible
                and always adhere to the <app-glossary-link slug="html spec compliance">HTML specification</app-glossary-link>.
              </p>
            </section>

            <section aria-labelledby="personalization">
              <h2 id="personalization">Personalization</h2>
              <p>Most operating systems now offer
                <app-glossary-link slug="dark mode">dark mode</app-glossary-link>, which can be detected
                by web pages. It is possible we will see more of these UI settings that are designed
                to meet personal preferences.</p>
              <p>
                Furthermore, accessibility features are often hidden gems which are handy enough for
                everyone.
              </p>
              <p>
                On my iPhone, I have the <app-glossary-link slug="reduce motion">reduce motion</app-glossary-link>
                setting and <app-glossary-link slug="speak screen">speak screen</app-glossary-link> feature enabled. I
                have disabled touch force sensitivity and shake to undo.
              </p>
              <p>
                On my iPad Pro,
                when I connect my keyboard, I turn on the screen reader, VoiceOver, but set it to mute.
                This enables <app-glossary-link slug="full access keyboard navigation">full keyboard access</app-glossary-link>
                so I don't always have to use the large <app-glossary-link slug="coarse pointer input">touch interface</app-glossary-link>.
              </p>
            </section>
            <section aria-labelledby="engineering-strategies">
              <h2 id="engineering-strategies">Engineering Strategies</h2>
              <p>
                The rules of accessibility and interoperability can be complex and cumbersome.
                Some kind of automation needs to be in place in order to keep
                application code simple and bug-free.
              </p>
              <p>
                Creating a library of reusable web components is the best way to
                build an accessible, interoperable web site.
              </p>
              <p>
                There also needs to be a mechanism for creating and tracking IDs to be used by
                the ARIA attributes <code>aria-labelledby</code> and <code>aria-describedby</code>.
              </p>
            </section>
            <aside aria-labelledby="heading-resources">
              <h2 id="heading-resources">Resources</h2>
              <ul aria-labelledby="heading-resources">
                <li>
                  <a href="https://www.w3.org/TR/wai-aria-practices-1.1/#aria_ex">ARIA Design Patterns</a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques">ARIA Attributes</a>
                </li>
                <li>
                  <a href="https://schema.org/docs/schemas.html">Schema.org Attributes</a>
                </li>
                <li>
                  <a href="https://developers.facebook.com/docs/sharing/webmasters/#markup">Open Graph Attributes</a>
                </li>
                <li>
                  <a href="https://github.com/ten1seven/what-input">What Input? Library</a>
                </li>
                <li>
                  <a href="https://validator.nu/">HTML Validator</a>
                </li>
                <li>
                  <a href="https://chrome.google.com/webstore/detail/axe/lhdoppojpmngadmnindnejefpokejbdd?hl=en-US">
                    axe Chrome Extension
                  </a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Responsive_web_design">Responsive Web Design (Wiki)</a>
                </li>
                <li>
                  <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion">"Prefers Reduced
                    Motion" Media Query</a>
                </li>
                <li>
                  <a href="https://developers.google.com/web/fundamentals/accessibility/semantics-builtin/the-accessibility-tree">Accessibility
                    Tree (Google)</a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Vestibular_system#Pathologies">Vestibular Disorders (Wiki)</a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Color_blindness">Color Blindness (Wiki)</a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Cognitive_disorder">Cognitive Disorders (Wiki)</a>
                </li>
                <li>
                  <a href="https://www.nvaccess.org/download/">NVDA for Windows (Free)</a>
                </li>
                <li>
                  <a href="https://store.freedomscientific.com/collections/software-products/products/jaws-home-edition-screen-reading-software">JAWS
                    for Windows (Available for Purchase)</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/en-us/help/22798/windows-10-complete-guide-to-narrator">Windows 10
                    Narrator (Free)</a>
                </li>
                <li>
                  <a href="https://chrome.google.com/webstore/detail/chromevox/kgejglhpjiefppelpmljglcjbhoiplfn">Chrome Vox
                    Extension for Chrome (Free)</a>
                </li>
                <li>
                  <a href="https://www.apple.com/accessibility/mac/vision/">VoiceOver for MacOS (Free)</a>
                </li>
                <li>
                  <a href="https://www.apple.com/accessibility/iphone/vision/">VoiceOver for iPhone (Free)</a>
                </li>
                <li>
                  <a href="https://support.google.com/accessibility/android/answer/6283677?hl=en">TalkBack for Android
                    (Free)</a>
                </li>
                <li>
                  <a href="https://support.google.com/accessibility/android/answer/6151848">
                    Voice Access for Android (Free)
                  </a>
                </li>
                <li>
                  <a href="https://www.nuance.com/dragon/dragon-for-pc/home-edition.html">Buy Dragon Naturally Speaking
                    (Available for Purchase)</a>
                </li>
                <li>
                  <a href="https://www.nuance.com/products/help/dragon/dragon-for-pc/enx/professionalgroup/main/Content/Web/web_basics.htm">How
                    to use Dragon Naturally Speaking with a Web Browser</a>
                </li>
                <li>
                  <a href="https://en.wikipedia.org/wiki/Refreshable_braille_display">Refreshable Braille Display (Wiki)</a>
                </li>
              </ul>
            </aside>
          </div>
        </article>
      </main>
      <div role="presentation">
        <dialog id="dialog" aria-modal="false" class="dialog" @keydown.esc="closeDialog" aria-labelledby="h2">
          <app-dl-root class="glossary" aria-labelledby="h2">
            <h2 aria-hidden="true" class="visually-hidden" id="h2" itemprop="headline">
              Glossary of Terms for Accessible and Interoperable HTML
            </h2>
            <app-section class="app-section app-section_traditional" :heading-level="3">
              <template v-slot="headingData">
                <app-heading v-bind="headingData">
                  Traditional End User Technologies
                </app-heading>
                <app-dl :headingId="headingData.headingId">
                  <template v-slot="{ headingLevel }">
                    <app-definition id="graphical-user-interface">
                      <app-dt :headingLevel="headingLevel">
                        Graphical User Interface
                      </app-dt>
                      <app-dd>
                        <p>
                          The current state of the document tree is
                          rendered into a visual representation
                          and refreshed 60 times a second. People who
                          aren't using assistive technologies
                          read and navigate the web using a
                          graphical user interface.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="fine-pointer-input">
                      <app-dt :headingLevel="headingLevel">
                        Fine Pointer Input
                      </app-dt>
                      <app-dd>
                        <p>
                          The page can be scrolled and controls can be activated with
                          a fine (precise) pointing device, typically a mouse controlled
                          with the dominant hand and fingers.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="coarse-pointer-input">
                      <app-dt :headingLevel="headingLevel">
                        Coarse Pointer Input
                      </app-dt>
                      <app-dd>
                        <p>
                          The touch of a finger is treated as a coarse (imprecise) pointing device.
                          The page can be scrolled by swiping and controls can be activated
                          by tapping.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="keyboard-input">
                      <app-dt :headingLevel="headingLevel">
                        Keyboard Input
                      </app-dt>
                      <app-dd>
                        <p>
                          Web pages are natively navigable with keyboard input.
                          The page can be scrolled with the space bar and
                          controls can be tabbed to and then activated with
                          the enter key.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="keyboard-focus">
                      <app-dt :headingLevel="headingLevel">
                        Keyboard Focus
                      </app-dt>
                      <app-dd>
                        <p>
                          At all times, one element on a web page will be marked as
                          being in focus. Focus acts like a virtual cursor in
                          a text document.
                        </p><!--
                        <p>
                          The focused element, also called the
                          active element, receives keyboard input, so it can be
                          scrolled with the arrow keys or activated
                          with the enter key. Focused form controls can be activated
                          with the spacebar.
                        </p>
                        <p>
                          Pressing the tab key moves to the next focusable element.
                          Holding shift with the tab key moves to the previous focusable element.
                          When an element is clicked,
                          focus shifts to that element.
                        </p>-->
                      </app-dd>
                    </app-definition>
                    <app-definition id="at">
                      <app-dt :headingLevel="headingLevel">
                        Assistive Technology (AT)
                      </app-dt>
                      <app-dd>
                        <p>
                          An assistive technology is any device or feature that is designed
                          to facilitate interaction between a computer and a user with a disability.
                          Screen readers, refreshable Braille displays, and speech recognition software
                          are three of the most common types of AT.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="screen-reader">
                      <app-dt :headingLevel="headingLevel">
                        Screen Reader
                      </app-dt>
                      <app-dd>
                        <p>
                          A screen reader is software that uses a synthesized voice to announce the labels and properties of elements on a web page.
                          Screen readers interact with the accessibility tree, a textual representation
                          of the user interface.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="full-access">
                      <app-dt :headingLevel="headingLevel">
                        Full Access Keyboard Navigation
                      </app-dt>
                      <app-dd>
                        <p>
                          Screen readers typically enable full access keyboard navigation, where both
                          interactive and non-interactive items are navigable with the arrow keys.
                          Screen readers also provide several keyboard shortcuts for navigating the
                          text-based UI, such as a mode for navigating only headings or only links.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="refreshable-braille-display">
                      <app-dt :headingLevel="headingLevel">
                        Refreshable Braille Display
                      </app-dt>
                      <app-dd>
                        <p>
                          A refreshable Braille display is a device that is used in conjunction
                          with a screen reader to read a web page's text-based accessibility tree
                          through touch instead of through speech synthesis.
                        </p>
                      </app-dd>
                    </app-definition>
                    
                    <app-definition id="speech-recognition">
                      <app-dt :headingLevel="headingLevel">
                        Speech Recognition Software
                      </app-dt>
                      <app-dd>
                        <p>
                          Speech recognition software accepts voice commands to do things like
                          scroll the page, click links and buttons, and enter text.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="annotated-gui">
                      <app-dt :headingLevel="headingLevel">
                        Annotated Graphical User Interface
                      </app-dt>
                      <app-dd>
                        <p>
                          Voice Recognition Software may allow selection of items using
                          their accessible label. Additionally, unlabelled or mislabeled
                          items can be selected using an annotated visual overlay with
                          numbers or letters for easy identifcation.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="reader-view">
                      <app-dt :headingLevel="headingLevel">
                        Reader View
                      </app-dt>
                      <app-dd>
                        <p>
                          Reader View is a built-in or third-party browser feature that
                          examines a web page's structure to find its main content and
                          renders it in a custom layout.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="browser-plugins">
                      <app-dt :headingLevel="headingLevel">
                        Browser Plugins
                      </app-dt>
                      <app-dd>
                        <p>
                          Third-party browser plugins have full access to web page markup, including
                          metadata. For maximum interoperability, developers should maintain
                          spec-compliant markup and provide useful structured data.
                        </p>
                      </app-dd>
                    </app-definition>
                  </template>
                </app-dl>
              </template>
            </app-section>
            <app-section class="app-section app-section_emerging">
              <template v-slot="headingData">
                <app-heading v-bind="headingData">
                  Recent and Emerging End User Technologies
                </app-heading>
                <app-dl :headingId="headingData.headingId">
                  <template v-slot="{ headingLevel }">
                    <app-definition id="digital-assistant">
                      <app-dt :headingLevel="headingLevel">
                        Digital Assistant
                      </app-dt>
                      <app-dd>
                        <p>
                          Digital assistants parse voice queries
                          and respond in a synthesized voice. These services often query the web
                          pages in order to find answers.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="vui">
                      <app-dt :headingLevel="headingLevel">
                        Voice User Interface
                      </app-dt>
                      <app-dd>
                        <p>
                          A voice user interface, also known as a conversational UI,
                          operates as a two-way dialogue between
                          a human and a service using natural language.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="native-results">
                      <app-dt :headingLevel="headingLevel">
                        Native Search Results
                      </app-dt>
                      <app-dd>
                        <p>
                          Search engines and digital assistants may copy a relevant bit from a web page
                          and embed it as a native search result, for example as an answer or a widget,
                          without requiring the user to visit the web page directly.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="speak-screen">
                      <app-dt :headingLevel="headingLevel">
                        Speak Screen
                      </app-dt>
                      <app-dd>
                        <p>
                          Speak Screen is an accessibility setting that
                          reads aloud the text on the screen. When set
                          to read a web page, it is similar to using
                          reader mode, because it attempts to read
                          only the main content without any distracting
                          information or metadata.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="reduce-motion">
                      <app-dt :headingLevel="headingLevel">
                        Reduce Motion
                      </app-dt>
                      <app-dd>
                        <p>
                          Reduce Motion is system-wide accessibility preference that is made
                          available to web pages through the <code>prefers-reduced-motion</code>
                          CSS media query. It is for anyone who finds complex transitions and
                          animations distracting, overwhelming, or nauseating, especially
                          people with vesitbular disorders.
                        </p>
                      </app-dd>
                    </app-definition>

                    <app-definition id="dark-mode">
                      <app-dt :headingLevel="headingLevel">
                        Dark Mode
                      </app-dt>
                      <app-dd>
                        <p>
                          Dark Mode is system-wide preference that is made
                          available to web pages through the <code>prefers-color-scheme: dark</code>
                          CSS media query. This enables a partially inverted UI with
                          white text on a black screen, which may be easier on the eyes
                          in certain lighting conditions. It is usually better for battery life.
                        </p>
                      </app-dd>
                    </app-definition>
                  </template>
                </app-dl>
              </template>
            </app-section>
            <app-section class="app-section app-section_parsing-differences">
              <template v-slot="headingData">
                <app-heading v-bind="headingData">
                  Developer Technologies
                </app-heading>
                <app-dl :headingId="headingData.headingId">
                  <template v-slot="{ headingLevel }">
                    <app-definition id="dom">
                      <app-dt :headingLevel="headingLevel">
                        Document Tree
                      </app-dt>
                      <app-dd>
                        <p>
                          The document tree, or Document Object Model (DOM), is a representation
                          of the nested markup of a web page in its current state.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="aria">
                      <app-dt :headingLevel="headingLevel">
                        ARIA
                      </app-dt>
                      <app-dd>
                        <p>
                          Accessible Rich Internet Applications (ARIA) attributes can be added to elements
                          to indicate state changes, relationships, and roles (types) to assistive technologies.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="a11y-tree">
                      <app-dt :headingLevel="headingLevel">
                        Accessibility Tree
                      </app-dt>
                      <app-dd>
                        <p>
                          The accessibility tree is a stripped-down representation of the
                          DOM that is derived from elements' roles and ARIA attributes.
                          Screen readers interact with this tree (the AOM) instead of the DOM.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="structured-data">
                      <app-dt :headingLevel="headingLevel">
                        Structured Data
                      </app-dt>
                      <app-dd>
                        <p>
                          Structured data is a representation of the DOM that is derived from
                          microdata associated with certain elements, or from JSON-LD.
                          When search engines and digital assistants find relevant bits of
                          structured data on a web page, they may copy it and present it
                          to the user in a native experience.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="heading-outline">
                      <app-dt :headingLevel="headingLevel">
                        Heading Outline
                      </app-dt>
                      <app-dd>
                        <p>
                          A heading outline is a representation of the DOM that is derived
                          from heading levels. It is a navigation tool for screen reader users,
                          who use it to skim through long pages quickly.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="document-outline">
                      <app-dt :headingLevel="headingLevel">
                        Document Outline
                      </app-dt>
                      <app-dd>
                        <p>
                          The document outline is a representation of the DOM that is derived
                          from sectioning content. Vendors may detect sectioning elements
                          to derive the structure of a document (for reader view, for
                          example). However, it is not exposed
                          to the accessibility tree, so it cannot be used as a navigation tool
                          for screen reader users.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="html-spec">
                      <app-dt :headingLevel="headingLevel">
                        HTML Spec Compliance
                      </app-dt>
                      <app-dd>
                        <p>
                          Compared to invalid markup, spec-compliant markup is more likely to work
                          consistently across browsers and assistive technologies. According to the
                          HTML specification, elements are only valid inside certain
                          other elements. A <code>&lt;fieldset&gt;</code> isn't valid inside a
                          <code>&lt;button&gt;</code>, for example.
                          Elements also have restrictions on which ARIA roles can be applied to them.
                        </p>
                      </app-dd>
                    </app-definition>
                    <app-definition id="reader-view-heuristics">
                      <app-dt :headingLevel="headingLevel">
                        Reader View Heuristics
                      </app-dt>
                      <app-dd>
                        <p>
                          When vendors attempt to identify the main content of a web page,
                          they use a mix of the document outline, structured data, and other
                          factors based on common HTML usage.
                        </p>
                        <p>
                          Without any paragraph tags, for example, Reader View may reject
                          a web page. When the content of only one section is marked up
                          with paragraph tags, Reader View may select only that section to display.
                        </p>
                      </app-dd>
                    </app-definition>
                  </template>
                </app-dl>
              </template>
            </app-section>
          </app-dl-root>
        </dialog>
        <div @click="closeDialog" role="presentation" class="dialog-backdrop"></div>
      </div>
    </div>
  `
})