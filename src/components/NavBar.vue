<template>
  <div class="container">
    <div class="inner">
      <router-link to="/" id="beside-logo">
        <img src="../assets/beside-logo-yellow.svg" alt="Beside Logo" />
      </router-link>
      <nav>
        <ul id="main-menu">
          <li
            v-for="mainOption in mainMenu"
            :key="mainOption.menuId"
            :id="mainOption.menuId"
            class="menu-option"
          >
            <router-link :to="mainOption.menuPath">{{
              mainOption.name
            }}</router-link>
            <ul class="sub-menu">
              <li
                v-for="subOption in mainOption.subMenu"
                :key="subOption.menuId"
                :id="subOption.menuId"
                class="sub-option"
              >
                <router-link :to="subOption.menuPath">{{
                  subOption.name
                }}</router-link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
      <div class="burger-container-lg">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.438 30"
          id="beside-burger-lg"
        >
          <g transform="translate(0.438 2.506)">
            <rect
              width="35px"
              height="30px"
              transform="translate(-0.439 -2.506)"
              fill="none"
            />
            <g
              transform="translate(0.142)"
              id="burger-top-lg"
              class="burger-top"
            >
              <path
                d="M-126.419,74.695h34.8"
                transform="translate(126.419 -72.506)"
                fill="#fafaff"
              />
              <path
                d="M-118.1,76.826c.007-.086-.112-.168.073-.208.555-.08,1.015.2,1.576.119l.043-.136,1.354.2,2.562-.1c-.023-.053-.034-.094.049-.116.354-.031.848.013,1.349.026l.225-.019.079-.107.619.031c2.489-.266,5.013-.579,7.75-.89a16.636,16.636,0,0,1,1.713-.308c.828-.051,1.88.037,2.685.054-.124-.48,1.835-.713,1.449-1.2.53.011,1.342.025,1.383-.109.122-.4.537-.873,1.963-1.119.557-.058,1.413.114,1.611.032.309-.133-.728-.288-.416-.418-4.145-.147-8.132.029-12.312.027-1.419.212-11,.307-13.467.212l-.222,0a25.751,25.751,0,0,0-4.112.194l-1.584.379.674.238a4.574,4.574,0,0,0-1.279.065c-1.145.2-.5.445-.054.768.319.145-.116.363.384.51-.357-.008-.539-.011-.9-.021-.038.136,1.108-.065.859.153a9.239,9.239,0,0,0-1.088.025c.121.185,1.24.072,1.186.25-.2.04-1.008-.245-1.076-.021-.014.044.346.053.521.057-1.1.067-1.7.283-.7.529-.35-.007-.839-.1-1.21-.07h0c.184.009.507.057.673.059l-.628-.012.106.094.48.055-.416-.011.352.214a7.784,7.784,0,0,0,1.238.363C-122.445,76.733-120.271,76.809-118.1,76.826Z"
                transform="translate(126.419 -72.506)"
                fill="#fafaff"
              />
            </g>
            <g
              transform="translate(0 11.263)"
              id="burger-mid-lg"
              class="burger-mid"
            >
              <path
                d="M-126.419,84.654h34.8"
                transform="translate(126.561 -82.757)"
                fill="#fafaff"
              />
              <path
                d="M-102.618,83.431h.771c-4.348-.21-8.956-.126-13.047-.424-.262-.045-.77-.124-1.026-.17-2.043-.126-4.606-.084-6.651,0a4.152,4.152,0,0,0-1.79.512c-.255.082-.507.256-.255.342.507.04,1.793.04,1.793.21,0,.042-.255.042-.514.042,0,.172-.772.514-1.024.514-.255.084-1.789.336-2.044.422-.77.13,1.537.766,2.557.894.512.084,0,.212,0,.34.512-.042.771.086,1.278.042,0,.044,1.536.084,2.3.084a8.046,8.046,0,0,1,1.024-.04c.253,0,.253-.044.253-.086V86.2a8.391,8.391,0,0,1,1.027-.044v.084c.508-.084,1.018,0,1.531-.04v.086c.259,0,.512,0,.512.042v.084c.257.044.764-.042.764.044v-.086c1.026,0,1.795.042,2.562.086a63.03,63.03,0,0,0,6.9,0c.26,0,.517-.086.26-.17h.768c.515,0,.257-.13.764-.13,4.1-.212,8.189,0,12.284-.126-1.024-.044-1.793-.126-2.817-.086,0-.04,0-.13-.254-.13a35.691,35.691,0,0,1-4.093-.126,4.7,4.7,0,0,0-1.283-.17h.772v-.128c-1.026-.04-2.305-.086-3.328-.126v-.128h-.507c-.512-.3,2.3-.256,3.58-.3v-.17h-.516v-.084h3.326c0-.042,0-.086-.256-.086,1.029,0,2.305.044,3.326-.04.257-.048,0-.174-.767-.216h-2.042v-.084c.512,0,1.278.042,1.788,0,.254-.042-.51-.128-.258-.168l.772-.046c-.772,0-1.79.046-2.563,0-.256-.042-.508-.086-.508-.17a10.225,10.225,0,0,1-3.073-.3A17.94,17.94,0,0,0-102.618,83.431Z"
                transform="translate(126.561 -82.757)"
                fill="#fafaff"
              />
            </g>
            <g
              transform="translate(0.142 22.967)"
              id="burger-bot-lg"
              class="burger-bot"
            >
              <path
                d="M-126.419,95.442h34.8"
                transform="translate(126.419 -93.381)"
                fill="#fafaff"
              />
              <path
                d="M-125.359,93.979l.088.021-.246.009a9.125,9.125,0,0,0,3.083-.106c.3.009.561-.044.592-.117s-.191-.134-.5-.141l-.187-.025a10.436,10.436,0,0,0-1.53-.239l.334.063-.512-.038.06.042a4.416,4.416,0,0,0-1.758.071c-.4.135-.261.322.317.414Z"
                transform="translate(126.419 -93.381)"
                fill="#fafaff"
              />
              <path
                d="M-124.287,94.388l-1.007-.145-.065-.025.021.11.006-.009a6.867,6.867,0,0,1,1.291-.155l.17-.011a.312.312,0,0,0,.149-.061c.042-.054-.1-.1-.326-.111l-.254-.01a4.792,4.792,0,0,0-1.926.121c-.08.043-.013.093.008.143-.025.071.208.134.516.143s.573-.048.592-.124l.16.015-.126.025a2.186,2.186,0,0,1,.577-.109l.313-.017-.177-.168-.159.021.029.017-.936.122-.432.063c-.118.033-.1.079.023.109l.189.037-.086-.025,1.33.1.189-.015c.03-.014,0-.037-.069-.044Z"
                transform="translate(126.419 -93.381)"
                fill="#fafaff"
              />
              <g transform="translate(0 0.295)">
                <path
                  d="M-125.832,94.407l-.239-.019-.042.013.132.029C-125.876,94.451-125.827,94.437-125.832,94.407Z"
                  transform="translate(126.419 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-126.113,94.4l-.057-.013.038.017h.011Z"
                  transform="translate(126.419 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-107.026,94.092l4.065.076.086-.015-.076-.023-4.059-.075-.09.017Z"
                  transform="translate(128.292 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-96.9,95.129c-.031.009-.031.021,0,.026h.112l0-.026Z"
                  transform="translate(129.122 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-94.728,95.948l-.576.059h-.1c.012.016-.022.033-.1.037-1.46.141-3.03.2-4.581.275l-.064.038a1.645,1.645,0,0,1-.543.055l-.171-.011-2.032-.069-.475.038-1.764.138.06.042c-.014.036-.151.061-.317.061h-.24l.7.029.091.009.781,0c2.305-.036,4.471-.172,6.619-.328l.123,0-.015.026c-1.359.18-2.535.417-4.067.539-1.827.141-3.622.264-5.495.355-1.953,0-3.762.086-5.755.151-2.692.09-5.237.1-7.873.111a3.46,3.46,0,0,1-2.019-.336c-.075-.128.149-.25.558-.334l-.242,0-.385-.025a3.45,3.45,0,0,1-.864-.153l-.267-.088c-.352-.168-.93-.313-1.22-.489l.066-.072-.07-.016a.837.837,0,0,1-.433-.183l.023-.084a.691.691,0,0,1,.344-.26l.062-.1c-.157-.084-.228-.172-.105-.268-.093-.026-.081-.059.037-.08l.125-.013h0l-.134-.05-.143-.013c-.25-.012-.25-.012-.464-.025a2.146,2.146,0,0,1-.3-.071c-.2-.143-.2-.143-.172-.206l.04-.019c-.164-.023-.175-.025-.22-.029l-.076-.026-.036-.046-.007-.025.091-.038.054-.029a1.146,1.146,0,0,1,.143-.015l.25.086.05-.029.053.038-.028-.036.121.023-.137-.033c.275.014.275.014.384.012a2.058,2.058,0,0,0,.212,0v-.021c.291.017.291.017.578.029l.068.026.137-.013.152,0,.03,0h0l.127-.019.025-.006h.007c.087-.009.21-.028.546-.072l.248.017-.07-.017c-.05-.01,0-.044-.029-.046-.627-.071-1.313-.1-1.985-.134-.116,0-.234-.015-.249-.044s.073-.046.193-.055a21.316,21.316,0,0,1,4.44-.008l1.112.046-.056-.017.288.023.031,0-.22-.058L-120,94.08c-.862-.025-1.645-.115-2.473-.172l-1.261-.13c-.109,0-.184-.026-.17-.051s.114-.038.22-.038a22.706,22.706,0,0,1,4.158.2l.71.054.015,0-.162-.048c.192.013.3.051.474.07l-.066-.068c.947.04,1.98.023,2.86.12l.1,0a10.3,10.3,0,0,1,1.206-.1l-.446-.022,1-.044a9.563,9.563,0,0,1,2.506.284l5.5-.084a.349.349,0,0,1,.193.033c.011.017-.05.038-.143.043l-3.98.136,3.379.073.437-.006.434.013c1.457,0,2.843.006,4.33-.04,1.275-.044,2.385-.088,3.655-.151,1.782-.088,3.4-.177,5.156-.177a.816.816,0,0,1,.478.08c.027.055-.145.1-.376.1-3.666.16-7.265.351-11.1.325l-1.222-.008.009.017c0,.029-.037.056-.105.075l1.393.034c1.286-.059,2.583-.116,3.96-.086.944.021,1.8.084,2.676.136l3.331-.1.107.013-.05.023-2.355.153c.127.036.2.074.189.12s-.1.088-.255.117l.541,0c.112,0,.2.017.194.042s-.089.042-.2.042l-2.2-.009-2.645.063a.6.6,0,0,1,.255.114h0l.414,0c2.491-.126,5.049-.2,7.621-.176l.1.021-.087.017-2.323,0h0c.03.01.039.019,0,.027h-.123c-.029,0-.029-.017,0-.025l-4.283.13,3.932,0,.429-.04.11.015-.059.023-.12,0c.245,0,.438.051.432.107s-.226.1-.485.1l-2.061.019-.221.011-.226.025,3.191.077c.093,0,.172.015.177.038s-.075.038-.164.038l-5.666.168-1.879.256.241,0c2.062,0,3.816-.243,5.817-.294l.1.015-.077.019L-97.793,96l-2.317.158c1.527-.023,2.988-.128,4.5-.175l.17.009.041-.013.6-.063.118.011C-94.659,95.931-94.687,95.944-94.728,95.948Zm-26.52-1.173-.034-.007.131.017.182.084Zm-2.334.3h0c-.064-.03-.105-.046-.105-.046Zm14.9-.7-2.385-.07.581-.012Zm-14.138.1a4.275,4.275,0,0,1,.536.149l.425-.01,1.162.029c-.05-.027.041-.025.087-.027l.143,0-1.222-.07Zm-2.815.11-.039-.009.08-.042Zm-.12.071.059.006Zm.53.056-.076-.025A.774.774,0,0,0-125.22,94.709Zm.375,1.247.2-.212-.221.2Z"
                  transform="translate(126.419 -93.676)"
                  fill="#fafaff"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div class="burger-container-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 35.438 30"
          id="beside-burger-sm"
        >
          <g transform="translate(0.438 2.506)">
            <rect
              width="35px"
              height="30px"
              transform="translate(-0.439 -2.506)"
              fill="none"
            />
            <g
              transform="translate(0.142)"
              id="burger-top-sm"
              class="burger-top"
            >
              <path
                d="M-126.419,74.695h34.8"
                transform="translate(126.419 -72.506)"
                fill="#fafaff"
              />
              <path
                d="M-118.1,76.826c.007-.086-.112-.168.073-.208.555-.08,1.015.2,1.576.119l.043-.136,1.354.2,2.562-.1c-.023-.053-.034-.094.049-.116.354-.031.848.013,1.349.026l.225-.019.079-.107.619.031c2.489-.266,5.013-.579,7.75-.89a16.636,16.636,0,0,1,1.713-.308c.828-.051,1.88.037,2.685.054-.124-.48,1.835-.713,1.449-1.2.53.011,1.342.025,1.383-.109.122-.4.537-.873,1.963-1.119.557-.058,1.413.114,1.611.032.309-.133-.728-.288-.416-.418-4.145-.147-8.132.029-12.312.027-1.419.212-11,.307-13.467.212l-.222,0a25.751,25.751,0,0,0-4.112.194l-1.584.379.674.238a4.574,4.574,0,0,0-1.279.065c-1.145.2-.5.445-.054.768.319.145-.116.363.384.51-.357-.008-.539-.011-.9-.021-.038.136,1.108-.065.859.153a9.239,9.239,0,0,0-1.088.025c.121.185,1.24.072,1.186.25-.2.04-1.008-.245-1.076-.021-.014.044.346.053.521.057-1.1.067-1.7.283-.7.529-.35-.007-.839-.1-1.21-.07h0c.184.009.507.057.673.059l-.628-.012.106.094.48.055-.416-.011.352.214a7.784,7.784,0,0,0,1.238.363C-122.445,76.733-120.271,76.809-118.1,76.826Z"
                transform="translate(126.419 -72.506)"
                fill="#fafaff"
              />
            </g>
            <g
              transform="translate(0 11.263)"
              id="burger-mid-sm"
              class="burger-mid"
            >
              <path
                d="M-126.419,84.654h34.8"
                transform="translate(126.561 -82.757)"
                fill="#fafaff"
              />
              <path
                d="M-102.618,83.431h.771c-4.348-.21-8.956-.126-13.047-.424-.262-.045-.77-.124-1.026-.17-2.043-.126-4.606-.084-6.651,0a4.152,4.152,0,0,0-1.79.512c-.255.082-.507.256-.255.342.507.04,1.793.04,1.793.21,0,.042-.255.042-.514.042,0,.172-.772.514-1.024.514-.255.084-1.789.336-2.044.422-.77.13,1.537.766,2.557.894.512.084,0,.212,0,.34.512-.042.771.086,1.278.042,0,.044,1.536.084,2.3.084a8.046,8.046,0,0,1,1.024-.04c.253,0,.253-.044.253-.086V86.2a8.391,8.391,0,0,1,1.027-.044v.084c.508-.084,1.018,0,1.531-.04v.086c.259,0,.512,0,.512.042v.084c.257.044.764-.042.764.044v-.086c1.026,0,1.795.042,2.562.086a63.03,63.03,0,0,0,6.9,0c.26,0,.517-.086.26-.17h.768c.515,0,.257-.13.764-.13,4.1-.212,8.189,0,12.284-.126-1.024-.044-1.793-.126-2.817-.086,0-.04,0-.13-.254-.13a35.691,35.691,0,0,1-4.093-.126,4.7,4.7,0,0,0-1.283-.17h.772v-.128c-1.026-.04-2.305-.086-3.328-.126v-.128h-.507c-.512-.3,2.3-.256,3.58-.3v-.17h-.516v-.084h3.326c0-.042,0-.086-.256-.086,1.029,0,2.305.044,3.326-.04.257-.048,0-.174-.767-.216h-2.042v-.084c.512,0,1.278.042,1.788,0,.254-.042-.51-.128-.258-.168l.772-.046c-.772,0-1.79.046-2.563,0-.256-.042-.508-.086-.508-.17a10.225,10.225,0,0,1-3.073-.3A17.94,17.94,0,0,0-102.618,83.431Z"
                transform="translate(126.561 -82.757)"
                fill="#fafaff"
              />
            </g>
            <g
              transform="translate(0.142 22.967)"
              id="burger-bot-sm"
              class="burger-bot"
            >
              <path
                d="M-126.419,95.442h34.8"
                transform="translate(126.419 -93.381)"
                fill="#fafaff"
              />
              <path
                d="M-125.359,93.979l.088.021-.246.009a9.125,9.125,0,0,0,3.083-.106c.3.009.561-.044.592-.117s-.191-.134-.5-.141l-.187-.025a10.436,10.436,0,0,0-1.53-.239l.334.063-.512-.038.06.042a4.416,4.416,0,0,0-1.758.071c-.4.135-.261.322.317.414Z"
                transform="translate(126.419 -93.381)"
                fill="#fafaff"
              />
              <path
                d="M-124.287,94.388l-1.007-.145-.065-.025.021.11.006-.009a6.867,6.867,0,0,1,1.291-.155l.17-.011a.312.312,0,0,0,.149-.061c.042-.054-.1-.1-.326-.111l-.254-.01a4.792,4.792,0,0,0-1.926.121c-.08.043-.013.093.008.143-.025.071.208.134.516.143s.573-.048.592-.124l.16.015-.126.025a2.186,2.186,0,0,1,.577-.109l.313-.017-.177-.168-.159.021.029.017-.936.122-.432.063c-.118.033-.1.079.023.109l.189.037-.086-.025,1.33.1.189-.015c.03-.014,0-.037-.069-.044Z"
                transform="translate(126.419 -93.381)"
                fill="#fafaff"
              />
              <g transform="translate(0 0.295)">
                <path
                  d="M-125.832,94.407l-.239-.019-.042.013.132.029C-125.876,94.451-125.827,94.437-125.832,94.407Z"
                  transform="translate(126.419 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-126.113,94.4l-.057-.013.038.017h.011Z"
                  transform="translate(126.419 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-107.026,94.092l4.065.076.086-.015-.076-.023-4.059-.075-.09.017Z"
                  transform="translate(128.292 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-96.9,95.129c-.031.009-.031.021,0,.026h.112l0-.026Z"
                  transform="translate(129.122 -93.676)"
                  fill="#fafaff"
                />
                <path
                  d="M-94.728,95.948l-.576.059h-.1c.012.016-.022.033-.1.037-1.46.141-3.03.2-4.581.275l-.064.038a1.645,1.645,0,0,1-.543.055l-.171-.011-2.032-.069-.475.038-1.764.138.06.042c-.014.036-.151.061-.317.061h-.24l.7.029.091.009.781,0c2.305-.036,4.471-.172,6.619-.328l.123,0-.015.026c-1.359.18-2.535.417-4.067.539-1.827.141-3.622.264-5.495.355-1.953,0-3.762.086-5.755.151-2.692.09-5.237.1-7.873.111a3.46,3.46,0,0,1-2.019-.336c-.075-.128.149-.25.558-.334l-.242,0-.385-.025a3.45,3.45,0,0,1-.864-.153l-.267-.088c-.352-.168-.93-.313-1.22-.489l.066-.072-.07-.016a.837.837,0,0,1-.433-.183l.023-.084a.691.691,0,0,1,.344-.26l.062-.1c-.157-.084-.228-.172-.105-.268-.093-.026-.081-.059.037-.08l.125-.013h0l-.134-.05-.143-.013c-.25-.012-.25-.012-.464-.025a2.146,2.146,0,0,1-.3-.071c-.2-.143-.2-.143-.172-.206l.04-.019c-.164-.023-.175-.025-.22-.029l-.076-.026-.036-.046-.007-.025.091-.038.054-.029a1.146,1.146,0,0,1,.143-.015l.25.086.05-.029.053.038-.028-.036.121.023-.137-.033c.275.014.275.014.384.012a2.058,2.058,0,0,0,.212,0v-.021c.291.017.291.017.578.029l.068.026.137-.013.152,0,.03,0h0l.127-.019.025-.006h.007c.087-.009.21-.028.546-.072l.248.017-.07-.017c-.05-.01,0-.044-.029-.046-.627-.071-1.313-.1-1.985-.134-.116,0-.234-.015-.249-.044s.073-.046.193-.055a21.316,21.316,0,0,1,4.44-.008l1.112.046-.056-.017.288.023.031,0-.22-.058L-120,94.08c-.862-.025-1.645-.115-2.473-.172l-1.261-.13c-.109,0-.184-.026-.17-.051s.114-.038.22-.038a22.706,22.706,0,0,1,4.158.2l.71.054.015,0-.162-.048c.192.013.3.051.474.07l-.066-.068c.947.04,1.98.023,2.86.12l.1,0a10.3,10.3,0,0,1,1.206-.1l-.446-.022,1-.044a9.563,9.563,0,0,1,2.506.284l5.5-.084a.349.349,0,0,1,.193.033c.011.017-.05.038-.143.043l-3.98.136,3.379.073.437-.006.434.013c1.457,0,2.843.006,4.33-.04,1.275-.044,2.385-.088,3.655-.151,1.782-.088,3.4-.177,5.156-.177a.816.816,0,0,1,.478.08c.027.055-.145.1-.376.1-3.666.16-7.265.351-11.1.325l-1.222-.008.009.017c0,.029-.037.056-.105.075l1.393.034c1.286-.059,2.583-.116,3.96-.086.944.021,1.8.084,2.676.136l3.331-.1.107.013-.05.023-2.355.153c.127.036.2.074.189.12s-.1.088-.255.117l.541,0c.112,0,.2.017.194.042s-.089.042-.2.042l-2.2-.009-2.645.063a.6.6,0,0,1,.255.114h0l.414,0c2.491-.126,5.049-.2,7.621-.176l.1.021-.087.017-2.323,0h0c.03.01.039.019,0,.027h-.123c-.029,0-.029-.017,0-.025l-4.283.13,3.932,0,.429-.04.11.015-.059.023-.12,0c.245,0,.438.051.432.107s-.226.1-.485.1l-2.061.019-.221.011-.226.025,3.191.077c.093,0,.172.015.177.038s-.075.038-.164.038l-5.666.168-1.879.256.241,0c2.062,0,3.816-.243,5.817-.294l.1.015-.077.019L-97.793,96l-2.317.158c1.527-.023,2.988-.128,4.5-.175l.17.009.041-.013.6-.063.118.011C-94.659,95.931-94.687,95.944-94.728,95.948Zm-26.52-1.173-.034-.007.131.017.182.084Zm-2.334.3h0c-.064-.03-.105-.046-.105-.046Zm14.9-.7-2.385-.07.581-.012Zm-14.138.1a4.275,4.275,0,0,1,.536.149l.425-.01,1.162.029c-.05-.027.041-.025.087-.027l.143,0-1.222-.07Zm-2.815.11-.039-.009.08-.042Zm-.12.071.059.006Zm.53.056-.076-.025A.774.774,0,0,0-125.22,94.709Zm.375,1.247.2-.212-.221.2Z"
                  transform="translate(126.419 -93.676)"
                  fill="#fafaff"
                />
              </g>
            </g>
          </g>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { TweenMax, TimelineMax } from "gsap/TweenMax";
export default {
  name: "NavBar",
  props: {
    msg: String,
    subClick: String
  },
  mounted() {
    const trigger = document.querySelectorAll(".menu-option"),
      trigger2 = document.querySelectorAll(".sub-menu");

    const min1240 = window.matchMedia("(min-device-width: 1240px)"),
      max1239 = window.matchMedia("(max-device-width: 1239px)");

    const tlLg = new TimelineMax({ paused: true, reversed: true });
    const tlSm = new TimelineMax({ paused: true, reversed: true });
    const burgerLg = document.querySelector(".burger-container-lg"),
      burgerSm = document.querySelector(".burger-container-sm"),
      mainMenu = document.querySelectorAll(".sub-menu");

    if (min1240.matches) {
      trigger.forEach.call(trigger, el => {
        el.addEventListener("mouseenter", () => {
          const image = el.getElementsByClassName("sub-menu")[0];
          TweenMax.fromTo(
            image,
            0,
            { display: "none" },
            {
              display: "block",
              immediateRender: false
            }
          );
        });
      });

      trigger.forEach.call(trigger, el => {
        el.addEventListener("mouseleave", () => {
          const image = el.getElementsByClassName("sub-menu")[0];
          TweenMax.fromTo(
            image,
            0,
            {
              display: "block"
            },
            {
              display: "none",
              immediateRender: false
            }
          );
        });
      });

      document
        .querySelector(".burger-container-lg")
        .addEventListener("mouseenter", () => {
          TweenMax.to("#beside-burger-lg", 0, {
            scaleX: 1.5,
            immediateRender: false
          });
        });
      document
        .querySelector(".burger-container-lg")
        .addEventListener("mouseout", () => {
          TweenMax.to("#beside-burger-lg", 0, {
            scaleX: 1,
            immediateRender: false
          });
        });

      tlLg
        .fromTo(
          ".burger-top",
          0.2,
          { rotation: 0, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          { rotation: 45, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          "cross"
        )
        .fromTo(".burger-mid", 0.2, { autoAlpha: 1 }, { autoAlpha: 0 }, "cross")
        .fromTo(
          ".burger-bot",
          0.2,
          { rotation: 0, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          { rotation: -45, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          "cross"
        )
        .fromTo(
          "#menu1",
          0.2,
          { x: 1500, y: 0, ease: Back.easeOut.config(1.7) },
          { x: 0, y: 0, ease: Back.easeOut.config(1.7) }
        )
        .fromTo(
          "#menu2",
          0.2,
          { x: 1500, y: 0, ease: Back.easeOut.config(1.7) },
          { x: 0, y: 0, ease: Back.easeOut.config(1.7) }
        )
        .fromTo(
          "#menu3",
          0.2,
          { x: 1500, y: 0, ease: Back.easeOut.config(1.7) },
          { x: 0, y: 0, ease: Back.easeOut.config(1.7) }
        )
        .fromTo(
          "#menu4",
          0.2,
          { x: 1500, y: 0, ease: Back.easeOut.config(1.7) },
          { x: 0, y: 0, ease: Back.easeOut.config(1.7) }
        )
        .fromTo(
          "#menu5",
          0.2,
          { x: 1500, y: 0, ease: Back.easeOut.config(1.7) },
          { x: 0, y: 0, ease: Back.easeOut.config(1.7) }
        )
        .fromTo(
          "#menu6",
          0.2,
          { x: 1500, y: 0, ease: Back.easeOut.config(1.7) },
          { x: 0, y: 0, ease: Back.easeOut.config(1.7) }
        );
      // .fromTo(
      //   "nav",
      //   0.2,
      //   { x: 1000, ease: Back.easeOut.config(1.7) },
      //   { x: 0, ease: Back.easeOut.config(1.7) }
      // );
    }

    if (max1239.matches) {
      trigger.forEach.call(trigger, el => {
        el.addEventListener("click", () => {
          const image = el.getElementsByClassName("sub-menu")[0],
            mainDrops = document.getElementsByClassName("sub-menu");

          window.addEventListener("click", event => {
            if (!event.target.matches(".menu-option")) {
              let i;
              for (i = 0; i < mainDrops.length; i++) {
                TweenMax.set(mainDrops[i], { display: "none" });
              }
            }
          });
          TweenMax.to(image, 0, {
            display: "block",
            immediateRender: false
          });
        });
      });

      tlSm
        .fromTo(
          ".burger-top",
          0.2,
          { rotation: 0, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          { rotation: 45, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          "cross"
        )
        .fromTo(".burger-mid", 0.2, { autoAlpha: 1 }, { autoAlpha: 0 }, "cross")
        .fromTo(
          ".burger-bot",
          0.2,
          { rotation: 0, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          { rotation: -45, transformOrigin: "0% 50%", ease: Power2.easeInOut },
          "cross"
        )
        .fromTo("nav", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#menu1", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        // .fromTo("#sub1-1", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        // .fromTo("#sub1-2", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        // .fromTo("#sub1-4", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#menu2", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        // .fromTo("#sub2-1", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        // .fromTo("#sub2-2", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        // .fromTo("#sub2-3", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        // .fromTo("#sub2-4", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#menu3", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#sub3-1", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#sub3-2", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#sub3-3", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#menu4", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#menu5", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0)
        .fromTo("#menu6", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0);
      // .fromTo("#sub5-2", 0.25, { y: -1000, x: 0 }, { y: 0, x: 0 }, 0);
    }

    burgerLg.onclick = function() {
      tlLg.reversed() ? tlLg.play() : tlLg.reverse();
    };
    burgerSm.onclick = function() {
      tlSm.reversed() ? tlSm.play() : tlSm.reverse();
    };
    mainMenu.forEach.call(trigger2, el => {
      el.onclick = function() {
        tlSm.reversed() ? tlSm.play() : tlSm.reverse();
      };
    });

    document.querySelector("#menu1").onclick = function() {
      tlSm.reversed() ? tlSm.play() : tlSm.reverse();
    };
    document.querySelector("#menu2").onclick = function() {
      tlSm.reversed() ? tlSm.play() : tlSm.reverse();
    };
    document.querySelector("#menu4").onclick = function() {
      tlSm.reversed() ? tlSm.play() : tlSm.reverse();
    };
    document.querySelector("#menu5").onclick = function() {
      tlSm.reversed() ? tlSm.play() : tlSm.reverse();
    };
    document.querySelector("#menu6").onclick = function() {
      tlSm.reversed() ? tlSm.play() : tlSm.reverse();
    };
    document.querySelector("#beside-logo").onclick = function() {
      tlSm.reversed() ? tlSm.play() : tlSm.reverse();
    };
  },
  data() {
    return {
      mainMenu: [
        {
          name: "who we are",
          menuId: "menu1",
          menuPath: "/about",
          subMenu: [
            {
              name: "vision",
              menuId: "sub1-1",
              menuPath: "/about#vision"
            },
            {
              name: "activities",
              menuId: "sub1-2",
              menuPath: "/about#activities"
            },
            // {
            //   name: "the arena",
            //   menuId: "sub1-3",
            //   menuPath: ""
            // },
            { name: "shareholders", menuId: "sub1-4", menuPath: "/about#shareholders" }
          ]
        },
        {
          name: "our brands",
          menuId: "menu2",
          menuPath: "/brands",
          subMenu: [
            { name: "diesel", menuId: "sub2-1", menuPath: "/brands/diesel" },
            {
              name: "fred perry",
              menuId: "sub2-2",
              menuPath: "/brands/fredperry"
            },
            {
              name: "scotch & soda",
              menuId: "sub2-3",
              menuPath: "/brands/scotchsoda"
            },
            { name: "pinko", menuId: "sub2-4", menuPath: "/brands/pinko" }
          ]
        },
        {
          name: "meet the team",
          menuId: "menu3",
          menuPath: "/teams",
          subMenu: [
            { name: "office", menuId: "sub3-1", menuPath: "/teams/office" },
            { name: "stores", menuId: "sub3-2", menuPath: "/teams/stores" },
            { name: "having fun", menuId: "sub3-3", menuPath: "/teams/fun" }
          ]
        },
        { name: "store locator", menuId: "menu4", menuPath: "/locator" },
        {
          name: "get in touch",
          menuId: "menu5",
          menuPath: "/contact"
          // subMenu: [
          //   { name: "drop us a line", menuId: "sub5-1", menuPath: "/contact/contact" },
          //   { name: "careers", menuId: "sub5-2", menuPath: "/contact/careers" }
          // ]
        },
        { name: "careers", menuId: "menu6", menuPath: "/careers" }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@media only screen and (max-device-width: 1239px) {
  .inner {
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-areas: "logo menu burger";
    align-items: center;
    height: 50px;
    position: fixed;
    z-index: 99999;
    position: relative;
  }

  #beside-logo {
    grid-area: logo;
    align-self: center;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
  }

  nav {
    grid-area: menu;
    background-color: rgba(0, 0, 0, 0.5);
    // height: 100vh;
    // height: 50px;
    width: 100vw;
    text-align: center;
    position: absolute;
    top: 50px;
    left: -200px;
    z-index: 5000;

    ul li {
      display: block;
      padding: 10px 20px;
      position: relative;
      // height: 100px;
      text-align: center;
      background-color: rgba(0, 0, 0, 0.5);

      a {
        text-decoration: none;
        color: #fff;
      }

      ul {
        display: none;
        background-color: rgba(0, 0, 0, 0.5);
        text-align: center;
        height: 100%;

        li {
          display: block;
          padding: 10px 20px;
          width: 100%;
          text-align: center;
        }

        :first-child {
          margin-top: 10px;
        }
      }
    }
  }

  .burger-container-sm {
    grid-area: burger;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;

    svg {
      height: 1em;
    }
  }

  .burger-container-lg {
    display: none;
  }
}
@media only screen and (min-device-width: 1240px) {
  .inner {
    width: 100%;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-areas: "logo menu burger";
    align-items: center;
    height: 50px;
    position: fixed;
    z-index: 99999;
  }

  #beside-logo {
    grid-area: logo;
    align-self: center;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
  }

  nav {
    grid-area: menu;
    background-color: rgba(0, 0, 0, 0.5);
    align-self: center;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 5000;
    font-size: 0.9em;

    #main-menu {
      // background-color: blue;
      height: 50px;
      // background-color: rgba(0, 0, 0, 0.5);

      li:hover {
        background-color: #545454;
      }

      li a:hover {
        color: #ffd400;
      }

      .router-link-active {
        color: #ffd400;
      }

      .menu-option {
        display: inline-block;
        // padding: 15px 20px;
        position: relative;
        height: 50px;
        // background-color: aliceblue;
        background-color: rgba(0, 0, 0, 0.5);

        .router-link-active {
          color: #ffd400;
        }

        a {
          text-decoration: none;
          color: #fff;
          display: block;
          // background-color: blue;
          padding: 16px 20px;
          outline: none;
        }

        ul {
          display: none;
          position: absolute;
          left: 0;
          top: 50px;
          background-color: rgba(0, 0, 0, 0.5);
          // background-color: blue;
          width: 1500px;
          height: 50px;

          li {
            display: inline-block;
            // padding: 15px 20px;
            width: max-content;
            height: 50px;
            // background-color: rgba(0, 0, 0, 0.5);
            // background-color: blue;
          }
        }
      }

      // #menu5 {
      //   border: 3px solid #ffd400;
      // }
    }
  }

  .burger-container-lg {
    grid-area: burger;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;

    svg {
      height: 1em;
    }
  }

  .burger-container-sm {
    display: none;
  }
}

@media only screen and (min-device-width: 1919px) {
  .inner {
    width: 100%;
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-areas: "logo menu burger";
    align-items: center;
    height: 50px;
    position: fixed;
    z-index: 99999;
  }

  #beside-logo {
    grid-area: logo;
    align-self: center;
    padding: 10px 20px;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
  }

  nav {
    grid-area: menu;
    background-color: rgba(0, 0, 0, 0.5);
    align-self: center;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    z-index: 5000;
    font-size: 1em;

    #main-menu {
      // background-color: blue;
      height: 50px;
      // background-color: rgba(0, 0, 0, 0.5);

      li:hover {
        background-color: #545454;
      }

      li a:hover {
        color: #ffd400;
      }

      .router-link-active {
        color: #ffd400;
      }

      .menu-option {
        display: inline-block;
        // padding: 15px 20px;
        position: relative;
        height: 50px;
        // background-color: aliceblue;
        background-color: rgba(0, 0, 0, 0.5);

        .router-link-active {
          color: #ffd400;
        }

        a {
          text-decoration: none;
          color: #fff;
          display: block;
          // background-color: blue;
          padding: 16px 20px;
          outline: none;
        }

        ul {
          display: none;
          position: absolute;
          left: 0;
          top: 50px;
          background-color: rgba(0, 0, 0, 0.5);
          // background-color: blue;
          width: 1500px;
          height: 50px;

          li {
            display: inline-block;
            // padding: 15px 20px;
            width: max-content;
            height: 50px;
            // background-color: rgba(0, 0, 0, 0.5);
            // background-color: blue;
          }
        }
      }

      // #menu5 {
      //   border: 3px solid #ffd400;
      // }
    }
  }

  .burger-container-lg {
    grid-area: burger;
    background-color: rgba(0, 0, 0, 0.5);
    height: 100%;
    display: flex;
    align-items: center;
    padding: 10px 20px;
    cursor: pointer;

    svg {
      height: 1em;
    }
  }

  .burger-container-sm {
    display: none;
  }
}
</style>
